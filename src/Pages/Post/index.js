import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

const Post=()=>{
    const[posts,setPosts]=useState([]);

    const apiCall=async ()=>{
        const Data=await fetch("https://jsonplaceholder.typicode.com/posts/");
        const jsonData= await Data.json();
        
        setPosts(jsonData);
    };

    useEffect(apiCall, []);
  return(
      <div>
       {posts.map((item,index)=><Card details={item} key={index}/>)};
      </div>
  );
};
export default Post;