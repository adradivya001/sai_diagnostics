import { useState } from 'react';
import { reports } from '../data/reports';
import { appointments } from '../data/appointments';
import { FileText, Calendar, Activity, CheckCircle, Clock } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1>Patient Dashboard</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>JD</div>
          <span style={{ fontWeight: '500' }}>Welcome, John Doe</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
        <button 
          onClick={() => setActiveTab('overview')}
          style={{ padding: '1rem', border: 'none', background: 'none', borderBottom: activeTab === 'overview' ? '2px solid var(--primary)' : '2px solid transparent', color: activeTab === 'overview' ? 'var(--primary)' : 'var(--text-muted)', fontWeight: '500', cursor: 'pointer' }}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('journey')}
          style={{ padding: '1rem', border: 'none', background: 'none', borderBottom: activeTab === 'journey' ? '2px solid var(--primary)' : '2px solid transparent', color: activeTab === 'journey' ? 'var(--primary)' : 'var(--text-muted)', fontWeight: '500', cursor: 'pointer' }}
        >
          My Health Journey
        </button>
        <button 
          onClick={() => setActiveTab('reports')}
          style={{ padding: '1rem', border: 'none', background: 'none', borderBottom: activeTab === 'reports' ? '2px solid var(--primary)' : '2px solid transparent', color: activeTab === 'reports' ? 'var(--primary)' : 'var(--text-muted)', fontWeight: '500', cursor: 'pointer' }}
        >
          My Reports
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="flex items-center gap-4 mb-4"><Calendar size={24} /> Upcoming Appointments</h3>
            {appointments.filter(a => a.status === 'Upcoming').map(app => (
              <div key={app.id} style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', marginBottom: '1rem' }}>
                <div className="flex justify-between items-center mb-2">
                  <strong>{app.date} at {app.time}</strong>
                  <span className="badge badge-info">{app.type}</span>
                </div>
                <div style={{ color: 'var(--text-muted)' }}>{app.reason}</div>
              </div>
            ))}
          </div>

          <div className="card">
            <h3 className="flex items-center gap-4 mb-4"><FileText size={24} /> Recent Reports</h3>
            {reports.slice(0, 3).map(rep => (
              <div key={rep.id} style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>{rep.testName}</strong>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{rep.date}</div>
                </div>
                <span className={`badge ${rep.status === 'Reviewed' ? 'badge-success' : 'badge-warning'}`}>{rep.status}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'journey' && (
        <div className="card">
          <h3 className="mb-8">Your Diagnostic Journey</h3>
          
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', left: '0.9rem', top: 0, bottom: 0, width: '2px', background: 'var(--border)' }}></div>
            
            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '-2.4rem', background: 'var(--surface)', color: 'var(--success)' }}><CheckCircle size={24} /></div>
              <h4>Appointment Scheduled</h4>
              <p>Lumbar Spine MRI booked for Oct 1, 2026</p>
            </div>
            
            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '-2.4rem', background: 'var(--surface)', color: 'var(--success)' }}><CheckCircle size={24} /></div>
              <h4>Diagnostic Test Completed</h4>
              <p>MRI scan successfully completed.</p>
            </div>
            
            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '-2.4rem', background: 'var(--surface)', color: 'var(--success)' }}><CheckCircle size={24} /></div>
              <h4>Report Generated</h4>
              <p>Radiologist has securely uploaded your MRI report.</p>
            </div>
            
            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '-2.4rem', background: 'var(--surface)', color: 'var(--warning)' }}><Clock size={24} /></div>
              <h4>Doctor Review</h4>
              <p>Upcoming consultation to discuss findings.</p>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2.4rem', background: 'var(--surface)', color: 'var(--border)' }}><Activity size={24} /></div>
              <h4 style={{ color: 'var(--text-muted)' }}>Treatment/Management Plan</h4>
              <p style={{ color: 'var(--text-muted)' }}>Pending doctor consultation.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'reports' && (
        <div className="card">
          <h3 className="mb-4">All Reports</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
                  <th style={{ padding: '1rem 0' }}>Test Name</th>
                  <th style={{ padding: '1rem 0' }}>Date</th>
                  <th style={{ padding: '1rem 0' }}>Status</th>
                  <th style={{ padding: '1rem 0', textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {reports.map(rep => (
                  <tr key={rep.id} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '1rem 0' }}><strong>{rep.testName}</strong></td>
                    <td style={{ padding: '1rem 0' }}>{rep.date}</td>
                    <td style={{ padding: '1rem 0' }}>
                      <span className={`badge ${rep.status === 'Reviewed' ? 'badge-success' : 'badge-warning'}`}>{rep.status}</span>
                    </td>
                    <td style={{ padding: '1rem 0', textAlign: 'right' }}>
                      <button className="btn btn-outline" style={{ padding: '0.25rem 1rem', fontSize: '0.875rem' }}>View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
