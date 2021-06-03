import React from "react";
import { NavLink } from "react-router-dom";
import fluffy from "../src/32.jpg";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="tab-center" style={{ textAlign: "center" }}>
          {" "}
          Our Services
        </h1>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={fluffy} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={fluffy} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="" class="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={fluffy} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={fluffy} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={fluffy} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div class="card">
                  <img src={fluffy} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
