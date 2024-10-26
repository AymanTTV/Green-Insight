import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Leaf, Camera, Brain, LineChart, CheckCircle2, Sprout, Shield, Clock, Zap } from 'lucide-react';
import { saveAnalysis } from '../lib/storage';

function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<{
    status: string;
    prediction: string;
    recommendations: string[];
  } | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result as string;
      setImage(imageUrl);
      
      // Simulate AI analysis
      const mockAnalysis = {
        id: Date.now().toString(),
        image: imageUrl,
        status: "Needs Water",
        prediction: "Plant may show signs of wilting within 48 hours",
        recommendations: [
          "Water thoroughly until soil is moist",
          "Ensure proper drainage",
          "Place in indirect sunlight"
        ],
        timestamp: Date.now()
      };
      
      setAnalysis(mockAnalysis);
      saveAnalysis(mockAnalysis);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Your Personal Plant Health Assistant
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Upload a photo of your plant and let our AI analyze its health, predict future issues, 
          and provide personalized care recommendations.
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        <div className="mb-8">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <Upload className="w-12 h-12 text-gray-400 mb-2" />
            <span className="text-gray-600">Click to upload a plant image</span>
          </label>
        </div>

        {image && analysis && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src={image}
                alt="Uploaded plant"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Health Status
                </h3>
                <p className="text-lg text-emerald-600 font-medium">
                  {analysis.status}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Prediction
                </h3>
                <p className="text-gray-600">
                  {analysis.prediction}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Recommendations
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {analysis.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* How It Works Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Take a Photo</h3>
            <p className="text-gray-600">
              Snap or upload a clear photo of your plant that you want to analyze
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-600">
              Our AI examines the image to assess plant health and identify issues
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <LineChart className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
            <p className="text-gray-600">
              Receive detailed health analysis and care recommendations
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<CheckCircle2 className="w-6 h-6 text-emerald-600" />}
            title="Instant Analysis"
            description="Get immediate insights about your plant's health status"
          />
          <FeatureCard
            icon={<Sprout className="w-6 h-6 text-emerald-600" />}
            title="Care Tips"
            description="Receive personalized plant care recommendations"
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6 text-emerald-600" />}
            title="Early Detection"
            description="Identify potential issues before they become serious"
          />
          <FeatureCard
            icon={<Clock className="w-6 h-6 text-emerald-600" />}
            title="History Tracking"
            description="Monitor your plant's health progress over time"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-8">
        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <Zap className="w-5 h-5 mr-2" />
          Get Started Now
        </Link>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;