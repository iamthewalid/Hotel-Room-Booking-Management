import { useEffect, useState } from 'react';
import './user.css';

const UserImageUpload = () => {
  const [img, setImg] = useState();

  useEffect(() => {
    return () => URL.revokeObjectURL(img);
  }, [img]);

  const handleImageChange = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImg(url);
  };

  return (
    <div className="img-upload">
      <div className="img-upload__img-wrapper">
        {img ? (
          <img src={img} alt="Current profile photo" />
        ) : (
          <div className=" h-16 w-16 bg-purple-600 rounded-full" />
        )}
      </div>
      <label className="img-upload__btn">
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
      </label>
    </div>
  );
};

export default UserImageUpload;
