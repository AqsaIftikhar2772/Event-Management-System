import "../css/service_detail.css";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Service_Detail = () => {
  return (
    <>
      <div>
        <h1 className="serviceH1">Why Choose Us?</h1>
      </div>
      <div className="serviceD">
        {/* **************** */}
        <div>
          <FaRegThumbsUp className="serviceIcon1" />
          <h1 className="serviceh1">Reliability</h1>
          <p className="serviceP1">
            Experience transparency and trust with a reliable venue provider
            company. We are dedicated to deliver our best and building
            credibility in the market, ensuring a seamless and trustworthy
            experience for our valued clients
          </p>
        </div>
        {/* ****************** */}
        <div>
          <IoMdTime className="serviceIcon2" />
          <h1 className="serviceh1">Save Time</h1>
          <p className="serviceP2">
            Simplify your venue search in Lahore extensive selection of 5000+
            options. Trust us to curate a personalized selection based on your
            preferences, making the process easier and presenting you with ideal
            venue choices.
          </p>
        </div>
        {/* ******************** */}
        <div>
          <GrServices className="serviceIcon3" />
          <h1 className="serviceh1">Free Services</h1>
          <p className="serviceP3">
            Discover your perfect venue hassle-free with our free service.
            Explore diverse farmhouses in popular areas like Barki Road, DHA,
            Gulberg, and more.Trust us with no extra charges for venue visits in
            different locations across Lahore.
          </p>
        </div>
      </div>

      <div className="instaD">
        <NavLink to="https://www.instagram.com/venuehub.pk/">
        <h1 className="instaH1">Follow us venuehub.pk</h1>
        </NavLink>
        <p className="instaP">[instagram-feed feed=1]</p>
      </div>
    </>
  );
};

export default Service_Detail;
