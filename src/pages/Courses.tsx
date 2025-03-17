import { Link } from "react-router-dom";
import { useCoursesContext } from "../contexts/CoursesProvider";

export default function Courses() {
  const { courses } = useCoursesContext();
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Courses
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose from our selection of expert-led courses
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white overflow-hidden shadow-lg rounded-lg"
            >
              <div className="relative h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  {course.icon}
                  <h3 className="ml-2 text-xl font-semibold text-gray-900">
                    {course.title}
                  </h3>
                </div>
                <p className="mt-3 text-gray-500">{course.description}</p>
                <div className="mt-4">
                  <div className="text-sm text-gray-500">
                    Duration: {course.duration}
                  </div>
                  <div className="text-sm text-gray-500">
                    Instructor: {course.instructor}
                  </div>
                  <div className="mt-2 text-xl font-bold text-indigo-600">
                    ${course.price}
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    to={`/courses/${course.id}`}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    View Course Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
