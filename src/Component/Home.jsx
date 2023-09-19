import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

export default function Home() {
  return (
    <div>
      <div className="p-5">
        {/* <<<<Add Chart Information>>>>>> */}
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-around align-item-center 
                p-3 bg-white border border-secondary shadow-sm"
            >
              <i className="bi bi-currency-dollar fs-1 text-success"></i>
              <div>
                <span>Sales</span>
                <h2>234</h2>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-around align-item-center 
                p-3 bg-white border border-secondary shadow-sm"
            >
              <i className="bi bi-truck fs-1 text-primary"></i>
              <div>
                <span>Delivery</span>
                <h2>240</h2>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-around align-item-center 
                p-3 bg-white border border-secondary shadow-sm"
            >
              <i className="bi bi-graph-up-arrow fs-1 text-danger"></i>
              <div>
                <span>Increase</span>
                <h2>20%</h2>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-around align-item-center 
                p-3 bg-white border border-secondary shadow-sm "
            >
              <i className="bi bi-truck fs-1 text-warning"></i>
              <div>
                <span>Sales</span>
                <h2>240</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">

          {/* <<<<import PieChar>>>>>> */}
          <div className="col-12 col-md-8 p-3">
            <LineChart />
          </div>

          {/* <<<<import PieChar>>>>>> */}
          <div className="col-12 col-md-4 p-3">
            <PieChart />
          </div>
        </div>
      </div>

      {/* <<<<Add Footer>>>>>> */}
      <div className="container p-1 foot text-center">
        <div class="d-flex">
          <div class="p-2 flex-grow-1">
            Copyright &copy; 2023 EVIDIO | Powered by Flexy Code{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
