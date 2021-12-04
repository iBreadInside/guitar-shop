export const isEscEvent = (evt, cb) => {
  if (evt.key === `Escape`) {
    cb();
  }
};

export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);;
}

export const getMinPrice = (items) => Math.min(...items.map((item) => item.price));
export const getMaxPrice = (items) =>  Math.max(...items.map((item) => item.price), 0);


export const filterPrice = (price, min, max) => {
  if (!min || !max) {
    return true;
  }

  return price >= min && price <= max;
}
