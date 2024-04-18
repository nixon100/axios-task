import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import e from 'cors';

function App() {
  const [api, setApi] = useState([]);
  const [edit ,setEdit]= useState(false);
  const [add ,setAdd]= useState(false);
  const [show, setShow] = useState(true);
  const [input,setInput] = useState({
    "id": "",
    "name": "",
    "username": "",
    "email": "",
    "address": {
        "street": "",
        "suite": "",
        "city": "",
        "zipcode": "",
        "geo": {
            "lat": "",
            "lng": ""
        }
    },
    "phone": "",
    "website": "",
    "company": {
        "name": "",
        "catchPhrase": "",
        "bs": ""
    }
})
const [num,setNum] = useState()
 
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/")
     .then(res => setApi(res.data))
     .catch(err => console.log(err))
  }, []);

  const handleDelete = (id) => {
  
    console.log(id)
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then(res => {
        const updatedApi = api.filter(item => item.id!== id);
        setApi(updatedApi);
      })
     .catch(err => console.log(err));
  };

  // const handlePost = () => {
  //   axios.post("https://jsonplaceholder.typicode.com/users/", {
  //     "name": "John Doe",
  //     "email": "john.doe@example.com",
  //     "username": "john_doe"
  //   })
  //    .then(res => {
  //       setApi([...api, res.data]);
  //     })
  //    .catch(err => console.log(err));
  // };
  const handleEdit = (id) => {
    setEdit(true);
    setShow(false);
setNum(id);
console.log(id)
   
    //   axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
    //   "name": "John Doe",
    //   "email": "john.doe@example.com",
    //   "username": "john_doe"
    // })
    // .then(res => {
    //     const updatedApi = api.map(item => item.id === id? res.data : item);
    //     console.log(res.data)
    //     setApi(updatedApi);
    //   })
    // .catch(err => console.log(err));
      
  };
  // const handle=()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/users/")
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err))
  // }
  const adding =()=>{
    setAdd(true);
    setShow(false);
  }
  const cancell = () => {
    setAdd(false);
    setShow(true);
  };
  const cancelll = () => {
    setEdit(false);
    setShow(true);
  };
  const save = (input) => {
 
    console.log(input)
    axios.post("https://jsonplaceholder.typicode.com/users/", input)
     .then(res => {
      const a = ({...res.data,id :api.length+1})
      
      
        setApi([...api, a]);
        
        console.log(res)
        setShow(true);
        setAdd(false);
      })
     .catch(err => console.log(err));
     setInput({
      "id": "",
      "name": "",
      "username": "",
      "email": "",
      "address": {
          "street": "",
          "suite": "",
          "city": "",
          "zipcode": "",
          "geo": {
              "lat": "",
              "lng": ""
          }
      },
      "phone": "",
      "website": "",
      "company": {
          "name": "",
          "catchPhrase": "",
          "bs": ""
      }
  })
  }
  const save1 = (id,input)=>{
    console.log(id)
    //  axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, input)
    // .then(res => {
        const updatedApi = api.map(item => item.id === id? input : item);
        // console.log(res.data)
        setApi(updatedApi);
    //   })
    // .catch(err => console.log(err));
    setEdit(false)
    setShow(true)
  //   setInput({
  //     "id": "",
  //     "name": "",
  //     "username": "",
  //     "email": "",
  //     "address": {
  //         "street": "",
  //         "suite": "",
  //         "city": "",
  //         "zipcode": "",
  //         "geo": {
  //             "lat": "",
  //             "lng": ""
  //         }
  //     },
  //     "phone": "",
  //     "website": "",
  //     "company": {
  //         "name": "",
  //         "catchPhrase": "",
  //         "bs": ""
  //     }
  // })
    
  }


  const edit1 = (
    <>
    <div className='container'>
    <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Name</span>
  <input type="text" className="form-control" placeholder="Name" aria-label="Username" onChange={(e)=>{setInput({...input,name:e.target.value})}} aria-describedby="addon-wrapping"/>
</div>
  <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Company Name</span>
  <input type="text" className="form-control" placeholder="Company Name" aria-label="Username"onChange={(e)=>{setInput({...input,company:{...edit.company,name:e.target.value}})}} aria-describedby="addon-wrapping"/>
</div>
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">City</span>
  <input type="text" className="form-control" placeholder="City" aria-label="Username" onChange={(e)=>{setInput({...input,address:{...edit.address,city:e.target.value}})}}aria-describedby="addon-wrapping"/>
  </div>
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Website</span>
  <input type="text" className="form-control" placeholder="Website" aria-label="Username" onChange={(e)=>{setInput({...input,website:e.target.value})}} aria-describedby="addon-wrapping"/>
</div>
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Phone</span>
  <input type="text" className="form-control" placeholder="Phone" aria-label="Username" onChange={(e)=>{setInput({...input,phone:e.target.value})}} aria-describedby="addon-wrapping"/>
</div>
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">@</span>
  <input type="text" className="form-control" placeholder="Email" aria-label="Username" onChange={(e)=>{setInput({...input,email:e.target.value})}} aria-describedby="addon-wrapping"/>
</div>

<button type="button" className="btn btn-primary btn-sm" onClick={()=>save1(num,input)}>save</button>
<button type="button" className="btn btn-secondary btn-sm" onClick={cancelll}>cancel</button>
</div>
</>
)
const add1 = (
  <>
  <div className='container'>
  <div>
  <h3>Add Card</h3>
  </div>
  <div className="input-group flex-nowrap">
<span className="input-group-text" id="addon-wrapping">Name</span>
<input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e)=>{setInput({...input,name:e.target.value})}}/>
</div>
<div className="input-group flex-nowrap">
<span className="input-group-text" id="addon-wrapping" >Company Name</span>
<input type="text" className="form-control" placeholder="Company Name" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e)=>{setInput({...input,company:{...input.company,name:e.target.value}})}}/>
</div>
<div className="input-group flex-nowrap">
<span className="input-group-text" id="addon-wrapping">City</span>
<input type="text" className="form-control" placeholder="city" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e)=>{setInput({...input,address:{...input.address,city:e.target.value}})}}/>
</div>
<div className="input-group flex-nowrap">
<span className="input-group-text" id="addon-wrapping">Website</span>
<input type="text" className="form-control" placeholder="Website"aria-label="Username" aria-describedby="addon-wrapping" onChange={(e)=>{setInput({...input,website:e.target.value})}}/>
</div>
<div className="input-group flex-nowrap">
<span className="input-group-text" id="addon-wrapping">Phone</span>
<input type="text" className="form-control" placeholder="Phone" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e)=>{setInput({...input,phone:e.target.value})}}/>
</div>
<div className="input-group flex-nowrap">
<span className="input-group-text" id="addon-wrapping">@</span>
<input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e)=>{setInput({...input,email:e.target.value})}}/>
</div>

<button type="button" className="btn btn-primary btn-sm" onClick={()=>save(input)}>save</button>
<button type="button" className="btn btn-secondary btn-sm" onClick={cancell}>cancel</button>
</div>
</>
)
const view = (
  <>
  <div>
  <button type="button" className="btn btn-secondary btn-lg" onClick={adding}>Add card</button>

  </div>
  <div className='container'>
  {api ? (api.map((e,i)=>(
      <div className="card mt-3" style={{"width": "18rem"}} key={i}>
      {/* <img src="..." className="card-img-top" alt="..."/> */}
        <div className="card-body">
        <h5 className="card-title">{e.name}</h5>
        <h6 className="card-title">{`${e.company.name} - ${e.address.city}`}</h6>
        <p className="card-text">{e.company.bs}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{`Website - ${e.website}`}</li>
        <li className="list-group-item">{`Phone - ${e.phone}`}</li>

        <li className="list-group-item">{`Email - ${e.email}`}</li>
      </ul>
      <div className="card-body">
      <button type="button" className="btn btn-primary ae" onClick={()=> handleEdit(e.id)} >Edit</button>
      <button type="button" className="btn btn-primary de" onClick={() => handleDelete(e.id)} >Delete</button>
      </div>
      </div>
    ))):null}
    </div>
  
   
  
  </>
)
console.log("api",api)
  return (
    <div className="App">
      <h2>Axios Library</h2>
      {/* <button onClick={() => handleDelete(2)}>Delete</button>
      <button onClick={handlePost}>Post</button>
      <button onClick={()=> handleEdit(2)}>Edit</button>
      <button onClick={handle}>check</button> */}
     {add ? add1 : null}
     {edit ? edit1 : null}
     {show ? view : null}
     </div>
  );
}

export default App;