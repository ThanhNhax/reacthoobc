import React from "react";
import HocModal from "../../HOC/HocModal";
import ModalHOC from "../../HOC/ModalHOC";
import UseStateDemo from "../HooksDemo/UseStateDemo/UseStateDemo";
import Login from "../Login/Login";

//Tạo ra component từ HOC
let WrapFormLoginModal = ModalHOC(Login, "Login");
let WrapUseStateDemoModal = ModalHOC(UseStateDemo, "UseState");
export default function DemoHoc() {
  return (
    <div>
      {/* <WrapFormLoginModal />
      <WrapUseStateDemoModal /> */}
      <HocModal Component={Login} id="modal1" />
      <HocModal Component={UseStateDemo} id="modal2" />
    </div>
  );
}

/*
    Function : React.FC (Reactt function component)=> <props.component>
    JSXElement: <Login/>, <Component.../> => {props.component}
*/
