import { 
  users, type User, type InsertUser,
  contactMessages, type ContactMessage, type InsertContactMessage,
  testimonials, type Testimonial, type InsertTestimonial,
  consultations, type Consultation, type InsertConsultation
} from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllUsers(): Promise<User[]>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
  
  // Testimonial methods
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getApprovedTestimonials(category?: string): Promise<Testimonial[]>;
  getAllTestimonials(): Promise<Testimonial[]>;
  approveTestimonial(id: number): Promise<Testimonial | undefined>;
  
  // Consultation methods
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getAllConsultations(): Promise<Consultation[]>;
  updateConsultationStatus(id: number, status: string): Promise<Consultation | undefined>;
  
  // Session store
  sessionStore: session.SessionStore;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private testimonials: Map<number, Testimonial>;
  private consultations: Map<number, Consultation>;
  public sessionStore: session.SessionStore;
  private currentUserId: number;
  private currentContactMessageId: number;
  private currentTestimonialId: number;
  private currentConsultationId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.testimonials = new Map();
    this.consultations = new Map();
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000, // 24 hours
    });
    this.currentUserId = 1;
    this.currentContactMessageId = 1;
    this.currentTestimonialId = 1;
    this.currentConsultationId = 1;
    
    // Create initial admin user
    this.createUser({
      username: "admin",
      password: "$2b$10$7JprYjT0n3CJ1Z8eRQIlouDjfIBMjVSWzLvIxRp5gF5HU0Y.8fTBW.00000000000000000000000000000000", // password: admin123
      fullName: "Admin User",
      email: "admin@sustenancewellness.com",
      phone: "7264072630",
      isAdmin: true
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username.toLowerCase() === username.toLowerCase(),
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const now = new Date();
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: now
    };
    this.users.set(id, user);
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  // Contact message methods
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const now = new Date();
    const id = this.currentContactMessageId++;
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: now
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  // Testimonial methods
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const now = new Date();
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id,
      createdAt: now
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getApprovedTestimonials(category?: string): Promise<Testimonial[]> {
    let approvedTestimonials = Array.from(this.testimonials.values())
      .filter(testimonial => testimonial.approved);
    
    if (category && category !== 'all') {
      approvedTestimonials = approvedTestimonials.filter(
        testimonial => testimonial.category === category
      );
    }
    
    return approvedTestimonials;
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async approveTestimonial(id: number): Promise<Testimonial | undefined> {
    const testimonial = this.testimonials.get(id);
    if (!testimonial) return undefined;
    
    const updatedTestimonial: Testimonial = {
      ...testimonial,
      approved: true
    };
    
    this.testimonials.set(id, updatedTestimonial);
    return updatedTestimonial;
  }

  // Consultation methods
  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const now = new Date();
    const id = this.currentConsultationId++;
    const consultation: Consultation = {
      ...insertConsultation,
      id,
      createdAt: now
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  async getAllConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async updateConsultationStatus(id: number, status: string): Promise<Consultation | undefined> {
    const consultation = this.consultations.get(id);
    if (!consultation) return undefined;
    
    const updatedConsultation: Consultation = {
      ...consultation,
      status
    };
    
    this.consultations.set(id, updatedConsultation);
    return updatedConsultation;
  }
}

export const storage = new MemStorage();
