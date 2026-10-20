
import { styled } from 'styled-components';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Experiences from './pages/Experiences';
import Certification from './pages/Certification';
import References from './pages/References';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects';
import Header from './components/Header';
import Navigations from './components/Navigations';
import Footer from './components/Footer';
import Main from './components/Main';

const BodyStyled=styled.body`
  background-color: #30364F;
    font-family: monospace;
    color: #F0F0DB;
    margin: 0;
`;

const NavMainOuterDiv=styled.div`
  display: flex;
`;

function Root(){
    return(
        <>
          <BodyStyled>
            <Header/>
            <NavMainOuterDiv>
              <Navigations/>
              <Main>
                <Routes>
                    <Route
                        path='/'
                        element={<Home/>}
                    />
                    <Route
                        path='/education/'
                        element={<Education/>}
                    />
                    <Route
                        path='/experiences/'
                        element={<Experiences/>}
                    />
                    <Route
                        path='/certifications/'
                        element={<Certification/>}
                    />
                    <Route
                        path='/references/'
                        element={<References/>}
                    />
                    <Route
                        path='/achievements/'
                        element={<Achievements/>}
                    />
                    <Route
                        path='/projects/'
                        element={<Projects/>}
                    />
                </Routes>
              </Main>
            </NavMainOuterDiv>
            <Footer/>
          </BodyStyled>
        </>
    )
}

const router = createBrowserRouter(
    [{path: "*", Component: Root}]
)

export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
