import { colors, goods, OS } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  console.log(brand);
  return goods.filter((item) => {
    if (item.brand === brand) {
      return item;
    }
  });
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  return goods.filter((item) => {
    console.log(item);
    if (item.color === color) {
      return item;
    }
  });
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  return goods.filter((item) => {
    if (item.model === model) {
      return item;
    }
  });
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  return goods.filter((item) => {
    if (item.memory === memory) {
      return item;
    }
  });
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  return goods.filter((item) => {
    if (item.price === price) {
      return item;
    }
  });
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  return goods.filter((item) => {
    if (item.country === country) {
      return item;
    }
  });
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  return goods.filter((item) => {
    if (item.os === os) {
      return item;
    }
  });
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  return goods.filter((item) => {
    if (item.price >= from && item.price <= to) {
      return item;
    }
  });
};

const minPriceReducer = () => {
  return goods.reduce((acum, item) => {
    if (item.price < acum.price) {
      return item;
    }
    return acum;
  });
};

const maxPriceReducer = () => {
  return goods.reduce((acum, item) => {
    if (item.price > acum.price) {
      return item;
    }
    return acum;
  });
};

const toMaxSorter = () => {
  return goods.sort((prev, next) => next.price - prev.price);
};
const toMinSorter = () => {
  return goods.sort((prev, next) => prev.price - next.price);
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
