import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSignup = (e) => {
        e.preventDefault();
        // Validación básica
        if (!userData.username || !userData.email || !userData.password) {
            setError('Todos los campos son obligatorios');
            return;
        }
        
        // Simulación de registro exitoso guardando en LocalStorage
        localStorage.setItem('user', JSON.stringify(userData));
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        navigate('/login');
    };

    return (
        <div className="auth-container">
            <h2>Crear Cuenta</h2>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    name="username"
                    placeholder="Nombre de usuario"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Registrarse</button>
            </form>
            <p>
                ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
            </p>
        </div>
    );
};

export default Signup;
