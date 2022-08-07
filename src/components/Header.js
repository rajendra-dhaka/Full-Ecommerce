import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SEARCH } from "../redux/actions/action";

const Header = () => {
  //Cart DATA state
  const getData = useSelector((state) => state.cartreducer.cart);

  const dispatch = useDispatch();

  const SearchItems = (text) => {
    dispatch(SEARCH(text));
  };

  return (
    <div className="navbar-container">
      <h1>Shopperzz.</h1>
      <form>
        <div className="search-bar">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for something new!!!"
            onChange={(e) => SearchItems(e.target.value)}
          />
        </div>
      </form>
      <div className="cart-icon">
        <NavLink to="/cart">
          <Badge badgeContent={getData.length} color="primary" fontSize="20">
            <ShoppingCartIcon className="cart" />
          </Badge>
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
