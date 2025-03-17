import React, { createContext, useContext, useState } from "react";
import { Course } from "../types";
import { coursesData } from "../data";

export type Courses = {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
};

export const CoursesContext = createContext<Courses | null>(null);

const CoursesProvider = ({ children }: { children: React.ReactNode }) => {
  const [courses, setCourses] = useState<Course[]>(coursesData);

  return (
    <CoursesContext.Provider value={{ courses, setCourses }}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCoursesContext = () => {
  const context = useContext(CoursesContext);
  if (!context)
    throw new Error("useAppContext must be used within an AppProvider");
  return context;
};

export default CoursesProvider;
