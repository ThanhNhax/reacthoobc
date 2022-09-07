import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getProductApiAction,
  setArrProductAction,
} from "../../redux/reducers/productReudcer";
import { getProductApi } from "../../redux/reducers/productReudcer";

export default function Home() {
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  // console.log(arrProduct);
  const getApiProduct = async () => {
    // try {
    //   let result = await axios({
    //     url: "https://shop.cyberlearn.vn/api/Product",
    //     method: "GET",
    //   });
    //   console.log("Kết quả: ", result.data.content);
    //   // Sau khi lây kết quả từ api về đưa vào state arrPrduct
    //   // setArrProoduct(result.data.content);
    //   // dispatch lên redux
    //   const action = setArrProductAction(result.data.content);
    //   /*
    //     action={
    //       type: 'productReducer/setArrProductAction',
    //       payload: result.data.content
    //     }
    //   */
    //   dispatch(action);
    // } catch (err) {
    //   console.log(err);
    // }

    /*
      action có 2 dạng:
        + action dạng 1:
            action ={
              type: action_name
              payload: data
            }
        + action dạng 2 (thunk):
            action=(dispatch2 ,getState)=>{
              // logic xử lý ở đây sau đó có dữ liệu sẽ dùng tham số dispatch2 để đưa redux hoặc thực hiến tiếp 1 logic khác
            }
    */

    const actionLoai2 = getProductApiAction;

    // dispatch action thiunk
    dispatch(actionLoai2);
  };

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3 mt-2" key={index}>
          <div className="card">
            <img src={item.image} alt="..." />
            <div className="card-body bg-dark text-light">
              <p>{item.name}</p>
              <p>{item.price}</p>
              {/* <button className="btn btn-success">View detail</button> */}
              <NavLink to={`/detail/${item.id}`} className="btn btn-success">
                View detail
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
    // Sau khi giao diện load xong thì gọi api thức thi
    getApiProduct();
  }, []);

  return (
    <div className="container">
      <h3>Shes app</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
