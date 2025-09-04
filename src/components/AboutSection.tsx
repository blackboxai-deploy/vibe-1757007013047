import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              About Little Flowers School
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Established in 1995, Little Flowers School has been a cornerstone of 
                quality education in Morena City, Madhya Pradesh. We are proudly 
                affiliated with the Madhya Pradesh Board of Secondary Education, Bhopal.
              </p>
              <p className="mb-4">
                Our school provides comprehensive education from Nursery to 10th Class, 
                focusing on academic excellence while nurturing the overall personality 
                development of our students. We believe in creating responsible citizens 
                with strong moral values and leadership qualities.
              </p>
              <p className="mb-6">
                With modern infrastructure, qualified teachers, and a student-centric 
                approach, we ensure that every child receives personalized attention 
                and opportunities to excel in their chosen fields.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">MP Board Affiliated</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">Nursery to 10th Class</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Modern Infrastructure</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-gray-700">Qualified Faculty</span>
              </div>
            </div>

            <Link href="/about">
              <Button size="lg">Learn More About Our History</Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://placehold.co/600x450?text=School+principal+and+teachers+with+students+in+classroom+learning+environment+with+educational+materials" 
                alt="School principal and teachers with students in a modern classroom learning environment with educational materials and interactive displays"
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = '#f3f4f6';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                  target.textContent = 'Learning Environment';
                }}
              />
            </div>

            {/* Vision and Mission Cards */}
            <div className="absolute -bottom-8 left-4 right-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-lg p-4 border">
                  <h4 className="font-semibold text-blue-600 mb-2">Our Vision</h4>
                  <p className="text-sm text-gray-600">
                    To be the leading educational institution nurturing future leaders.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 border">
                  <h4 className="font-semibold text-green-600 mb-2">Our Mission</h4>
                  <p className="text-sm text-gray-600">
                    Providing quality education with values and character building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}