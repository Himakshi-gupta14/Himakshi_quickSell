import React from "react";
import Bookmark from "@material-ui/icons/Bookmark";
import "./styles.scss";


export default function Navbar(sortPriority,setSortPriority) {


  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <Bookmark/>
           
            <h2>Kanban Board- Himakshi Gupta</h2>
          </div>
          
        </div>
      </nav>
    </div>
  );
}
