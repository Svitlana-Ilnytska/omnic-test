import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./views/Home/Home";
import Packed from "./views/Packed/Packed";
import CellSizes from "./views/CellSizes/CellSizes";
import Navigation from "./components/Navigation/Navigation";
import { useSelector } from "react-redux";
import { useFetchDeviceQuery } from "./redux/device/operations";

function App() {
  const [maxSize, setMaxSize] = useState("");
  const { data, loading, error } = useFetchDeviceQuery();
  const deviceData = useSelector((state) => state.deviceApi.data);
  const uid = data?.data?.uid;

  useEffect(() => {
    if (data) {
      setMaxSize(data?.data?.max_cell_size);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred. Please try again later.</div>;
  }

  return (
    <Router>
      <Navigation />
      <Routes>
        {uid ? (
          <>
            <Route path="/" element={<Navigate to={`/${uid}`} />} />
            <Route path="/:uid" element={<Home />} />
            <Route path="/:uid/packed" element={<Packed />} />
            <Route path="/:uid/sizes" element={<CellSizes maxSize={maxSize} />} />
          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;