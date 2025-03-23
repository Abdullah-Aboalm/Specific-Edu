export interface Course {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  price: number;
  duration: string;
  instructor: string;
  image: string;
  questions: Question[];
  gamma?: string;
  videos?: { title?: string; url: string }[];
  imagesData?: { title: string; images: string[] };
  slides?: string[];
  edApp?: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
  progress: number;
  joinDate: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}
