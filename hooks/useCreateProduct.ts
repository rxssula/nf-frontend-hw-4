import { Product, axiosInstance } from "@/api/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";


interface ProductData {
    title: string;
    price: number;
    category: string;
    description: string;
    image: string[];
}

const createProduct = async (productData: ProductData): Promise<Product> => {
    const res = await axiosInstance.post<Product>('/products', productData)
    return res.data
}

const useCreateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation<Product, Error, ProductData>({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['products']})
        }
    })
}

export default useCreateProduct