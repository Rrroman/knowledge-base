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
	Fetchers,
	FetchersInsidePage,
} from '@/pages';
import { FetchExample, QueryClientExample } from './components';
import { Cards } from './pages/Cards/Cards';

// const router1 = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Root />}>
//       <Route element={<NativeElements />}>
//         <Route index path='dialogs' element={<Dialogs />} />
//         <Route path='datalists' element={<Datalists />} />
//         <Route path='color-picker' />
//         <Route path='progress-bar' />
//         <Route path='open-graph' />
//         <Route path='sub-sup' />
//         <Route path='picture' />
//       </Route>
//       <Route path='inputs' element={<Inputs />}>
//         <Route index path='expand' element={<Inputs />} />
//       </Route>
//       <Route path='fetchers' element={<Fetchers />}>
//         <Route index path='fetch' element={<Fetchers />} />
//         <Route path='fetch-example' element={<FetchExample />} />
//         <Route path='query-client-example' element={<QueryClientExample />} />
//       </Route>
//       <Route path='fetchers-inside-page' element={<FetchersInsidePage />} />
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
				path: 'fetchers',
				element: <Fetchers />,
				children: [
					{ index: true, path: 'fetch', element: <Fetchers /> },
					{ path: 'fetch-example', element: <FetchExample /> },
					{ path: 'query-client-example', element: <QueryClientExample /> },
				],
			},
			{
				path: 'fetchers-inside-page',
				element: <FetchersInsidePage />,
			},
			{
				path: 'feedback',
				element: <FeedbackElements />,
			},
			{
				path: 'cards',
				element: <Cards />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
