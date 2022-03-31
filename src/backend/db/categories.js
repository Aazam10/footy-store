import { v4 as uuid } from "uuid";
import { chelseaTee, jordans, nikeImage2, vaporBlack } from "../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "VaporShoes",
    description: "Vapor sneakers",
    image: vaporBlack,
  },
  {
    _id: uuid(),
    categoryName: "FootballShoes",
    description: "Football Shoes",
    image: nikeImage2,
  },
  {
    _id: uuid(),
    categoryName: "ClubMerch",
    description: "Club merchandise ",
    image: chelseaTee,
  },
  {
    _id: uuid(),
    categoryName: "Jordans",
    description: "Nike X Jordan collection",
    image: jordans,
  },
];
