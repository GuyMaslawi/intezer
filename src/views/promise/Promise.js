
import { useEffect, useState } from "react";

const PromiseAll = () => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        const promise1 = Promise.resolve(1);
        const promise2 = new Promise((resolve, reject) => {
            setTimeout(resolve, 100, 2);
        });
        const promise3 = Promise.resolve(3);

        Promise.all([promise1, promise2, promise3]).then((values) => {
            setValues(values);
        });
    }, []);

    return (
        values.map((value) => (
            <h1 key={value}>{value}</h1>
        ))
    );
};

export default PromiseAll;