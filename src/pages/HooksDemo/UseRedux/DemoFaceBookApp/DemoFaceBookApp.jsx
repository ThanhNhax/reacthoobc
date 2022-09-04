import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../../redux/reducers/facebookReducer";

export const DemoFaceBookApp = () => {
  const { arrComment } = useSelector((state) => state.facebookReducer);
  const dispatch = useDispatch();
  const renderComment = () => {
    return arrComment.map((comment, index) => {
      return (
        <div className="d-flex" key={index}>
          <div className="avatar" style={{ width: 50 }}>
            <img
              style={{ display: "block" }}
              src={`https://i.pravatar.cc?u=${comment.name}`}
              alt="avatar"
              className="w-100"
            />
          </div>
          <div className="content mx-2">
            <h5 className="tex-danger">{comment.name}</h5>
            <p>{comment.content}</p>
          </div>
        </div>
      );
    });
  };
  const userComment = useRef({ name: "", content: "" });
  const handleChange = (e) => {
    const { id, value } = e.target;
    userComment.current[id] = value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi dữ liệu lên redux
    let newComment = { ...userComment.current };
    // Phải clone ra không nếu không là bị tham chiếu cùng vùng nhớ (là sẽ push Comment trước đó)
    const action = addComment(newComment);
    /*
      action: 'facebookReducer/addComment',
      payload: {name: 'Hậu', content:'123'}
    */
    dispatch(action);
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Demo facebook app</h3>
      <div className="card">
        <div className="card-header">{renderComment()}</div>
        <div className="card-body">
          <div className="form-group">
            <p>name</p>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <p>content</p>
            <input
              type="text"
              className="form-control"
              id="content"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="card-footer">
          <div className="form-group">
            <button className="btn btn-success " type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
