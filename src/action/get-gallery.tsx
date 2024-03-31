import { Gallery } from "../../types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/gallery`;

const getGallery = async (): Promise<Gallery[]> => {
  const res = await fetch(`${URL}`,
  { cache: 'no-store' }
  );
  return res.json();
};

export default getGallery;
