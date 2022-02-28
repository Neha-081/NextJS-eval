import Link from "next/link";
import { withRouter } from "next/router"
import { useRouter } from "next/router"


const UserMainPage=(props)=>{
    const router=useRouter()
    console.log(props);
    return (
    <div>
<h1 className="title">Welcome to Users List Page</h1>
{props.users.map((user)=><li key={user} >
    <Link href={`/userlist/${user}`} ><span className="id"><button>View Details</button> of ID No:- {user}</span></Link>
    
    </li>)}
    <button onClick={()=>props.router.push("/")} className="homebtn">Go To Home</button>
    </div>
    )
    }

export const getStaticProps=async()=>{
    return{
        props:{
            users:["1","2","3","4","5"],
        },
        notFound:false
    }
}

export default withRouter(UserMainPage)