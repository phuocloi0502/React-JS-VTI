import { useState, useEffect } from "react";
function useFetch(param, url,isChange) {
    const [data, setData] = useState({});
    useEffect(() => {
        let flag = false;
        fetch(`${url}/${param}`)
            .then((resStr) => {
                return resStr.json();
            })
            .then((res) => {
                if (!flag) {
                    setData(res);
                }
            })
            .catch((err) => {
                console.log('err', err);
            });
        return () => (flag = true);
    }, [isChange])
    return [data,setData];
}
export default useFetch;
