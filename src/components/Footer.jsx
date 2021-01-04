import React from "react";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark" style={{  }}>
      <p className="text-center p-3 m-0 text-white">
        Copyright &copy; Priyam Purkait | {currentYear}
      </p> 
      <p className="text-center pb-3 m-0 text-sec text-decoration-underline ">
     <a href="https://informationqueue.blogspot.com/2020/12/legend-quotes-app-privacy-policy.html" target="_">Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
