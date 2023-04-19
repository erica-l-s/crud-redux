import React from "react";
import Login from "./Components/Login";
import { selectUser } from "./feature/userSlice";
import Create from "./Components/Create";
import {useSelector} from "react-redux";

const App = ()=>{
  const user = useSelector(selectUser)

    return(
        <div>
          {user ? <Create/>:<Login/>}
        </div>
    )
}

export default App