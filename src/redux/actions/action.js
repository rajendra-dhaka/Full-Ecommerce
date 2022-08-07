export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

export const REMOVE = (item) => {
  return {
    type: "RMV_ONE",
    payload: item,
  };
};

export const CLEAR = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const SEARCH = (text) => {
  return {
    type: "SEARCH_DATA",
    payload: text,
  };
};

export const FILT = (filtdata) => {
  return {
    type: "FILTER_CHECK",
    payload: filtdata,
  };
};

export const PRICE = (range) => {
  return {
    type: "PRICE_RANGE",
    payload: range,
  };
};
