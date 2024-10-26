import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { auth } from '../lib/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { logOut } from '../lib/auth';

function Navbar() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const handleNavigation = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };
  
  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2" onClick={handleNavigation}>
            <Leaf className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">GreenInsight</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/recent" active={isActive('/recent')}>Recent Plants</NavLink>
            <NavLink to="/about" active={isActive('/about')}>About</NavLink>
            <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
            {user ? (
              <button onClick={logOut} className="text-green-600 hover:text-green-800">Logout</button>
            ) : (
              <NavLink
                to="/login"
                active={isActive('/login')}
                style={{ color: 'green', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2F855A')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'green')}
              >
                Login/Register
              </NavLink>

            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '64px' }} // Height of the navbar
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            <MobileNavLink to="/" active={isActive('/')} onClick={handleNavigation}>Home</MobileNavLink>
            <MobileNavLink to="/recent" active={isActive('/recent')} onClick={handleNavigation}>Recent Plants</MobileNavLink>
            <MobileNavLink to="/about" active={isActive('/about')} onClick={handleNavigation}>About</MobileNavLink>
            <MobileNavLink to="/contact" active={isActive('/contact')} onClick={handleNavigation}>Contact</MobileNavLink>
            {user ? (
              <button onClick={logOut} className="text-green-600 hover:text-green-800">Logout</button>
            ) : (
              <MobileNavLink to="/login" active={false} onClick={handleNavigation}>Login/Register</MobileNavLink>
            )}
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

function MobileNavLink({ 
  to, 
  children, 
  active, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode; 
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${
        active
          ? 'text-emerald-600 bg-emerald-50'
          : 'text-gray-600 hover:bg-gray-50'
      } block px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-200`}
    >
      {children}
    </Link>
  );
}

export default Navbar;
