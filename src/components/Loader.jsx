import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loader(props) {
  const { size, color, loading } = props;
  return (
    <div>
      <ClipLoader css="" size={size} color={color} loading={loading} />
    </div>
  );
}

export default Loader;
