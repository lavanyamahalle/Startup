import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth } from "./auth";
import { insertContactMessageSchema, insertTestimonialSchema, insertConsultationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication routes
  setupAuth(app);

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactMessageSchema.parse(req.body);
      const newMessage = await storage.createContactMessage(contactData);
      res.status(201).json(newMessage);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "An error occurred while saving your message" });
      }
    }
  });

  // Submit testimonial
  app.post("/api/testimonials", async (req, res) => {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "You must be logged in to submit a testimonial" });
      }
      
      const testimonialData = insertTestimonialSchema.parse(req.body);
      const newTestimonial = await storage.createTestimonial(testimonialData);
      res.status(201).json(newTestimonial);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "An error occurred while saving your testimonial" });
      }
    }
  });

  // Get approved testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const category = req.query.category as string;
      const testimonials = await storage.getApprovedTestimonials(category);
      res.status(200).json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching testimonials" });
    }
  });

  // Book consultation
  app.post("/api/consultations", async (req, res) => {
    try {
      const consultationData = insertConsultationSchema.parse(req.body);
      
      // Add user ID if authenticated
      if (req.isAuthenticated()) {
        consultationData.userId = req.user.id;
      }
      
      const newConsultation = await storage.createConsultation(consultationData);
      res.status(201).json(newConsultation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "An error occurred while booking your consultation" });
      }
    }
  });

  // Admin Routes - Protected
  app.get("/api/admin/contact-messages", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.status(403).json({ message: "Unauthorized: Admin access required" });
    }
    
    try {
      const messages = await storage.getAllContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching messages" });
    }
  });

  app.get("/api/admin/testimonials", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.status(403).json({ message: "Unauthorized: Admin access required" });
    }
    
    try {
      const testimonials = await storage.getAllTestimonials();
      res.status(200).json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching testimonials" });
    }
  });

  app.patch("/api/admin/testimonials/:id/approve", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.status(403).json({ message: "Unauthorized: Admin access required" });
    }
    
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid testimonial ID" });
      }
      
      const updatedTestimonial = await storage.approveTestimonial(id);
      if (!updatedTestimonial) {
        return res.status(404).json({ message: "Testimonial not found" });
      }
      
      res.status(200).json(updatedTestimonial);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while approving the testimonial" });
    }
  });

  app.get("/api/admin/consultations", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.status(403).json({ message: "Unauthorized: Admin access required" });
    }
    
    try {
      const consultations = await storage.getAllConsultations();
      res.status(200).json(consultations);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching consultations" });
    }
  });

  app.patch("/api/admin/consultations/:id/status", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.status(403).json({ message: "Unauthorized: Admin access required" });
    }
    
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid consultation ID" });
      }
      
      const { status } = req.body;
      if (!status || !["pending", "scheduled", "completed", "cancelled"].includes(status)) {
        return res.status(400).json({ message: "Invalid status value" });
      }
      
      const updatedConsultation = await storage.updateConsultationStatus(id, status);
      if (!updatedConsultation) {
        return res.status(404).json({ message: "Consultation not found" });
      }
      
      res.status(200).json(updatedConsultation);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while updating the consultation status" });
    }
  });

  app.get("/api/admin/users", async (req, res) => {
    if (!req.isAuthenticated() || !req.user.isAdmin) {
      return res.status(403).json({ message: "Unauthorized: Admin access required" });
    }
    
    try {
      const users = await storage.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching users" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
