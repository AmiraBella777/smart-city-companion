import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth";
  };

  const handleGoogleSignup = () => {
    window.location.href = "https://accounts.google.com/signup";
  };

  return (
    <nav className="bg-background/50 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold hero-gradient">
              SmartCity
            </Link>
          </div>
          <div className="flex items-center space-x-4">
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
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={handleGoogleLogin}
            >
              Log in
            </Button>
            <Button
              className="bg-primary text-white hover:bg-primary/90"
              onClick={handleGoogleSignup}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;