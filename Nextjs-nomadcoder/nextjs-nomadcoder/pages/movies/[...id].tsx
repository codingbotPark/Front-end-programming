import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router"
import Seo from "../../components/Seo";

export default function Detail({params} : InferGetServerSidePropsType<typeof getServerSideProps>){
    // console.log(router)
    // const [title,id] = (params || []) as [string?,number?]
    // console.log(router)
    const [title ,id] = (params.id || []) as [string,number];
    console.log(title)
    return (<div>
        <Seo title={title} />
        <h4>{title}</h4>
    </div>)
}

// export function getServerSideProps(params:any){
//     return {
//         props:{},
//     }
// }

export const getServerSideProps = async ({params}:any) => {
    return {
        props:{
            params,
        }
    }
}