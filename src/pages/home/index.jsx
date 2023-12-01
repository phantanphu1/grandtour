
import Search from "../../components/search/Search"
import CategoryTitle from "../../components/categoryTitle/CategoryTitle"
import Destinations from "../../components/destinations/Destinations"
import BestTrips from "../../components/bestTrips/BestTrips"
import Summary from "../../components/summary/Summary"
import BackGroundImg from "../../components/backgroundImg/BackGroundImg"
import Posts from "../../components/posts/Posts"
import ScrollToTopButton from "../../components/scrollToTopButton"
import Menu from "../../components/menu"
const Home = () => {
  return (
    < >
    <ScrollToTopButton/>
    <Search />
    <Menu/>
    <CategoryTitle title={"Popular Destinations"} des={`World's best tourist destinations`}   />
    <Destinations />
    <CategoryTitle title={"Best Value Trips"} des={`Best offers trips from us`}   />
    <BestTrips />
    <CategoryTitle title={"Why Choose Us"} des={`Here are reasons you should plan trip with us`}   />
    < Summary />
    <BackGroundImg />
    <CategoryTitle title={"Articles & Tips"} des={`Explore some of the best tips from around the world`}   />
    <Posts />
    </>
  )
}

export default Home