import { NavLink } from 'react-router-dom';
import { Expand } from '@/components/UI';

type Children = {
  name: string;
  path: string;
  hidden?: boolean;
};

type NavigationData = {
  name: string;
  children: Children[];
}[];

function Sidebar() {
  const navigationData: NavigationData = [
    {
      name: 'Native HTML Elements',
      children: [
        { name: 'Dialog', path: 'native-elements/dialogs', hidden: false },
        { name: 'Datalist', path: 'datalist', hidden: true },
        { name: 'Color Picker', path: 'color-picker', hidden: true },
        { name: 'Progress Bar', path: 'progress-bar', hidden: true },
        { name: 'Open Graph', path: 'open-graph', hidden: true },
        { name: 'Sub/Sup', path: 'sub-sup', hidden: true },
        { name: 'Picture', path: 'picture', hidden: true },
      ],
    },
    { name: 'Inputs', children: [{ name: 'Expand', path: 'inputs/expand' }] },
    // { name: 'Feedback', children: [{ name: 'Feedback', path: '/feedback' }] },
  ];

  return (
    <nav className='flex self-center'>
      <ul className='space-y-4'>
        <li className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'>
          <NavLink
            className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'
            to='/'
            // className='inline-block w-full'
          >
            Home Page
          </NavLink>
        </li>
        {navigationData.map((group) => (
          <li key={group.name}>
            <Expand title={group.name}>
              <ul>
                {group.children.map((element) => (
                  <li
                    key={element.name}
                    className={`pl-4 ${element.hidden && 'hidden'}`}
                  >
                    <NavLink to={element.path} className='inline-block w-full'>
                      {element.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Expand>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Sidebar };
