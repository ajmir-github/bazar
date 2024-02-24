export interface User {
  _id: string;
  fullName: String;
  email: String;
}

export interface Post {
  _id: string;
  title: string;
  body: string;
  category: string;
  images: string[];
  negotiatable: boolean;
  price: number;
  location: string;
}
