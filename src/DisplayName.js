import React, { useState } from "react";

const DisplayName = () => {
  const [showName, setShowName] = useState(false);

  const showMyname = () => {
    setShowName(true);
  };
  return (
    <>
      {showName && <p>BOLARIN OLABISI</p>}
      <button onClick={showMyname}>show My Name</button>
    </>
  );
};

export default DisplayName;
