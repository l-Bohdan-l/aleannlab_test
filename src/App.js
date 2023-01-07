import { AppWrapper } from './App.styled';
import { JobBoard } from './components/JobBoard/JobBoard';
import {Container} from './components/Container/Container';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Home} from './components/Home/Home'
import { ErrorPage } from './components/ErrorPage/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        
      },
    ],
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
