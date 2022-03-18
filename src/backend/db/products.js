import { v4 as uuid } from "uuid";
import {
  nikeImage2,
  chelseaTee,
  preMatchTee,
  jordans,
  vaporBlack,
} from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Nike Phantom GT2",
    subtitle: "Multi Ground Football Boot",
    OriginalPrice: 5000,
    discountedPrice: 3000,
    discountPercentage: "25%",
    image: nikeImage2,

    categoryName: "Football Shoes",
  },
  {
    _id: uuid(),
    title: "Chelsea FC Jersey",
    subtitle: "Away Football Jersey",
    OriginalPrice: 5000,
    discountedPrice: 3000,
    discountPercentage: "25%",
    image: chelseaTee,
    price: "5000",
    categoryName: "Club Merch",
  },
  {
    _id: uuid(),
    title: "Chelsea Fc Training Gear",
    subtitle: "Pre Match tshirt",
    OriginalPrice: 5000,
    discountedPrice: 3000,
    discountPercentage: "25%",
    image: preMatchTee,
    price: "5000",
    categoryName: "Club Merch",
  },
  {
    _id: uuid(),
    title: "Jordan Series Mid",
    subtitle: "Men's Shoes",
    OriginalPrice: 5000,
    discountedPrice: 3000,
    discountPercentage: "25%",
    image: jordans,
    price: "5000",
    categoryName: "jordans",
  },
  {
    _id: uuid(),
    title: "Nike Mercurial Vapor 14 Club TF",
    subtitle: "Turf Football Shoe",
    OriginalPrice: 5000,
    discountedPrice: 3000,
    discountPercentage: "25%",
    image: vaporBlack,
    price: "5000",
    categoryName: "vapor",
  },
];
