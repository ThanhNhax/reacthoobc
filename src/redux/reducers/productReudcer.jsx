//rxslice
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  arrProduct: [
    {
      id: 1,
      name: "Giày 1",
      price: 1000,
      image: "http://picsum.photos/200/200",
    },
  ],
  productDetail: {},
};

const productReudcer = createSlice({
  name: "productReudcer",
  initialState,
  reducers: {
    setArrProductAction: (state, action) => {
      // Lấy ra dữ liệu từ payload component dispatch lên
      const arrProduct = action.payload;
      // Cập nhật lại state
      state.arrProduct = arrProduct;
    },
    setProductDetailAction: (state, action) => {
      // Lấy dữ liệu gửi lên từ payload
      const productDetail = action.payload;
      // Cập nhật lại state. productDetail
      state.productDetail = productDetail;
    },
  },
});

export const { setArrProductAction, setProductDetailAction } =
  productReudcer.actions;

export default productReudcer.reducer;

// ------------------action api-----------
export const getProductApiAction = async (dispatch2) => {
  // xử lý logic api để trả về kết quả
  try {
    let result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    console.log("Kết quả: ", result.data.content);

    // dispatch lên redux
    const action = setArrProductAction(result.data.content);
    /*
        action={
          type: 'productReducer/setArrProductAction',
          payload: result.data.content
        }
      */
    dispatch2(action);
  } catch (err) {
    console.log(err);
  }
};

//CLosure function
export const getProductDetailActionApi = (idProduct) => {
  return async (dispatch) => {
    //Logic api gọi tại đây
    try {
      const result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProduct}
        `,
        method: "GET",
      });
      // Sau khi có dữ liệu guier lên acion loại 1 đưa lên reducer
      const actionLoai1 = setProductDetailAction(result.data.content);
      dispatch(actionLoai1);
    } catch (err) {
      console.log(err);
    }
  };
};

/*
const addProductApi = ()=> {
    return async dispatch => {
        //gọi addProductApi
        axios post => thêm dữ liệu
        axios getAll => Lậy dữ mới về sau khi thêm
        //gọi api getAl
        dispatch(getProductApi)
    }
} 
*/
