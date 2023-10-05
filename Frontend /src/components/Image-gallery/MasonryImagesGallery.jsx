import React from 'react';
import galleryImages from './galleryImages'; // Corrected import path
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter='1rem'>
        {Object.values(galleryImages).map((item, index) => (
          <img
            className="masonry__img"
            src={item}
            key={index}
            alt=""
            style={{ width: '100%', display: 'block', borderRadius: '10px' }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
