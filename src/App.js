import React, { useState } from "react";
import QRCode from "react-qr-code";
import html2canvas from 'html2canvas';

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDownload = () => {
    const element = document.getElementById("qrcode-container");

    html2canvas(element).then(canvas => {
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

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
      <div  id="qrcode-container" style={{ marginTop: "15px", marginRight:"50px" }}>
        {inputValue && <QRCode   value={inputValue} />}
      </div>
      {inputValue && (
        <button style={{ marginTop: "15px" }} onClick={handleDownload}>
          Download QR Code
        </button>
      )}
      <p>QR generator From <span style={{color:"teal"}}>Venturesathi Business</span></p>
    </div>
  );
};

export default App;
