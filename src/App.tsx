import './App.scss';
import { Header } from './components/Header';
import { Overview } from './components/Overview';
import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {

  const [medalTable, setMedalTable] = useState();

    useEffect(() => {
        fetch('/api/getMedalTable')
            .then(response => response.json())
            .then((data) => {
                setMedalTable(data);
                console.log(medalTable);
            }).catch(error => {
                console.log("error", error);
            });    
    }, []);
    
  return (
    <Router>
      <div className='App'>
        <Header></Header>
        <Overview medalTable={medalTable}></Overview>
    </div>
    </Router>
    
  );
}

export default App;
