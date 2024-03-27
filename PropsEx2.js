import React from "react";
import "./PropsEx2.css";
import data from "./data";

export default function PropsEx2() {
  return (
    <main className="container">
      <ul className="comments-container">
        {data.map((eachComment) => {
          const { id, email, name, body } = eachComment;
          return (
            // 2 way and 3 way implement code de-structuring
            <ListItem key={id} id={id} email={email} name={name} body={body} />

        // 1 way of using same line code
            // <li key={id} className="comment">
            //   <div className="comments-header">
            //     <h3 className="email">{email}</h3>
            //     <h3 className="name">{name}</h3>
            //   </div>
            //   <div className="message">{body}</div>
            // </li>
          );
        })}
      </ul>
    </main>
  );
}


// 2 way to implement code  de-structuring
// const ListItem = (props)=>{
//     const { id, email, name, body } = props
//     return(
//         <li key={id} className="comment">
//         <div className="comments-header">
//           <h3 className="email">{email}</h3>
//           <h3 className="name">{name}</h3>
//         </div>
//         <div className="message">{body}</div>
//       </li>
//     )
// }

// 3 way of code implement  de-structuring
const ListItem = ({id, email, name, body})=>{
    // const { id, email, name, body } = props
    return(
        <li key={id} className="comment">
        <div className="comments-header">
          <h3 className="email">{email}</h3>
          <h3 className="name">{name}</h3>
        </div>
        <div className="message">{body}</div>
      </li>
    )
}