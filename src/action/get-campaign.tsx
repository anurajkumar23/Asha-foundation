import { Campaign } from "../../types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/campaigns`;

const getCampaign = async (): Promise<Campaign> => {
  const res = await fetch(`${URL}`,
  { cache: 'no-store' }
  );
  return res.json();
};

export default getCampaign;
