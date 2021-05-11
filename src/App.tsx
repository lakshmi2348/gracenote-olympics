import { Header } from './components/header/Header';
import { Overview } from './components/overview/Overview';
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
      <div data-testid='app-medals-data' className='app'>
        <Header data-testid="header"></Header>
        <Overview data-test-id="overview" medalTable={medalTable}></Overview>
    </div>
    </Router>
    
  );
}

export default App;
