import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'
import { Rick } from './data.js'


function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
      <div>
        <Card
          key={Rick.id}
          name={Rick.name}
          status={Rick.status}
          species={Rick.species}
          gender={Rick.gender}
          origin={Rick.origin}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />      
    </div>
  )
}

export default App
