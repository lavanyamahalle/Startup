import { Link } from "wouter";

export default function CallToAction() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Start Your Transformation Today!</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">Join our community of 5000+ happy clients who have transformed their health naturally with the power of nutrition.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://wa.me/7264072630" 
            className="bg-white text-primary hover:bg-gray-100 font-cta font-semibold py-3 px-8 rounded-lg shadow transition text-lg"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Book a Free Consultation
          </a>
          <Link href="/programs" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-cta font-semibold py-3 px-8 rounded-lg shadow transition text-lg">
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
