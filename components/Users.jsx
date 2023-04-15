'use client'
import { useRouter } from "next/navigation"
const Users = ({ users }) => {
  const router = useRouter()
  return (
    <ul>
    {users.map(({ id, email, avatar, first_name: firstName, last_name: lastName }) => {
      return (
        <li key={id} onClick={() => {router.push(`/users/${id}`)}}>
          <div>
            {id}
            <br/>
            {firstName} {lastName}
            <br/>
            {email}
          </div>
          <img src={avatar} alt={email} />
        </li>
      )
    })}
  </ul>
  )
}

export default Users