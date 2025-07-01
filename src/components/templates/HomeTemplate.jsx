import styled from "styled-components";
export function HomeTemplate() {
    return (<Container>
        <h1>Home template</h1>
    </Container>);
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    background-color: ${({theme}) => theme.bgtotal};
    color: ${({theme}) => theme.text};
    width: 100%;
    
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0;
        text-align: center;
        line-height: 1.2;
    }
`