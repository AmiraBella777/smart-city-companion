import { Building2, GraduationCap, Briefcase, PalmtreeIcon, ShieldCheck } from "lucide-react";
import ModuleCard from "@/components/ModuleCard";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Index = () => {
  const modules = [
    {
      title: "Tourism",
      description: "Discover attractions, hotels, restaurants, and entertainment venues throughout the city",
      icon: <PalmtreeIcon />,
      link: "/tourism",
    },
    {
      title: "Student",
      description: "Find educational institutions, libraries, and academic resources for your studies",
      icon: <GraduationCap />,
      link: "/student",
    },
    {
      title: "Jobs",
      description: "Explore career opportunities and connect with leading employers in various industries",
      icon: <Briefcase />,
      link: "/jobs",
    },
    {
      title: "Business",
      description: "Access business centers, industry insights, and networking opportunities",
      icon: <Building2 />,
      link: "/business",
    },
    {
      title: "Administration",
      description: "Manage city information, user profiles, and system settings",
      icon: <ShieldCheck />,
      link: "/admin",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/34452616-5628-4296-8aac-9cbae66a9cfe.png')] bg-cover bg-center opacity-20" />
        
        <div className="page-container relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold hero-gradient mb-6">
              Welcome to SmartCity
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your comprehensive guide to city services, featuring real-time information about tourism,
              education, jobs, and business opportunities.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Get Started
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <ModuleCard key={module.title} {...module} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;