import { Link, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">GreenInsight</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/recent" active={isActive('/recent')}>Recent Plants</NavLink>
            <NavLink to="/about" active={isActive('/about')}>About</NavLink>
            <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      to={to}
      className={`${
        active
          ? 'text-emerald-600 border-b-2 border-emerald-600'
          : 'text-gray-600 hover:text-emerald-600'
      } transition-colors duration-200 py-5`}
    >
      {children}
    </Link>
  );
}

export default Navbar;