import { useState } from 'react';
import { Upload, AlertCircle, FileText, ChevronRight } from 'lucide-react';
import { reports } from '../data/reports';

const AIReportAssistant = () => {
  const [reportText, setReportText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!reportText.trim()) return;

    setIsAnalyzing(true);
    // Simulate API delay
    setTimeout(() => {
      // For mock purposes, just pick a random mock report to display
      const randomReport = reports[Math.floor(Math.random() * reports.length)];
      setResult(randomReport);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="container py-12">
      <h1 className="text-center mb-4">AI Diagnostic Report Assistant</h1>
      <p className="text-center mb-8" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
        Paste your diagnostic findings below, and our AI will translate complex medical terminology into simple language.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="card">
            <h3 className="mb-4">Input Report</h3>
            <form onSubmit={handleAnalyze}>
              <div className="form-group">
                <label className="form-label">Upload Report File</label>
                <div style={{ border: '2px dashed var(--border)', padding: '2rem', textAlign: 'center', borderRadius: 'var(--radius)', cursor: 'pointer', marginBottom: '1rem' }}>
                  <Upload size={32} style={{ margin: '0 auto 0.5rem', color: 'var(--text-muted)' }} />
                  <p>Click to upload PDF, JPG, or PNG</p>
                </div>
              </div>
              <div className="form-group text-center">
                <span style={{ color: 'var(--text-muted)' }}>- OR -</span>
              </div>
              <div className="form-group">
                <label className="form-label">Paste Report Findings</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="e.g., Multiple small disc bulges are noted in the lumbar spine..."
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                disabled={isAnalyzing || !reportText.trim()}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Report'}
              </button>
            </form>
          </div>
        </div>

        <div>
          {!result && !isAnalyzing && (
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              <FileText size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <p>Your analysis results will appear here.</p>
            </div>
          )}

          {isAnalyzing && (
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div className="spinner" style={{ border: '4px solid #f3f3f3', borderTop: '4px solid var(--primary)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', marginBottom: '1rem' }} />
              <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
              <p>AI is reading your report...</p>
            </div>
          )}

          {result && !isAnalyzing && (
            <div className="card" style={{ animation: 'fadeIn 0.5s ease-in' }}>
              <div className="alert alert-warning mb-4">
                <AlertCircle size={20} />
                <span style={{ fontSize: '0.875rem' }}>This AI assistant provides educational information only. It cannot diagnose diseases, prescribe medicines, or replace a qualified healthcare professional.</span>
              </div>

              <h3>Report Summary</h3>
              <p>{result.aiSummary}</p>

              <h4 className="mt-4 mb-4">Medical Terms Explained</h4>
              <div style={{ background: 'var(--background)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                {result.medicalTerms.map((item, idx) => (
                  <div key={idx} style={{ padding: '0.75rem 1rem', borderBottom: idx < result.medicalTerms.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <strong style={{ color: 'var(--primary)' }}>{item.term}</strong>
                    <div style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>{item.explanation}</div>
                  </div>
                ))}
              </div>

              <h4 className="mt-4 mb-4">Questions for Your Doctor</h4>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                {result.doctorQuestions.map((q, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>{q}</li>
                ))}
              </ul>

              <button className="btn btn-primary" style={{ width: '100%' }}>
                Discuss With Doctor <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIReportAssistant;
