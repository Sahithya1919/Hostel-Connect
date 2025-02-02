import "./HostelList.css";
import RecommendedHostels from "./RecommendedHostels";
import PopularHostels from "./PopularHostels";

const HostelList = () => {
  return (
    <div className="hostel-list">
      <RecommendedHostels />
      <PopularHostels />
    </div>
  );
};

export default HostelList;
