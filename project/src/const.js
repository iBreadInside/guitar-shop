export const AppRoute = {
  MAIN: '/',
  CATALOG: '/',
  LOCATION: '/location',
  ABOUT: '/about',
  SERVICES: '/services',
  MAP: '/map',
  SEARCH: '/search',
  CART: '/cart',
};

export const Breadcrumb = {
  MAIN: 'Главная',
  CATALOG: 'Каталог',
  CART: 'Оформляем',
};

export const PopupType = {
  ADD: 'popup-add',
  DELETE: 'popup-delete',
  SUCCESS: 'popup-success',
};

export const GuitarType = {
  UKULELE: 'Укулеле',
  ACOUSTIC: 'Акустическая гитара',
  ELECTRIC: 'Электрогитара',
  ALL: 'Все гитары',
};

export const guitarMap = {
  [GuitarType.ACOUSTIC]: 'Акустические гитары',
  [GuitarType.ELECTRIC]: 'Электрогитары',
  [GuitarType.UKULELE]: 'Укулеле',
};

export const SortType = {
  DEFAULT: 'none',
  BY_PRICE: 'byPrice',
  BY_RATING: 'byRating',
};

export const SortDirection = {
  DEFAULT: 'none',
  INC: 'increase',
  DEC: 'decrease'
};

export const sortMap = {
  [SortType.BY_PRICE]: 'price',
  [SortType.BY_RATING]: 'rating',
}

export const StringAmount = {
  FOUR: '4',
  SIX: '6',
  SEVEN: '7',
  TWELVE: '12',
};

export const stringsMap = {
  [GuitarType.ACOUSTIC]: [6, 7, 12],
  [GuitarType.ELECTRIC]: [4, 6, 7],
  [GuitarType.UKULELE]: [4],
  [GuitarType.ALL]: [4, 6, 7, 12],
};

export const FilterType = {
  STRINGS: 'strings',
  PRICE: 'price',
  TYPE: 'types',
};

export const numberKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
