import React, { useState } from "react";
import "./post.css"

function Post() {
  const [image, setimage] = useState();
  console.log(image);
  return (
    <div className="both" >
      <div className="inputbar" >
        <input
          onChange={(e) => {
            setimage(e.target.files[0]);
          }}
          type="file"
        />
      </div>
      <div className="imagebar">
        <img alt="" src={image ? URL.createObjectURL(image) : ""}></img>
      </div>
    </div>
  );
}

export default Post;
