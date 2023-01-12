import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../../redux/gallery/gallerySlice";

export default function GalleryPage() {
  const [imgUrl, setimgUrl] = useState("");
  const [alt, setAlt] = useState("");
  const dispatch = useDispatch();
  const imgArr = useSelector((state) => state.gallery.images);
  //   console.log(imgArr);

  const onChangeImgAdd = ({ target: { value, name } }) => {
    switch (name) {
      case "imageUrl":
        setimgUrl(value);
        break;

      case "alt":
        setAlt(value);
        break;

      default:
        return;
    }
  };

  const onFormImgSubmit = (event) => {
    event.preventDefault();
    const newImg = {
      url: imgUrl,
      alt,
      id: nanoid(),
    };
    dispatch(addImage(newImg));
    setimgUrl("");
    setAlt("");
  };

  return (
    <>
      <form onSubmit={onFormImgSubmit}>
        <input
          name="imageUrl"
          type="text"
          value={imgUrl}
          onChange={onChangeImgAdd}
        />
        <input name="alt" type="text" value={alt} onChange={onChangeImgAdd} />
        <button type="submit">Add photo</button>
      </form>
      <ul>
        {imgArr.map((img) => (
          <li key={img.id}>
            <img src={img.url} height={150} alt={img.alt} />
          </li>
        ))}
      </ul>
    </>
  );
}
