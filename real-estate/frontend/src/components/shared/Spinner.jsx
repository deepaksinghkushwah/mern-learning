import React from "react";
import shallow from "zustand/shallow";
import { useBaseStore } from "../../store/useStore";

const Spinner = () => {
  const loading = useBaseStore((state) => state.loading, shallow);
  return loading ? (
    <div
      className="position-relative z-5000 d-flex justify-content-center align-items-center mh-100 w-100 mx-auto my-auto"
      style={{ backgroundColor: "rgba(200,200,200,0.3)" }}
    >
      <div className="position-fixed top-50">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Spinner;
