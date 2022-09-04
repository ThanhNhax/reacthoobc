//rfc để tạo function component
import React, { useState } from "react";

export default function DemoChonXe() {
  const [img, setImg] = useState("./img/product/red-car.jpg");
  const handleChangeColor = (color) => {
    setImg(`./img/product/${color}-car.jpg`);
  };
  return (
    <div className="container">
      <h3>Demo chọn xe</h3>
      <div className="row">
        <div className="col-6">
          <img src={img} alt="xe" width={600} />
        </div>
        <div className="col-6">
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              handleChangeColor("red");
            }}
          >
            Red
          </button>
          <button
            className="btn btn-success mx-2"
            onClick={() => {
              handleChangeColor("black");
            }}
          >
            Black
          </button>
          <button
            className="btn btn-dark mx-2"
            onClick={() => {
              handleChangeColor("silver");
            }}
          >
            Silver
          </button>
          <button
            className="btn btn-prima  ry mx-2"
            onClick={() => {
              handleChangeColor("steel");
            }}
          >
            Steel
          </button>
        </div>
      </div>
    </div>
  );
}
