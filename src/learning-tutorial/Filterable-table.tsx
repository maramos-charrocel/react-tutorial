import { IProduct } from "./products"
import { isArray } from "../helpers/type-validation";
import { ReactNode } from "react";
import {Table} from "./Table.tsx";

export interface IFilterableTableProps{
    products: IProduct[];
}

export function FilterableTable({products}: IFilterableTableProps) {
    if(!isArray(products)){
        return <div>Products must be an array</div>
    }
    const rows: ReactNode[] =[]

    products.forEach((product) => {
        rows.push(
            <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    })
    return <div>
        <form>
            <label>
                Search...
                <input type="search"/>
            </label>
            <label>
            <input type="checkbox" />
                Only products in stock
            </label>
        </form>
        <Table products={products} />
    </div>
}