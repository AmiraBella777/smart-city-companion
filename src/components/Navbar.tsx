import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              SmartCity
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/tourism" className="text-gray-600 hover:text-primary">
              Tourism
            </Link>
            <Link to="/student" className="text-gray-600 hover:text-primary">
              Student
            </Link>
            <Link to="/jobs" className="text-gray-600 hover:text-primary">
              Jobs
            </Link>
            <Link to="/business" className="text-gray-600 hover:text-primary">
              Business
            </Link>
            <Link
              to="/admin"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
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