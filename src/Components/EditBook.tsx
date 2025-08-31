import {  useEffect, useState, type FormEvent } from "react";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { useGetSingleBookQuery, useUpdateBookMutation } from "@/redux/api/baseApi";
import { Label } from "@/components/ui/label";


interface EditBookProps {
  bookId: string;
}

export function EditBook({ bookId }: EditBookProps) {

  const [open, setOpen] = useState(false);
  
 
  const { data: bookData, isLoading: isBookLoading } = useGetSingleBookQuery(bookId, {
    skip: !open,
  });
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();
  

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [copies, setCopies] = useState(0);

  
  useEffect(() => {
    if (bookData?.data) {
      setTitle(bookData.data.title);
      setAuthor(bookData.data.author);
      setCopies(bookData.data.copies);
    }
  }, [bookData]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const updatedData = {
      title,
      author,
      copies,
      available: copies > 0, 
    };

    try {
      await updateBook({ bookId, updatedData }).unwrap();
      alert("Book updated successfully!");
      setOpen(false);
    } catch (error) {
      console.error("Failed to update book:", error);
      alert("Failed to update book.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Book Details</DialogTitle>
          <DialogDescription>
            Make changes to the book here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        {isBookLoading ? (
          <p>Loading book details...</p>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">Title</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="col-span-3"/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="author" className="text-right">Author</Label>
              <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} className="col-span-3"/>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="copies" className="text-right">Copies</Label>
              <Input id="copies" type="number" value={copies} onChange={(e) => setCopies(Number(e.target.value))} className="col-span-3"/>
            </div>
            <div className="flex justify-end gap-2 mt-4">
                 <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                 <Button type="submit" disabled={isUpdating}>
                    {isUpdating ? "Saving..." : "Save Changes"}
                 </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}