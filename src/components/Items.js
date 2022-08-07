import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import { useSelector } from "react-redux";

const Items = () => {
  const displayData = useSelector((state) => state.displayreducer.data);
  const dispatch = useDispatch();

  const send = (item) => {
    dispatch(ADD(item));
  };

  return (
    <div className="items-container">
      {displayData.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="img">
              <img src={item.imageURL} alt={item.name} />
            </div>
            <div className="info">
              <p>
                <strong>Name:</strong>
                {item.name}
              </p>
              <p>
                <strong>price:</strong> {item.price}/-
              </p>
            </div>
            <div className="add-to-cart">
              <button onClick={() => send(item)}>
                <strong>ADD TO CART</strong>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
