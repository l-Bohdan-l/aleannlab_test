import { AppWrapper } from './App.styled';
import { JobBoard } from './components/JobBoard/JobBoard';
import {Container} from './components/Container/Container';

function App() {
  return (
    <AppWrapper>
      <Container>        
        <JobBoard />
      </Container>
    </AppWrapper>
  );
}

export default App;
