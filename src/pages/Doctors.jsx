import { doctors } from '../data/doctors';
import { User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="mb-4">Our Medical Specialists</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Consult with our experienced medical professionals to discuss your diagnostic reports and treatment options.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {doctors.map(doc => (
          <div key={doc.id} className="card text-center" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ 
              width: '100px', height: '100px', 
              background: 'var(--background)', 
              borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem',
              color: 'var(--primary)'
            }}>
              <User size={48} />
            </div>
            <h3 className="mb-2">{doc.name}</h3>
            <div className="badge badge-info mb-4">{doc.specialty}</div>
            
            <div style={{ flex: 1, textAlign: 'left', marginBottom: '1.5rem' }}>
              <div className="mb-2"><strong>Experience:</strong> {doc.experience}</div>
              <div className="mb-2"><strong>Languages:</strong> {doc.languages.join(', ')}</div>
              <div><strong>Available:</strong> {doc.availability}</div>
            </div>

            <div className="flex flex-col gap-4">
              <button className="btn btn-outline" style={{ width: '100%' }}>View Profile</button>
              <button className="btn btn-primary flex items-center justify-center gap-4" style={{ width: '100%' }}>
                <Calendar size={18} /> Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
