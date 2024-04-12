import { useState, useEffect } from 'react';
function useFetch(id){
    const [data, setData] = useState(); 
    useEffect( () =>{
      console.log("dc goi")
        let flag = false;
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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
    },[id])
    return [data,setData];
}
export default useFetch;