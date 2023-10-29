import React, {useState, useEffect} from "react";
import styles from './Slider.module.css';
import {FaChevronRight,FaChevronLeft} from 'react-icons/fa';



const Slider = ({images}) => {

    const [currentImage, setCurrentImage] = useState(0);
    const quantity = images?.length;
    
   

    const nextImage = () => {
        setCurrentImage(currentImage === quantity - 1? 0 : currentImage + 1);
    }

    const previousImage = () => {
        setCurrentImage(currentImage === 0? quantity - 1 : currentImage - 1);
    }

    useEffect(() => {
        
        const ciclo = setInterval(nextImage,5000);

        return () => {
            clearInterval(ciclo);
        }

    },[nextImage])


    if(!Array.isArray(images) || quantity === 0 ){
        return;
    }
    
    return (

        
        <div className={styles.container} >
            
            {
                images.map((image, index) => {
                   
                    return (<div className={currentImage === index ? `${styles.slide} ${styles.active} `:`${styles.slide}` }>
                    <FaChevronLeft onClick={() => previousImage()} className={`${styles.iconrow} ${styles.left}`} /> 
                        
                        {currentImage === index && (
                            <img key={index} src={image} alt={image} className={styles.img} />
                        )}
                    <FaChevronRight onClick={() => nextImage()} className={`${styles.iconrow} ${styles.right}`} />
                    </div>); 
                })
            }
            
        </div>
    );

}

export default Slider;