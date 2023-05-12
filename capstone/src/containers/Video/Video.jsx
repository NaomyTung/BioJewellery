import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Video.css';

const Intro = () => {
    const [playVideo, setPlayVideo] = React.useState(false);
    const vidRef = React.useRef();

    return (

        <div className='video'>
            <video

                ref={vidRef}
                src={video}
                type='video/mp4'
                loop
                controls={false}
                muted
            /> 

            <div className='video__overlay app__flex-center'>
                <div
                    className='video__overlay-circle app__flex-center'
                    onClick={() => {
                        setPlayVideo(!playVideo);
                        if (playVideo) {
                            vidRef.current.pause();
                        }
                        else {
                            vidRef.current.play();
                        }
                    }}
                >
                    {playVideo
                        ? <BsPauseFill color='#fff' fontSize={30} />
                        : <BsFillPlayFill color='#fff' fontSize={30} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Intro;