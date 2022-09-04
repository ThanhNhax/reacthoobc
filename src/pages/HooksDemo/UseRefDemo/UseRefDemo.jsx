import React, { useState } from "react";
import { useRef } from "react";
/*
    useRef: Tương tự useState tuy nhiên khi thay đổi giá trị useRef component không render lại (UseRè dùng để lưu giá trị sau mỗi lần render)
    useRef thường dùng cho các form không có validation, hoặc dữ kiệu chỉnh sửa
 */
export default function UseRefDemo() {
  const [number, setNumber] = useState(1);

  //   const [userLogin, setUserLogin] = useState({ username: "", password: "" });

  //   let userLogin = { usetname: "", password: "" };
  //   //   console.log(userLogin);
  const userLoginRef = useRef({ username: "", password: "" });
  console.log("render");
  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    userLoginRef.current[id] = value;
    console.log(userLoginRef.current);
    // setUserLogin({
    //   ...userLogin,
    //   [id]: value,
    // });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Chặn sự kiện reload browser
    console.log(userLoginRef.current);
  };
  return (
    <form className="container" onClick={handleSubmit}>
      <h3>Number:{number}</h3>
      <button
        className="btn btn-danger"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <h3>Login</h3>
      <div className="form-group">
        <p>username</p>
        <input
          id="username"
          className="form-control"
          onChange={handleChangeInput}
        />
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          id="password"
          type="password"
          className="form-control"
          onChange={handleChangeInput}
        />
      </div>

      <div className="form-group">
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
