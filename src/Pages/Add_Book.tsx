import { useState } from "react";
import { useGetbooksQuery } from "@/redux/api/baseApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Button } from "@/Components/ui/button";
// import { EditBook } from "@/Components/EditBook";

type IBook = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
};

const All_Books = () => {
  const { data, isLoading, isError } = useGetbooksQuery(undefined);
  // const [deleteBook] = useDeleteBookMutation();

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  if (isLoading) return <div className="text-center py-10">Loading books...</div>;
  if (isError) return <div className="text-center py-10 text-red-500">Failed to fetch books.</div>;

  const allBooks = data?.data || [];

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = allBooks.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(allBooks.length / booksPerPage);

  // const handleDelete = async (bookId: string) => {
  //   if (window.confirm("Are you sure you want to delete this book?")) {
  //     try {
  //       await deleteBook(bookId).unwrap();
  //       alert("Book deleted successfully!");
  //     } catch (error) {
  //       console.error("Failed to delete the book:", error);
  //       alert("Failed to delete the book.");
  //     }
  //   }
  // };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Table>
        <TableCaption>A list of all books in the library.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Book Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead className="text-right">Genre</TableHead>
            <TableHead className="text-right">ISBN</TableHead>
            <TableHead className="text-right">Copies</TableHead>
            <TableHead className="text-right">Availability</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentBooks.length > 0 ? (
            currentBooks.map((book: IBook) => (
              <TableRow key={book._id}>
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell className="text-right">{book.genre}</TableCell>
                <TableCell className="text-right">{book.isbn}</TableCell>
                <TableCell className="text-right">{book.copies}</TableCell>
                <TableCell className="text-right">
                  {book.available ? "Available" : "Not Available"}
                </TableCell>
                <TableCell className="text-right flex justify-end gap-2">
                  {/* <EditBook bookId={book._id} /> */}
                  <Button
                    variant="destructive"
                    // onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </Button>
                  <Button variant="default">Borrow</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center h-24">
                No books found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-4 mt-8">
          <Button
            variant="outline"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default All_Books;