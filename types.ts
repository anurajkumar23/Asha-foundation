
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

export interface AboutUs {
  map(arg0: (aboutUs: any) => import("react").JSX.Element): import("react").ReactNode;
  
  id: string;
  ourMembersUrl: String;
  phoneNo:       String;
  address:       String;
};

export interface Trustee {
  map(arg0: (trustee: any) => import("react").JSX.Element): import("react").ReactNode;
  id: string;
  name:     String;
  post:     String;
  photoUrl: String;
};
