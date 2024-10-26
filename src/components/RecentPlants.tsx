import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { PlantAnalysis, getRecentAnalyses } from '../lib/storage';

function RecentPlants() {
  const [plants, setPlants] = useState<PlantAnalysis[]>([]);

  useEffect(() => {
    setPlants(getRecentAnalyses());
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Recent Plant Analyses
      </h1>

      {plants.length === 0 ? (
        <div className="text-center text-gray-600 py-12">
          No plant analyses yet. Upload your first plant image to get started!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <div key={plant.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={plant.image}
                  alt="Plant"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    {plant.status}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {new Date(plant.timestamp).toLocaleDateString()}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{plant.prediction}</p>

                <div className="space-y-2">
                  {plant.recommendations.map((rec, index) => (
                    <p key={index} className="text-sm text-gray-500">
                      • {rec}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentPlants;