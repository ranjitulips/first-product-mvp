import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { CourseContext } from "./store/courseListContext";

function App() {
  const [listOfCourse, setListOfCourse] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("data.products", data.products);
        setListOfCourse(data.products);
      });
  }, []);

  const handleAddCart = (courseDetails) => {
    console.log("handleAddcart", courseDetails);
    const newCourseDetials = { ...courseDetails, selected: true };

    const position = listOfCourse.findIndex(
      (course) => course.id === newCourseDetials.id
    );
    const newListOfCourse = [...listOfCourse];
    newListOfCourse[position] = newCourseDetials;

    console.log("newListOfCourse", newListOfCourse);
    setListOfCourse(newListOfCourse);
  };

  const handleRemoveAddCart = (courseDetails) => {
    console.log("handleAddcart", courseDetails);
    const newCourseDetials = { ...courseDetails, selected: false };

    const position = listOfCourse.findIndex(
      (course) => course.id === newCourseDetials.id
    );
    const newListOfCourse = [...listOfCourse];
    newListOfCourse[position] = newCourseDetials;

    console.log("newListOfCourse", newListOfCourse);
    setListOfCourse(newListOfCourse);
  };

  return (
    <CourseContext.Provider
      value={{ course: listOfCourse, handleAddCart, handleRemoveAddCart }}
    >
      <div>
        <Header name="New Course List App" />
        <Outlet />
      </div>
    </CourseContext.Provider>
  );
}

export default App;
