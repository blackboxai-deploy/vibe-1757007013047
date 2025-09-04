export default function StatsSection() {
  const stats = [
    {
      label: "Years of Excellence",
      value: "25+",
      description: "Serving Morena City since 1995",
    },
    {
      label: "Happy Students",
      value: "800+",
      description: "From Nursery to 10th Class",
    },
    {
      label: "Qualified Teachers",
      value: "45+",
      description: "Experienced and dedicated faculty",
    },
    {
      label: "Board Results",
      value: "95%",
      description: "MP Board success rate",
    },
    {
      label: "Classes Offered",
      value: "12",
      description: "Nursery to 10th Standard",
    },
    {
      label: "Activities",
      value: "20+",
      description: "Sports and cultural programs",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our School at a Glance
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Proud achievements that reflect our commitment to educational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievement Highlights */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            MP Board Affiliated Excellence
          </h3>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            Recognized by Madhya Pradesh Board of Secondary Education, Bhopal. 
            Our students consistently achieve outstanding results in board examinations 
            and excel in various competitive exams and extracurricular activities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-200">MP Board</div>
              <div className="text-sm text-blue-100">Affiliated School</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-200">ISO</div>
              <div className="text-sm text-blue-100">Quality Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-200">Awards</div>
              <div className="text-sm text-blue-100">District Recognition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}