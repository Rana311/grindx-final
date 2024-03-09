import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
// import HighlightIcon from "@material-ui/icons/Highlight";
// import DescriptionIcon from '@mui/icons-material/Description';
// import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

function Header() {
  return (
    <header>
      <h1 className="header">
        <HighlightIcon />
        Notes
      </h1>
    </header>
  );
}

export default Header;