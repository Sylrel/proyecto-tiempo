import { useEffect } from 'react';
import { useState } from 'react';
import Icons from './components/Icons.js'
import './App.css';
import { StyledDiv, StyledInput, StyledH2, StyledH1, GlobalStyle } from './styles/WeatherEstilos';

function App() {
  const [search, setSearch] = useState('');
  const [values, setValues] = useState('');
  const [icon, setIcon] = useState('');

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  const getData = async () => {
    await fetch(URL)
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data.cod >= 400) {
          setValues(false)
        } else {
          setIcon(data.weather[0].main)
          setValues(data)
        }
        //console.log(data.name)

      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      //console.log(e.target.value)
      setSearch(e.target.value)
    }

  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])


  return (
    <>
    <GlobalStyle />
      <StyledDiv className='container'>
        <StyledH2>App Tiempo</StyledH2>
      </StyledDiv>
      
      <StyledInput type="text"
        onKeyDown={handleSearch} //handleSearch = manejador de busqueda lo creo arriba como una constante y lo paso al evento onKeyDown
        autoFocus // cuando recarguemos pagina hace foco directamente al input
      />

      <div className='card'>
        {(values) ? (
          <div className='container'>
            <StyledH1 className='city-name'>{values.name}</StyledH1>
            <p className='temp'>Media: {values.main.temp.toFixed(0)}&deg;</p>
            <img src={Icons(icon)} className="icon" alt="icon-weather" />
            <div className='card-footer'>
              <p className='temp-max-min'>Mín: {values.main.temp_min.toFixed(0)}&deg; | Máx: {values.main.temp_max.toFixed(0)}&deg;</p>
            </div>
          </div>
        ) : (
          <StyledH1>{"City not found"}</StyledH1>
        )}
      </div>
    </>
  );
}

export default App;
