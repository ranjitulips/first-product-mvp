import "./CourseList.css";
import { CourseContext } from "../store/courseListContext";
import React, { Suspense, useContext } from "react";
import { useNavigate } from "react-router-dom";
const Course = React.lazy(() => import("./Course"));

const CourseList = ({ handleRemoveAddCart, handleAddCart }) => {
  const courseList = useContext(CourseContext);
  const navigate = useNavigate();

  function handleGoHome() {
    navigate("/home");
  }

  return (
    <div className="course-container">
      {courseList.course.map((course) => {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Course
              key={course.id}
              courseDetails={course}
              handleAddCart={courseList.handleAddCart}
              handleRemoveAddCart={courseList.handleRemoveAddCart}
            />
          </Suspense>
        );
      })}
    </div>
  );
};

export default CourseList;
