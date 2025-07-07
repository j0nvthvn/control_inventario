import {Routes, Route} from "react-router-dom"
import {ErrorMolecula, Home, Login, ProtectedRoute, SpinnerLoader, useEmpresaStore, UserAuth, useUsuariosStore} from "../index"
import { useQuery } from "@tanstack/react-query";
export function MyRoutes(){
    const {user} = UserAuth();
    const {mostrarUsuarios, idusuario} = useUsuariosStore();
    const {mostrarEmpresa} = useEmpresaStore()
    const {data:datausuarios,isLoading,error} = useQuery({
        queryKey: ["Mostrar usuarios"],
        queryFn:mostrarUsuarios
    });
    const {data:dataempresa} = useQuery({queryKey:["Mostrar empresa"],queryFn: ()=> mostrarEmpresa({idusuario:idusuario}),enabled:!!datausuarios})
    if (isLoading){
        return <SpinnerLoader/>
    }
    if(error){
        return <ErrorMolecula mensaje={error.message}/>
    }
    return(

        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route element = {<ProtectedRoute user={user} redirectTo="/login"/>}>
                <Route path="/" element={<Home/>} />
            </Route>
        </Routes>

    );
}