import React from "react";
import { Route, Routes, useResolvedPath } from "react-router-dom";
import ListPage from "./Pages/ListPage";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  
  return (
    <div>
      Product Feature
      <Routes>
        <Route path="*" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default ProductFeature;
