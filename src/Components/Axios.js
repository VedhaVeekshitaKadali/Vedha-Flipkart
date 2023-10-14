import React from 'react'
import { useState } from 'react';
import axios from 'axios';
export default function Form() {
    const[id,setId]=useState('');
    const[title,setTitle]=useState('');
    const[brand,setBrand]=useState('');
    const[price,setPrice]=useState('');
    const[des,setDes]=useState('');
    const[imgurl,setImgurl]=useState('');
    const productData={
        pid:id,
        ptitle:title,
        pbrand:brand,
        pprice:price,
        pdes:des,
        thumbnail:imgurl
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       // alert("submited");
        axios.post('http://localhost:3002/products',productData)
        .then((res)=>{
            alert("sucess")
        })
    }

  return (
    <>

                      <div className="col justify-content-center">
                <div className="col-md-5 maincont">
                    <form onSubmit={handleSubmit}>
                    <h2 className="text-center">ADD Product</h2>
                    <hr/>
                    <br></br>
                  
                  

                    <div className="mb-3">
                        <label>ProductId</label>
                        <input type="text" name="pid" className="form-control" id="tname" value={id} onChange={(e)=>{setId(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label>ProductTitle</label>
                        <input type="text" name="pt" className="form-control" id="tmail" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label>Brand</label>
                        <input type="text" name="pb" className="form-control" id="tpassw" value={brand} onChange={(e)=>{setBrand(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label>Price</label>
                        <input type="text" name="price" className="form-control" id="tcpassw" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label>Description</label>
                        <input type="text" name="price" className="form-control" id="tcpassw"  value={des} onChange={(e)=>{setDes(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label>ImageUrl</label>
                        <input type="text" name="price" className="form-control" id="tcpassw" value={imgurl} onChange={(e)=>{setImgurl(e.target.value)}}/>
                    </div>
                    <button className="btn btn-warning bg-red form-control sbtn" onclick="return test()">submit</button>
                    <div className="mt-2 ml-5">
                    <p>Do you have an account? <a href="#"> login</a></p>
                    </div>
                    </form>
                    
                </div>
            </div>
    
        
       
       
       

    </>
  )
}