import React, { Fragment, useRef, useState } from 'react';
//import PropTypes from 'prop-types';
import { DropzoneArea } from 'material-ui-dropzone';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import BackButton from '../../BackButton';

/* imagenes */
//import { ImageConfig } from './ImageConfig';
//import uploadImg from './Img/cloud-upload-regular-240.png';

const Logotypes = (/* props */) => {

  {/* opcion reactjs */}

  /* const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add('dragover');

  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

  const onDrop = () => wrapperRef.current.classList.remove('dragover');

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    } */

    const useStyles = makeStyles(theme => createStyles({
      previewChip: {
        minWidth: 160,
        maxWidth: 210
      },
    }));

    const classes = useStyles();


    return (
        <Fragment>
            <div>
            <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12">
              <BackButton/>
              <div className="flex flex-row justify-center text-black text-2xl mx-4 w-20 mt-2 md:w-32"> 
                <h1>Logotypes</h1>
              </div>
              <button className="mr-2 bg-pink-800 hover:bg-pink-900 px-2 mt-1 h-10 text-xl text-white rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible">
                Logout
              </button>
            </nav>


          

          {/* opcion reactjs */}
          {/* <div className='border-2 p-7 shadow-lg'>
            <div
                ref={wrapperRef}
                className="relative w-96 h-52 border-2 border-neutral-800 rounded-md flex items-center justify-center"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="text-center font-semibold p-2.5 text-gray-400">
                    <img src={uploadImg} alt="" />
                    <p>Drag & Drop your files here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop}/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
            </div> */}



          {/* opcion mui */}



             <div className='mt-20 px-10'>
               <DropzoneArea
                 showPreviews={true}
                 showPreviewsInDropzone={false}
                 useChipsForPreview
                 filesLimit={1}
                 maxFileSize={950000}
                 previewGridProps={{container: { spacing: 1, direction: 'row' }}}
                 previewChipProps={{classes: { root: classes.previewChip } }}
                 previewText="Files uploads"
               />
             </div>





          </div>
        </Fragment>
    )
}

//Logotypes.propTypes = {
//  onFileChange: PropTypes.func
//}

export default Logotypes;
