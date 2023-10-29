import React from "react";
import "./MainSection.css";
import Slider from "./../../components/slider";

const images = [
    'https://picsum.photos/900/500?random=1',
    'https://picsum.photos/900/500?random=2',
    'https://picsum.photos/900/500?random=3',
];

const MainSection = () => {

    return (
        <section className="main-setion">
            <Slider images={images} />
		</section>
    );

}

export default MainSection;