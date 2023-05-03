import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Root } from '@/components';
import { FeedbackElements, Inputs, NativeElements } from '@/pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<NativeElements />} />
      <Route path='inputs' element={<Inputs />} />
      <Route path='feedback' element={<FeedbackElements />} />
    </Route>
  )
);

// // For compassing
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         index: true,
//         path: '',
//         element: <h1>Home Page</h1>,
//       },
//       {
//         path: 'inputs',
//         element: <h1>Inputs page here</h1>,
//       },
//       {
//         path: 'feedback',
//         element: <h1>Feedback page here</h1>,
//       },
//     ],
//   },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
