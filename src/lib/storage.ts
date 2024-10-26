export interface PlantAnalysis {
  id: string;
  image: string;
  status: string;
  prediction: string;
  recommendations: string[];
  timestamp: number;
}

export function saveAnalysis(analysis: PlantAnalysis) {
  const stored = getRecentAnalyses();
  const updated = [analysis, ...stored].slice(0, 10);
  localStorage.setItem('recentPlants', JSON.stringify(updated));
}

export function getRecentAnalyses(): PlantAnalysis[] {
  try {
    return JSON.parse(localStorage.getItem('recentPlants') || '[]');
  } catch {
    return [];
  }
}