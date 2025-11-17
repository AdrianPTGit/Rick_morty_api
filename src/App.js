import './App.css';
import { useEffect, useState, useRef } from 'react';
import BarraBusqueda from './components/BarraBusqueda';

function App() {
  const [valorLocation, setValorLocation] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const resultadoRef = useRef(null);

  useEffect(() => {
    const llamarApi = async () => {
      try {
        const location = await fetch("https://rickandmortyapi.com/api/location/1");
        const datos = await location.json();
        setValorLocation(datos);


        resultadoRef.current.innerHTML = `
          <strong>ID:</strong> ${datos.id}<br>
          <strong>Nombre:</strong> ${datos.name}<br>
          <strong>Tipo:</strong> ${datos.type}<br>
          <strong>Dimensión:</strong> ${datos.dimension}<br>
          <strong>Residentes:</strong> ${datos.residents.length}<br>
          <strong>URL:</strong> ${datos.url}<br>
          <strong>Creado:</strong> ${datos.created}
`;


      } catch (error) {
        console.log("Error conexion llamada API", error);
      }
    };

    llamarApi();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchCharacters(term);
    setSelectedCharacter(null);
  };

  return (
    <div>
      <p ref={resultadoRef}></p>
    </div>
  );
}

export default App;
