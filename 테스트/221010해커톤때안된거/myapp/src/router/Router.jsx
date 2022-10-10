import styled from "styled-components";
import { useState, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

import routes from './routes'

const Core = styled.div`
  margin-top: ${props => props.nav ? "50" : "0"}px;
  width: 100%;
  min-height: 100vh;
`
const Content = styled.div`
  display: flex;
`

const Router = () => {
  // const location = useLocation()
  // const [renderInfo, setRenderInfo] = useState({
  //     nav: false,
  //     Footer: false
  // })

  // useLayoutEffect(() => {
  //     let temp = routes.find(element => element.path === location.pathname.split('/')[1])
  //     if(temp === undefined) {
  //         temp = routes.find(element => element.path === "*")
  //     }
  //     setRenderInfo(temp)
  // }, [location.pathname])

  return (
    <>
      <Content>
          {/* { renderInfo.nav ? <NavBar/> : null}
          <Core nav={renderInfo.nav}>
              <Routes>
                  {
                      routes.map(element => {
                          return <Route
                              path={element.path}
                              element={element.component}
                              key={element.path}/>
                      })
                  }
              </Routes>
          </Core> */}
          ㅎㅇ
      </Content>
      {/* { renderInfo.nav ? <Footer/> : null} */}
    </>
  )
}

export default Router;