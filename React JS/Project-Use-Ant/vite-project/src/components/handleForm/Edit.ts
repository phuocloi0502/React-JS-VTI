import axios from "axios"
import { useNavigate } from "react-router-dom";
export const EditUser =( url,data) =>{
    let navigate = useNavigate();
    axios.put(url, data)
    .then(res => {
        alert('saad')
    })
    .catch(err => {
        console.error(err)
    })
}