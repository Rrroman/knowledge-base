import { NavLink } from 'react-router-dom';

function Sidebar() {
  const navLinks = [
    ['Native Elements', '/'],
    ['Inputs', '/inputs'],
    ['Feedback', '/feedback'],
  ];

  return (
    <nav className='flex self-center'>
      <ul className='space-y-4'>
        {navLinks.map((link) => (
          <li key={link[0]}>
            <NavLink to={link[1]}>{link[0]}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Sidebar };
