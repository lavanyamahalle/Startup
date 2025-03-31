interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-14 w-14" }: LogoProps) {
  return (
    <div className={`${className} bg-primary rounded-full flex items-center justify-center text-white`}>
      <span className="font-heading font-bold text-xl">SW</span>
    </div>
  );
}
