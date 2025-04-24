import CartIcon from "../assets/cart.svg";
import { CourseContext } from "../store/courseListContext";
import { useContext } from "react";

const Cart = ({ listOfCourse }) => {
  const initialCount = 0;
  const courseList = useContext(CourseContext);

  return (
    <div>
      <div
        style={{
          backgroundColor: "blue",
          borderRadius: "50%",
          fontSize: "8px",
          height: "12px",
          width: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 8,
          right: 10,
        }}
      >
        {courseList.course.reduce((count, course) => {
          if (course.selected) {
            return ++count;
          }

          return count;
        }, initialCount)}
      </div>
      <img src={CartIcon} />
    </div>
  );
};

export default Cart;
