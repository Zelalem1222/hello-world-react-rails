import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Greeting from "./greetings";
import { fetchMessage } from "./redux/reducer/greetingReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchMessage()), []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
