import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import Navbar from './Navbar'; // Asegúrate de tener el logo en el Navbar
import './ProductList.css';

const ProductList = () => {
    const dispatch = useDispatch();
    const plants = [
        { id: 1, name: 'Snake Plant', price: 15, category: 'Air Purifying', image: 'url_imagen' },
        { id: 2, name: 'Aloe Vera', price: 12, category: 'Medicinal', image: 'url_imagen' },
        // ... más plantas
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div className="home-container">
            <Navbar /> {/* Tarea 12: Aquí va el logotipo en la cabecera */}
            <div className="product-grid">
                {plants.map(plant => (
                    <div key={plant.id} className="product-card">
                        <img src={plant.image} alt={plant.name} />
                        <h3>{plant.name}</h3>
                        <p>${plant.price}</p>
                        <button onClick={() => handleAddToCart(plant)}>
                            Añadir al carrito
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
