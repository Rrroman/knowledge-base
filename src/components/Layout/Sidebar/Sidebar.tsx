import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className='flex max-w-min self-center'>
      <ul className='space-y-4'>
        <li>
          <NavLink to='inputs'>Inputs</NavLink>
        </li>
        <li>
          <NavLink to='feedback'>Feedback</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Sidebar };
