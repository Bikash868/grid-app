import React,{useContext, useEffect, useState} from 'react'
import { Card } from './Card'
const ImageContainer = ({val}) => {
    const [x,setX] = useState([]);

    useEffect(()=>{
        const arr = [ ];
        let len;
        if(val<8) {
            len = 8;
        } else if(val<16){
            len = 16; //12*8
        } else {
            len = 25 //24+1 ->scroll ->infinite data
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
    for(let i=1;i<=12;i++) {
        arr.push(y+i);
    }
    setX(arr)
}
const handleScroll = (o) =>{
    window.clearTimeout( isScrolling );

    isScrolling = setTimeout(function() {
        generate();

    }, 10);
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