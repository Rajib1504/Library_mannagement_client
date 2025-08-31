import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
    } from "@/Components/ui/dialog";
    import { Button } from "@/Components/ui/button";
    
    // IBook টাইপটি এখানে আবার ডিফাইন করা হলো
    type IBook = {
      _id: string;
      title: string;
      author: string;
      genre: string;
      isbn: string;
      description?: string; // Description অপশনাল হতে পারে
      copies: number;
      available: boolean;
    };
    
    // Props এর জন্য একটি interface তৈরি করা হলো
    interface ViewBookProps {
      book: IBook;
    }
    
    export function ViewBook({ book }: ViewBookProps) {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">View</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{book.title}</DialogTitle>
              <DialogDescription>
                Authored by {book.author}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-3 text-sm">
              <p>
                <span className="font-semibold text-gray-600 dark:text-gray-300 w-24 inline-block">Genre:</span> 
                <span>{book.genre}</span>
              </p>
              <p>
                <span className="font-semibold text-gray-600 dark:text-gray-300 w-24 inline-block">ISBN:</span> 
                <span>{book.isbn}</span>
              </p>
              <p>
                <span className="font-semibold text-gray-600 dark:text-gray-300 w-24 inline-block">Total Copies:</span> 
                <span>{book.copies}</span>
              </p>
              <p>
                <span className="font-semibold text-gray-600 dark:text-gray-300 w-24 inline-block">Status:</span> 
                <span className={book.available ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                  {book.available ? "Available" : "Not Available"}
                </span>
              </p>
              {book.description && (
                <div className="pt-2">
                  <h4 className="font-semibold text-gray-600 dark:text-gray-300">Description:</h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">{book.description}</p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      );
    }