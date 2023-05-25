import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Root } from '@/components/Layout';
import {
  Dialogs,
  FeedbackElements,
  Inputs,
  NativeElements,
  Datalists,
} from '@/pages';

// const router1 = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Root />}>
//       <Route element={<NativeElements />}>
//         <Route index path='dialogs' element={<Dialogs />} />
//         <Route path='datalists' element={<Datalists />} />
//         <Route path='color-picker' element={<ColorPicker />} />
//         <Route path='progress-bar' element={<ProgressBar />} />
//         <Route path='open-graph' element={<OpenGraph />} />
//         <Route path='sub-sup' element={<SubSup />} />
//         <Route path='picture' element={<Picture />} />
//       </Route>
//       <Route path='inputs' element={<Inputs />} />
//       <Route path='feedback' element={<FeedbackElements />} />
//     </Route>
//   )
// );

// For compassing
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'native-elements',
        element: <NativeElements />,
        children: [
          { index: true, path: 'dialogs', element: <Dialogs /> },
          { path: 'datalists', element: <Datalists /> },
          { path: 'color-picker' },
          { path: 'progress-bar' },
          { path: 'open-graph' },
          { path: 'sub-sup' },
          { path: 'picture' },
        ],
      },
      {
        path: 'inputs',
        element: <Inputs />,
        children: [{ index: true, path: 'expand', element: <Inputs /> }],
      },
      {
        path: 'feedback',
        element: <FeedbackElements />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
