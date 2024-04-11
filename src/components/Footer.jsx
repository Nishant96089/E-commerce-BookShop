import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 mt-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-4 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Book-IT</h6>
            <p>
              Book-IT is an online React web application where the customer can
              purchase books online. Through this book store the users can
              search for a book by its title and later can add to the shopping
              cart and finally purchase using credit card transaction.
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a href="#">Book-IT</a>
            </p>
            <p>
              <a href="https://nishantsinha.netlify.app/">Portfolio</a>
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-envelope mr-3" />{" "}
              &nbsp;nishantsinha.hulk@gmail.com
            </p>
            <p>
              <a
                className="btn-floating btn-sm rgba-white-slight mx-1"
                href="https://www.linkedin.com/in/nishant-sinha96089/"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <hr />
        <div className="row d-flex align-items-center">
          <div className="col-md-8 col-lg-8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Made by
              <a href=""> Nishant Sinha </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-4 ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="https://github.com/Nishant96089"
                  >
                    <i className="fab fa-github" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="https://www.linkedin.com/in/nishant-sinha96089/"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="https://www.instagram.com/the_hulkster__/"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
