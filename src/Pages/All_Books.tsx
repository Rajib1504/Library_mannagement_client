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
type IBook ={
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
}
const All_Books = () => {
  const { data, isLoading, isError } = useGetbooksQuery(undefined);
  if (isLoading) {
    <span>loading...</span>;
  }
  if (isError) {
    <span>error</span>;
  }
  if (data) {
    console.log(data);
  }
  return (
    <Table>
      <TableCaption>A list of all books</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Book Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead className="text-right">Genre </TableHead>
          <TableHead className="text-right">ISBN</TableHead>
          <TableHead className="text-right">Copies </TableHead>
          <TableHead className="text-right">Availability </TableHead>
          <TableHead className="text-right">Actions </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data.map((book:IBook) => (
          <TableRow>
            <TableCell className="font-medium">{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell className="text-right">{book.genre}</TableCell>
            <TableCell className="text-right">{book.isbn}</TableCell>
            <TableCell className="text-right">{book.copies}</TableCell>
            <TableCell className="text-right">{book.available ? "Available" : "Not Available"}</TableCell>
            <TableCell className="text-right">
              <Button variant="outline">Edit</Button>
              <Button variant="destructive">Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default All_Books;
