import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Vapor Shoes",
    description: "Vapor sneakers",
  },
  {
    _id: uuid(),
    categoryName: "Football Shoes",
    description: "Football Shoes",
  },
  {
    _id: uuid(),
    categoryName: "Club Merch",
    description: "Club merchandise ",
  },
  {
    _id: uuid(),
    categoryName: "jordans",
    description: "Nike X Jordan collection",
  },
];
