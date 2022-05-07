
import { useEffect, useState } from "react";
import { CodeBlock, nord } from 'react-code-blocks';
import { DISPLAY_CODE } from "../../constants/promise";
import { Wrapper, Text } from "./Promise.style";

const PromiseAll = () => {
    const [values, setValues] = useState([]);
    const showLineNumbers = !!('showLineNumbers', true);
    const wrapLines = !!('wrapLines', true);
    const codeBlock = !!('codeBlock', true);

    useEffect(() => {
        const promise1 = Promise.resolve(1);
        const promise2 = new Promise((resolve) => {
            setTimeout(resolve, 100, 2);
        });
        const promise3 = Promise.resolve(3);
        promiseAll([promise1, promise2, promise3])
    }, []);

    const promiseAll = async (arr) => {
        if (!arr.length) {
            return null;
        }
        const total = arr.length;
        const result = [];
        for (let i = 0; i < total; i++) {
            try {
                const res = await Promise.resolve(arr[i]);
                if (res) {
                    result.push(res);
                }
            } catch (err) {
                return err;
            }
        }
        setValues(result);
    };

    return (
        <Wrapper>
            <Text>
                <span>Results: [</span>
                {values.map((value) => <span key={value}>{value}</span>)}]
            </Text>
            <CodeBlock
                text={DISPLAY_CODE}
                language={'js'}
                theme={nord}
                {...{ showLineNumbers, wrapLines, codeBlock }}
            />
        </Wrapper>
    );
};

export default PromiseAll;