import { React, useState } from "react";
import "./home.css";
import banner from "../assets/Banner.png";
import PlayerUI from "./PlayerUI";
import chikitu from "../assets/coolie/Chikitu.mp3";
import powerhouse from "../assets/coolie/Powerhouse.mp3";
import monica from "../assets/coolie/Monica.mp3";

import rise from "../assets/dragon/Rise Of Dragon.mp3";
import maat from "../assets/dragon/Maatikkinaaru Orutharu.mp3";
import vazhi from "../assets/dragon/Vazhithunaiye.mp3";

import minnal from "../assets/amaran/Hey Minnale.mp3";
import intro from "../assets/amaran/Sai Pallavi's Intro.mp3";
import Vennilavu from "../assets/amaran/Vennilavu Saaral.mp3";

import ready from "../assets/leo/Naa-Ready.mp3";
import badass from "../assets/leo/Badass.mp3";
import Ord from "../assets/leo/Ordinary-Person.mp3";

import jingu from "../assets/thug life/Jinguchaa.mp3";
import anju from "../assets/thug life/Anju Vanna Poove.mp3";
import maara from "../assets/thug life/O Maara.mp3"

import kanni from "../assets/retro/Kanimaa.mp3";
import Kannadi from "../assets/retro/Kannadi Poove.mp3";
import one from "../assets/retro/The One.mp3";

import og from "../assets/gbu/Og Sambavam.mp3";
import god from "../assets/gbu/God Bless U.mp3";
import ranagalam from "../assets/gbu/Ranagalam.mp3";

import chil from "../assets/lb/Chillanjirukkiye.mp3";
import Aasa from "../assets/lb/Aasa Orave.mp3";
import Theme from "../assets/lb/Lubber Pandhu Theme.mp3";


import oorumBlood from "../assets/dude/Oorum_Blood.mp3";
import po from "../assets/dude/Nallaru_Po.mp3";
import singari from "../assets/dude/Singari.mp3";

import salambala from "../assets/madharasi/Salambala.mp3";
import thangapoovey from "../assets/madharasi/Thangapoovey.mp3";
import instinct from "../assets/madharasi/Animal_Instinct.mp3";


function Home() {
  const [home,sethome]=useState(true);
  const [selectedmovies, setselectedmovies] = useState({});
  // Direct song link
  // https://drive.google.com/uc?export=download&id={just paste ID here}
  // https://drive.google.com/uc?export=download&id=1lqqBSAEsdnm2gKytxP9-AO3Lu2SEW-xm
  function select(movie){
        sethome(!home);
        setselectedmovies(movie);
        console.log(selectedmovies);
        
  }
  function select2(){
    sethome(!home);
  }
  const tamil_movies = [
  {
      title: "Dude",
      year: 2025,
      music: "Sai Abhyankkar",
      poster:
        "https://lh3.googleusercontent.com/Wnv_7EuybyKQpAiIoCoM3f_UpUMDblc_LDWDPeZiBGLzuHNcRgflL8UJ3Y8VV5ir7EkLXGeOuPPJ3swN=w544-h544-l90-rj",
      songs: [
        { title: "Oorum Blood",src:oorumBlood ,poster:"https://lh3.googleusercontent.com/neWzCg5FpfvHVBIMVIxpSLjPYe_Eoj8-NYiLkT5tmO4ENVKcJGQrftRIVbBujqsP8p8ENqZZnuQabNv8=w544-h544-l90-rj" },
        { title: "Nallaru Po",src:po,poster:"https://lh3.googleusercontent.com/wT9OeYXVuf7P5mzjgOtZdAu9-872PnURnveIB6AiRoroHzlAFz2_6pMxk3XKgGuRWwCtJpn5Hkx0Ag=w544-h544-l90-rj" },
        { title: "Singari" ,src:singari,poster:"https://lh3.googleusercontent.com/29o3mo_-5Jn1XP_4cqH4Gmy2OqjBIB3BA2ttjzH7XDqQYjO4F_48nC-IwpN0JKy4bH4csI2y6Dj1Qus=w544-h544-l90-rj"},
      ],
    },
    {
      title: "Madharasi",
      year: 2025,
      music: "Anirudh Ravichander",
      poster:
        "https://lh3.googleusercontent.com/BeDWdFxMOluZO6PE1NzhZ2BUCoVjeu4lJRLeBoTei_rBYIN9Qkwua8uqQdVmyT_nkGFvNFZcK-d6huo=w544-h544-l90-rj",
      songs: [
        { title: "Salambala",src:salambala ,poster:"https://lh3.googleusercontent.com/Lzgd7Kn6caC02A-JooYp8bl5_ynpk-2AeGut31T5lCq1GXNLeOPYnJLtPIjwKnAl2_GEsREWjH-pUQai=w544-h544-l90-rj" },
        { title: "Thangapoovey",src:thangapoovey,poster:"https://i.scdn.co/image/ab67616d0000b27351e435b5b8b09a8f231d2aef" },
        { title: "Animal Instinct" ,src:instinct,poster:"https://lh3.googleusercontent.com/BeDWdFxMOluZO6PE1NzhZ2BUCoVjeu4lJRLeBoTei_rBYIN9Qkwua8uqQdVmyT_nkGFvNFZcK-d6huo=w544-h544-l90-rj"},
      ],
    },
    {
      title: "Coolie",
      year: 2025,
      music: "Anirudh Ravichander",
      poster:
        "https://lh3.googleusercontent.com/rEP8DGXzEu4hQlgTKlKMpJAVH4_hKne4nGq-G-x_w13k--GA2co00q_qNuJuKU_qj6p7GgXWadTdnA8g=w544-h544-l90-rj",
      songs: [
        { title: "Chikitu",src:chikitu ,poster:"https://lh3.googleusercontent.com/3DAWX0eNeJh4f6NSQ-GeK2kw8TiqDj1AegPkqIJlPZBlH6LW-I59g95bwDXIq_-SQIORHywxueie83Ik=w544-h544-l90-rj" },
        { title: "Power House",src:powerhouse,poster:"https://lh3.googleusercontent.com/xXcC_JlWWW9QtgaUnSfo-orjXPMMDIWzTXgYZE0NLb9DEw6__RHHpKFOGrrZUArJoUTIrD-VHXVoeYLI=w544-h544-l90-rj" },
        { title: "Monica" ,src:monica,poster:"https://lh3.googleusercontent.com/q8U3dsJi-ANbQqN9magAqRfyG6Mb-0wzMOcYOQj-9kwajuabDZMxD-_7M39y40t3sz_YuuKpI3d7VMKP=w544-h544-l90-rj"},
      ],
    },
            {
      title: "Thug Life",
      year: 2025,
      music: "A R Rahman",
      poster:
        "https://lh3.googleusercontent.com/r9UzClLbmwsKwUzWEvIAgDj9aE49Sp6SidhJCa9gqLJ1TZNYUiqBJeAENztF8jihbFu9weyV4zMocdMqxA=w544-h544-l90-rj",
      songs:[
        {title:"Jinguchaa",src:jingu,poster:"https://lh3.googleusercontent.com/HPvio4r6y_JI6mmEWaKmLz757oXlN690Ar8ZGQ38o36A4wtPZnRA002RR8Cqtw2FUiyDlpxtZvGKynx8=w544-h544-l90-rj"},
        {title:"Anju Vanna Poove",src:anju,poster:"https://lh3.googleusercontent.com/r9UzClLbmwsKwUzWEvIAgDj9aE49Sp6SidhJCa9gqLJ1TZNYUiqBJeAENztF8jihbFu9weyV4zMocdMqxA=w544-h544-l90-rj"},
        {title:"O Maara",src:maara,poster:"https://lh3.googleusercontent.com/r9UzClLbmwsKwUzWEvIAgDj9aE49Sp6SidhJCa9gqLJ1TZNYUiqBJeAENztF8jihbFu9weyV4zMocdMqxA=w544-h544-l90-rj"}
      ]
    },
            {
      title: "Retro",
      year: 2025,
      music: "Santhosh Narayanan",
      poster:
        "https://lh3.googleusercontent.com/tiSgfcvmkq-snCqGA-HMXwsmvBujbMbreF-hyqlNAusC378SNEFD7W9LeyYGsVT5AhXvhDMWI0Oq2mV3=w544-h544-l90-rj",
      songs:[
        {title:"Kannima",src:kanni,poster:"https://i.scdn.co/image/ab67616d0000b273116633561ca7705cdbcc9656"},
        {title:"Kannadi Poove",src:Kannadi,poster:"https://i.scdn.co/image/ab67616d0000b2733feeceaf6adaa22e57791da0"},
        {title:"The One",src:one,poster:"https://i.scdn.co/image/ab67616d0000b273e7b5cf02c7a3df4a85957484"}
      ]
    },
        {
      title: "Good Bad Ugly",
      year: 2025,
      music: "G V Prakash",
      poster:
        "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c84068564ef6f2a7abaf6a1b6",
      songs:[
        {title:"OG Sambavam",src:og,poster:"https://i.scdn.co/image/ab67616d0000b2734e2fc4e9342592b98bab3e3d"},
        {title:"God Bless U",src:god,poster:"https://i.scdn.co/image/ab67616d0000b273956e56e2162073b735bd1e98"},
        {title:"Ranagalam",src:ranagalam,poster:"https://i.scdn.co/image/ab67616d0000b27321df94e3321238c67b7b08ab"}
      ]
    },
    {
      title: "Dragon",
      year: 2025,
      music: "Leon James",
      poster:
        "https://lh3.googleusercontent.com/jSL4nsjdSvLLfA3ET5H0s_uXQz05_OEkOa2OfYmtbKaww9mt1HBzfZSR5ytyRI8FZRhGQ04U5g5MpPsD=w544-h544-l90-rj",
      songs:[
        {title:"Rise of Dragon",src:rise,poster:"https://lh3.googleusercontent.com/mDGRrRtqvPwEYFy5tz0nQLRfQaOuvvcTcX18R5x3kRtpaIEemjTmNcjSJSNDcm4YFVIqirAsNyONucEbEQ=w544-h544-l90-rj"},
        {title:"Maatikkinaru Orutharu",src:maat,poster:"https://lh3.googleusercontent.com/nLATOsQk9st1W_e9a0UIsbSo0Zr-PrDVhCzK73e1uFqpu2Ka77HrhQPRvIl9Hzgm7aDqVPUmfVFW4EDf=w544-h544-l90-rj"},
        {title:"Vazhithunaye",src:vazhi,poster:"https://lh3.googleusercontent.com/2oih5bqW8pSjDc7OQZg30rG55tWIwaWB3lecbvbHjVLIUHcYgi85nDTOcpDlT8ofrthmdi1v3J8qAwhD=w544-h544-l90-rj"}
      ]
    },
    {
      title: "Amaran",
      year: 2024,
      music: "G V Prakash",
      poster:
        "https://lh3.googleusercontent.com/trGAd1s16duiX3h6T0J6MsSdoimLw1YuBGQFlFsNIkJmsA49oQueXLiJ9UCm-8nJCv5P3xdoJBEg_07yow=w544-h544-l90-rj",
              songs: [
        { title: "Hey Minnale",src:minnal ,poster:"https://lh3.googleusercontent.com/tETw7MM7-S7RmVrDalJmmp6r8GbJwObQzuADQmUZ6v1EMYZBOzVXpA8VkpT6mvFPksKm9k9Ck2xm_uk=w544-h544-l90-rj" },
        { title: "Sai Pallavi's Intro",src:intro,poster:"https://lh3.googleusercontent.com/HZmLjDoaJmAD8per96bQPJZyKknCIomwGEjdZT5X2LQinePaUCkxO6hbpTU6y_WQPhb13D55or_4J2gr=w544-h544-l90-rj" },
        { title: "Vennilavu Saaral" ,src:Vennilavu,poster:"https://lh3.googleusercontent.com/4vIowaDvddpzM_8Hx8KmV_EpH6SymeVmLGuwXOwmethH1pY0780A5V8dibdKwWWcCka3vTx8OPrnW5ZcpA=w544-h544-l90-rj"},
      ],
    },



        {
      title: "Lubber Pandhu",
      year: 2024,
      music: "Sean Roldan",
      poster:
        "https://i.scdn.co/image/ab67616d0000b273868c5da6dee0584ca2a72b72",
      songs:[
        {title:"Chillanjirukkiye",src:chil,poster:"https://lh3.googleusercontent.com/IjFnhK9otkwBqKyFzFqH2G1C-D1b8ENt9jsL9qs-4TK9wYG5fqlWvu1wuoQ0rFiAhm9qjSlvXYaA806fGg=w544-h544-l90-rj"},
        {title:"Aasa Orave",src:Aasa,poster:"https://lh3.googleusercontent.com/J9euRdw2XCjiW0zkge7EGIbtkpipr5PidjNzxaTKBBbfFxxNicRBxD0Qv6XJ2KdGOBs0vg64G815KjSb=w544-h544-l90-rj"},
        {title:"Lubber Pandhu Theme",src:Theme,poster:"https://lh3.googleusercontent.com/ZoozmHWMZeLwXVgcmrNnyBjHmgf_wOI8NTCtLgjgVapquUORf1MVmWwcU-9H6G_806eaETKl5tLiK7M=w544-h544-l90-rj"}
      ]
    },
        {
      title: "Leo",
      year: 2023,
      music: "Anirudh Ravichander",
      poster:
        "https://lh3.googleusercontent.com/f3kYwLkC5vROJGEnO-l676KxN2KVWeCQvqBaINDlWTAHGVCzbnfB33s_pL6aHPL-qS5i1laGquX_Dt8V=w544-h544-l90-rj",
                      songs: [
        { title: "Naa Ready",src:ready ,poster:"https://lh3.googleusercontent.com/TJKv1uw804AZNOYgck6YlJ3gC9sJyVuTpH2PNBr5dbujyKpc8g2mU_vDRSZEQd4z1PmxnIOp9w0-6DE=w544-h544-l90-rj" },
        { title: "Badass",src:badass,poster:"https://lh3.googleusercontent.com/rhb6EEfG0jcl2zyVOqFRuxBWE1gDtCI8O6tToSurheMbRwsEAZ1YYuNZ5MN80ESWmECNRzY0TF0gw3w5=w544-h544-l90-rj" },
        { title: "Ordinary Person" ,src:Ord,poster:"https://lh3.googleusercontent.com/c7kNvRY1uGxfIMfGD261vFXq4UrZhgFSiYVWxfSMkHCmHhfgh-z1xR_qDz8mbvRDFJ1pXM8R6zngDmg=w544-h544-l90-rj"},
      ],
    },
  ];
if (home) {
    return (
      <div className="bg-black">
        {/* Banner Section */}
        <div className="text-3xl font-bold text-white">
          <div className="relative">
            <img src={banner} className="h-[140px] lg:h-[500px] lg:w-[100%]" alt="" />
            {/* <div className="absolute text-2xl lg:text-8xl [top:45px] [right:85px] lg:[top:170px] lg:[right:330px] bebas-neue-regular">
              Vibe HUB
            </div>
            <div className="absolute text-xl [top:80px] [right:85px] lg:text-[39px] lg:[top:290px] lg:[right:75px] bebas-neue-regular">
              Your music, your mood, all in one place
            </div> */}
          </div>
        </div>

        {/* Tamil Songs Section */}
        <div className="text-white">
          <div className="font-bold text-4xl m-3 p-5 pt-10 pb-10 pop">Tamil Hit Songs</div>
          <div className="flex flex-wrap ml-10 gap-4">
            {tamil_movies.map((tamil_movie, index) => (
              <div key={index}>
                <img
                  src={tamil_movie.poster}
                  className="h-[250px] w-[250px] ml-[65px] lg:h-[300px] lg:w-[300px] lg:ml-10 rounded-xl mb-3"
                  alt=""
                  onClick={()=>select(tamil_movie)}
                />
                <div className="ml-[65px] font-bold text-2xl lg:ml-11">{tamil_movie.title}</div>
                <div className="ml-[65px] opacity-50 lg:ml-11 mb-5">{tamil_movie.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // You can return a different view here if selectedmovies !== 0
  return (
    <div className="bg-black text-white text-center p-5 lg:p-10 ">
      {/* <h1 className="text-4xl font-bold" onClick={()=>select2()} >Other view goes here</h1> */}
      <PlayerUI select2={select2} movie={selectedmovies} songs={selectedmovies.songs}/>
    </div>
  );
}

export default Home;

// {tamil_movies.map((tamil_movie,index)=>{
//   return(
//   <div key={index}>
//     <img src={tamil_movie.poster} className='h-[300px] w-[300px] ml-10 rounded-xl mb-3' alt="" />
//     <div className="font-bold text-2xl ml-11">{tamil_movie.title}</div>
//     <div className="opacity-[50%] ml-11 mb-3">{tamil_movie.year}</div>
//   </div>
//   )
// })}
