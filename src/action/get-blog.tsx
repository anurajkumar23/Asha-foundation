import { Blog } from "../../types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/blogs`;

const getBlog = async (): Promise<Blog> => {
  const res = await fetch(`${URL}`,
  { cache: 'no-store' }
  );
  return res.json();
};

export default getBlog;
