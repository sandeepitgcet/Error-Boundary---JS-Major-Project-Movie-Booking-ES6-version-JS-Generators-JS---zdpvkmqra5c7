import React, { useEffect, useState } from "react";

const Component = (props) => {
    
    const [error, setError] = useState(true);
  useEffect(()=>{
    setError(!error)
  },[props.change])
  return (
    <>
    {    
        error && <div>Error occured</div>
    }
    </>
  );
};

export default Component;
