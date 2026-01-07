import React from 'react'
import { useState,useRef,useEffect } from 'react';
import "./Dragon_home.css";
import "boxicons/css/boxicons.min.css";

function PlayerUI({select2,movie,songs}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(new Audio());

  // Format seconds -> mm:ss
  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Load song whenever index changes
  useEffect(() => {
    if (!songs || songs.length === 0) return;

    audioRef.current.src = songs[currentIndex].src;

    const handleCanPlay = () => {
      setDuration(audioRef.current.duration || 0);
      if (isPlaying) {
        audioRef.current.play().catch((err) =>
          console.log("Playback error:", err)
        );
      }
    };

    const updateProgress = () => {
      setProgress(audioRef.current.currentTime);
    };

    audioRef.current.addEventListener("canplay", handleCanPlay);
    audioRef.current.addEventListener("loadedmetadata", handleCanPlay);
    audioRef.current.ontimeupdate = updateProgress;

    return () => {
      audioRef.current.removeEventListener("canplay", handleCanPlay);
      audioRef.current.removeEventListener("loadedmetadata", handleCanPlay);
      audioRef.current.pause();
    };
  }, [currentIndex, songs]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    audioRef.current.currentTime = e.target.value;
    setProgress(e.target.value);
  };
    
      return (
        <div>
          <center>
            <div className="navv">
              <div className="back" onClick={select2}>
                <i className="bx bx-arrow-back text-2xl lg:text-4xl in"></i></div>
              <center><h1 className="opacity-100 headi ml-7 text-3xl mt-2 font-bold lg:opacity-0">{movie.title}</h1></center>
              <div className="lis opacity-0"><i className="bx bx-menu"></i></div>
            </div>
          </center>
    
          <div className="main">
            {/* LEFT SIDE */}
            <div className="left">
              <div className="left_top">
                <div className="left1">
                  <center>
                    <img src={movie.poster} alt="poster" className="image" />
                  </center>
                </div>
                <div className="left2">
                  <center>
                    <table className="movie">
                      <tbody>
                        <tr><td className='font-bold text-6xl pb-7' >{movie.title}</td></tr>
                        <tr><td>{movie.music}</td></tr>
                        <tr><td>{movie.year}</td></tr>
                        {/* <tr><td><b>Director:</b></td><td>Ashwath Marimuth</td></tr> */}
                        
                      </tbody>
                    </table>
                  </center>
                </div>
              </div>
    
              <ol className="songs_list">
                {songs.map((song, index) => (
                  <React.Fragment key={index}>
                    <li 
                        style={{
      color: currentIndex === index ? "rgb(58, 253, 58)" : "white",
      // fontWeight: currentIndex === index ? "bold" : "normal",
    }}
                    className='flex pl-5 pop' onClick={() => { setCurrentIndex(index); setIsPlaying(true);  }}>
                      {index + 1}. {song.title}
                    </li>
                  </React.Fragment>
                ))}
              </ol>
            </div>
    
            {/* RIGHT SIDE */}
            <div className="right">
              <div className="right_top">

                <center>
                  <img src={songs[currentIndex].poster} alt="" id="song_imagee" />
                </center>
                {/* <center> */}
                  <marquee className="move" behavior="scroll" direction="left">
                    <h1 className="headi m-2 mt-2 flex  text-3xl lg:text-4xl font-bold">{songs[currentIndex].title}</h1>
                  </marquee>
                {/* </center> */}
              </div>
    
              
              <div className="right_bottom">
                <center>
                  
                  <input
                    type="range"
                    id="progress"
                    value={progress}
                    max={audioRef.current.duration || 0}
                    onChange={handleProgressChange}
                  />
                                <div>
                <span className='text-lg'>{formatTime(progress)}</span> /{" "}
                <span className='text-lg'>{formatTime(duration)}</span>
              </div>
                </center>
                <div className="controls">
                  <div className="prev" onClick={() => setCurrentIndex((currentIndex - 1 + songs.length) % songs.length)}>
                    <i className="bx bx-skip-previous"></i>
                  </div>
                  <div className="play" onClick={togglePlayPause}>
                    <i className={`bx ${isPlaying ? "bx-pause" : "bx-play"}`} id="ctrlicon"></i>
                  </div>
                  <div className="next" onClick={() => setCurrentIndex((currentIndex + 1) % songs.length)}>
                    <i className="bx bx-skip-next"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PlayerUI
