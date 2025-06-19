import React, { useState } from 'react';

// Mock implementations for demonstration
const storage = {};
const auth = { currentUser: { uid: 'demo-user-123' } };

const uploadBytes = async (fileRef, file) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { metadata: { name: file.name } };
};

const getDownloadURL = async (fileRef) => {
  return `https://example.com/kyc_docs/${fileRef.path}`;
};

const ref = (storage, path) => ({ path });

export default function CustomerDashboard() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState('Not KYC Compliant');
  const [selectedBank, setSelectedBank] = useState('FNB');

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type === 'application/pdf') {
      setFile(selected);
    } else {
      alert('Please upload a valid PDF document.');
    }
  };

  const handleUpload = async () => {
    if (!file) return alert('No file selected');

    const user = auth.currentUser;
    if (!user) return alert('User not logged in');

    const fileRef = ref(storage, `kyc_docs/${user.uid}.pdf`);
    setUploading(true);

    try {
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      console.log('Uploaded! File URL:', url);

      setStatus('KYC Uploaded (Pending Approval)');
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    padding: '2rem 1rem'
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    color: 'white',
    padding: '2rem',
    borderRadius: '20px',
    marginBottom: '2rem',
    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
    position: 'relative',
    overflow: 'hidden'
  };

  const headerPatternStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '200px',
    height: '200px',
    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    transform: 'translate(50%, -50%)'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    position: 'relative',
    zIndex: 1
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    opacity: 0.9,
    position: 'relative',
    zIndex: 1
  };

  const mainContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
  };

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#1f2937',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const bankSelectStyle = {
    width: '100%',
    padding: '1rem',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    fontSize: '1rem',
    backgroundColor: 'white',
    outline: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const bankSelectFocusStyle = {
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
  };

  const statusCardStyle = {
    ...cardStyle,
    background: status.includes('Not') 
      ? 'linear-gradient(135deg, #fef2f2, #fee2e2)' 
      : 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    border: status.includes('Not') 
      ? '2px solid #fecaca' 
      : '2px solid #bbf7d0'
  };

  const statusTextStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: status.includes('Not') ? '#dc2626' : '#16a34a',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const fileInputContainerStyle = {
    position: 'relative',
    marginBottom: '1.5rem'
  };

  const fileInputStyle = {
    width: '100%',
    padding: '1rem',
    border: '2px dashed #cbd5e1',
    borderRadius: '12px',
    backgroundColor: '#f8fafc',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  const fileInputHoverStyle = {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
    transform: 'translateY(-2px)'
  };

  const uploadButtonStyle = {
    width: '100%',
    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  };

  const uploadButtonHoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
  };

  const loadingSpinnerStyle = {
    width: '20px',
    height: '20px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderTop: '2px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  };

  const infoCardStyle = {
    ...cardStyle,
    background: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    border: '2px solid #fde68a'
  };

  const banks = ['FNB', 'Chase', 'Capital Finance', 'BSB', 'Absa'];

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }
          
          .file-input-hover:hover {
            border-color: #3b82f6;
            background-color: #eff6ff;
            transform: translateY(-2px);
          }
        `}
      </style>

      <div style={headerStyle}>
        <div style={headerPatternStyle}></div>
        <h1 style={titleStyle}>Customer Dashboard</h1>
        <p style={subtitleStyle}>Manage your banking KYC compliance and documentation</p>
      </div>

      <div style={mainContentStyle}>
        {/* Bank Selection Card */}
        <div style={cardStyle} className="card-hover">
          <h3 style={cardTitleStyle}>
            🏦 Select Your Bank
          </h3>
          <select 
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            style={bankSelectStyle}
            onFocus={(e) => Object.assign(e.target.style, bankSelectFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, bankSelectStyle)}
          >
            {banks.map(bank => (
              <option key={bank} value={bank}>{bank}</option>
            ))}
          </select>
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
            <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem' }}>
              Selected: <strong style={{ color: '#1f2937' }}>{selectedBank}</strong>
            </p>
          </div>
        </div>

        {/* KYC Status Card */}
        <div style={statusCardStyle} className="card-hover">
          <h3 style={cardTitleStyle}>
            📋 KYC Compliance Status
          </h3>
          <div style={statusTextStyle}>
            {status.includes('Not') ? '❌' : '⏳'}
            {status}
          </div>
          {status.includes('Not') && (
            <p style={{ marginTop: '1rem', color: '#6b7280', fontSize: '0.9rem' }}>
              Please upload your KYC documents to complete verification.
            </p>
          )}
          {status.includes('Pending') && (
            <p style={{ marginTop: '1rem', color: '#6b7280', fontSize: '0.9rem' }}>
              Your documents are being reviewed. You'll be notified once approved.
            </p>
          )}
        </div>

        {/* File Upload Card */}
        <div style={cardStyle} className="card-hover">
          <h3 style={cardTitleStyle}>
            📤 Upload KYC Document
          </h3>
          
          <div style={fileInputContainerStyle}>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              style={fileInputStyle}
              className="file-input-hover"
            />
            {file && (
              <div style={{ 
                marginTop: '1rem', 
                padding: '0.75rem', 
                backgroundColor: '#f0f9ff', 
                border: '1px solid #bae6fd',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#0284c7' }}>📄</span>
                <span style={{ color: '#0c4a6e', fontSize: '0.9rem' }}>
                  Selected: {file.name}
                </span>
              </div>
            )}
          </div>

          <button
            onClick={handleUpload}
            disabled={uploading}
            style={uploadButtonStyle}
            onMouseEnter={(e) => !uploading && Object.assign(e.target.style, {...uploadButtonStyle, ...uploadButtonHoverStyle})}
            onMouseLeave={(e) => Object.assign(e.target.style, uploadButtonStyle)}
          >
            {uploading && <div style={loadingSpinnerStyle}></div>}
            {uploading ? 'Uploading Document...' : 'Upload KYC Document'}
          </button>
        </div>

        {/* Info Card */}
        <div style={infoCardStyle} className="card-hover">
          <h3 style={cardTitleStyle}>
            💡 Important Information
          </h3>
          <div style={{ color: '#92400e', lineHeight: '1.6' }}>
            <p style={{ margin: '0 0 1rem 0' }}>
              <strong>Required Documents:</strong>
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
              <li>Valid Government ID</li>
              <li>Proof of Address</li>
              <li>Bank Statement (last 3 months)</li>
            </ul>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
              All documents must be in PDF format and clearly readable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}