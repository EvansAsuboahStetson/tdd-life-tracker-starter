import { createContext,useState } from "react";
export const AuthContext = createContext();

function AuthContextProvider()
{
    const [user, setUser] = useState()
    const [initialized, setInitialized] = useState()
    const [processing, isProcessing] = useState(false)
    const [error,setError]= useState("")
}