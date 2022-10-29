import React, {useState} from 'react'
import { createContext } from 'react'

export const boxes = createContext(null);

const Context = ({children}) => {
  const [val,setVal] = useState(5);
  return (
    <boxes.Provider value={{val,setVal}}>    
        {children}
    </boxes.Provider>
  )
}

export default Context