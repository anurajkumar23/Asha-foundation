import { Blog } from "../../types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/blogs`;

const getBlogs = async (id: string): Promise<Blog> => {
  const res = await fetch(`${URL}/${id}`,
  { cache: 'no-store' }
  );
  return res.json();
};

export default getBlogs;
