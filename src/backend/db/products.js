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
    originalPrice: 1000,
    discountedPrice: 750,
    discountPercentage: "25%",
    image: nikeImage2,
    categoryName: "Football Shoes",
    ratings: 2.5,
  },
  {
    _id: uuid(),
    title: "Chelsea FC Jersey",
    subtitle: "Away Football Jersey",
    originalPrice: 2000,
    discountedPrice: 1500,
    discountPercentage: "25%",
    image: chelseaTee,
    price: "5000",
    categoryName: "Club Merch",
    ratings: 3,
  },
  {
    _id: uuid(),
    title: "Chelsea Fc Training Gear",
    subtitle: "Pre Match tshirt",
    originalPrice: 3000,
    discountedPrice: 2250,
    discountPercentage: "25%",
    image: preMatchTee,
    price: "5000",
    categoryName: "Club Merch",
    ratings: 3.5,
  },
  {
    _id: uuid(),
    title: "Jordan Series Mid",
    subtitle: "Men's Shoes",
    originalPrice: 4000,
    discountedPrice: 3000,
    discountPercentage: "25%",
    image: jordans,
    price: "5000",
    categoryName: "jordans",
    ratings: 5,
  },
  {
    _id: uuid(),
    title: "Nike Mercurial Vapor 14 Club TF",
    subtitle: "Turf Football Shoe",
    originalPrice: 5000,
    discountedPrice: 3500,
    discountPercentage: "25%",
    image: vaporBlack,
    price: "5000",
    categoryName: "vapor",
    ratings: 0.5,
  },
];
