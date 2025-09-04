import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AcademicsPage() {
  const classes = [
    {
      name: "Nursery",
      ageGroup: "3-4 years",
      description: "Foundation learning through play-based activities, basic motor skills development, and social interaction.",
      subjects: ["Pre-Math", "Pre-Reading", "Art & Craft", "Music", "Physical Activities"],
    },
    {
      name: "Lower KG",
      ageGroup: "4-5 years",
      description: "Introduction to formal learning with focus on language development and number concepts.",
      subjects: ["English", "Hindi", "Mathematics", "General Knowledge", "Art", "Physical Education"],
    },
    {
      name: "Upper KG",
      ageGroup: "5-6 years",
      description: "Preparation for primary education with enhanced cognitive and social skills development.",
      subjects: ["English", "Hindi", "Mathematics", "EVS", "Computer Basics", "Art & Craft"],
    },
    {
      name: "Class 1st-2nd",
      ageGroup: "6-8 years",
      description: "Primary foundation with emphasis on basic literacy, numeracy, and life skills.",
      subjects: ["English", "Hindi", "Mathematics", "EVS", "Computer", "Art", "Physical Education"],
    },
    {
      name: "Class 3rd-5th",
      ageGroup: "8-11 years",
      description: "Upper primary education focusing on subject specialization and critical thinking.",
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Computer", "Art"],
    },
    {
      name: "Class 6th-8th",
      ageGroup: "11-14 years",
      description: "Middle school curriculum preparing students for secondary education with comprehensive subjects.",
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer", "Sanskrit/Urdu"],
    },
    {
      name: "Class 9th-10th",
      ageGroup: "14-16 years",
      description: "Secondary education following MP Board curriculum preparing for board examinations.",
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer/Sanskrit"],
    },
  ];

  const academicFeatures = [
    {
      title: "MP Board Curriculum",
      description: "Following the official curriculum of Madhya Pradesh Board of Secondary Education, Bhopal.",
      icon: "📚",
    },
    {
      title: "Modern Teaching Methods",
      description: "Interactive teaching using audio-visual aids, smart boards, and hands-on learning approaches.",
      icon: "💻",
    },
    {
      title: "Regular Assessments",
      description: "Continuous evaluation through tests, assignments, and project-based assessments.",
      icon: "📝",
    },
    {
      title: "Remedial Classes",
      description: "Extra support for students who need additional help in specific subjects.",
      icon: "🎯",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Academic Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive education from Nursery to 10th Class following 
              MP Board curriculum with modern teaching methodologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-base px-4 py-2">
                MP Board Affiliated
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">
                Nursery to 10th Class
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">
                25+ Years Experience
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Class Structure */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Class Structure
            </h2>
            <p className="text-lg text-gray-600">
              Progressive learning journey from early childhood to secondary education
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {classes.map((classInfo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-blue-600">{classInfo.name}</CardTitle>
                    <Badge variant="outline">{classInfo.ageGroup}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{classInfo.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {classInfo.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Academic Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our commitment to providing quality education through innovative approaches
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academicFeatures.map((feature, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-md">
                <CardHeader>
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MP Board Information */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                MP Board Affiliation
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Little Flowers School is proudly affiliated with the Madhya Pradesh 
                  Board of Secondary Education (MPBSE), Bhopal. This affiliation ensures 
                  that our curriculum, examination system, and educational standards meet 
                  the highest requirements set by the state education board.
                </p>
                <p className="mb-4">
                  Our students appear for the official MP Board examinations in Class 10th, 
                  which are recognized nationwide for higher secondary admissions. The board 
                  affiliation also ensures that our teaching methodologies and assessment 
                  patterns align with state educational policies.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Official MP Board Curriculum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">State Board Examinations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Recognized Certificates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Quality Assurance</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/600x400?text=Students+in+classroom+studying+MP+Board+curriculum+with+teacher+explaining+on+blackboard+with+charts" 
                alt="Students in classroom studying MP Board curriculum with teacher explaining lessons on blackboard with educational charts"
                className="rounded-2xl shadow-xl w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = '#f3f4f6';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                  target.textContent = 'MP Board Education';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Academic Calendar 2024-25
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Important dates and events for the current academic session
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">First Term</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Session Start:</strong> April 1, 2024</p>
                <p><strong>First Term Exam:</strong> August 2024</p>
                <p><strong>Summer Break:</strong> May 15 - June 15</p>
                <p><strong>Sports Day:</strong> September 2024</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Second Term</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Second Term:</strong> October 2024</p>
                <p><strong>Half Yearly Exam:</strong> December 2024</p>
                <p><strong>Winter Break:</strong> Dec 25 - Jan 5</p>
                <p><strong>Science Exhibition:</strong> February 2025</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-lg text-purple-600">Final Term</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Annual Exam:</strong> March 2025</p>
                <p><strong>Result Declaration:</strong> April 2025</p>
                <p><strong>Annual Day:</strong> March 2025</p>
                <p><strong>Session End:</strong> March 31, 2025</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}