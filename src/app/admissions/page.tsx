import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AdmissionsPage() {
  const admissionProcess = [
    {
      step: "1",
      title: "Inquiry & Visit",
      description: "Visit the school or contact our admission office to get detailed information about the admission process.",
    },
    {
      step: "2",
      title: "Application Form",
      description: "Fill out the admission application form with all required details and attach necessary documents.",
    },
    {
      step: "3",
      title: "Document Verification",
      description: "Submit all required documents for verification by our admission committee.",
    },
    {
      step: "4",
      title: "Interaction/Assessment",
      description: "Child interaction for age-appropriate assessment (for classes above Nursery).",
    },
    {
      step: "5",
      title: "Admission Confirmation",
      description: "Upon selection, complete the admission formalities and fee payment to confirm the seat.",
    },
  ];

  const ageRequirements = [
    { class: "Nursery", age: "3 years completed by March 31st", cutoff: "Born before March 31, 2021" },
    { class: "Lower KG", age: "4 years completed by March 31st", cutoff: "Born before March 31, 2020" },
    { class: "Upper KG", age: "5 years completed by March 31st", cutoff: "Born before March 31, 2019" },
    { class: "Class 1st", age: "6 years completed by March 31st", cutoff: "Born before March 31, 2018" },
    { class: "Class 2nd-5th", age: "As per previous class completion", cutoff: "Transfer Certificate required" },
    { class: "Class 6th-10th", age: "As per MP Board guidelines", cutoff: "Previous class marks sheet required" },
  ];

  const requiredDocuments = [
    "Birth Certificate (Original + 2 copies)",
    "Previous school Transfer Certificate (for admissions above Nursery)",
    "Previous class Mark Sheet/Report Card",
    "Aadhar Card of child and parents (copies)",
    "Recent passport-size photographs (4 copies)",
    "Medical Certificate from registered doctor",
    "Caste Certificate (if applicable)",
    "Income Certificate (for fee concession, if applicable)",
  ];

  const feeStructure = [
    { class: "Nursery - UKG", admission: "₹5,000", tuition: "₹2,000/month", annual: "₹3,000", total: "₹32,000/year" },
    { class: "Class 1st - 5th", admission: "₹6,000", tuition: "₹2,500/month", annual: "₹4,000", total: "₹40,000/year" },
    { class: "Class 6th - 8th", admission: "₹7,000", tuition: "₹3,000/month", annual: "₹5,000", total: "₹48,000/year" },
    { class: "Class 9th - 10th", admission: "₹8,000", tuition: "₹3,500/month", annual: "₹6,000", total: "₹56,000/year" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Admissions 2024-25
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join the Little Flowers School family! Admissions are now open for 
              all classes from Nursery to 10th Standard.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-green-600 text-white text-base px-4 py-2">
                Admissions Open
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">
                Limited Seats Available
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Admission Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple and transparent admission process for new students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {admissionProcess.map((process, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {process.step}
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </CardContent>
                {index < admissionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-blue-300"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Age Requirements
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Age criteria for admission to different classes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ageRequirements.map((requirement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{requirement.class}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-semibold mb-2">{requirement.age}</p>
                  <p className="text-gray-600 text-sm">{requirement.cutoff}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Required Documents
              </h2>
              <p className="text-gray-600 mb-8">
                Please ensure all documents are ready before starting the admission process. 
                Original documents will be verified and returned immediately.
              </p>
              <div className="space-y-3">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/600x400?text=Parents+and+child+at+school+admission+counter+with+documents+and+application+forms+in+bright+office" 
                alt="Parents and child at school admission counter with documents and application forms in bright school office environment"
                className="rounded-2xl shadow-xl w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = '#f3f4f6';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                  target.textContent = 'Admission Process';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Fee Structure 2024-25
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Transparent and affordable fee structure for quality education
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Class</th>
                  <th className="px-6 py-4 text-right">Admission Fee</th>
                  <th className="px-6 py-4 text-right">Monthly Tuition</th>
                  <th className="px-6 py-4 text-right">Annual Charges</th>
                  <th className="px-6 py-4 text-right">Total (Annual)</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{fee.class}</td>
                    <td className="px-6 py-4 text-right text-gray-700">{fee.admission}</td>
                    <td className="px-6 py-4 text-right text-gray-700">{fee.tuition}</td>
                    <td className="px-6 py-4 text-right text-gray-700">{fee.annual}</td>
                    <td className="px-6 py-4 text-right font-semibold text-blue-600">{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>* Fees are subject to annual revision. Additional charges may apply for books, uniforms, and transportation.</p>
            <p>* Fee concessions available for economically weaker sections as per school policy.</p>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Join Little Flowers School?
              </h2>
              <p className="text-lg text-gray-600">
                Contact our admission office for more information or to schedule a school visit
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+91-7532-234567<br/>+91-7532-234568</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">admissions@littleflowersmorena.edu.in</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏫</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">Mon-Sat: 9:00 AM - 4:00 PM<br/>Little Flowers School, Morena City</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="px-8">
                Schedule School Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}