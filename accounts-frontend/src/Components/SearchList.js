import React from 'react'
import { isEmpty } from 'lodash'



const SearchList =(props)=>{
 let a=[1,1,1]
//  if(!isEmpty(props.list)){
//     for(const item of a){
//         console.log(item)
//         if(item===props.list)
//         console.log(item)
//     }
//  }
    return (

        <div>
            <h1>SearchList-{props.list}</h1>

        </div>
    )
}

export default SearchList