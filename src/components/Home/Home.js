// import React from "react";
// import './Home.css';
// import iphone13 from "../../Assets/iphone13.jpeg";
// import iconcart from "../../Assets/icon-cart.png";
// import { useNavigate } from "react-router-dom";
// import Header from "../../containers/HeaderContainer";
// import { useDispatch, useSelector } from "react-redux";

// const Home = (props) => {
//   const navigate = useNavigate();
//   const cartData = useSelector(state => {
//     return { cartItem: state.cartItem, }
//   });

//   const dispatch = useDispatch();
//   const handleClick = (data)=>{
//     const cartItems = {
//       id: 1,
//       name: "Iphone 14",
//       price : 1000,

//      };
//     dispatch(cartItems);
//   }

//   console.log(cartData);

//   // const navigateToAboutScreen = () => {
//   //   navigate("/about");
//   // };

//   return (
//     <div>
//       <div className="main-text">
//         <span>Hello, This is an e-commerce app</span>
//       </div>
//       <div className="header">
//         <span>{props.cart ? props.cart.length : 0}</span>
//         <img src={iconcart} alt="Cart" />
//       </div>
//       <Header/>
//       <div className="cart-wrapper">
//         <div className="img-wrapper item">
//           <img
//             src={iphone13}
//             style={{ width: "30%", height: "30%" }}
//             alt="iPhone 13"
//           />
//         </div>
//         <div className="text-wrapper item">
//           <span className="title"> iPhone 13 </span>
//           <span className="price"> Price: $1000.00</span>
//         </div>
//         <div className="btn-wrapper item">
//           <button onClick={handleClick}> {
//             }
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import "./Home.css";
import iphone13 from "../../Assets/iphone13.jpeg";
import product3 from "../../Assets/product3.png";
import product33 from "../../Assets/product33.png";
import iphone14 from "../../Assets/iphone14.png"; // Example of another product image
import iconcart from "../../Assets/icon-cart.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../services/Action/action"; // Import your action creator

const Home = () => {
  const [cartCounter, setCartCounter] = useState(0); // State to manage cart item count
  const cartItems = useSelector((state) => state.cartItem); // Assuming cartItem is the reducer handling your cart state
  const dispatch = useDispatch();

  const handleClick = (id, name, price) => {
    const newItem = {
      id: id,
      name: name,
      price: price,
    };
    dispatch(addToCart(newItem)); // Dispatch the action creator with the item data
    setCartCounter(cartCounter + 1); // Update cart counter
  };

  return (
    <div>
      <div className="main-text">
        <span>Hello, This is an e-commerce app</span>
      </div>
      <div className="header">
        <img src={iconcart} alt="Cart" />
        <div className="cart-counter">
          <span> {cartCounter}</span>
        </div>
      </div>
      <span className="product-title">Product 1</span>
      <div className="products">
        {/* Product 1 */}

        <div className="product">
          <img className="product-img" src={iphone13} alt="iPhone 13" />
          <div className="product-details">
            <span className="title">iPhone 13</span>
            <span className="price">$1000.00</span>
          </div>
          <div className="btn-wrapper button">
            <button onClick={() => handleClick(1, "iPhone 13", 1000)}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <span className="product-title">Product 2</span>
        <div className="product">
          <img className="product-img" src={product3} alt="iPhone 14" />
          <div className="product-details">
            <span className="title">iPhone 14</span>
            <span className="price">$1200.00</span>
          </div>
          <div className="btn-wrapper button">
            <button onClick={() => handleClick(2, "iPhone 14", 1200)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product 3 */}
      <span className="product-title">Product 3</span>
      <div className="product">
        <img className="product-img" src={product33} alt="iPhone 14" />
        <div className="product-details">
          <span className="title">iPhone 14</span>
          <span className="price">$1500.00</span>
        </div>
        <div className="btn-wrapper button">
          <button onClick={() => handleClick(2, "iPhone 14", 1200)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Home;
