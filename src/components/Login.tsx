// src/components/Login.tsx
import { useState } from 'react';
import { logIn } from '../lib/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf } from 'lucide-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      alert('Logged in successfully');
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error(error);
      setError('Error logging in');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Link to="/" className="flex items-center space-x-2 mb-6">
        <Leaf className="h-8 w-8 text-emerald-600" />
        <span className="text-xl font-bold text-gray-800">GreenInsight</span>
      </Link>
      <h2 className="text-2xl font-bold mb-4">Log In</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full mb-4 p-2 border rounded"
        />
        <div className="mt-8 text-center text-gray-400 text-sm">
          Don't have an account? <Link to="/signup" className="text-green-600 hover:text-green-800"> Get Started </Link> 
        </div>
        &nbsp;
        <button type="submit" className="w-full p-2 bg-emerald-600 text-white rounded">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
