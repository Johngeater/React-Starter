import './App.css';
import Header from './Modules/Header/Header'
import TeamMembers from './Modules/Team/TeamMembers';
function App() {

  return (
    <div className="App">
      <Header siteName="Staffie app" />
      <TeamMembers />
    </div>
    
  );
}

export default App;
