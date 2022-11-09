import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import MainContainer from "../components/MainContainer"
const Users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "John" },
        { id: 2, name: "Ivan" },
        { id: 3, name: "Tim" },
    ])

    return (
        <MainContainer>  
            <h1>Users</h1>
            <ul>
                {
                    users.map(user => 
                        <Link href={'/users/' + user.id} key={user.id}>
                            <li>
                                {user.name}
                            </li>
                        </Link>
                    )
                }
            </ul>
        </MainContainer>
    )
}

export default Users