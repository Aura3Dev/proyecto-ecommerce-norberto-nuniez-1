import React from 'react';

const CartWidget = () => {
    return (
        <div className="cart-widget">
        <i className="fas fa-shopping-cart"></i> {/* Utiliza el ícono que desees */}
        <span className="notification">1</span> {/* Reemplaza con el número real del carrito */}
        </div>
    );
};

export default CartWidget;
