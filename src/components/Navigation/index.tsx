import { Link } from 'react-router-dom';
import './style.scss';

const Navigation = () => {
  return (
    <header>
      <div className='inner'>
        <h1>Money Right & Tips</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/mortage'>Mortage</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
