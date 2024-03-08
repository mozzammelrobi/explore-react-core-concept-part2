export default function Showusers({friend}){
    console.log(friend)
    const name = friend.name
    console.log(name)
    return(
        <div>
            <h4>Name:{name}</h4>
            <h4>Email:{friend.email}</h4>
        </div>
    )
}