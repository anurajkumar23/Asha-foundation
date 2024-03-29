// export interface Product {
//   id: string;
//   category: Category;
//   name: string;
//   price: string;
//   discountedPrice: string;
//   isFeatured: boolean;
//   newArrivals:boolean;
//   size: Size;
//   color: Color;
//   
// };



export interface Billboard {
  map(arg0: (item: any) => void): import("react").ReactNode;
  id: string;
  label1: string;
  label2: string;
  linkUrl: string;
  imageUrl: string;
  
};

export interface Campaign {
  map(arg0: (campaigns: any) => import("react").JSX.Element): import("react").ReactNode;
  id: string;
  campaign: string;
  imageUrl: string;
  heading:      String;
  descriptions: String;
  goalAmount:   number;
  raisedAmount: number;
};

export interface Blog {
  map(arg0: (blogs: any) => import("react").JSX.Element): import("react").ReactNode;
  id: string;
  imageUrl:     String;
  heading:      String;
  descriptions: String;
  author:       String;
};

export interface Gallery {
  map(arg0: (gallery: any) => import("react").JSX.Element): import("react").ReactNode;
  id: string;
  images: Image[]
};


export interface Image {
  id: string;
  url: string;
}