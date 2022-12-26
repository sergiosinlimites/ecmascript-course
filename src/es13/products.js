import fetch from "node-fetch";
// this is a top level await, do not need async
const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

export { products };