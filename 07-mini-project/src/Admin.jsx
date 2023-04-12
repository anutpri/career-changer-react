import { useContext } from "react"
import { Context } from "./UserContext"
import { useEffect, useState } from "react"

const Admin = () => {
    // You have to get all user from fetchData() and display as table html.
    const [users, setUser] = useState([]);
    const { fetchData } = useContext(Context)
    // example of fetchData() usage
    // data will return array of user object, otherwise empty array
    // example of user Object show below
    // {
    //     id: 0, 
    //     username: 'example',
    //     fullname: 'example',
    //     organization: 'example'
    // }

    useEffect(() => {
        const data = fetchData();
        setUser(data);
      }, []);
    
    return (
        <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Full Name</th>
        <th>Organization</th>
      </tr>
    </thead>
    <tbody>
      {users.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.username}</td>
          <td>{item.fullname}</td>
          <td>{item.organization}</td>
        </tr>
      ))}
    </tbody>
  </table>
    )
}

export default Admin