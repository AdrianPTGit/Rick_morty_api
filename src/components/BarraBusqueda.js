import './BarraBusqueda.css';
import { useState} from 'react';

function BarraBusqueda({onSearch}){
 const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
useEffect(() => {
    fetchCharacters();
  }, []);

const fetchCharacters = async (name = '') => {

    try {
      const url = name 
        ? `https://rickandmortyapi.com/api/character/?name=${name}`
        : 'https://rickandmortyapi.com/api/character';
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (response.ok) {
        setCharacters(data.results || []);
      } else {
        setCharacters([]);
      }
    } catch (err) {
      setCharacters([]);
    } 
  };
    return(
        <div>
            <input type='text' placeholder='Buscar...'></input>
            <button type='submit' onClick={handleSubmit}>Buscar</button>

        </div>
    );
}
