import React from "react";
import { css } from "@emotion/css";
function Header() {
  return (
    <div
      className={css`
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(0, 0, 0, 0.9);
        color: white;
        top: 0;
        left: 0;
        position: sticky;
      `}
    >
      Header
    </div>
  );
}

export default Header;
