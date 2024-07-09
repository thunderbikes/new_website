import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ImageStepper({ images }) {
  return (
    <ImageList cols={3} gap={10}>
      {images.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.imgPath}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.imgPath}?w=248&fit=crop&auto=format`}
            alt={item.label}
            loading="lazy"
            style={{ borderRadius: 20 }}
          />
          <ImageListItemBar
            title={item.label}
            style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
