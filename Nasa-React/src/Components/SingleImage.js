import React from 'react';
import './styel.css';

export default function SingleImage(image) {
  return (
    <div>
      <img alt={image.image.id} className="photo" src={image.image.img_src}></img>
    </div>
  );
}
