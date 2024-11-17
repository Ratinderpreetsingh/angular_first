export interface Subcategory {
  subcategory_id?:number|string;
    subcategory_name: string;
    subcategory_description: string;
    category_id: number | string;  // Use `number` or `string`, avoid `BigInteger`
  }