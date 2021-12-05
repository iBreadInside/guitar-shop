import { GuitarType, StringAmount } from "../const";

export const Filters = {
  strings: [
    {
      id: `strings-4`,
      name: StringAmount.FOUR,
      value: false
    },
    {
      id: `strings-6`,
      name: StringAmount.SIX,
      value: false
    },
    {
      id: `strings-7`,
      name: StringAmount.SEVEN,
      value: false
    },
    {
      id: `strings-12`,
      name: StringAmount.TWELVE,
      value: false
    }
  ],
  types: [
    {
      id: `acoustic`,
      name: GuitarType.ACOUSTIC,
      value: false
    },
    {
      id: `electric`,
      name: GuitarType.ELECTRIC,
      value: false
    },
    {
      id: `ukulele`,
      name: GuitarType.UKULELE,
      value: false
    }
  ],
  price: [
    {
      id: `min`,
      name: `min`,
      value: null
    },
    {
      id: `max`,
      name: `max`,
      value: null
    }
  ]

}
