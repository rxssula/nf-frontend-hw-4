import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

interface Image {
    originalName: string;
    filename: string;
    location: string
}

const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com"
})

const imageInstance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1"
})

const uploadImage = async (file: FormData): Promise<Image> => {
    const response = await imageInstance.post("/files/upload", file)
    return response.data
}

const getAllProducts = async (): Promise<Product[]> => {
    const response = await axiosInstance.get("/products");
    return response.data
}

export {
    getAllProducts,
    axiosInstance,
    imageInstance,
    uploadImage
}