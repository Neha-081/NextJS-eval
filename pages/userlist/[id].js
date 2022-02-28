import { withRouter } from "next/router"
import { useRouter } from "next/router"

const usersDetail=(props)=>{
    var router=useRouter()
   const usersMap={
       "1":"Neha",
       "2":"Maya",
       "3":"Priya",
       "4":"sakshi",
       "5":"kiran"
   }
   if(typeof window==='undefined'){
       return <p>...Loading</p>
   }

   return (<div>
       <p className="name">ID No :- {props.router.query.id} </p>
<p className="name">Name :- {usersMap[props.router.query.id]} </p>
<button onClick={()=>props.router.push("/")} className="homebtn">Go To Home</button>
<button onClick={()=>props.router.push("/usersList")} className="homebtn">Go To UserList Page</button>
    </div>)
}

export default withRouter(usersDetail)


