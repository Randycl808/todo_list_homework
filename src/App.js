
import './App.css';
import MovieList from './MovieList'

function App() {
  return (
    <div className="App">

      


      <MovieList name='Movie/Shows list' initialTitles={[
        {id: 1, title: 'Wolf of WallStreet', read: false},
        {id: 2, title: 'Avengers', read: false},
        {id: 3, title: 'Superman', read: true},
        {id: 4, title: 'American Sniper', read: true},
        {id: 5, title: 'Joker', read: true},
        {id: 6, title: 'Captain America', read: true},

        


    
    
    
    ]}/>



    </div>
  );
}

export default App;