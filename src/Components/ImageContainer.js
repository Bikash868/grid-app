import React,{useContext, useEffect, useState} from 'react'
import { Card } from './Card'
const ImageContainer = ({val}) => {
    const [x,setX] = useState([]);

    useEffect(()=>{
        const arr = [ ];
        let len;
        if(val<7) {
            len = 7;
        } else if(val<14) {
            len = 14;
        } else {
            len = val;
        }
        for (let i = 0; i < len; i++) {
            arr.push(i+1);
        }
        setX(arr)
    },[val])

var isScrolling
const generate = () =>{
    let y = x.length;
    let arr = [...x]
    for(let i=1;i<=7;i++) {
        arr.push(y+i);
    }
    setX(arr)
}
const handleScroll = (o) =>{
    window.clearTimeout( isScrolling );

    isScrolling = setTimeout(function() {
        generate();

    }, 66);
}

  return (
    <div className='Container' onScroll={handleScroll}>
        {
            x.map((item,index)=>{
                return (<Card key={index} total={val} curr={index}/>)
            })
        }
    </div>
  )
}

export default ImageContainer