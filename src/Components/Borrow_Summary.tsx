import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";


type IBorrowSummary = {
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
};

const Borrow_Summary = () => {

  const { data: summaryData, isLoading, isError } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) {
    return <div className="text-center py-10">Loading borrow summary...</div>;
  }

  if (isError) {
    return <div className="text-center py-10 text-red-500">Failed to fetch borrow summary.</div>;
  }

  const summaries = summaryData?.data || [];

  return (
    <div className="container mx-auto py-10 min-h-[70vh]">
      <h1 className="text-3xl font-bold text-center mb-8">Borrow Summary</h1>
      <Table>
        <TableCaption>A summary of all borrowed books.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Book Title</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead className="text-right">Total Quantity Borrowed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {summaries.length > 0 ? (
            summaries.map((summary: IBorrowSummary, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{summary.book.title}</TableCell>
                <TableCell>{summary.book.isbn}</TableCell>
                <TableCell className="text-right">{summary.totalQuantity}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center h-24">
                No books have been borrowed yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Borrow_Summary;