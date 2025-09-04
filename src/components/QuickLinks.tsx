import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function QuickLinks() {
  const quickLinks = [
    {
      title: "Admissions",
      description: "Apply for new session 2024-25. Get admission guidelines and requirements.",
      href: "/admissions",
      buttonText: "Apply Now",
      color: "blue",
    },
    {
      title: "Academic Calendar",
      description: "View important dates, examinations, and holidays for the academic year.",
      href: "/academics",
      buttonText: "View Calendar",
      color: "green",
    },
    {
      title: "Facilities",
      description: "Explore our modern infrastructure, labs, library, and sports facilities.",
      href: "/facilities",
      buttonText: "Explore Facilities",
      color: "purple",
    },
    {
      title: "Contact Us",
      description: "Get in touch with our admission team or schedule a school visit.",
      href: "/contact",
      buttonText: "Contact Now",
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-50",
          text: "text-blue-600",
          button: "bg-blue-600 hover:bg-blue-700",
        };
      case "green":
        return {
          bg: "bg-green-50",
          text: "text-green-600",
          button: "bg-green-600 hover:bg-green-700",
        };
      case "purple":
        return {
          bg: "bg-purple-50",
          text: "text-purple-600",
          button: "bg-purple-600 hover:bg-purple-700",
        };
      case "orange":
        return {
          bg: "bg-orange-50",
          text: "text-orange-600",
          button: "bg-orange-600 hover:bg-orange-700",
        };
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-600",
          button: "bg-gray-600 hover:bg-gray-700",
        };
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Quick Access
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about Little Flowers School
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => {
            const colors = getColorClasses(link.color);
            return (
              <Card key={index} className={`${colors.bg} border-0 hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <CardTitle className={`text-xl ${colors.text}`}>
                    {link.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    {link.description}
                  </p>
                  <Link href={link.href}>
                    <Button 
                      className={`w-full ${colors.button} text-white`}
                      size="sm"
                    >
                      {link.buttonText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">MP</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">MP Board Affiliated</h3>
              <p className="text-sm text-gray-600">
                Recognized by Madhya Pradesh Board of Secondary Education, Bhopal
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">K-10</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Education</h3>
              <p className="text-sm text-gray-600">
                Comprehensive learning from Nursery to 10th Standard
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">25+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Years of Excellence</h3>
              <p className="text-sm text-gray-600">
                Serving Morena City with quality education since 1995
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}