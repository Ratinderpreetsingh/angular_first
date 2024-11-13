export interface Subcategory {
    subcategory_name: string;
    subcategory_description: string;
    category_id: number | string;  // Use `number` or `string`, avoid `BigInteger`
  }