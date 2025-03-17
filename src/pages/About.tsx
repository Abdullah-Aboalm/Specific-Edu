import { BookOpen, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">About Us</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Story
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Who We Are</h3>
              <p className="mt-4 text-lg text-gray-500">
                SpecificEdu is a leading educational platform based in Menoufia, Egypt, dedicated to providing high-quality education to students. Our mission is to make learning accessible, engaging, and effective through innovative teaching methods and technology.
              </p>
            </div>
            <div>
              <img
                className="rounded-lg shadow-lg object-cover"
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Our campus"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Target className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-2 text-gray-500">
                To empower students with knowledge and skills through innovative education methods.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <BookOpen className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Our Vision</h3>
              <p className="mt-2 text-gray-500">
                To be the leading educational platform in Egypt, known for excellence and innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Our Values</h3>
              <p className="mt-2 text-gray-500">
                Excellence, innovation, accessibility, and student success drive everything we do.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-indigo-50 rounded-lg px-6 py-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">Join Our Community</h3>
              <p className="mt-4 text-lg text-gray-500">
                Be part of our growing community of learners and educators. Together, we can shape the future of education in Egypt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}