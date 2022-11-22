import NavBar from "./NavBar"
import {AppProps} from "next/app"

export default function Layout({children}:{children:JSX.Element}){
    return (
        <>
          <NavBar />
          <div>{children}</div>
        </>
    )
}