import React, { useState } from 'react';
import Navbar from './Navbar';

const Notifications = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, message: "¡Bienvenido a Paradise Nursery!", type: "info", read: false },
        { id: 2, message: "Tu pedido #1024 ha sido enviado.", type: "success", read: false },
        { id: 3, message: "Nueva oferta: 20% en plantas aromáticas.", type: "promo", read: true }
    ]);

    const markAsRead = (id) => {
        setNotifications(notifications.map(n => 
            n.id === id ? { ...n, read: true } : n
        ));
    };

    return (
        <div className="notifications-page">
            <Navbar />
            <div className="notifications-container">
                <h1>Tus Notificaciones</h1>
                <div className="notifications-list">
                    {notifications.length > 0 ? (
                        notifications.map(n => (
                            <div key={n.id} className={`notification-item ${n.read ? 'read' : 'unread'}`}>
                                <p>{n.message}</p>
                                {!n.read && (
                                    <button onClick={() => markAsRead(n.id)}>
                                        Marcar como leída
                                    </button>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No tienes notificaciones pendientes.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notifications;
