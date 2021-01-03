import React from "react";

const overviewCard = () => {
  const overviews = [
    {
      overviewsIcon: "/images/search.webp",
      overviewsTitle: "Search",
      bgColor: "bg-secondary",
      overviewDescriptions: "You can search legends thoughts and biographies by typing author name.",
    },
    {
      overviewsIcon: "/images/share.webp",
      overviewsTitle: "Share",
      bgColor: "bg-success",
      overviewDescriptions: "You can copy legend thoughts and share it with your friends, on your social networking sites. You can share it anywhere",
    },
    {
      overviewsIcon: "/images/favorites.webp",
      overviewsTitle: "Add to Favorites",
      bgColor: "bg-primary",
      overviewDescriptions: "Add all your favorite thoughts in favorites list for quick access and sharing.",
    },
  ];

  return (
    <div className="row g-4">
      {overviews.map((overview) => {
        return (
          <div
            key={overview.overviewsTitle}
            className="col-12 col-md-6 col-xl-4"
          >
            <div className="card overview-card mb-5 bg-sec">
              <div className="row g-0">
                <div
                  className={`col-md-4 col-lg-5 col-sm-4 col-6 mx-auto d-flex align-items-center justify-content-center bg-dark rounded`}
                >
                  <img
                    className="overviews-icon img-fluid"
                    src={overview.overviewsIcon}
                    alt={overview.overviewsTitle}
                  />
                  
                </div>
                <div className="col-md-8 col-lg-7 col-sm-8">
                  <div className="h5 title card-header ">
                    {overview.overviewsTitle}
                  </div>
                  <div className="p-3 ">
                    {overview.overviewDescriptions}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default overviewCard;
