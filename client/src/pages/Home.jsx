import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SelectionBar from "../components/SelectionBar";
import HostelList from "../components/HostelList";
import Footer from "../components/Footer";

const Home = () => {
  const recommendedHostels = [
    {
      name: "Green Nest Hostel",
      rating: 4.8,
      image: "/src/images/hostel1.jpg",
    },
    { name: "Skyline Hostel", rating: 4.7, image: "/src/images/hostel2.jpg" },
    {
      name: "City Comfort Hostel",
      rating: 4.5,
      image: "/src/images/hostel3.jpg",
    },
    { name: "Urban Stay", rating: 4.6, image: "/src/images/hostel4.jpg" },
  ];

  const popularHostels = [
    { name: "Lakeview Hostel", rating: 4.9, image: "/src/images/hostel5.jpg" },
    {
      name: "Hilltop Residency",
      rating: 4.8,
      image: "/src/images/hostel6.jpg",
    },
    { name: "Metro Living", rating: 4.7, image: "/src/images/hostel7.jpg" },
    {
      name: "Palm Grove Hostel",
      rating: 4.6,
      image: "/src/images/hostel8.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <SelectionBar />
      <HostelList />
      <Footer></Footer>
    </>
  );
};

export default Home;
