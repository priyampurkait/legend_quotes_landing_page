import React from "react";
import OverviewCard from "./card/OverviewCard";

const Overviews = () => {
  return ( <section className="bg-prime">
    <section id="skills" className="container py-5">
      <div className="mb-5">
        <h1 className="display-1">
          <span className="text-dark">Overview</span>
        </h1>
      </div>
      <OverviewCard />
    </section>
    </section>
  );
};

export default Overviews;
