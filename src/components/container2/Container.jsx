import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import './style.css'
import TypingText from '../typingText/TypingText';
import 'semantic-ui-css/semantic.min.css'
import { Popup } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

function CustomComponent2() {
  const [openPopup, setOpenPopup] = useState(false);
  const [imagePosition, setImagePosition] = useState('center');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setImagePosition('top');
    }, 1500);

    const timeoutId2 = setTimeout(() => {
      setOpenPopup(true);
    }, 2500);

    return () => clearTimeout(timeoutId,timeoutId2);
  }, []);

  // const handleClose = () => {
  //   setOpenPopup(false);
  // };

  return (
    <div className="profile-image">
      <Popup  //CHECK THE CLASS OF THIS COMPONENT AND INCREASE THE SIZE OF IT!!!!
        trigger={
          <Image
            style={{marginTop:'-140px', marginLeft:'1050px'}}
            size="small"
            src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6"
            className={`image-${imagePosition}`}
          />
        }
        // on="click"
        open={openPopup}
        // onClose={handleClose} Commenting this will prevent the TypingText ChatBox to get closed when clicked out of it.
        position="bottom right"
        content={
          <div className="typing-text-container">
            <Typography
              sx={{
                p: 8,
                padding: "20px",
              }}
            >
              <TypingText type={"Me"} />
            </Typography>
          </div>
        }
        className='popup-class'
      />
    </div>
  );
}

export default CustomComponent2;
