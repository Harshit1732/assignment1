
import { ADS, Clock, Live, Scholarship, TextBook } from "../helpers/icons";
import Form from "./Form";
import "./Home.css";
import NavBar from "./Navbar";
const Home = () => {
  return (
    <div className="coding-assignment">
      <NavBar />
      <div className="content-container">
        <img className="back-ground-icon" alt="" src="/back-ground@2x.png" />
        <Form />
        <div className="main-lockup">
          <div className="header">
            <div className="access-curated-courses-worth-wrapper">
              <div className="access-curated-courses">
                Access curated courses worth
              </div>
            </div>
            <div className="parent">
              <div className="div">₹ 18,500</div>
              <div className="frame-child" />
              <div className="at-just-wrapper">
                <div className="at-just">at just</div>
              </div>
              <div className="wrapper">
                <div className="at-just">₹ 99</div>
              </div>
              <div className="per-year-wrapper">
                <div className="at-just">per year!</div>
              </div>
            </div>
          </div>
          <div className="pointer-1">
            <div className="icon">
            <TextBook/>
            </div>
            <div className="text-container">
              <div className="text">
                <span className="span">{`100+ `}</span>
                <span className="job-relevant-courses">
                  <span>Job relevant courses</span>
                  <span className="span1">{` `}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="pointer-1">
            <div className="icon1">
            <Clock/>
            </div>
            <div className="text-container">
              <div className="text">
                <span className="span">{`20,000+ `}</span>
                <span className="job-relevant-courses">Hours of content</span>
              </div>
            </div>
          </div>
          <div className="pointer-3">
            <div className="icon2">
              <div className="vector-parent">
             <Live/>
                <div className="live">live</div>
              </div>
            </div>
            <div className="text-container2">
              <div className="text">
                <span className="span">{`Exclusive `}</span>
                <span className="job-relevant-courses">webinar access</span>
              </div>
            </div>
          </div>
          <div className="pointer-4">
            <div className="icon3">
            <Scholarship/>
            </div>
            <div className="text-container3">
              <div className="text-container">
                <div className="text">
                  <span>{`Scholarship worth `}</span>
                  <span className="span3">₹94,500</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-5">
            <div className="icon1">
              <div className="icon-item">
               <ADS/>
                <div className="ads">ADS</div>
                <div className="group-child" />
              </div>
            </div>
            <div className="text-container2">
              <div className="text">
                <span className="span">{`Ad Free `}</span>
                <span className="job-relevant-courses">
                  learning experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
