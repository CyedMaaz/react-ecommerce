// import React from "react";
// import './Home.css';
// import iphone13 from "../../Assets/iphone13.jpeg";
// import iconcart from "../../Assets/icon-cart.png";
// import { useNavigate } from "react-router-dom";
// // import { fakerEN, fakerDE, fakerZH_CN } from '@faker-js/faker';

// const Home = (props) => {
//   const navigate = useNavigate();
//   console.warn("props", props);

  

//   const navigateToAboutScreen = () => {
//     navigate("/about");
//   };

//   return (
//     <div>
//       <div className="main-text">
//         <span>Home component</span>
//       </div>
//       <div className="header">
//         <span>{props.cart.length}</span>
//         <img src={iconcart} alt="Cart" />
//       </div>
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
//           <button
//             onClick={() =>
//               props.addToCartHandler({ price: 1000, name: "iPhone 13" })
//             }
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




import React from "react";
import './Home.css';
import iphone13 from "../../Assets/iphone13.jpeg";
import iconcart from "../../Assets/icon-cart.png";
import {addToCartHandler} from '../../containers/HomeContainer'
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  console.warn("props", props);

  const navigateToAboutScreen = () => {
    navigate("/about");
  };

  return (
    <div>
      <div className="main-text">
        <span>Hello, This is an e-commerce app</span>
      </div>
      <div className="header">
        <span>{props.cart ? props.cart.length : 0}</span>
        <img src={iconcart} alt="Cart" />
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src={iphone13}
            style={{ width: "30%", height: "30%" }}
            alt="iPhone 13"
          />
        </div>
        <div className="text-wrapper item">
          <span className="title"> iPhone 13 </span>
          <span className="price"> Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={()=>props.addToCartHandler({ price: 1000, name: "iPhone 13" })
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
