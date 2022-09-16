import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Cấu hình browser router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
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
import ReactForm from './pages/HooksRoutes/ReactForm/ReactForm';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Search from './pages/Search/Search';
import DemoUseRoute from './pages/DemoUseRoute/DemoUseRoute';
import DemoAnimation from './pages/DemoAnimation/DemoAnimation';
import Login from './pages/Login/Login';
import Profile from './pages/HooksRoutes/ReactForm/Profile';

// Tạo ra 1 biến để quản lý chuyển hướng trang
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import DemoHoc from './pages/DemoHoc/DemoHoc';
import AdminTemplate from './templates/AdminTemplate';
import UserManagement from './pages/Admin/UserManagement/UserManagement';
import ProductManagement from './pages/Admin/ProductManagement/ProductManagement';
export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <HistoryRouter history={history} >
      <Routes>
        <Route path='' element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path='detail' >
            <Route path=':id' element={<Detail />}> </Route>
          </Route>
          <Route path='usestate' element={<UseStateDemo />}></Route>
          <Route path='usecallback' element={<UseCallBackDemo />}></Route>
          <Route path='useEffect' element={<UseEffectDemo />}></Route>
          <Route path='usememo' element={<UseMemoDemo />}></Route>
          <Route path='useref' element={<UseRefDemo />}></Route>
          <Route path='reduxnumber' element={<DemoNumber />}></Route>
          <Route path='reduxfacebookapp' element={<DemoFaceBookApp />}></Route>
          <Route path='reactform' element={<ReactForm />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='search' element={<Search />}></Route>
          <Route path='customhook' element={<DemoUseRoute />}></Route>
          <Route path='animation' element={<DemoAnimation />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='demohoc' element={<DemoHoc />}></Route>
          <Route path='*' element={<Navigate to={'/'} />}></Route>

        </Route>
        <Route path='/users' element={<AdminTemplate component={UserManagement} />}></Route>
        <Route path='/products' element={<AdminTemplate component={ProductManagement} />}></Route>

      </Routes>

    </HistoryRouter>
  </Provider>
);


reportWebVitals();
