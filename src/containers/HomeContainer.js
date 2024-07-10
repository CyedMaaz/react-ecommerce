import { connect } from "react-redux";
import { addToCart } from "../services/Action/action";
import Home from "../components/Home/Home";

const mapStateToProps = state => ({
  cart: state.cartItems.cartData,
});

const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
