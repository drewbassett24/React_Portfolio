import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import carousel4 from "../../assets/carousel4.jpg";
import carousel5 from "../../assets/carousel5.jpg";

const items = [
    {
        src: carousel1,
        altText: "image 1",
        key: '1'
    },
    {
        src: carousel2,
        altText: "image 2",
        key: '2'
    },
    {
        src: carousel3,
        altText: "image 3",
        key: '3'
    },
    {
        src: carousel4,
        altText: "image 4",
        key: '4'
    },
    {
        src: carousel5,
        altText: "image 5",
        key: '5'
    },

];

const Carousel = () => <UncontrolledCarousel items={items} />;
 
export default Carousel;