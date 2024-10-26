import { Download, Mail, Phone, MapPin, Globe } from 'lucide-react';

function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About GreenInsight</h1>
        <p className="text-lg text-gray-600 mb-8">
          GreenInsight is an innovative AI-powered platform that helps users monitor and maintain 
          their plants' health. By leveraging advanced image recognition technology, we provide 
          instant analysis and actionable recommendations for optimal plant care.
        </p>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">About the Developer</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Ayman Liban Ali</h3>
              <p className="text-gray-600 mb-4">
                Full-Stack Developer | Software Engineer with 6+ years of experience in software 
                development, web design, and ERP systems.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2" />
                  <a href="mailto:hello@aypersonal.com" className="hover:text-emerald-600">
                    hello@aypersonal.com
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2" />
                  <a href="tel:+252619443333" className="hover:text-emerald-600">
                    +252-619-443333
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Mogadishu, Somalia</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-5 h-5 mr-2" />
                  <a href="https://aypersonal.com" className="hover:text-emerald-600">
                    aypersonal.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
              <div>
                <p className="font-medium text-gray-800">MA in Telecommunications</p>
                <p className="text-gray-600">Somalia International University</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">BA in Computer Science</p>
                <p className="text-gray-600">Hormuud University</p>
              </div>
              
              <div className="pt-4 space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
                  <Download className="w-5 h-5 mr-2" />
                  Download Business Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;