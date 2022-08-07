// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FILT, PRICE } from "../redux/actions/action";
import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState([]);
  //Price range slider
  const [value, setValue] = React.useState([200, 500]);

  useEffect(() => {
    dispatch(FILT(filter));
  }, [filter]);

  const applyFilter = ({ checked, value }) => {
    console.log(checked, value);
    let draftFilter = [...filter];
    if (checked) {
      !draftFilter.includes(value) && draftFilter.push(value);
    } else {
      draftFilter = draftFilter.filter((el) => el !== value);
    }
    setFilter(draftFilter);
  };

  const priceRange = (event, newValue) => {
    setValue(newValue);
    dispatch(PRICE(newValue));
  };

  return (
    <div className="filter-container">
      <h1>Filter Your Choice</h1>
      <div className="gender">
        <h3>Gender</h3>
        <div className="checkbox">
          <div>
            <input
              type="checkbox"
              name="gender"
              id="men"
              value="Men"
              onInput={(e) => applyFilter(e.target)}
            />
            <label for="men">Men</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="gender"
              id="women"
              value="Women"
              onChange={(e) => applyFilter(e.target)}
            />
            <label for="women">Women</label>
          </div>
        </div>
      </div>
      <div className="color">
        <h3>Colours</h3>
        <div className="checkbox">
          <div>
            <input
              type="checkbox"
              name="color"
              id="black"
              value="Black"
              onChange={(e) => applyFilter(e.target)}
            />
            <label for="black">Black</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="color"
              id="blue"
              value="Blue"
              onChange={(e) => applyFilter(e.target)}
            />
            <label for="blue">Blue</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="color"
              id="pink"
              value="Pink"
              onChange={(e) => applyFilter(e.target)}
            />
            <label for="pink">Pink</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="color"
              id="green"
              value="Green"
              onChange={(e) => applyFilter(e.target)}
            />
            <label for="green">Green</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="color"
              id="red"
              value="Red"
              onChange={(e) => applyFilter(e.target)}
            />
            <label for="red">Red</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="color"
              id="grey"
              value="Grey"
              onChange={(e) => applyFilter(e.target)}
            />
            <label for="grey">Grey</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="color"
              id="purple"
              value="Purple"
              onChange={(e) => applyFilter(e.target)}
            />
            <label for="purple">Purple</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="color"
              id="white"
              value="White"
              onChange={(e) => applyFilter(e.target)}
            />
            <label for="white">White</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="color"
              id="yellow"
              value="Yellow"
              onChange={(e) => applyFilter(e.target)}
            />
            <label for="yellow">Yellow</label>
          </div>
        </div>
      </div>
      <div className="price-range">
        <h3>Price Range</h3>
        <div>
          <Slider
            value={value}
            onChange={priceRange}
            valueLabelDisplay="auto"
            min={200}
            max={500}
          />
          <p>
            Price: ₹ {value[0]} - ₹ {value[1]}
          </p>
        </div>
      </div>
      <div className="item-type">
        <h3>Type</h3>
        <div className="checkbox">
          <div>
            <input
              type="checkbox"
              name="type"
              id="hoodie"
              value="Hoodie"
              onChange={(e) => applyFilter(e.target)}
            />
            <label for="hoodie">Hoodie</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="type"
              id="basic"
              value="Basic"
              onChange={(e) => applyFilter(e.target)}
            />
            <label for="basic">Basic</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="type"
              id="polo"
              value="Polo"
              onChange={(e) => applyFilter(e.target)}
            />
            <label for="polo">Polo</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
