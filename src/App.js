import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const qrCodeRef = useRef(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // const handleDownload = () => {
  //   const canvas = qrCodeRef.current.getElementsByTagName("canvas")[0];
  //   const url = canvas.toDataURL("image/png");
  //   const downloadLink = document.createElement("a");
  //   downloadLink.href = url;
  //   downloadLink.download = "qrcode.png";
  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();
  //   document.body.removeChild(downloadLink);
  // };

  return (
    <div style={{ padding: "30px", display:"grid", justifyContent:"center"}}>
      <div>
        <input
          style={{ width: "300px", height: "30px"  }}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter URL for QR code"
        />
      </div>
      <div style={{ marginTop: "15px" }}>
        {inputValue && <QRCode value={inputValue} ref={qrCodeRef} />}
      </div>
      {/* {inputValue && (
        <button style={{ marginTop: "15px" }} onClick={handleDownload}>
          Download QR Code
        </button>
      )} */}
      <p>QR generator From <span style={{color:"teal"}}>Venturesathi Business</span></p>
    </div>
  );
};

export default App;
