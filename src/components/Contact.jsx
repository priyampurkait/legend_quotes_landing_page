import React from "react";

const Contact = () => {
  return (
      <>
          <section id="contect" className="container-fluid bg-sec py-5 d-flex justify-content-center">
      {/* <!-- contect form  --> */}
      <div className="card form-card rounded-lg">
          <h1 className="display-6 mt-4 text-center">
        <span className="">Have Any </span>Questions?
      </h1>
            <div className="card-body">
            <p
            className=" text-break h5 px-md-5 text-center"
            
          >
            Contact us by filling out the information below
          </p>
              <form
                className="form-body"
                name="contact"
                method="POST"
                action="/contact"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Enter your messaage"
                    rows="3"
                  ></textarea>
                </div>
                <div data-netlify-recaptcha="true"></div>
                <div className="">
                  <button
                    type="submit"
                    className="btn btn-dark btn-md px-4 text-uppercase"
                    style={{ fontWeight: "400", borderRadius: 0 }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
    </section>
    <section id="contect" className="container-fluid bg-sec pb-5 d-flex justify-content-center">
      
    <div className="mx-auto" >
    <p
            className=" text-break h5 text-center"
          >
            Download For Free
          </p>
          <a
              className="btn btn-dark btn-md px-4"
              style={{ fontWeight: "600", borderRadius: 0, boxShadow: "8px 8px #5f5f5f"}}
              href="#"
              role="button"
            >
              GET IT ON | Google Play
            </a>
          </div>
    </section>
    
      </>
  );
};

export default Contact;
