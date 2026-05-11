import React, { useState } from 'react';
import Navbar from './Navbar';

const SettingsScreen = () => {
    const [settings, setSettings] = useState({
        darkMode: false,
        language: 'Español',
        highContrast: false
    });

    const handleToggle = (setting) => {
        setSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    return (
        <div className="settings-page">
            <Navbar />
            <div className="settings-content">
                <h1>Preferencias de Visualización</h1>
                
                <div className="setting-item">
                    <span>Modo Oscuro</span>
                    <label className="switch">
                        <input 
                            type="checkbox" 
                            checked={settings.darkMode} 
                            onChange={() => handleToggle('darkMode')} 
                        />
                        <span className="slider round"></span>
                    </label>
                </div>

                <div className="setting-item">
                    <span>Idioma</span>
                    <select 
                        value={settings.language} 
                        onChange={(e) => setSettings({...settings, language: e.target.value})}
                    >
                        <option value="Español">Español</option>
                        <option value="English">English</option>
                        <option value="Français">Français</option>
                    </select>
                </div>

                <div className="setting-item">
                    <span>Contraste Alto</span>
                    <label className="switch">
                        <input 
                            type="checkbox" 
                            checked={settings.highContrast} 
                            onChange={() => handleToggle('highContrast')} 
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
                
                <button className="save-btn" onClick={() => alert('Configuración guardada')}>
                    Guardar Cambios
                </button>
            </div>
        </div>
    );
};

export default SettingsScreen;
