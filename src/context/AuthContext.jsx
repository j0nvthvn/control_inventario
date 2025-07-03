import {createContext, useContext, useEffect, useState} from "react";
import {supabase} from "../index"
const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        // Verificar sesión existente al cargar
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                setUser(session.user);
            }
            setLoading(false);
        };
        
        getSession();
        
        // Escuchar cambios en la autenticación
        const {data:authListener} = supabase.auth.onAuthStateChange(
            async (event, session)=>{
                console.log(event, session);
                if(session?.user==null){
                    setUser(null)
                }else{
                    setUser(session?.user);
                }
                setLoading(false);
            }
        );
        return () => {
            authListener.subscription.unsubscribe();
        };
    },[]);
    
    return (
        <AuthContext.Provider value={{user, loading}}>
            {children}
        </AuthContext.Provider>
    );
};
export const UserAuth =()=>{
    return useContext(AuthContext)
};