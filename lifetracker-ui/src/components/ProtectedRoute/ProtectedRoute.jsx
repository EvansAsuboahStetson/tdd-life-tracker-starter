import { useAuthContext } from "components/contexts/auth";

import LoginPage from "components/LoginPage/LoginPage";

export default function ProtectedRoute({ element })
{
    const { appState, initialized } = useAuthContext()
    
    if (!initialized)
    {
        return null    
    }
    if (initialized && !appState.user)
    {
            return <LoginPage message= "You must be Logged In"/>
    }
    return <>{element}</>
}