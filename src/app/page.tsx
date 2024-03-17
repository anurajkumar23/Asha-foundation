import Carousel from "./components/Home/homeslider/slider"
import Intro from "./components/Home/Intro/Intro"
import Stats from "./components/Home/stats/stats"
import Work from "./components/Home/works/work";
import Volunteer from "./components/Home/volunteer/volunteer";
import Blog from "./components/Home/blog/blog";
import Gallery from "./components/Home/gallery/gallery";

export default function Home() {
  return (
  <div>
   <Carousel />
   <Intro/>
   <Stats/>
   <Work/>
   <Volunteer/>
   <Gallery/>
   <Blog/>
  </div>
  );
}
