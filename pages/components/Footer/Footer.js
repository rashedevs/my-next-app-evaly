import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid bg-secondary d-flex items-center justify-content-center text-white text-center p-4 mt-5">
      <div>
        <img
          className="rounded"
          style={{ width: "150px" }}
          src="https://image.similarpng.com/very-thumbnail/2020/09/Red-car-on-transparent-background-PNG.png"
          alt=""
        />
      </div>
      <div className="mt-3 mx-2">
        <h6>Evaly</h6>
        <p>
          All Rights Reserved <br />
          <small>Copyright &copy; {new Date().getFullYear()}</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
