import './App.css';
import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.components'; 
import SearchBox from './components/search-box/search-box.components';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
  },[])

  const onSearchChange = (event)=>{
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
           

 
