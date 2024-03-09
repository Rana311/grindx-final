import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="note-delete" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}

export default Note;



// import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete';
// // import DeleteIcon from "@material-ui/icons/Delete";

// function Note(props) {
//   function handleClick() {
//     props.onDelete(props.id);
//   }

//   return (
//     <div className="note">
//       <h1>{props.title}</h1>
//       <p>{props.content}</p>
//       <button class = "note-delete" onClick={handleClick}>
//         <DeleteIcon />
//       </button>
//     </div>
//   );
// }

// export default Note;