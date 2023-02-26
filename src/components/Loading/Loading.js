import React, { Component } from "react";
import { Vortex } from "react-loader-spinner";
import "./loader.css";
export class loading extends Component {
  render() {
    return (
      <div className="loading-spinner">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }
}

export default loading;
