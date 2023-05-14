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
        { name: 'Dialog', path: 'native-elements/dialog', hidden: false },
        { name: 'Fieldset', path: 'fieldset', hidden: true },
        { name: 'Datalist', path: 'datalist', hidden: true },
        { name: 'Color Picker', path: 'color-picker', hidden: true },
        { name: 'Progress Bar', path: 'progress-bar', hidden: true },
        { name: 'Open Graph', path: 'open-graph', hidden: true },
        { name: 'Sub/Sup', path: 'sub-sup', hidden: true },
        { name: 'Picture', path: 'picture', hidden: true },
      ],
    },
    // { name: 'Inputs', children: [{ name: 'Expand', path: '/inputs' }] },
    // { name: 'Feedback', children: [{ name: 'Feedback', path: '/feedback' }] },
  ];

  return (
    <nav className='flex self-center'>
      <ul className='space-y-4'>
        {navigationData.map((group) => (
          <li key={group.name}>
            <Expand title={group.name}>
              <ul>
                {group.children.map((element) => (
                  <li
                    key={element.name}
                    className={` ${element.hidden && 'hidden'}`}
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
