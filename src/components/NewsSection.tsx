import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: "New Session 2024-25 Admissions Open",
      date: "March 15, 2024",
      excerpt: "Admissions are now open for all classes from Nursery to 10th. Limited seats available. Apply now!",
      category: "Admissions",
      image: "https://placehold.co/400x250?text=School+admission+counter+with+parents+and+students+submitting+forms+in+bright+office+environment",
    },
    {
      id: 2,
      title: "Outstanding MP Board Results 2024",
      date: "March 10, 2024",
      excerpt: "Our students achieved 95% success rate in MP Board Class 10th examinations with 15 students scoring above 90%.",
      category: "Results",
      image: "https://placehold.co/400x250?text=Students+celebrating+exam+results+with+teachers+and+merit+certificates+in+school+assembly+hall",
    },
    {
      id: 3,
      title: "Annual Sports Day Championship",
      date: "February 28, 2024",
      excerpt: "Students showcased their athletic talents in various sports competitions. Red House emerged as overall champions.",
      category: "Events",
      image: "https://placehold.co/400x250?text=Students+participating+in+sports+day+activities+running+race+on+school+ground+with+colorful+flags",
    },
    {
      id: 4,
      title: "Science Exhibition Winners",
      date: "February 20, 2024",
      excerpt: "Our science exhibition featured innovative projects by students from Class 6th to 10th with impressive displays.",
      category: "Academics",
      image: "https://placehold.co/400x250?text=Students+presenting+science+projects+with+working+models+and+charts+in+school+science+lab",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Latest News & Updates
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with the latest happenings at Little Flowers School
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-10 overflow-hidden rounded-t-lg">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#f3f4f6';
                    target.style.display = 'flex';
                    target.style.alignItems = 'center';
                    target.style.justifyContent = 'center';
                    target.textContent = item.category;
                  }}
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 line-clamp-3">{item.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Connected with Little Flowers School
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Don't miss out on important announcements, events, and achievements. 
              Get the latest updates about your child's education and school activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <Button variant="secondary" size="lg">
                  Apply for Admission
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}