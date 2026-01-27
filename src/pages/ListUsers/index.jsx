import { useState, useEffect } from 'react';
import api from '../../services/api'
import { Conteiner, Title, ConteinerUsers, CardUsers, TrashIcon, AvatarUser } from './styles.js';
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackgroud'
import { useNavigate } from 'react-router-dom';


import Trash from '../../img/trash.svg'

function ListUsers() {

  const navigate = useNavigate()

  const [users, setUsers] = useState([])

  useEffect(() => {

    async function getUsers() {
      const { data } = await api.get('/usuarios')

      setUsers(data)
    }

    getUsers()

  }, [])

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    const updatedUsers = users.filter((user) => user.id !== id)
    setUsers(updatedUsers)
  }


  return (
    <Conteiner>
      <TopBackground />

      <Title>Lista de Usuários</Title>

      <ConteinerUsers>

        {users.map((user) => (

          <CardUsers key={user.id}>
            <AvatarUser src={`https://i.pravatar.cc/1000?u=${user.id}`} />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt="Lixeira" onClick={() => deleteUsers(user.id)} />
          </CardUsers>
        ))}

      </ConteinerUsers>

      <Button type='button' onClick={() => navigate('/')}>Voltar</Button>
    </Conteiner>
  );
}

export default ListUsers;