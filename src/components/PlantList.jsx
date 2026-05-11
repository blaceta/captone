import React, { useState, useEffect } from 'react';

const PlantApiComponent = () => {
    const [apiPlants, setApiPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Ejemplo de llamada a una API externa
        const fetchPlants = async () => {
            try {
                const response = await fetch('https://api.jsonbin.io/v3/b/65f123456... (o tu URL de API)');
                const data = await response.json();
                
                // Supongamos que la API nos trae plantas adicionales
                setApiPlants(data.record || data);
                setLoading(false);
            } catch (error) {
                console.error("Error cargando datos de la API:", error);
                setLoading(false);
            }
        };

        fetchPlants();
    }, []);

    if (loading) return <p>Cargando catálogo exclusivo desde el servidor...</p>;

    return (
        <div className="api-data-section">
            <h2>Ofertas Especiales (vía API)</h2>
            <div className="api-grid">
                {apiPlants.map(plant => (
                    <div key={plant.id} className="api-card">
                        <img src={plant.image_url} alt={plant.common_name} />
                        <h3>{plant.common_name}</h3>
                        <p>Precio especial: ${plant.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlantApiComponent;
