import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-background/50 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold hero-gradient">
              SmartCity
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/tourism" className="text-muted-foreground hover:text-white transition-colors">
              Tourism
            </Link>
            <Link to="/student" className="text-muted-foreground hover:text-white transition-colors">
              Student
            </Link>
            <Link to="/jobs" className="text-muted-foreground hover:text-white transition-colors">
              Jobs
            </Link>
            <Link to="/business" className="text-muted-foreground hover:text-white transition-colors">
              Business
            </Link>
            <Link
              to="/admin"
              className="bg-primary/20 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;