import React from "react";

const Content = (props) => {
  console.log("mis à jour");
  return <div className="content">{props.num}</div>;
};

export default React.memo(Content);
