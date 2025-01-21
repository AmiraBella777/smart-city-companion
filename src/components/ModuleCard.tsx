import { Link } from "react-router-dom";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ModuleCard = ({ title, description, icon, link }: ModuleCardProps) => {
  return (
    <Link to={link} className="module-card block">
      <div className="flex items-center mb-4">
        <div className="text-primary text-2xl">{icon}</div>
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default ModuleCard;