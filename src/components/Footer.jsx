const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '3rem 0', marginTop: 'auto' }}>
      <div className="container text-center">
        <h3 style={{ color: 'white' }}>Sai Diagnostics</h3>
        <p style={{ color: '#94a3b8' }}>Advanced Diagnostics & Patient Care</p>
        <p style={{ fontSize: '0.875rem', marginTop: '2rem', color: '#64748b' }}>
          Disclaimer: This platform provides educational information only. It cannot diagnose diseases, prescribe medicines, or replace a qualified healthcare professional.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
