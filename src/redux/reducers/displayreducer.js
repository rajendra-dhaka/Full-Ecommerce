import { ItemData } from "../../Data";

const DATA_STATE = {
  data: [...ItemData],
};
//state.data means array of item-objects
export const displayreducer = (state = DATA_STATE, action) => {
  switch (action.type) {
    //SEARCH-BAR IMPLEMENTATION
    case "SEARCH_DATA":
      const searchedData = action.payload.toLowerCase();

      if (searchedData === "") {
        return {
          ...state,
          data: [...ItemData],
        };
      } else {
        let showdata = ItemData.filter(
          (ele) =>
            ele.name.toLowerCase().match(searchedData) ||
            ele.type.toLowerCase().match(searchedData)
        );
        return {
          ...state,
          data: [...showdata],
        };
      }

    //CHECKBOX FILTER IMPLEMENTATION
    case "FILTER_CHECK":
      const { payload } = action;
      let filterData = [];
      if (payload.length > 0) {
        filterData = ItemData.filter(
          (el) =>
            payload.includes(el.gender) ||
            payload.includes(el.color) ||
            payload.includes(el.type)
        );
      } else {
        filterData = [...ItemData];
      }
      return {
        ...state,
        data: [...filterData],
      };

    //PRICE-RANGE FILTER IMPLEMENTATION
    case "PRICE_RANGE":
      const [min, max] = action.payload;
      let refineData = ItemData.filter(
        (el) => el.price >= min && el.price <= max
      );
      return {
        ...state,
        data: [...refineData],
      };

    default:
      return state;
  }
};
