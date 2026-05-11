import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

const SettingsMenu = () => {
    const navigate = useNavigate();

    const menuOptions = [
        { id: 1, title: 'Perfil de Usuario', icon: '👤', path: '/settings/profile' },
        { id: 2, title: 'Notificaciones', icon: '🔔', path: '/settings/notifications' },
        { id: 3, title: 'Privacidad y Seguridad', icon: '🔒', path: '/settings/privacy' },
        { id: 4, title: 'Preferencias de Visualización', icon: '🌓', path: '/settings/display' }
    ];

    return (
        <div className="settings-menu-container">
            <header className="settings-header">
                <button onClick={() => navigate(-1)} className="back-btn">←</button>
                <h2>Configuración</h2>
            </header>
            
            <nav className="menu-list">
                {menuOptions.map((option) => (
                    <div 
                        key={option.id} 
                        className="menu-item" 
                        onClick={() => navigate(option.path)}
                    >
                        <span className="menu-icon">{option.icon}</span>
                        <span className="menu-title">{option.title}</span>
                        <span className="menu-arrow">❯</span>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default SettingsMenu;
