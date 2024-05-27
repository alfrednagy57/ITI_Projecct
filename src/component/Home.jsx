import React from "react";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navs from "./Navs";
import '../css/home.css';

function Home() {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  return (
    <div>
      <Navs />
      <div>
        {isHome && (
          <div className="homepage-description">
          <h2>Welcome to Vox cinema</h2>
          <p>
            Here you can watch all the new movies and enjoy our adorable and awesome expericene.
            <br />
          </p>
          <div className="advertisement">
            <h2>Special Offers</h2>
              <div id="advertisementCarousel" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="image-container">
                      <img
                        src={process.env.PUBLIC_URL + '/images/pw1.jpg'}
                        className="d-block w-100"
                        alt="kung-fu panda 1"
                      />
                      <div className="image-name">kung-fu panda 1</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="image-container">
                      <img
                        src={process.env.PUBLIC_URL + '/images/pw2.jpg'}
                        className="d-block w-100"
                        alt="logan"
                      />
                      <div className="image-name">logan</div>
                    </div>
                  </div>
                  
                  <div className="carousel-item">
                    <div className="image-container">
                      <img
                        src={process.env.PUBLIC_URL + '/images/pw3.jpg'}
                        className="d-block w-100"
                        alt="spider-man: into the spider-verse"
                      />
                      <div className="image-name">spider-man: into the spider-verse</div>
                    </div>
                  </div>
                </div>
                
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#advertisementCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#advertisementCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <p>missing our offers means a boring life.<br />A special offer for 2 weeks where you can get a free popcorn on every ticket.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
