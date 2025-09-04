import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                MP Board Affiliated • Est. 1995
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Welcome to{" "}
              <span className="text-blue-600">Little Flowers School</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nurturing young minds with excellence in education from Nursery to 10th Class 
              in the heart of Morena City, Madhya Pradesh. Building tomorrow's leaders with 
              strong values and academic excellence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/admissions">
                <Button size="lg" className="w-full sm:w-auto">
                  Apply for Admission
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://placehold.co/600x400?text=Beautiful+school+campus+with+students+in+uniform+playing+in+courtyard+with+modern+building+architecture" 
                alt="Little Flowers School campus showing students in uniform playing in a beautiful courtyard with modern educational building architecture"
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = '#f3f4f6';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                  target.textContent = 'School Campus';
                }}
              />
            </div>
            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">800+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}