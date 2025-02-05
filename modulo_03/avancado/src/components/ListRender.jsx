import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["matheus", "pedro", "Josias"]);

    const [users] = useState([
        {id: 1, name: "MATHEUS", age: 31},
        {id: 321321321, name: "Sara", age: 32},
        {id: 213123, name: "Sonia", age: 12},
    ])
    return (
        <>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                ))}
            </ul>
            <ul>
                {users.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.name} - {usuario.age}
                    </li>
                ))}
            </ul>

        </>

    )
}
export default ListRender
