import { Building2, GraduationCap, Briefcase, PalmtreeIcon, ShieldCheck } from "lucide-react";
import ModuleCard from "@/components/ModuleCard";
import Navbar from "@/components/Navbar";

const Index = () => {
  const modules = [
    {
      title: "Tourism",
      description: "Discover attractions, hotels, and restaurants in our city",
      icon: <PalmtreeIcon />,
      link: "/tourism",
    },
    {
      title: "Student",
      description: "Find educational institutions and resources",
      icon: <GraduationCap />,
      link: "/student",
    },
    {
      title: "Jobs",
      description: "Explore career opportunities and job listings",
      icon: <Briefcase />,
      link: "/jobs",
    },
    {
      title: "Business",
      description: "Connect with local businesses and opportunities",
      icon: <Building2 />,
      link: "/business",
    },
    {
      title: "Administration",
      description: "Manage city information and user access",
      icon: <ShieldCheck />,
      link: "/admin",
    },
  ];

  return (
    <div>
      <Navbar />
      <main className="page-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Welcome to SmartCity
          </h1>
          <p className="text-xl text-gray-600">
            Your comprehensive guide to city services and information
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;