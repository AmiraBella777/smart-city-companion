import { Link } from "react-router-dom";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ModuleCard = ({ title, description, icon, link }: ModuleCardProps) => {
  return (
    <Link to={link} className="module-card block group">
      <div className="flex items-center mb-4">
        <div className="text-secondary text-3xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold ml-3 text-white">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </Link>
  );
};

export default ModuleCard;