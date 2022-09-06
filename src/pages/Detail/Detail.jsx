import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

export default function () {
  const [productDetail, setProductDetail] = useState({});
  const params = useParams();
  // chuyển hướng thì dùng usenavigate
  const navigate = useNavigate();
  const getProductDetailApi = async () => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + params.id,
        method: "GET",
      });
      console.log("Kết quả:", result.data.content);
      // Sau khi laya kết quả từ api về đưa vào state arrProduct
      setProductDetail(result.data.content);
      console.log(productDetail);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // Chạy 2 trường hợp: Lần đầu tiên load page, và khi params.id  thay đổi  thì hàm này sẽ chạy
    getProductDetailApi();
  }, [params.id]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={productDetail.image} alt="..." className="w-100" />
        </div>
        <div className="col-8">
          <h3> {productDetail.name}</h3>
          <p>{productDetail.description}</p>
          <button className="btn btn-success">Add to cart</button>
        </div>
      </div>
      <div className="mt-2">
        <h3>Related Product</h3>
        <div className="row">
          {/* ?: toán tử optional chaining: Nếu có thuộc tính đó thì mới chấm tiếp phương thức hoặc tính tiếp theo được, không có thì bỏ qua */}
          {productDetail.relatedProducts?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card">
                  <img
                    src={item.image}
                    alt="..."
                    height={200}
                    className="w-100"
                  />
                  <div className="card-body">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <NavLink
                      className="btn btn-success"
                      to={`/detail/${item.id}`}
                    >
                      View detail
                    </NavLink>
                    <button
                      className="btn btn-success mx-2"
                      onClick={() => {
                        navigate(`/detail/${item.id}`);
                      }}
                    >
                      View detail
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
