import { useLocation, useNavigate } from 'react-router';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  function pathMatchRoute(route) {
    if (route === location.pathname) return true;
  }

  return (
    <div className="mt-6">
      <header className="flex-col justify-between items-center px-3 max-w-6xl mx-auto">
        <div className="flex justify-center items-center mb-10 mt-10">
          <h1 className="text-slate-700 text-7xl  font-extrabold ">
            Wordsmith Academy
          </h1>
        </div>
        <div>
          <ul className="flex space-x-10 justify-center cursor-pointer py-3 text-sm font-semibold text-gray-400">
            <li
              className={`${
                pathMatchRoute('/') && 'text-black border-b-2 border-red-500'
              }`}
              onClick={() => navigate('/')}
            >
              Home
            </li>
            <li
              className={`${
                pathMatchRoute('/literature') &&
                'text-black border-b-2 border-red-500'
              }`}
              onClick={() => navigate('/literature')}
            >
              Literature
            </li>
            <li
              className={`${
                pathMatchRoute('/grammar') &&
                'text-black border-b-2 border-red-500'
              }`}
              onClick={() => navigate('/grammar')}
            >
              Grammar
            </li>
            <li
              className={`${
                pathMatchRoute('/speeches') &&
                'text-black border-b-2 border-red-500'
              }`}
              onClick={() => navigate('/speeches')}
            >
              Speeches
            </li>
            <li
              className={`${
                pathMatchRoute('/renowned-writers') &&
                'text-black border-b-2 border-red-500'
              }`}
              onClick={() => navigate('/renowned-writers')}
            >
              Renowned Writers
            </li>
            <li
              className={`${
                pathMatchRoute('/quizzes') &&
                'text-black border-b-2 border-red-500'
              }`}
              onClick={() => navigate('/quizzes')}
            >
              Quizzes
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
