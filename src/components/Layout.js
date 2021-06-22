import React, {useState} from "react"



const Layout = ({ children }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () =>{

    setIsOpen(!isOpen)
  }
  return (
    <>



      <main>{children}</main>  

    </>
  )
}


export default Layout