import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Root } from '@/components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route
        path='inputs'
        element={
          <h1 className='flex h-full items-center justify-center'>
            Inputs page here
          </h1>
        }
      />
      <Route path='feedback' element={<h1>Feedback page here</h1>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
