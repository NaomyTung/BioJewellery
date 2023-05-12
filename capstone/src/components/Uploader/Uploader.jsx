import React from 'react'
import './Uploader.css'
import { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

function Uploader() {
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No Selected file")
    return (
        <div className='upload'>
            <div>
                <div onClick={() => document.querySelector(".upload__input").click()}>
                    <input
                        type="file"
                        multiple="multiple"
                        accept='image/*'
                        className="upload__input"
                        hidden
                        onChange={({ target: { files } }) => {
                            files[0] && setFileName(files[0].name)
                            if (files) {
                                setImage(URL.createObjectURL(files[0]))
                            }
                        }}
                    />

                    {image ?
                        <img src={image} alt={fileName} />
                        :
                        <>
                            <div className='upload__icons-upload'>
                                <AiOutlineCloudUpload color='#1475cf' size={60} />
                            </div>

                            <p>Browse Files to Upload</p>
                        </>
                    }

                    <div>
                        <h1>{fileName}</h1>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Uploader;