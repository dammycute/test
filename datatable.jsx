import React from 'react';
import { useApi } from '../apicontext';
import '../../App.css'

const DataTable = () => {
  const { catalog, loading, error } = useApi();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <table>
        <thead className="table-head">
          <tr>
            <th>
              <input type="checkbox" /> S/N
            </th>
            <th>Image</th>
            <th>SKU</th>
            <th>Name</th>
            <th>Title</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Cost Price</th>
            <th>Quantity</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody className="ctn">
          {catalog.map((product, index) => (
            <tr key={product.id} className={index % 2 === 0 ? 'even' : ''}>
              <td>
                <input type="checkbox" /> {index + 1}
              </td>
              <td>
                <img src={product.Image_1} alt={product.name} style={{ width: 50, height: 50, objectFit: 'cover' }} />
              </td>
              <td>{product.SKU}</td>
              <td>{product.Name}</td>
              <td>{product.Title}</td>
              <td>
                <div style={{ maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {product.Description}
                </div>
              </td>
              <td>{product.Brand}</td>
              <td>{product['Cost Price']}</td>
              <td>{product.Quantity}</td>
              <td>{product.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
