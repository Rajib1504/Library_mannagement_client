import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const featuredBooks = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover: "https://images-na.ssl-images-amazon.com/images/I/91eR0A29S7L.jpg",
  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "https://images-na.ssl-images-amazon.com/images/I/81+sm8S-MML.jpg",
  },
  {
    id: 3,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "https://images-na.ssl-images-amazon.com/images/I/71isx4n0+mL.jpg",
  },
  {
    id: 4,
    title: "The Vanishing Half",
    author: "Brit Bennett",
    cover: "https://images-na.ssl-images-amazon.com/images/I/815E7yL4MGL.jpg",
  },
];

const Home = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-gray-800 text-white">
        <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?books,library')" }}></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Unlock the World of Knowledge
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Explore our vast collection of books, from classic literature to modern bestsellers.
          </p>
          <Link to="/all-books" className="inline-block px-8 py-3 text-lg font-medium text-white bg-primary rounded-md shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
            Discover Books
          </Link>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <div key={book.id} className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-card-foreground">
                  {book.title}
                </h3>
                <p className="text-muted-foreground mt-1">by {book.author}</p>
                <Link to={`/books/${book.id}`} className="mt-4 inline-block px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Knowledge_Hunter</h4>
            <p className="text-gray-400">
              Your one-stop destination for discovering and managing books.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/all-books" className="text-gray-400 hover:text-white transition-colors">All Books</Link></li>
              <li><Link to="/create-book" className="text-gray-400 hover:text-white transition-colors">Add Book</Link></li>
              <li><Link to="/borrow-summary" className="text-gray-400 hover:text-white transition-colors">Borrow Summary</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
            <p className="text-gray-400 mt-4">
              &copy; {new Date().getFullYear()} Knowledge_Hunter. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;