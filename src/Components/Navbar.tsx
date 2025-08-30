import { Link } from "react-router";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14   items-center">
        <div className="mr-4 md:flex w-full justify-between">
          <Link to="/" className="mr-6 flex justify-between items-center">
            <span className="text-xl font-bold">Knowledge_Hunter</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm ">
            <Link
              to={"/all-books"}
              className={cn(
                "transition-colors hover:text-foreground/80 text-foreground/60"
              )}
            >
              All Books
            </Link>
            <Link
              to={"/create-book"}
              className={cn(
                "transition-colors hover:text-foreground/80 text-foreground/60"
              )}
            >
              Add Book
            </Link>
            <Link
              to={"/borrow-summary"}
              className={cn(
                "transition-colors hover:text-foreground/80 text-foreground/60"
              )}
            >
              Borrow Summary
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
