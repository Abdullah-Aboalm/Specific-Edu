import { GiMaterialsScience } from "react-icons/gi";
import { MdOutlinePermMedia } from "react-icons/md";
import { PiSigmaThin } from "react-icons/pi";
import { Course, Student } from "./types";

export const coursesData: Course[] = [
  {
    id: "1",
    title: "Advanced Mathematics",
    icon: <PiSigmaThin className="h-6 w-6 text-indigo-600" />,
    description:
      "Master complex mathematical concepts with our comprehensive course.",
    price: 299,
    duration: "12 weeks",
    instructor: "Dr. Ahmed Hassan",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    gamma: "https://unlocking-the-universe-a-d04p1ik.gamma.site/",
    slides: [
      "/images/1_Unlocking-the-Universe-A-Journey-Through-Advanced-Mathematics.png",
      "/images/2_Real-Analysis-The-Foundation-of-Calculus.png",
      "/images/3_Abstract-Algebra-Structures-and-Relationships.png",
      "/images/4_Topology-The-Geometry-of-Deformation.png",
      "/images/5_Number-Theory-The-Queens-Crown-Jewels.png",
      "/images/6_Physics-Math-in-Motion.png",
      "/images/7_Computer-Science-From-Theory-to-Code.png",
      "/images/8_Finance-Modeling-the-Markets.png",
      "/images/9_Unsolved-Mysteries.png",
      "/images/10_The-Journey-Continues.png"
    ],
    questions: [
      {
        id: 1,
        question: "What is the derivative of x²?",
        options: ["x", "2x", "2x²", "x½"],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "What is the integral of 2x?",
        options: ["x²", "x² + C", "2x² + C", "x"],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What is the solution to the equation x² + 4x + 4 = 0?",
        options: ["x = -2", "x = 2", "x = ±2", "x = -2 (double root)"],
        correctAnswer: 3
      }
    ]
  },
  {
    id: "2",
    title: "Physics Fundamentals",
    icon: <GiMaterialsScience className="h-6 w-6 text-indigo-600" />,
    description:
      "Understanding the basic principles of physics through practical examples.",
    price: 249,
    duration: "10 weeks",
    instructor: "Dr. Sarah Mohamed",
    image:
      "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    gamma: "https://physics-fundamentals-a-j-jvj62vt.gamma.site/",
    slides: [
      "/images/1_Physics-Fundamentals-A-Journey-Through-the-Universe.png",
      "/images/2_Mechanics-The-Science-of-Motion.png",
      "/images/3_Thermodynamics-Energy-Heat-and-Entropy.png",
      "/images/4_Electromagnetism-Charges-Fields-and-Forces.png",
      "/images/5_Optics-The-Behavior-of-Light.png",
      "/images/6_Quantum-Mechanics-The-World-of-the-Very-Small.png",
      "/images/7_Special-Relativity-Space-Time-and-Motion.png",
      "/images/8_General-Relativity-Gravity-as-Curved-Spacetime.png",
      "/images/9_The-Standard-Model-Fundamental-Particles-and-Forces.png",
      "/images/10_Conclusion-The-Beauty-and-Wonder-of-Physics.png"
    ],
    questions: [
      {
        id: 1,
        question: "What is Newton's First Law of Motion?",
        options: [
          "An object in motion stays in motion",
          "Force equals mass times acceleration",
          "Every action has an equal and opposite reaction",
          "An object at rest stays at rest unless acted upon by an external force"
        ],
        correctAnswer: 3
      },
      {
        id: 2,
        question: "What is the unit of force in the SI system?",
        options: ["Watt", "Newton", "Joule", "Pascal"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the formula for kinetic energy?",
        options: ["E = mc²", "KE = ½mv²", "F = ma", "P = mv"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "3",
    title: "Create Media With AI",
    icon: <MdOutlinePermMedia className="h-6 w-6 text-indigo-600" />,
    description:
      "Learn how to leverage AI tools to create stunning videos, images, and animations.",
    price: 279,
    duration: "8 weeks",
    instructor: "Prof. Fatima Ehab",
    image: "/images/white rabbits.png",
    videos: [
      {
        title: "How to Create AI Videos Tutorial",
        url: "/videos/الكابوس الصيني الجديد - بيصنع فيلم مدته 10 دقائق شامل التعليق الصوتي وتحريك المقاطع والأنيمشن مجانا.mp4"
      },
      {
        title: "AI Generated Video",
        url: "/videos/mega_export.mp4"
      }
    ],
    imagesData: {
      title: "AI Generated Images",
      images: [
        "dog-chasing-butterflies.png",
        "e7e29f9cb0df4e10909af28f7f9a8661_2.png",
        "white rabbits.png",
        "5e8100f92bc540c8b53cc997c91a2bb1_0.png",
        "76d7e7e36b9243108ec957e1fee2f9ae_3.png",
        "1786d6aa097849e798338d547cf92f2d_0.png",
        "526abf42d2ee44ce936aa8e19f51445d_1.png",
        "77.png",
        "78.png",
        "93.png",
        "10.png"
      ]
    },
    questions: [
      {
        id: 1,
        question: "Which AI tool is commonly used for generating images?",
        options: ["DALL-E", "ChatGPT", "Tensorflow", "PyTorch"],
        correctAnswer: 0
      },
      {
        id: 2,
        question:
          "What is the primary advantage of using AI for video creation?",
        options: [
          "Lower cost",
          "Faster production time",
          "More creative control",
          "All of the above"
        ],
        correctAnswer: 3
      },
      {
        id: 3,
        question: "Which format is most commonly used for AI-generated videos?",
        options: ["MP4", "AVI", "MOV", "WMV"],
        correctAnswer: 0
      }
    ]
  }
];

export const tiers = [
  {
    name: "Basic",
    price: 0,
    description: "Perfect for getting started with our courses",
    features: [
      "Access to basic courses",
      "Quiz participation",
      "Email support",
      "Progress tracking"
    ]
  },
  {
    name: "Pro",
    price: 79,
    description: "Best for serious students who want to excel",
    features: [
      "Access to all courses",
      "Priority quiz grading",
      "24/7 support",
      "Advanced progress analytics",
      "Downloadable resources",
      "Certificate of completion"
    ]
  },
  {
    name: "Enterprise",
    price: 149,
    description: "For institutions and large groups",
    features: [
      "Custom course creation",
      "Dedicated support team",
      "Advanced reporting",
      "API access",
      "Bulk enrollment",
      "Custom branding",
      "Training sessions"
    ]
  }
];

export const students: Student[] = [
  {
    id: "1",
    name: "Ahmed Mohamed",
    email: "ahmed.mohamed@example.com",
    enrolledCourses: ["Advanced Mathematics", "Physics Fundamentals"],
    progress: 75,
    joinDate: "2024-01-15"
  },
  {
    id: "2",
    name: "Fatima Ali",
    email: "fatima.ali@example.com",
    enrolledCourses: ["Create Media With AI"],
    progress: 60,
    joinDate: "2024-02-01"
  },
  {
    id: "3",
    name: "Omar Hassan",
    email: "omar.hassan@example.com",
    enrolledCourses: ["Advanced Mathematics", "Create Media With AI"],
    progress: 90,
    joinDate: "2024-01-10"
  },
  {
    id: "4",
    name: "Sara Ahmed",
    email: "sara.ahmed@example.com",
    enrolledCourses: ["Physics Fundamentals", "Create Media With AI"],
    progress: 85,
    joinDate: "2024-02-15"
  },
  {
    id: "5",
    name: "Mahmoud Ibrahim",
    email: "mahmoud.ibrahim@example.com",
    enrolledCourses: ["Advanced Mathematics"],
    progress: 70,
    joinDate: "2024-01-20"
  },
  {
    id: "6",
    name: "Nour El-Din",
    email: "nour.eldin@example.com",
    enrolledCourses: ["Physics Fundamentals", "Advanced Mathematics"],
    progress: 95,
    joinDate: "2024-01-05"
  },
  {
    id: "7",
    name: "Layla Kamal",
    email: "layla.kamal@example.com",
    enrolledCourses: ["Create Media With AI", "Physics Fundamentals"],
    progress: 80,
    joinDate: "2024-02-10"
  },
  {
    id: "8",
    name: "Youssef Adel",
    email: "youssef.adel@example.com",
    enrolledCourses: [
      "Advanced Mathematics",
      "Create Media With AI",
      "Physics Fundamentals"
    ],
    progress: 88,
    joinDate: "2024-01-25"
  },
  {
    id: "9",
    name: "Amira Khalil",
    email: "amira.khalil@example.com",
    enrolledCourses: ["Advanced Mathematics", "Physics Fundamentals"],
    progress: 82,
    joinDate: "2024-02-20"
  },
  {
    id: "10",
    name: "Hassan Mostafa",
    email: "hassan.mostafa@example.com",
    enrolledCourses: ["Create Media With AI", "Physics Fundamentals"],
    progress: 78,
    joinDate: "2024-02-22"
  },
  {
    id: "11",
    name: "Rana Samir",
    email: "rana.samir@example.com",
    enrolledCourses: ["Advanced Mathematics", "Create Media With AI"],
    progress: 93,
    joinDate: "2024-01-30"
  },
  {
    id: "12",
    name: "Karim Essam",
    email: "karim.essam@example.com",
    enrolledCourses: [
      "Advanced Mathematics",
      "Create Media With AI",
      "Physics Fundamentals"
    ],
    progress: 87,
    joinDate: "2024-02-05"
  }
];
