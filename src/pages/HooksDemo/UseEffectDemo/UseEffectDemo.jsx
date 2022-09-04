import React, { useEffect, useState } from "react";
import axios from "axios";
let timeout = {};
export default function UseEffectDemo() {
  const [arrProduct, setArrProduct] = useState([]);
  const [count, setCount] = useState(60);
  const getApi = () => {
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    promise.then((result) => {
      console.log("kết quả", result.data.content);
      setArrProduct(result.data.content);
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
  useEffect(() => {
    //Callback function này sẽ chạy 1 lần đầu tiên và các lần sau thì phụ thuộc vào dependency thứ 2 của hàm useEffect (giống DidUpdate)
    // Khi nào count thay đổi thì mới chạy hàm callback này tiếp còn state khác thay đổi thì hàm này không  chạy nhé
  }, [count]);
  useEffect(() => {
    // Chạy 1 lần sau khi render (Giống CompomentDidMount bên class component)
    getApi();

    timeout = setInterval(() => {
      setCount((count) => {
        return count - 1;
      });
      console.log("123");
    }, 1000);

    return () => {
      // functtion return trong useEffect sẽ được kích hoạt trước khi component này mất khỏi giao diện giống componentWillunmount bên react classs
      clearInterval(timeout);
    };
  }, []);
  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <img src={item.image} alt="product" className="w-100" />
          <div className="card-body">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="btn btn-success">Add to cart</button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h3>ComponentWillunmount</h3>
      <p>Count: {count}</p>
      <h3>UseEffectDemo</h3>
      <h4>ComponentDidMount (Sử dụng cho việc load 1 lần sau render)</h4>
      <hr />
      <h3>Shoes shop</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
