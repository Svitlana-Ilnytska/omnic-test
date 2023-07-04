import React, { useEffect, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


const HomePage = lazy(() => import('./views/Home/Home'));
const PackedPage = lazy(() => import('./views/Packed/Packed'));
const CellSizesPage = lazy(() => import('./views/CellSizes/CellSizes'));

import Navigation from "./components/Navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { useFetchDeviceQuery } from "./redux/device/operations";

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useFetchDeviceQuery();
  const deviceData = useSelector((state) => state.deviceApi.data);
  const uid = data?.data?.uid || "";

  const maxSize = data?.data?.max_cell_size || "";

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to={`/${uid}`} />} />
        <Route path="/:uid" element={<HomePage />} />
        <Route path="/:uid/packed" element={<PackedPage />} />
        <Route path="/:uid/sizes" element={<CellSizesPage maxSize={maxSize} />} />
      </Routes>
    </Router>
  );
}

export default App;
