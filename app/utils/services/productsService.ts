import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com"
})

const getAllProducts = async (): Promise<Product[]> => {
    const response = await axiosInstance.get("/products");
    return response.data
}

  export default getAllProducts