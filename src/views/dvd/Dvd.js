import { useEffect, useRef, useState } from "react";
import { DVD_IMAGE } from "../../constants/dvd";
import { Img, Wrapper } from "./Dvd.style";

const FPS = 60;
const xSpeed = 10;
const ySpeed = 10;

const Dvd = () => {
    const imgRef = useRef();
    const [sizes, setSizes] = useState({
        left: 10,
        top: 10,
    });

    useEffect(() => {
        const internal = setInterval(() => {
            setSizes(...sizes, {
                left: {...left + xSpeed},
                top: {...top + ySpeed},
            })
        }, 1000 / FPS);

        internal();

        return () => clearInterval(internal);
    }, []);

    return (
        <Wrapper>
            <Img src={DVD_IMAGE} alt="dvd img" ref={imgRef} top={sizes.top} left={sizes.left} />
        </Wrapper>
    );
};

export default Dvd;