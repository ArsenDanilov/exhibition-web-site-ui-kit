import product1 from "@/assets/product/product1.png"
import product2 from "@/assets/product/product2.png"

export interface IProductData {
    productName: string,
    productImage: string,
}

export const productData: IProductData[] = [
    {
        productName: "ТМ Снэкушки Коррекс. Сухарики",
        productImage: product1,
    },
    {
        productName: "Арахис в хрустящей корочке Small Balls",
        productImage: product2,
    },
]