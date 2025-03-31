import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-b from-[#D2B48C]/20 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Transform Your Health Naturally
            </h1>
            <h2 className="text-xl md:text-2xl mb-6">
              <span className="font-bold">Dt. Sakshi Mahalle</span> – MSc in Nutritional Studies and Dietetics
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#D2B48C]/30 text-primary px-3 py-1 rounded-full text-sm">Clinical Nutritionist</span>
              <span className="bg-[#D2B48C]/30 text-primary px-3 py-1 rounded-full text-sm">Gut Health Expert</span>
              <span className="bg-[#D2B48C]/30 text-primary px-3 py-1 rounded-full text-sm">Diabetes Educator</span>
              <span className="bg-[#D2B48C]/30 text-primary px-3 py-1 rounded-full text-sm">Lifestyle Coach</span>
              <span className="bg-[#D2B48C]/30 text-primary px-3 py-1 rounded-full text-sm">Zumba & Yoga Instructor</span>
              <span className="bg-[#D2B48C]/30 text-primary px-3 py-1 rounded-full text-sm">Dietary Supplements Advisor</span>
            </div>
            <p className="text-lg mb-8">
              Has helped <span className="font-bold text-primary">5000+ people</span> sustain wellness and transform their lives.
            </p>
            <p className="text-lg italic mb-8">
              "Transforming health and managing weight naturally through the power of food as medicine."
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <a className="bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white font-cta font-semibold py-3 px-6 rounded-lg shadow transition">
                  Contact Us
                </a>
              </Link>
              <Link href="/programs">
                <a className="bg-white hover:bg-gray-50 text-primary border-2 border-primary font-cta font-semibold py-3 px-6 rounded-lg shadow transition">
                  Our Programs
                </a>
              </Link>
            </div>
          </div>
          <div className="md:w-5/12">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D2B48C]/40 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full z-0"></div>
              <div className="relative z-10 bg-gray-200 rounded-lg overflow-hidden h-96 w-full">
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-gray-500">
                    <i className="fas fa-user-md text-6xl"></i>
                    <p className="text-center mt-4">Dietitian's Professional Photo</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
