import React from "react";

function Footer() {
  return (
    <>
      <footer
        className="w-100 bg-light"
        // style={{ textAlign: "center" }}
        style={{
          position: "fixed",
          bottom: "0",
          height: "40px",
          textAlign: "center",
        }}
      >
        <p>
          2021 AyushKumar. All rights reserved | Terms and conditions applied
        </p>
      </footer>
    </>
  );
}

export default Footer;
