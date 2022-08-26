import React from "react";
import { Image } from "react-bootstrap";

const Avatar = (props) => {
  return (
    <div>
      <Image src={props.src} alt="" width="44" height="44" roundedCircle />
    </div>
  );
};

export default Avatar;
