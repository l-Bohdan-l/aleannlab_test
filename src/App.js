import './App.css';
import { JobBoard } from './components/JobBoard/JobBoard';
import {Container} from './components/Container/Container';

function App() {
  return (
    <div>
      <Container>        
        <JobBoard />
      </Container>
    </div>
  );
}

export default App;
