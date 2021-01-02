import React from "react";

const About = () => {
  return (
    <section id="about" className="container py-5">
      <div className="">
        <h1 className="display-1" data-sal="slide-up" data-sal-delay="100">
          <span className="text-success">About </span>Me
        </h1>
        <p className="pt-3 text-break h5" data-sal="fade" data-sal-delay="150">
          I am a self-taught web and mobile app developer, currently I am working with Flutter.
        </p>
        <p className="pt-2 text-break h5" data-sal="fade" data-sal-delay="200">
          I am someone who enjoys leveraging a background in graphics and web
          design to provide insightful user experience with creativity,
          determination, and a drive for excellence.
        </p>
      </div>
      <div>
        <h1 className="display-6 pt-5" data-sal="slide-up" data-sal-delay="100">
          Fast<span className="text-warning"> Learner</span>
        </h1>
        <p className="pt-3 text-break h5" data-sal="fade" data-sal-delay="150">
          I love writing code and like to explore new languages. I think will
          make me more efficient in my daily tasks.
        </p>
        <h1 className="display-6 pt-5" data-sal="slide-up" data-sal-delay="100">
          <span className="text-primary"> Committed</span>
        </h1>
        <p className="pt-3 text-break h5" data-sal="fade" data-sal-delay="150">
          You need a reliable person that will get the job done? Look no
          further! I deliver work on time and communicate if necessary.
        </p>
        <h1 className="display-6 pt-5" data-sal="slide-up" data-sal-delay="100">
          Attention to<span className="text-secondary"> Details</span>
        </h1>
        <p className="pt-3 text-break h5" data-sal="fade" data-sal-delay="150">
          I do not like the feeling of solving a problem without knowing how I
          did it.
        </p>
      </div>
    </section>
  );
};

export default About;
