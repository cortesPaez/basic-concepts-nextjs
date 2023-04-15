import Users from "@/components/Users"

const fetchUser = async () => {
  const res = await fetch('https://reqres.in/api/users?page=1')
  const data = await res.json()
  return data
}

const IndexPage = async () => {
  const { data: users } = await fetchUser()
  return (
    <>
    <h1>index page</h1>
      <Users users={users}/>
    </>
  )
}

export default IndexPage;