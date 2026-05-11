import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import Navbar from './Navbar';

const PlantDetail = ({ plants }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Buscar la planta específica por ID (o nombre)
    const plant = plants.find(p => p.id === parseInt(id));

    if (!plant) return <div>Planta no encontrada</div>;

    const handleAddToCart = () => {
        dispatch(addItem(plant));
    };

    return (
        <div className="detail-container">
            <Navbar />
            <div className="plant-detail-view">
                <button onClick={() => navigate(-1)} className="back-button">
                    ← Volver al catálogo
                </button>
                
                <div className="detail-content">
                    <img src={plant.image} alt={plant.name} className="detail-image" />
                    <div className="detail-info">
                        <h1>{plant.name}</h1>
                        <p className="category">Categoría: {plant.category}</p>
                        <p className="description">{plant.description}</p>
                        <p className="price">Precio: ${plant.cost}</p>
                        
                        <div className="benefits">
                            <h3>Beneficios:</h3>
                            <ul>
                                <li>Purifica el aire eliminando toxinas.</li>
                                <li>Añade un toque natural a tu decoración.</li>
                                <li>Fácil mantenimiento en interiores.</li>
                            </ul>
                        </div>

                        <button onClick={handleAddToCart} className="add-btn">
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetail;
