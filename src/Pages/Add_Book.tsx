/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/Components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { useCreateBookMutation } from "@/redux/api/baseApi";
import { useNavigate } from "react-router";


const bookFormSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .min(2, "Title must be at least 2 characters"),
  author: z
    .string()
    .min(1, "Author is required")
    .min(2, "Author must be at least 2 characters"),
  isbn: z
    .string()
    .min(10, "ISBN must be at least 10 characters")
    .max(13, "ISBN must be at most 13 characters"),
  genre: z.string().min(1, "Please select a genre"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  copies: z.coerce
    .number("Copies must be a number" )
    .min(0, "Copies cannot be negative"),
});

type BookFormValues = z.infer<typeof bookFormSchema>;

const Add_Book = () => {
  const [createBook, { isLoading }] = useCreateBookMutation();
  const navigate = useNavigate();

  const form = useForm<BookFormValues>({
    resolver: zodResolver(bookFormSchema) as any,
    defaultValues: {
      title: "",
      author: "",
      isbn: "",
      genre: "",
      description: "",
      copies: 0,
    },
  });

  const onSubmit = async (data: BookFormValues) => {
    try {
      const bookData = { ...data, available: data.copies > 0 };
      await createBook(bookData).unwrap();
      
      alert("Book added successfully!");
      form.reset();
      navigate("/all-books");
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book. Please try again.");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Add New Book</CardTitle>
          <CardDescription>
            Fill in the details below to add a new book to the library.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Book Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter book title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter author name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="isbn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ISBN</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Enter ISBN number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                  control={form.control}
                  name="genre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Genre</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a genre" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="FICTION">Fiction</SelectItem>
                          <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
                          <SelectItem value="SCIENCE">Science</SelectItem>
                          <SelectItem value="HISTORY">History</SelectItem>
                          <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                          <SelectItem value="FANTASY">Fantasy</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <FormField
                control={form.control}
                name="copies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Copies</FormLabel>
                    <FormControl>
                      <Input placeholder="0" type="number" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter book description..." className="min-h-[100px]" {...field} />
                    </FormControl>
                    <FormDescription>Provide a brief description of the book.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1" disabled={isLoading}>
                  {isLoading ? "Adding Book..." : "Add Book"}
                </Button>
                <Button type="button" variant="outline" onClick={() => form.reset()} disabled={isLoading}>
                  Reset Form
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Add_Book;