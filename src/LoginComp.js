import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { LoginAction } from "./Slices/UserSlice";

const LoginComp = () => {
  const name = useSelector((state) => state.user.username);
  const pw = useSelector((state) => state.user.password);
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(LoginAction({ username: "haythem", password: "111111" }));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{name}</label>
      <input type="text" />
      <label>{pw}</label>
      <input type="password" />
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default LoginComp;
