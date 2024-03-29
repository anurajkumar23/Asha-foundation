import { AboutUs } from "../../types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/aboutUs`;

const getAboutUs = async (): Promise<AboutUs> => {
  const res = await fetch(`${URL}`,
  { cache: 'no-store' }
  );
  return res.json();
};

export default getAboutUs;
