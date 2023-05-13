import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Root } from '@/components';
import { FeedbackElements, Inputs, NativeElements } from '@/pages';
import { Dialog } from '@/components/UI/';

// const router1 = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Root />}>
//       <Route element={<NativeElements />}>
//         <Route index path='dialog' element={<Dialog />} />
//         <Route path='fieldset' element={<Fieldset />} />
//         <Route path='datalist' element={<Datalist />} />
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
        element: <NativeElements />,
        path: 'native-elements',
        children: [
          { index: true, path: 'dialog', element: <Dialog /> },
          { path: 'fieldset' },
          { path: 'datalist' },
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
