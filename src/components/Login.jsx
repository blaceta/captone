import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simulación de autenticación
        const savedUser = JSON.parse(localStorage.getItem('user'));

        if (savedUser && savedUser.email === credentials.email && savedUser.password === credentials.password) {
            alert('¡Bienvenido de nuevo!');
            navigate('/home');
        } else {
            setError('Correo o contraseña incorrectos. Inténtalo de nuevo.');
        }
    };

    return (
        <div className="login-screen">
            <header className="login-header">
                <h2>Iniciar Sesión</h2>
            </header>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={credentials.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={credentials.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-button">Ingresar</button>
            </form>
            <footer className="login-footer">
                <p>¿No tienes una cuenta? <Link to="/signup">Regístrate aquí</Link></p>
            </footer>
        </div>
    );
};

export default Login;
