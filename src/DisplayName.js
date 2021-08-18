import React, { useState } from "react";
import {Button} from '@material-ui/core'
const DisplayName = () => {
  const [showName, setShowName] = useState(false);

  const showMyname = () => {
    setShowName(true);
  };
  return (
    <>
      {showName && <p style={{textAlign:'center'}} >BOLARIN OLABISI</p>}
      <Button style={{backgroundColor:'#6c63fe', color:'white', textDecoration:'none', display: showName? 'none' : ''}} onClick={showMyname}>show My Name</Button >
    </>
  );
};

export default DisplayName;
