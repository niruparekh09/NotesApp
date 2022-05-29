import React from "react";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

function Header() {
  return (
    <header>
      <h1>
        <NoteAltIcon sx={{ fontSize: 30 }} />
        NOTES
      </h1>
    </header>
  );
}

export default Header;
