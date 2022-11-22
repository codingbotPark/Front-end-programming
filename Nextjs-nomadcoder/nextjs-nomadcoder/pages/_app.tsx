import {AppProps} from "next/app"
import NavBar from "../components/NavBar"
import Layout from "../components/Layout"

export default function App({Component,pageProps} : AppProps){

    return <div>
        <Layout>
        <Component {...pageProps} />
        </Layout>
    </div>
}