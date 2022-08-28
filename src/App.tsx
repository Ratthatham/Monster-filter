import './App.css';
import { useEffect, useState, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.components'; 
import SearchBox from './components/search-box/search-box.components';

import { getData } from './utils/data.utils';

export type Monster = {
  id: number;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);


  useEffect(()=>{
    const fetchUser = async() => {
      const users = await getData('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }
    fetchUser();
  },[])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    setSearchField(event.target.value.toLocaleLowerCase())
  };
  
  const filterMonsters = monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

    return (
      <div className="App">
        <h1 className='app-title'>Monster</h1>
        <SearchBox 
          className = {'search-box'}
          searchChange = {onSearchChange}
          placeholder = {'search monsters'}
        />
        <CardList monsters = {filterMonsters}/> 
      </div> // เก็บค่าArrayจากfilterMonstersไว้ในPropsที่ชื่อว่าmonsters แล้วส่งไปยัง card-list-components.js
      
    );
  
}

export default App;
           

 
