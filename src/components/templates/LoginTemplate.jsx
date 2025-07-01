import styled from "styled-components";
import {Btnsave, useUsuariosStore} from "../../index"
export function LoginTemplate() {
    const {insertarUsuarioAdmin} = useUsuariosStore();
    
    return (
        <Container>
            <Btnsave titulo="Crear cuenta" bgcolor="#fff"/>
        </Container>);
}
const Container = styled.div`
    height: 100vh;
`