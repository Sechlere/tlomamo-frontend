import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const createUserWithEmailAndPassword = async (auth, email, password) => {
  // Simulate Firebase auth
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (email && password && password.length >= 6) {
    return { user: { email } };
  } else {
    throw new Error('Sign up failed');
  }
};

const auth = {}; // Mock auth object

export default function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to sign up. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const goToLogin = () => {
    navigate('/');
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
    padding: '1rem',
    position: 'relative',
    overflow: 'hidden'
  };

  const backgroundPattern = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                      radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%),
                      radial-gradient(circle at 60% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
    backgroundSize: '150px 150px, 200px 200px, 100px 100px',
    animation: 'float 25s ease-in-out infinite'
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '2.5rem',
    borderRadius: '24px',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)',
    width: '100%',
    maxWidth: '450px',
    position: 'relative',
    animation: 'slideUp 0.6s ease-out'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #10b981, #059669)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const subtitleStyle = {
    color: '#6b7280',
    marginBottom: '2rem',
    textAlign: 'center',
    fontSize: '1.1rem'
  };

  const errorStyle = {
    color: '#ef4444',
    fontSize: '0.9rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
    padding: '0.75rem',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    borderRadius: '12px',
    animation: 'shake 0.5s ease-in-out'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const labelStyle = {
    marginBottom: '0.5rem',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#374151'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const inputFocusStyle = {
    borderColor: '#10b981',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.1)',
    transform: 'translateY(-1px)'
  };

  const buttonStyle = {
    width: '100%',
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    padding: '1rem',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const buttonHoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
  };

  const loginTextStyle = {
    fontSize: '0.95rem',
    textAlign: 'center',
    marginTop: '2rem',
    color: '#6b7280'
  };

  const loginLinkStyle = {
    color: '#10b981',
    textDecoration: 'none',
    fontWeight: '600',
    marginLeft: '0.25rem',
    transition: 'color 0.3s ease',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  };

  const loadingSpinnerStyle = {
    width: '20px',
    height: '20px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderTop: '2px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginRight: '0.5rem'
  };

  const featureIconStyle = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #10b981, #059669)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.2rem',
    animation: 'pulse 2s infinite'
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(2deg);
            }
          }
          
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}
      </style>
      
      <div style={backgroundPattern}></div>
      
      <div style={cardStyle}>
        <div style={featureIconStyle}>✨</div>
        
        <h2 style={titleStyle}>Create Account</h2>
        <p style={subtitleStyle}>Sign up to access your dashboard</p>

        {error && (
          <div style={errorStyle}>{error}</div>
        )}

        <div style={formStyle}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              placeholder="Create a secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
          </div>

          <button
            onClick={handleSignUp}
            disabled={isLoading}
            style={buttonStyle}
            onMouseEnter={(e) => !isLoading && Object.assign(e.target.style, {...buttonStyle, ...buttonHoverStyle})}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            {isLoading && <div style={loadingSpinnerStyle}></div>}
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </div>

        <p style={loginTextStyle}>
          Already have an account?
          <button onClick={goToLogin} style={loginLinkStyle}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
}