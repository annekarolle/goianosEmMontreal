import { useState } from "react";
import { createContext } from "react";

export const AuthorizationContext = createContext()


const AuthorizationProvider = ({children}) =>{

    const [isOpenDetail , setIsOpenDetail] = useState(false)
    const [serviceId, setServiceId] = useState()

    return (
       <AuthorizationContext.Provider value={{isOpenDetail, setIsOpenDetail, serviceId, setServiceId}}>
          {children}
       </AuthorizationContext.Provider>
    )

}

export default AuthorizationProvider