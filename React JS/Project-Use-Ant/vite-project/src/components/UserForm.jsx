import "../css/UserForm.css"
export const UserForm=() =>{
    return(
        <div className="user-form">
             <h1>User Manager</h1>
            <div className="row col-1">
               <label >User name:</label>
               <input type="text" />
            </div>
            <div className="row col-1">
               <label >Full name:</label>
               <input type="text" />
            </div>
            <div className="row col-1">
               <label >Address:</label>
               <input type="text" />
            </div>
            <div className="row col-1">
               <label >Phone:</label>
               <input type="text" />
            </div>
            <div className="row col-1">
               <label >Avatar:</label>
               <input type="file" />
            </div>
            <div >
                <button className="button-action add">Add</button>
                <button className="button-action edit">Edit</button>
            </div>
        </div>
    )
}