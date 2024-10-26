import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">GreenInsight</h3>
            <p className="text-gray-400">Developed by Ayman Liban Ali</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com" className="hover:text-emerald-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="hover:text-emerald-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:hello@aypersonal.com" className="hover:text-emerald-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} GreenInsight. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;