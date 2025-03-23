import React, { useState } from "react";
import { useCoursesContext } from "../contexts/CoursesProvider";
import { Link, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { MdQuiz } from "react-icons/md";
import { Home } from "lucide-react";
import ReactPlayer from "react-player";

const CourseLearn = () => {
  const { id } = useParams<{ id: string }>();
  const { courses } = useCoursesContext();
  const course = courses.find((c) => c.id === id);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {course?.gamma && course?.slides ? (
        <>
          <div className="hidden lg:block">
            <iframe
              src={course.gamma}
              style={{ width: "100%", height: "580px" }}
              allow="fullscreen"
              title="Unlocking the Universe: A Journey Through Advanced Mathematics"
            />
          </div>
          <div className="course-learn-container lg:hidden">
            <Carousel
              showArrows={true}
              showStatus={true}
              showIndicators={true}
              infiniteLoop={true}
              selectedItem={currentSlide}
              onChange={handleSlideChange}
              className="presentation-carousel"
            >
              {course.slides?.map((slide, index) => (
                <div key={index} className="slide">
                  <img src={slide} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </>
      ) : null}

      {(course?.videos?.length as number) > 0 ? (
        <div className="lg:px-[10rem]">
          {course?.videos?.map((video, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold py-10 text-center">
                {video.title}
              </h2>
              <ReactPlayer
                url={video.url}
                controls
                width="100%"
                className="h-[400px] lg:h-[550px]"
              />
            </div>
          ))}
        </div>
      ) : null}

      {course?.imagesData ? (
        <div className="lg:px-[10rem] images">
          <h2 className="text-2xl font-semibold py-10 text-center">
            {course.imagesData.title}
          </h2>
          <Carousel
            showArrows={true}
            showStatus={true}
            showIndicators={true}
            infiniteLoop={true}
            selectedItem={currentSlide}
            onChange={handleSlideChange}
            className="presentation-carousel"
            width={"100%"}
          >
            {course.imagesData.images?.map((slide, index) => (
              <div key={index} className="slide">
                <img src={`/images/${slide}`} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      ) : null}

      {course?.edApp ? (
        <>
          <div className="lg:px-[10rem] flex flex-col items-center">
            <h2 className="text-2xl font-semibold pt-10 text-center">
              edApp Course
            </h2>
            <p className="text-sm py-5 text-gray-500 text-center">
              Scan the Qr code to access the course
            </p>
            <img src={course.edApp} alt="ed Course" className="mt-5" />
          </div>
        </>
      ) : null}

      {!course?.gamma &&
      !course?.videos?.length &&
      !course?.slides?.length &&
      !course?.edApp ? (
        <div className="mx-auto text-center text-4xl font-bold flex-1 flex items-center justify-center min-h-[calc(95vh-120px)]">
          Coming Soon...
        </div>
      ) : (
        <div className="flex items-center justify-between px-5 py-6">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
          >
            Home <Home className="ml-2" />
          </Link>
          <Link
            to={`/courses/${id}/learn/quiz`}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
          >
            Take Quiz <MdQuiz className="ml-2" />
          </Link>
        </div>
      )}
    </>
  );
};

export default CourseLearn;
