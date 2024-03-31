import Carousel from "./components/Home/homeslider/slider"
import Intro from "./components/Home/Intro/Intro"
import Stats from "./components/Home/stats/stats"
import Work from "./components/Home/works/work";
import Volunteer from "./components/Home/volunteer/volunteer";
import Blog from "./components/Home/blog/blog";
import Gallery from "./components/Home/gallery/gallery";
import getBillboard from "@/action/get-billboard";
import getCampaign from "@/action/get-campaign";
import getBlog from "@/action/get-blog";
import getGallery from "@/action/get-gallery";
import JoinUsPage from "./components/joinus/page";

export default async function Home () {
 
  const billboard = await getBillboard()
  const campaign = await getCampaign()
  const blog = await getBlog()
  const gallery = await getGallery()

  return (
  <div>
   <Carousel data ={billboard} />
   <Intro/>
   <Stats/>
   <Work data = {campaign} />
   <Volunteer/>
   <Gallery data = {gallery} />
   <Blog data = {blog} />
  </div>
  );
}
