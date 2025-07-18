import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import styled, { ThemeProvider } from 'styled-components';
import { AuthContextProvider, MyRoutes, Light, Dark, Sidebar, MenuHambur, Login } from "./index"
import { useState } from 'react';
import { Device } from "./styles/breackpoints"
import { ThemeContext } from "./context/ThemeContext"
import {useLocation } from "react-router-dom";
function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {pathname} = useLocation();
  return (
    <>
      <ThemeContext.Provider value = {{theme, setTheme}}>
        <ThemeProvider theme = {themeStyle}>
          <AuthContextProvider>
            {
              pathname != "/login" ? (
              <Container className={sidebarOpen ? "active" : ""}>
              <section className="ContentSidebar">
                <Sidebar state={sidebarOpen} setState = {()=>setSidebarOpen(!sidebarOpen)}/>
              </section>
              <section className="ContentMenuHambur"><MenuHambur/></section>
              <section className="ContentRoutes">
                <MyRoutes />
              </section>
              </Container>) : (
              <Login/>
            )}
            
            <ReactQueryDevtools initialIsOpen={false} />
          </AuthContextProvider>
        </ThemeProvider>

      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({theme})=>theme.bgtotal};
  .ContentSidebar {
    display: none;
  }
  .ContentMenuHambur {
    display: block;
    position: absolute;
    left: 20px;
  }

  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active {
      grid-template-columns: 220px 1fr;
    }
    .ContentSidebar {
      display: initial;
    }
    .ContentMenuHambur {
      display: none;
    }
  }
  .ContentRoutes {
    grid-column: 1;
    width: 100%;
    @media ${Device.tablet} {
      grid-column: 2;
    }
  }
`;

export default App;
