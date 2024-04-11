import { useState, useEffect } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const myCount =() =>{
        setCount(count + 1);
    }
    return (
        <div>
            <h2>Count: {("0" + count).slice(-2)}</h2>
            <button type="button" onClick={() => myCount()
            }>CLick me</button>

        </div>
    );
}
const Gift = () => {
    const gifts=['Iphone 16','Macbook Pro M3', '100万円'];
    const [gift,setGift] =useState();
    const createGift =()=>{
        const index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index]);
    }

    return (
        <div>
            <hr />
            <h2>Gift: { gift || "Khong co gi ...."}</h2>
            <button type="button" onClick={() => createGift()
            }>CLick me</button>
        </div>
    );
}
const MyformInput = () =>{
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const submit =() =>{
        console.log({
            name,
            email
        })
    }
    return(
        <div>
            <hr />
            <input type="text"onChange={(e) =>{
                setName(e.target.value);
            }} /> <br />
            <input type="text" onChange={e =>{
                setEmail(e.target.value);
            }}/> <br />
            <button type="button" onClick={submit()}>Submit</button>
            <p> {JSON.stringify( {name,email})}</p>
        </div>
    )
}
const MyformRadio=() =>{
    const languages=[
        {
            id:1,
            la:"VN"
        },
        {
            id:2,
            la:"EN"
        },
        {
            id:3,
            la:"JP"
        }
    ];
    const [myChecked,setMyChecked] = useState(1);
    return (
        <div>
            <hr />
            {
                languages.map(la=>(
                <div key={la.id}>
                    <input type="radio"
                    onChange={()=>setMyChecked(la.id)}
                    checked={myChecked === la.id}
                    />
                    {la.la}
                </div>
                   
                   
                ))
            }
            <button type="button" onClick={()=>{
                console.log("checked: ",myChecked)
            }}>Submit</button>
            <p>Checked: {myChecked}</p>
        </div>
    )
}
const MyformCheckBox=() =>{
    const languages=[
        {
            id:1,
            la:"VN"
        },
        {
            id:2,
            la:"EN"
        },
        {
            id:3,
            la:"JP"
        }
    ];
    const [myChecked,setMyChecked] = useState([]);
    const handleCheck = (id) =>{
        setMyChecked(pre =>{
           const isChecked=myChecked.includes(id);
           if(isChecked){
                return myChecked.filter(item => item !==id);
           } else{
                return [...pre,id];
           }
        })
    }
    return (
        <div>
            <hr />
            {
                languages.map(la=>(
                <div key={la.id}>
                    <input type="checkbox"
                    checked={myChecked.includes(la.id)}
                    onChange={()=>handleCheck(la.id)}
                    
                    />
                    {la.la}
                </div>
                   
                   
                ))
            }
            <button type="button" onClick={()=>{
                console.log("checked: ",myChecked)
            }}>Submit</button>
            <p>Checked: {myChecked}</p>
        </div>
    )
}
const MyEffect=() =>{
    const [myData,setMyData] =useState([]);
    useEffect( () =>{
        let flag = false;
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((resStr) => {
            return resStr.json();
          })
          .then((res) => {
            if (!flag) {
    
              setMyData(res.slice(0,3));
            }
          })
          .catch((err) => {
            console.log('err', err);
          });
        return () => (flag = true);
    },[])
    console.log("my data: ",myData)
    return(
        <div>
            <hr />
            <p>My Hook Call API</p>
            {   
                myData.map( data =>(
                    <div key={data.id}>
                        <ul style={{textAlign:"left"}}>
                            <li>ID: {data.id}</li>
                            <li>Name: {data.name}</li>
                            <li>User Name: {data.username}</li>
                            <li>Phone: {data.phone}</li>
                        </ul>
                    </div>
                )
                    
                )
            }
        </div>
    )
}


export { Counter, Gift ,MyformInput,MyformRadio,MyformCheckBox,MyEffect};



