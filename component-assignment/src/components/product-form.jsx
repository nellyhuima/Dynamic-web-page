/* product selection */
/* quantity selection */
/* quantity negative check */
/* styling */

function ProductForm() {
    
    return (
        <div className="selectProduct">
            <h2 id="select">
                Select product
            </h2>
            <div className="product">
                <label htmlFor="product">Product:</label>
                    <select name="AMD" id="AMD">
                        <option value="AMD Ryzen 7 5700X3D">AMD Ryzen 7 5700X3D</option>
                        <option value="AMD Ryzen 7 7800X3D">AMD Ryzen 7 7800X3D</option>
                        <option value="AMD Ryzen 5 7600X">AMD Ryzen 5 7600X</option>
                        <option value="AMD Ryzen 5 5600X">AMD Ryzen 5 5600X</option>
                    </select>
            </div>
        </div>
    )
}


export default ProductForm 