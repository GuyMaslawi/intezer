export const DISPLAY_CODE = `useEffect(() => {
        const promise1 = Promise.resolve(1);
        const promise2 = new Promise((resolve, reject) => {
            setTimeout(resolve, 100, 2);
        });
        const promise3 = Promise.resolve(3);
        promiseAll([promise1, promise2, promise3])
    }, []);

    const promiseAll = async(arr) => {
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
    };`