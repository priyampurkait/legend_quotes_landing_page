import React from "react";

const HomePage = () => {
  return ( <section className="bg-sec">
    <div className="container">
      <div className="row row-vh d-flex align-items-center">
        <div className="col-12 col-lg-8">
          <h1 className="display-1">
            Legend <span className="text-prime">Quotes</span>
          </h1>
          <p
            className="pt-4 text-break h5" 
          >
           Get all the inspirational words by legends worldwide, in a single click of a button!
          </p>
          <p
            className=" text-break h5 pt-4 text-center text-md-start"
          >
            Download For Free | (Comming Soon)
          </p>
          <div className="pt-2 d-none d-md-block">
            <a
              className="btn btn btn-dark  btn-md px-4"
              style={{ fontWeight: "600", borderRadius: 0, boxShadow: "8px 8px #5f5f5f"}}
              href="https://play.google.com/store/apps?hl=en" target="_"
              role="button"
            >
              GET IT ON | Google Play
            </a>
          </div>
          <div className="pt-2 d-sm-block d-md-none">
          <a
              className="btn btn btn-dark btn-block  btn-md px-4"
              style={{ fontWeight: "600", borderRadius: 0, boxShadow: "8px 8px #5f5f5f", width: "100%"}}
              href="https://play.google.com/store/apps?hl=en" target="_"
              role="button"
            >
              GET IT ON | Google Play
            </a>
          </div>
        </div>
        <div
          className=" col-md-4 col-xl-4 col-xxl-3 col-6 mx-auto d-lg-flex py-5"
        >
          <img
            className="img-fluid"style={{ maxHeight: "76vh" }}
            src="./images/phone.webp"
            alt="developer"
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default HomePage;
