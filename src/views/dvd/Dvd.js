import { useEffect, useRef, useState } from "react";
import { Text, Wrapper } from "./Dvd.style";

let xSpeed;
let ySpeed;

const randColor = () => `#${Math.random().toString(16).slice(2, 8)}`;

const Dvd = () => {
    const imgRef = useRef(null);
    const wrapperRef = useRef(null);
    const [positions, setPositions] = useState({
        x: 0,
        y: 0,
    });
    const [color, setColor] = useState('#fff');

    const init = () => {
        xSpeed = 10;
        ySpeed = 10;
    };

    useEffect(() => {
        const intervalDvd = setInterval(() => {
            setPositions({
                x: positions.x += xSpeed,
                y: positions.y += ySpeed
            });
            if (positions.x + 200 >= wrapperRef.current.offsetWidth
                || positions.x === 0) {
                xSpeed = -xSpeed;
                setColor(randColor());
            }
            if (positions.y + 120 >= wrapperRef.current.offsetHeight
                || positions.y === 0) {
                ySpeed = -ySpeed;
                setColor(randColor());
            }
        }, 30);

        return () => clearInterval(intervalDvd);
    });

    useEffect(() => {
        init();
    }, []);

    return (
        <Wrapper ref={wrapperRef}>
            <Text
                color={color}
                ref={imgRef}
                top={positions.y}
                left={positions.x}
            >
                DVD
            </Text>
        </Wrapper>
    );
};

export default Dvd;