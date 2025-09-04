import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                LF
              </div>
              <div>
                <h3 className="text-lg font-bold">Little Flowers School</h3>
                <p className="text-sm text-gray-300">Morena City, Madhya Pradesh</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Nurturing young minds with excellence in education from Nursery to 10th Class. 
              Affiliated with MP Board Bhopal, we are committed to providing quality education 
              and holistic development of our students.
            </p>
            <div className="text-sm text-gray-300">
              <p className="mb-1"><strong>Affiliation:</strong> MP Board Bhopal</p>
              <p><strong>Classes:</strong> Nursery to 10th Standard</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="text-gray-300 hover:text-white transition-colors">Academics</Link></li>
              <li><Link href="/admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/facilities" className="text-gray-300 hover:text-white transition-colors">Facilities</Link></li>
              <li><Link href="/faculty" className="text-gray-300 hover:text-white transition-colors">Faculty</Link></li>
              <li><Link href="/student-life" className="text-gray-300 hover:text-white transition-colors">Student Life</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white">Address:</p>
                <p>Little Flowers School<br />
                Morena City, Madhya Pradesh<br />
                India - 476001</p>
              </div>
              <div>
                <p className="font-medium text-white">Phone:</p>
                <p>+91-7532-234567<br />+91-7532-234568</p>
              </div>
              <div>
                <p className="font-medium text-white">Email:</p>
                <p>info@littleflowersmorena.edu.in<br />
                admissions@littleflowersmorena.edu.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Little Flowers School, Morena City. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 flex space-x-6 text-sm">
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">MP Board Affiliated</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}