/**
 *
 * La responsabilidad es generar toda la tabla a partir de los productos proporcionados
 */

import { ReactNode } from 'react';
import { IProduct } from './products';
//import { ProductRow } from './product-row';

export interface ITableProps {
  products: IProduct[];
  filterProductsByName: string;
  onlyProductsInStock: boolean;
}

export function Table({ onlyProductsInStock, products, filterProductsByName }: ITableProps) {
  const rows: ReactNode[] = [];

  products.forEach((product) => {
    // Clausula de guarda
    if (!product.name.toLowerCase().includes(filterProductsByName.toLowerCase())) return;
    // Clausula de guarda
    if (onlyProductsInStock && !product.stocked) return;

    /**
     * TAREA
     * Crear un componente ProductCategoryRow para que se muestre en la tabla
     * la categoria a la que pertenece el producto
     *
     * Referencia: https://react.dev/images/docs/s_thinking-in-react_ui.png
     */

    rows.push(<ProductRow key={product.name} product={product} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
