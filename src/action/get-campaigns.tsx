import { Campaign } from "../../types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/campaigns`;

const getCampaigns = async (id: string): Promise<Campaign> => {
  const res = await fetch(`${URL}/${id}`,
  { cache: 'no-store' }
  );

  return res.json();
};

export default getCampaigns;
