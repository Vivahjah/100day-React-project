import React, { useRef, useState } from "react";


import "./drop-file-input.css";

import { ImageConfig } from "../../config/ImageConfig";
import uploadImg from "../../assets/cloud-upload-regular-240.png";

const DropFileInput = (props) => {
  const [fileList, setFileList] = useState([]);

  const wrapperRef = useRef(null);
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);

  }

  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDrop={onDrop}
        onDragLeave={onDragLeave}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="upload" />
          <p>Click or drag and drop your file</p>
        </div>
        <input type="file" onChange={onFileDrop} />
      </div>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Ready to upload</p>
          {fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item">
              <img
                src={
                  ImageConfig[item.type.split("/")[1]] || ImageConfig["default"]
                }
                alt="file icon"
              />
              <div key={index} className="drop-file-preview__item__info">
                <p>{item.name}</p>
                <p>{item.size}</p>
              </div>
              <span
                onClick={() => fileRemove(item)}
                className="drop-file-preview__item__del"
              >
                x
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};


export default DropFileInput;
