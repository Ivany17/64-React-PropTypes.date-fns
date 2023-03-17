import './App.css';
import React, {Component} from 'react';
import Ciao from './components/CiaoSection/Ciao';
import UsersList from './components/UsersList';
import UserCard from './components/UserCard';
import Calendar from './components/Calendar';


function App() {
  const user = {
    id:1,
    name:'Elon'
  }
  const user2 = {
    id:1,
    name:'Elen'
  }
  const user3 = {
    id:2,
    name:'Elan'
  }
    return <>
      <Ciao name={user.name} id={user.id} />
      <UserCard user={user2} />
      <UsersList users={[user2, user3]} />
      <Calendar />
    </>
}

  export default App;