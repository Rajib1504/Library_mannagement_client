import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">Knowledge_Hunter</h4>
          <p className="text-gray-400">
            Your one-stop destination for discovering and managing books.
          </p>
          <p className="text-gray-400 mt-4">
            &copy; {new Date().getFullYear()} Knowledge_Hunter. All rights reserved.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/all-books" className="text-gray-400 hover:text-white transition-colors">All Books</Link></li>
            <li><Link to="/create-book" className="text-gray-400 hover:text-white transition-colors">Add Book</Link></li>
            <li><Link to="/borrow-summary" className="text-gray-400 hover:text-white transition-colors">Borrow Summary</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;