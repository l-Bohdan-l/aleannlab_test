import { AppWrapper } from './App.styled';
import { JobBoard } from './components/JobBoard/JobBoard';
import {Container} from './components/Container/Container';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Home} from './components/Home/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/job-board",
    element: <JobBoard/>,
  }
]);

function App() {
  return (
    <AppWrapper>
      <Container>  
        <RouterProvider router={router} />
        {/* <JobBoard /> */}
      </Container>
    </AppWrapper>
  );
}

export default App;
