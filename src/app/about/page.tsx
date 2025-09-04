import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              About Little Flowers School
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A legacy of educational excellence in Morena City, Madhya Pradesh, 
              nurturing young minds for over 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Founded in 1995, Little Flowers School began with a simple yet profound 
                  mission: to provide quality education that nurtures both academic excellence 
                  and character development. Located in the heart of Morena City, Madhya Pradesh, 
                  our school has grown from humble beginnings to become one of the most respected 
                  educational institutions in the region.
                </p>
                <p className="mb-4">
                  Affiliated with the Madhya Pradesh Board of Secondary Education, Bhopal, 
                  we offer comprehensive education from Nursery to 10th Standard. Our journey 
                  has been marked by consistent academic achievements, innovative teaching 
                  methodologies, and a deep commitment to holistic child development.
                </p>
                <p>
                  Over the years, we have proudly graduated thousands of students who have 
                  gone on to excel in various fields, carrying forward the values and 
                  knowledge imparted during their formative years at Little Flowers School.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/600x400?text=Historic+school+building+with+students+and+teachers+from+different+decades+showing+school+heritage+and+tradition" 
                alt="Historic school building showing the heritage and tradition of Little Flowers School with students and teachers from different decades"
                className="rounded-2xl shadow-xl w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = '#f3f4f6';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                  target.textContent = 'School Heritage';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Mission & Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To provide quality education that empowers students with knowledge, 
                  skills, and values necessary for their personal growth and contribution 
                  to society. We are committed to creating a nurturing environment that 
                  fosters intellectual curiosity, creativity, and character development 
                  while preparing students for future challenges and opportunities.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading educational institution in Morena City and the region, 
                  recognized for academic excellence, innovative teaching practices, and 
                  holistic development of students. We envision creating future leaders 
                  who are academically competent, socially responsible, and morally upright 
                  citizens contributing to the betterment of society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide our educational philosophy and daily practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "Striving for the highest standards in academics and character",
                color: "blue"
              },
              {
                title: "Integrity",
                description: "Building honest, trustworthy, and ethical individuals",
                color: "green"
              },
              {
                title: "Innovation",
                description: "Embracing new teaching methods and educational technologies",
                color: "purple"
              },
              {
                title: "Compassion",
                description: "Fostering empathy, kindness, and social responsibility",
                color: "orange"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-${value.color}-100`}>
                  <div className={`w-8 h-8 rounded-full bg-${value.color}-600`}></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <img 
                  src="https://placehold.co/300x300?text=Principal+portrait+in+professional+attire+standing+in+school+office+with+educational+awards+and+certificates" 
                  alt="Principal of Little Flowers School in professional attire standing in the school office with educational awards and certificates"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#f3f4f6';
                    target.style.display = 'flex';
                    target.style.alignItems = 'center';
                    target.style.justifyContent = 'center';
                    target.textContent = 'Principal';
                  }}
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message from the Principal</h3>
                <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-6">
                  "At Little Flowers School, we believe that education is not just about academic 
                  achievement but about nurturing the whole child. Our dedicated faculty and staff 
                  work tirelessly to create an environment where every student can flourish, 
                  discover their potential, and develop into confident, capable, and caring individuals. 
                  We are proud of our MP Board affiliation and our commitment to providing 
                  education that meets the highest standards while staying true to our values 
                  of integrity, excellence, and compassion."
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">Mrs. Priya Sharma</p>
                  <p className="text-gray-600">Principal, Little Flowers School</p>
                  <p className="text-sm text-gray-500">M.Ed., B.Ed. - 20+ Years in Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}