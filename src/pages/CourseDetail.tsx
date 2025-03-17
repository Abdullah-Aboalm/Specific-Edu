import { Link, useParams } from "react-router-dom";
import { BookOpen, Clock, User } from "lucide-react";
import { useCoursesContext } from "../contexts/CoursesProvider";

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const { courses } = useCoursesContext();
  const course = courses.find((c) => c.id === id);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="relative">
            <img
              src={course?.image}
              alt={course?.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="mt-10 lg:mt-0">
            <h1 className="text-3xl font-extrabold text-gray-900">
              {course?.title}
            </h1>

            <div className="mt-6">
              <h2 className="text-xl font-bold text-gray-900">
                Course Details
              </h2>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-indigo-600" />
                  <span className="ml-2 text-gray-600">
                    Duration: {course?.duration}
                  </span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 text-indigo-600" />
                  <span className="ml-2 text-gray-600">
                    Instructor: {course?.instructor}
                  </span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-indigo-600" />
                  <span className="ml-2 text-gray-600">
                    Comprehensive curriculum
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">Description</h2>
              <p className="mt-4 text-gray-600">{course?.description}</p>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <span className="text-2xl font-bold text-indigo-600">
                ${course?.price}
              </span>
              <Link
                to={`/courses/${id}/learn`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
