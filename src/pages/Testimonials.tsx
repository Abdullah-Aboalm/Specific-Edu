import { Star } from 'lucide-react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mohamed Ahmed',
    role: 'Medical Student',
    content: 'The Advanced Mathematics course helped me understand complex medical calculations. The teaching methodology is excellent and the instructors are very supportive. I highly recommend this platform to all medical students!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '2',
    name: 'Nour Hassan',
    role: 'Engineering Student',
    content: 'Physics Fundamentals gave me a strong foundation for my engineering studies. The practical examples and interactive quizzes really helped me grasp difficult concepts. The course structure is well-organized and easy to follow.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '3',
    name: 'Ali Mahmoud',
    role: 'Science Student',
    content: 'The Chemistry Essentials course is fantastic! The virtual lab simulations and detailed explanations made complex reactions easy to understand. The instructor was always available to clarify doubts. This course exceeded my expectations.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '4',
    name: 'Fatima Ibrahim',
    role: 'Mathematics Student',
    content: 'As someone who struggled with mathematics, the step-by-step approach and detailed explanations in the Advanced Mathematics course were exactly what I needed. Now I feel much more confident in my mathematical abilities.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Hear from our students about their learning experience with SpecificEdu
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <div className="text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-colors duration-300">
            <span className="text-lg font-medium">Join Our Community Today</span>
          </div>
        </div>
      </div>
    </div>
  );
}