import { Link } from "wouter";

interface ProgramCardProps {
  title: string;
  icon: string;
  description: string;
}

export default function ProgramCard({ title, icon, description }: ProgramCardProps) {
  return (
    <div className="bg-[#F9F5F0] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <div className="h-48 bg-[#D2B48C]/20 flex items-center justify-center">
        <i className={`${icon} text-primary text-5xl`}></i>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="mb-4">{description}</p>
        <Link href="/pricing">
          <a className="text-[#4CAF50] font-semibold hover:underline flex items-center">
            Learn More <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </Link>
      </div>
    </div>
  );
}
