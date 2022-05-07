import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Navbar = ({ setLogged, logged, history }) => {
  useEffect(() => {
    if (sessionStorage.getItem("loggedId")) {
      setLogged(true);
    }
  }, []);
  return (
    <div>
      <header>
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 text-sm">
                <div className="site-info">
                  <a href="/">
                    <span className="mai-call text-primary"></span> +00 123 4455
                    6666
                  </a>
                  <span className="divider">|</span>
                  <a href="/">
                    <span className="mai-mail text-primary"></span>{" "}
                    mail@example.com
                  </a>
                </div>
              </div>
              <div className="col-sm-4 text-right text-sm">
                <div className="social-mini-button">
                  <a href="/">
                    <span className="mai-logo-facebook-f"></span>
                  </a>
                  <a href="/">
                    <span className="mai-logo-twitter"></span>
                  </a>
                  <a href="/">
                    <span className="mai-logo-dribbble"></span>
                  </a>
                  <a href="/">
                    <span className="mai-logo-instagram"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <span className="text-primary">One</span>-Health
            </Link>

            <form action="/">
              <div className="input-group input-navbar">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="icon-addon1">
                    <span className="mai-search"></span>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter keyword.."
                  aria-label="Username"
                  aria-describedby="icon-addon1"
                />
              </div>
            </form>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupport"
              aria-controls="navbarSupport"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupport">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                {!logged ? (
                  <li className="nav-item">
                    <Link className="btn btn-primary ml-lg-3" to="/login">
                      Register/Login
                    </Link>
                  </li>
                ) : null}
                {logged ? (
                  <li className="nav-item">
                    <button
                      className="btn btn-primary ml-lg-3"
                      onClick={() => {
                        setLogged(false);

                        sessionStorage.removeItem("loggedId");
                        sessionStorage.removeItem("loggedUsername");
                        sessionStorage.removeItem("loggedEmail");
                        history.push({
                          pathname: `/login`,
                        });
                      }}
                    >
                      Logout
                    </button>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default withRouter(Navbar);
