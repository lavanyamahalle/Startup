import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ContactMessage, Testimonial, Consultation, User } from "@shared/schema";

export default function AdminPage() {
  const { user, logoutMutation } = useAuth();
  const { toast } = useToast();
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data: contactMessages, isLoading: isLoadingMessages } = useQuery<ContactMessage[]>({
    queryKey: ["/api/admin/contact-messages"],
  });

  const { data: testimonials, isLoading: isLoadingTestimonials } = useQuery<Testimonial[]>({
    queryKey: ["/api/admin/testimonials"],
  });

  const { data: consultations, isLoading: isLoadingConsultations } = useQuery<Consultation[]>({
    queryKey: ["/api/admin/consultations"],
  });

  const { data: users, isLoading: isLoadingUsers } = useQuery<User[]>({
    queryKey: ["/api/admin/users"],
  });

  const approveTestimonialMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("PATCH", `/api/admin/testimonials/${id}/approve`, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/testimonials"] });
      toast({
        title: "Success",
        description: "Testimonial has been approved.",
      });
      setIsDialogOpen(false);
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateConsultationStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      await apiRequest("PATCH", `/api/admin/consultations/${id}/status`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/consultations"] });
      toast({
        title: "Success",
        description: "Consultation status has been updated.",
      });
      setIsDialogOpen(false);
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  if (!user?.isAdmin) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-heading text-3xl font-bold text-primary mb-4">Access Denied</h1>
        <p className="mb-8">You don't have permission to access the admin panel.</p>
        <Button onClick={() => logoutMutation.mutate()}>Logout</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-heading text-3xl font-bold text-primary">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome, {user.fullName}</p>
        </div>
        <Button variant="outline" onClick={() => logoutMutation.mutate()}>Logout</Button>
      </div>

      <Tabs defaultValue="consultations">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="consultations">Consultations</TabsTrigger>
          <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        <TabsContent value="consultations">
          <Card>
            <CardHeader>
              <CardTitle>Consultation Requests</CardTitle>
              <CardDescription>Manage all consultation requests</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingConsultations ? (
                <div className="flex justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : consultations && consultations.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {consultations.map((consultation) => (
                      <TableRow key={consultation.id}>
                        <TableCell className="font-medium">{consultation.name}</TableCell>
                        <TableCell>{consultation.program}</TableCell>
                        <TableCell>
                          {consultation.email}<br />
                          {consultation.phone}
                        </TableCell>
                        <TableCell>{new Date(consultation.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge className={
                            consultation.status === "pending" ? "bg-yellow-500" :
                            consultation.status === "completed" ? "bg-green-500" :
                            consultation.status === "scheduled" ? "bg-blue-500" : "bg-red-500"
                          }>
                            {consultation.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setSelectedItem(consultation);
                              setIsDialogOpen(true);
                            }}
                          >
                            Manage
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-center py-8 text-gray-500">No consultation requests found.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testimonials">
          <Card>
            <CardHeader>
              <CardTitle>Testimonials</CardTitle>
              <CardDescription>Review and approve testimonials</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingTestimonials ? (
                <div className="flex justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : testimonials && testimonials.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Achievement</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {testimonials.map((testimonial) => (
                      <TableRow key={testimonial.id}>
                        <TableCell className="font-medium">{testimonial.name}</TableCell>
                        <TableCell>{testimonial.category}</TableCell>
                        <TableCell>{testimonial.achievement}</TableCell>
                        <TableCell>{testimonial.rating}/5</TableCell>
                        <TableCell>
                          <Badge className={testimonial.approved ? "bg-green-500" : "bg-yellow-500"}>
                            {testimonial.approved ? "Approved" : "Pending"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setSelectedItem(testimonial);
                              setIsDialogOpen(true);
                            }}
                            disabled={testimonial.approved}
                          >
                            {testimonial.approved ? "Approved" : "Review"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-center py-8 text-gray-500">No testimonials found.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Contact Messages</CardTitle>
              <CardDescription>Review all contact form submissions</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingMessages ? (
                <div className="flex justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : contactMessages && contactMessages.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contactMessages.map((message) => (
                      <TableRow key={message.id}>
                        <TableCell className="font-medium">{message.name}</TableCell>
                        <TableCell>{message.email}</TableCell>
                        <TableCell>{message.phone}</TableCell>
                        <TableCell>{message.program || "N/A"}</TableCell>
                        <TableCell>{new Date(message.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setSelectedItem(message);
                              setIsDialogOpen(true);
                            }}
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-center py-8 text-gray-500">No contact messages found.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>Registered Users</CardTitle>
              <CardDescription>All registered users in the system</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingUsers ? (
                <div className="flex justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : users && users.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Username</TableHead>
                      <TableHead>Full Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Joined</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.username}</TableCell>
                        <TableCell>{user.fullName}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone || "N/A"}</TableCell>
                        <TableCell>
                          <Badge className={user.isAdmin ? "bg-purple-500" : "bg-blue-500"}>
                            {user.isAdmin ? "Admin" : "User"}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-center py-8 text-gray-500">No users found.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Detail Dialog */}
      {selectedItem && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {selectedItem.name ? selectedItem.name : "Details"}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4 py-4">
              {/* If it's a contact message */}
              {selectedItem.message && !selectedItem.status && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Name:</p>
                      <p>{selectedItem.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email:</p>
                      <p>{selectedItem.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone:</p>
                      <p>{selectedItem.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Program:</p>
                      <p>{selectedItem.program || "N/A"}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Message:</p>
                    <p className="mt-2 p-3 bg-gray-50 rounded-md">{selectedItem.message}</p>
                  </div>
                </>
              )}

              {/* If it's a testimonial */}
              {selectedItem.content && selectedItem.category && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Name:</p>
                      <p>{selectedItem.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Category:</p>
                      <p>{selectedItem.category}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Achievement:</p>
                      <p>{selectedItem.achievement || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Rating:</p>
                      <p>{selectedItem.rating}/5</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Testimonial:</p>
                    <p className="mt-2 p-3 bg-gray-50 rounded-md italic">{selectedItem.content}</p>
                  </div>
                </>
              )}

              {/* If it's a consultation */}
              {selectedItem.status && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Name:</p>
                      <p>{selectedItem.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Program:</p>
                      <p>{selectedItem.program}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email:</p>
                      <p>{selectedItem.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone:</p>
                      <p>{selectedItem.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Date:</p>
                      <p>{new Date(selectedItem.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Status:</p>
                      <Badge className={
                        selectedItem.status === "pending" ? "bg-yellow-500" :
                        selectedItem.status === "completed" ? "bg-green-500" :
                        selectedItem.status === "scheduled" ? "bg-blue-500" : "bg-red-500"
                      }>
                        {selectedItem.status}
                      </Badge>
                    </div>
                  </div>
                  {selectedItem.message && (
                    <div>
                      <p className="text-sm font-medium">Message:</p>
                      <p className="mt-2 p-3 bg-gray-50 rounded-md">{selectedItem.message}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium">Update Status:</p>
                    <div className="flex gap-2 mt-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateConsultationStatusMutation.mutate({ 
                          id: selectedItem.id, 
                          status: "pending" 
                        })}
                        disabled={selectedItem.status === "pending"}
                      >
                        Pending
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateConsultationStatusMutation.mutate({ 
                          id: selectedItem.id, 
                          status: "scheduled" 
                        })}
                        disabled={selectedItem.status === "scheduled"}
                      >
                        Scheduled
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateConsultationStatusMutation.mutate({ 
                          id: selectedItem.id, 
                          status: "completed" 
                        })}
                        disabled={selectedItem.status === "completed"}
                      >
                        Completed
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateConsultationStatusMutation.mutate({ 
                          id: selectedItem.id, 
                          status: "cancelled" 
                        })}
                        disabled={selectedItem.status === "cancelled"}
                      >
                        Cancelled
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <DialogFooter>
              {selectedItem.approved !== undefined && !selectedItem.approved && (
                <Button
                  onClick={() => approveTestimonialMutation.mutate(selectedItem.id)}
                  disabled={approveTestimonialMutation.isPending}
                >
                  {approveTestimonialMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Approving...
                    </>
                  ) : (
                    "Approve Testimonial"
                  )}
                </Button>
              )}
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
