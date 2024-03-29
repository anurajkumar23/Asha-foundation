import { Trustee } from "../../types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/trustee`;

const getTrustee = async (): Promise<Trustee> => {
  const res = await fetch(`${URL}`,
  { cache: 'no-store' }
  );
  return res.json();
};

export default getTrustee;
