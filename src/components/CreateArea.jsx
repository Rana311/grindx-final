import React, { useState } from "react";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        {isExpanded && (
          <button onClick={submitNote}>Add Note</button>
        )}
      </form>
    </div>
  );
}

export default CreateArea;



// import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
// import ZoomInIcon from '@mui/icons-material/ZoomIn';
// // import AddIcon from "@material-ui/icons/Add";
// // import Fab from "@material-ui/core/Fab";
// // import Zoom from "@material-ui/core/Zoom";

// function CreateArea(props) {
//   const [isExpanded, setExpanded] = useState(false);

//   const [note, setNote] = useState({
//     title: "",
//     content: ""
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setNote(prevNote => {
//       return {
//         ...prevNote,
//         [name]: value
//       };
//     });
//   }

//   function submitNote(event) {
//     props.onAdd(note);
//     setNote({
//       title: "",
//       content: ""
//     });
//     event.preventDefault();
//   }

//   function expand() {
//     setExpanded(true);
//   }

//   return (
//     <div>
//       <form className="create-note">
//         {isExpanded && (
//           <input
//             name="title"
//             onChange={handleChange}
//             value={note.title}
//             placeholder="Title"
//           />
//         )}

//         <textarea
//           name="content"
//           onClick={expand}
//           onChange={handleChange}
//           value={note.content}
//           placeholder="Take a note..."
//           rows={isExpanded ? 3 : 1}
//         />
//         <Zoom in={isExpanded}>
//           {/* <Fab onClick={submitNote}>
//             <AddIcon />
//           </Fab> */}
//         </Zoom>
//       </form>
//     </div>
//   );
// }

// // function CreateArea(props) {
// //   const [isExpanded, setExpanded] = useState(false);

// //   const [note, setNote] = useState({
// //     title: "",
// //     content: ""
// //   });

// //   function handleChange(event) {
// //     const { name, value } = event.target;

// //     setNote(prevNote => {
// //       return {
// //         ...prevNote,
// //         [name]: value
// //       };
// //     });
// //   } 

// //   function submitNote(event) {
// //     props.onAdd(note);
// //     setNote({
// //       title: "",
// //       content: ""
// //     });
// //     event.preventDefault();
// //   }

// //   function expand() {
// //     setExpanded(true);
// //   }

// //   function handleKeyPress(event) {
// //     const { name, value} = event.target;
// //     if (event.key === "Enter") {
// //       setNote(prevNote => ({
// //         ...prevNote,
// //         title: "" ,
// //         content: ""
// //       }));
// //       props.onAdd(note); // Trigger onAdd when Enter is pressed
// //     }
// //   }

// //   return (
// //     <div>
// //       <form className= "create-note">
// //         {isExpanded && (
// //           <input
// //         name="title"
// //         placeholder="Title"
// //         value={note.title}
// //         onChange={handleChange}
// //         onKeyDown={handleKeyPress} // Add the keydown event listener
// //       />
// //         )}
      
// //       <textarea
// //         name="content"
// //         onClick={expand}
// //         placeholder="Take a note..."
// //         rows="3"
// //         value={note.content}
// //         onChange={handleChange}
// //         onKeyDown={handleKeyPress} // Add the keydown event listener
// //       />
// //       <Zoom in={isExpanded}>
// //            <Fab onClick={submitNote}>
// //              <AddIcon />
// //            </Fab>
// //          </Zoom>
// //          <button
// //         onClick={() => {
// //           props.onAdd(note);
// //           setNote({
// //             title: "",
// //             content: ""
// //           });
// //         }}
// //       >
// //         Add
// //       </button>
// //        </form>

     
// //     </div>
// //   );
// // }

// export default CreateArea;
