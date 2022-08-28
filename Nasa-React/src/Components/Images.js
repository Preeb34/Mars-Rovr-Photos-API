import React from 'react';
import SingleImage from './SingleImage';

export default function Images(imagesArray) {
  return imagesArray.image.map((imageobj) => <SingleImage key={imageobj.id} image={imageobj} />);
}
