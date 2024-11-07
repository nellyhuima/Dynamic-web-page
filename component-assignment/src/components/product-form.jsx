/* product selection,  */
/* quantity selection */
/* quantity negative check */
/* styling */

import React, { useState } from 'react';

function ProductForm() {

    return (
        <div className="selectProduct">
            <h2 id="select">Select product</h2>
            <div className="product">
                <label htmlFor="product">Product: </label>
                <select name="AMD" id="AMD">
                    <option value="AMD Ryzen 7 5700X3D">AMD Ryzen 7 5700X3D</option>
                    <option value="AMD Ryzen 7 7800X3D">AMD Ryzen 7 7800X3D</option>
                    <option value="AMD Ryzen 5 7600X">AMD Ryzen 5 7600X</option>
                    <option value="AMD Ryzen 5 5600X">AMD Ryzen 5 5600X</option>
                </select>
            </div>

            <Quantity />
        </div>
    );
}

function Quantity() {
    const [quantity, setQuantity] = useState(0);

    const increase = () => setQuantity(prevQuantity => prevQuantity + 1);
    const decrease = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));

    return (
        <div className="number">
            <p>Quantity: </p>
            <button className="minus" onClick={decrease}>-</button>
            <input type="text" id="quantity" value={quantity} readOnly />
            <button className="plus" onClick={increase}>+</button>
        </div>
    );
}

export default ProductForm;