// Product.js
import PropTypes from 'prop-types';

export default function Product(props) {
  const { image, name, description, price,handleclick,isCart} = props;//destructuring probs object
  return (
    <>
      <div className="card h-100">
        <img style={{ height: "250px" }}  className="card-img-top" src={image} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            <p>{description}</p>
            <h4>${price}</h4> 
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          {isCart?  <div className="text-center"><a onClick={handleclick} className="btn btn-danger mt-auto">Remove From Cart</a></div>:  <div className="text-center"><a onClick={handleclick} className="btn btn-outline-dark mt-auto">Add Cart</a></div>}
        
        </div>
      </div>
    </>
  )
}

Product.propTypes = {//typechecking
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  handleclick: PropTypes.func,
  isCart: PropTypes.bool,
};
