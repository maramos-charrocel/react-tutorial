import { IProduct } from "./products"
import { isArray } from "../helpers/type-validation";

export interface IFilterableTableProps{
    products: IProduct[]
}

export function FilterableTable({products}: IFilterableTableProps) {
    if(!isArray(products)){
        return <div>Products must be an array</div>
    }
    return <div>Filterable Table</div>
}