import React from "react";
import { Image } from "react-bootstrap";

const Avatar = ({ src }) => {
  return (
    <div>
      <Image src={src} alt="" width="44" height="44" roundedCircle />
    </div>
  );
};

export default Avatar;
