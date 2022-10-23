import React, {useState}  from 'react'
import Axios from 'axios'

const UserCreation =()=>{
    const [fields, setFeilds]=useState({
        name:'',
        email:'',
        mobileNo:''
    })


   const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(fields);
    try{
//         const record=await Axios.post('http://localhost:5000/app/createUserData',{body:{name:'khaleel'}}).then(response=>{
//             console.log(JSON.stringify(record))
//             console.log(response)
//             setFeilds(response)
//    });
               
//    setFeilds({name:'',
//    email:'',
//    mobileNo:''})
  const response = await Axios({
    method: 'POST',
    url: 'http://localhost:5000/app/createUserData',
    data: {
      fields
    },
    headers: {
        'Content-Type': 'application/json',
    }
  });
    }catch(err){
        console.log(err)
    }
    }


   const handleChange=(event)=>{
        setFeilds({...fields, [event.target.name]:event.target.value})
   }

    return (
        <form onSubmit={e=>{handleSubmit(e)}}>
            <div> USer Creation Data</div>
            <div>
            <label>
                Name:
                <input type="text" name='name'  value={fields.name} onChange={e=>{handleChange(e)}}/>
            </label>   
            </div>
            <div>
            <label>
                Email:
                <input type="text" name='email'value={fields.email} onChange={e=>{handleChange(e)}}/>
            </label>
            </div>
            <div>
            <label>
                MobileNumber:
                <input type="text" name='mobileNo' value={fields.mobileNo} onChange={e=>{handleChange(e)}}/>
            </label> 
            </div>
            <div>  
                <input type="submit" value="Submit" />
            </div>

</form>
    )
}

export default UserCreation