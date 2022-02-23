
import './App.css';
import TitleList from './TitleList'

function App() {
  return (
    <div className="App">

      


      <TitleList name='Movie/Shows list' initialTitles={[
        {id: 1, title: 'Wolf of WallStreet', read: false},
        {id: 2, title: 'Avengers', read: false},
        {id: 3, title: 'Superman', read: true},
        {id: 4, title: 'Batman', read: true},
        


    
    
    
    ]}/>



    </div>
  );
}

export default App;