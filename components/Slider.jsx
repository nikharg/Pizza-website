import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Slider.module.css";

const Slider = () => {
  const imgArr = ["/img/slider1.jpg", "/img/slider2.jpg", "/img/slider3.jpg"];
  const [image, setImage] = useState(0)
  
  function handleClick(direction) {
    if(direction==="l"){
        (image===0 ? setImage(-200) : setImage(()=>image+100))
    }if(direction==="r"){
        (image===-200 ? setImage(0) : setImage(()=>image-100))
    }
  };


  return (
    <div className={styles.mainContainer}>
      <div className={styles.arrow} style={{ left: "1vw" }}>
        <Image src="/img/arrowl.png" layout="fill" onClick={()=>handleClick("l")} />
      </div>
      <div className={styles.sliderOuter} >
        {imgArr.map((img, index) => (
          <div className={styles.sliderInner} key={index} style={{transform: `translateX(${image}vw)`}}>
            <Image src={img} layout="fill" objectFit="cover" priority="true"/>
          </div>
        ))}
      </div>
      <div className={styles.arrow} style={{ right: "1vw" }}>
        <Image src="/img/arrowr.png" layout="fill" onClick={()=>handleClick("r")} />
      </div>
    </div>
  );
};

export default Slider;
