import { connect } from "react-redux";
import Header from "../components/Header/Header";

const mapStateToProps = state => ({
  cart: state?.cartItems?.cartData,
});

const mapDispatchToProps = dispatch => ({
//   addToCartHandler: data => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
