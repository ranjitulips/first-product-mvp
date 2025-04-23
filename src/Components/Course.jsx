import "./Course.css";

const Course = ({ courseDetails, handleAddCart, handleRemoveAddCart }) => {
  const {
    id,
    title,
    brand,
    description,
    rating,
    images,
    reviews,
    price,
    selected,
  } = courseDetails;

  return (
    <section className="course-card">
      <section className="image-container">
        <img className="course-image" src={images[0]} width={300} />
      </section>

      <section className="contents-container">
        <h2 className="course-name">{title}</h2>
        <p className="author-name">{brand}</p>
        <p className="content-description">{description}</p>
        <div className="rating-container">
          <span className="rating">{rating}</span>
          <span className="no-of-rating">{reviews.length}</span>
        </div>

        <div className="price-container">
          <span className="price">{price}</span>
          {/* <span className="striked-price">{discountPrice}</span> */}
        </div>
        {!selected ? (
          <button onClick={() => handleAddCart(courseDetails)} className="cta">
            Add Card
          </button>
        ) : (
          <button
            onClick={() => handleRemoveAddCart(courseDetails)}
            className="cta remove"
          >
            Remove
          </button>
        )}
      </section>
    </section>
  );
};

export default Course;
