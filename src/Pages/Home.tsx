
import All_Books from "./All_Books";

const featuredBooks = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover: "https://emedicodiary.com/images/books/64cc1fc52646aa176937d4ae350e11fa.jpg",
  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Project_Hail_Mary_poster.jpg",
  },
  {
    id: 3,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "https://online.fliphtml5.com/vvogw/gvgj/files/large/1.webp?1641021239&1641021239",
  },
  {
    id: 4,
    title: "The Vanishing Half",
    author: "Brit Bennett",
    cover: "https://m.media-amazon.com/images/I/81eYV3QljBL._UF1000,1000_QL80_.jpg",
  },
];

const Home = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center bg-gray-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?books,library')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
        <div className="relative z-10 px-4 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 animate-fade-in-down">
            Your Gateway to Infinite Worlds
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 animate-fade-in-up">
            Discover timeless classics, modern masterpieces, and hidden gems. 
            Your next great read awaits in our carefully curated collection.
          </p>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Featured Selections</h2>
            <p className="text-muted-foreground mt-2">Handpicked books that our readers love.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <div key={book.id} className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-card-foreground">
                  {book.title}
                </h3>
                <p className="text-muted-foreground mt-1">by {book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/50 dark:bg-muted/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Why Choose Our Library?</h2>
            <p className="text-muted-foreground mt-2">An unparalleled experience for book lovers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Vast Collection</h3>
              <p className="text-muted-foreground">
                From historical epics to futuristic sci-fi, our shelves are stocked with thousands of titles across all genres.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Easy Management</h3>
              <p className="text-muted-foreground">
                A simple, intuitive system to browse, view, and manage your borrowed books all in one place.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">Community Focused</h3>
              <p className="text-muted-foreground">
                Join a community of passionate readers. Discover new perspectives and share your literary journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted/50 dark:bg-muted/20 py-20">
      <h2 className="text-4xl text-center mb-10 font-bold">Our Library History</h2>
      <All_Books/>
      </section>
    </div>
  );
};

export default Home;