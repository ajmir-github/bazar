export interface Category {
  id: string;
  name: {
    en: string;
    da?: string;
    pa?: string;
  };
}

const Categories: Category[] = [
  { id: "1", name: { en: "Vehicles" } },
  { id: "2", name: { en: "Rentals" } },
  { id: "3", name: { en: "Women's Clothings & Shoes" } },
  { id: "4", name: { en: "Men's Clothings & Shoes" } },
  { id: "5", name: { en: "Furniture" } },
  { id: "6", name: { en: "Electronics" } },
  { id: "7", name: { en: "Antiques & Collectibles" } },
  { id: "8", name: { en: "Appliances" } },
  { id: "9", name: { en: "Arts & Crafts" } },
  { id: "10", name: { en: "Auto Parts" } },
  { id: "11", name: { en: "Baby" } },
  { id: "12", name: { en: "Books, Movies & Musics" } },
  { id: "13", name: { en: "Garage Sale" } },
  { id: "14", name: { en: "Health & Beauty" } },
  { id: "15", name: { en: "Home Goods and Decor" } },
  { id: "16", name: { en: "Home  Improvments & Tools" } },
  { id: "17", name: { en: "Housing for Sale" } },
  { id: "18", name: { en: "Jewelry & Watches" } },
  { id: "19", name: { en: "Luggage & Bags" } },
  { id: "20", name: { en: "Miscellaneous" } },
  { id: "21", name: { en: "Musical Instruments" } },
  { id: "22", name: { en: "Patio & Garden" } },
  { id: "23", name: { en: "Pet Supplies" } },
  { id: "24", name: { en: "Sporting Goods" } },
  { id: "25", name: { en: "Toys & Games" } },
];
export default Categories;
