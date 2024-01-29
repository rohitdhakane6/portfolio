import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//Component
import Home from "./Pages/Home";
import {
  HideLoading,
  SetPortfolioData,
  ShowLoading,
  ReloadData,
} from "./redux/rootSlice";

axios.defaults.baseURL = 'http://localhost:6001/';
function App() {
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/portfolio/get-all-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData]);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
