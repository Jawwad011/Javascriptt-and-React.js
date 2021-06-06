import React from "react";

const CurrYear = new Date().getFullYear();

function Ft() {
  return (
    <div>
      <footer>
        <p>Copyright @ {CurrYear}</p>
      </footer>
    </div>
  );
}

export default Ft;
