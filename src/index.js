import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Cấu hình browser router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UseStateDemo from './pages/HooksDemo/UseStateDemo/UseStateDemo';
import DemoChonXe from './pages/HooksDemo/UseStateDemo/DemoChonXe';
import UseEffectDemo from './pages/HooksDemo/UseEffectDemo/UseEffectDemo';
import UseCallBackDemo from './pages/HooksDemo/UseCallBackDemo/UseCallBackDemo';
import UseMemoDemo from './pages/HooksDemo/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/HooksDemo/UseRefDemo/UseRefDemo';
import { Provider } from "react-redux"
import { store } from './redux/configStore';
import DemoNumber from './pages/HooksDemo/UseRedux/DemoNumber/DemoNumber';
import { DemoFaceBookApp } from './pages/HooksDemo/UseRedux/DemoFaceBookApp/DemoFaceBookApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path='' element={<App />}
  //     >
  //       <Route path='usestate' element={<UseStateDemo />}></Route>
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
  <Provider store={store}>
    <BrowserRouter >
      <Routes>
        <Route path='' element={<App />}>
          <Route path='usestate' element={<UseStateDemo />}></Route>
          <Route path='usecallback' element={<UseCallBackDemo />}></Route>
          <Route path='useEffect' element={<UseEffectDemo />}></Route>
          <Route path='usememo' element={<UseMemoDemo />}></Route>
          <Route path='useref' element={<UseRefDemo />}></Route>
          <Route path='reduxnumber' element={<DemoNumber />}></Route>
          <Route path='reduxfacebookapp' element={<DemoFaceBookApp />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);


reportWebVitals();
