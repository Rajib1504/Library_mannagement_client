import { type FormEvent, useState } from "react";
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
import { Label } from "@/Components/ui/label";
import { useBorrowBookMutation } from "@/redux/api/baseApi";
import { useNavigate } from "react-router";

// Props এর মধ্যে bookTitle যোগ করা হলো
interface BorrowBookProps {
  bookId: string;
  availableCopies: number;
  bookTitle: string;
}

export function BorrowBook({ bookId, availableCopies, bookTitle }: BorrowBookProps) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState('');
  
  const [borrowBook, { isLoading }] = useBorrowBookMutation();
  const navigate = useNavigate();

  // ✅ আজকের তারিখ YYYY-MM-DD ফরম্যাটে পাওয়ার জন্য
  const getTodayDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // মাস 0 থেকে শুরু হয়
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (quantity > availableCopies) {
      alert(`You can borrow a maximum of ${availableCopies} copies.`);
      return;
    }
    
    const borrowData = {
      book: bookId,
      quantity,
      dueDate,
    };

    try {
      await borrowBook(borrowData).unwrap();
      alert("Book borrowed successfully!");
      setOpen(false);
      navigate("/borrow-summary");
    } catch (error: any) {
      console.error("Failed to borrow book:", error);
      alert(error.data?.message || "Failed to borrow book.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" disabled={availableCopies === 0}>
          {availableCopies > 0 ? "Borrow" : "Unavailable"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
     
          <DialogTitle>Borrow: {bookTitle}</DialogTitle>
          <DialogDescription>
            Enter the quantity and due date to borrow this book.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">Quantity</Label>
            <Input 
              id="quantity" 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(Number(e.target.value))} 
              className="col-span-3"
              min="1"
              max={availableCopies}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dueDate" className="text-right">Due Date</Label>
            <Input 
              id="dueDate" 
              type="date" 
              value={dueDate} 
              onChange={(e) => setDueDate(e.target.value)} 
              className="col-span-3"
              required
              
              min={getTodayDateString()} 
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
               <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
               <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Processing..." : "Confirm Borrow"}
               </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}