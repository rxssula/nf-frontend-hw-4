"use client";

import { uploadImage } from "@/api/axiosInstance";
import useCreateProduct from "@/hooks/useCreateProduct";
import * as React from "react";
interface ICreateItemProps {}

const CreateItem: React.FunctionComponent<ICreateItemProps> = (props) => {
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [files, setFiles] = React.useState<File[]>([]);

  const { mutate: createProduct } = useCreateProduct();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (files.length === 0) {
      return;
    }

    let imageUrls = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);

      const uploadResult = await uploadImage(formData);
      imageUrls.push(uploadResult.location);
    }

    // const formData = new FormData();

    // formData.append("file", file);

    // const uploadResult = await uploadImage(formData);

    createProduct({
      title,
      price,
      category,
      description,
      image: imageUrls,
      //   image: uploadResult.location,
    });
    setTitle("");
    setPrice(0);
    setCategory("");
    setDescription("");
    // setFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      //   setFile(e.target.files[0]);
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form className="flex gap-5">
        <div className="mb-5">
          <label htmlFor="title" className="block mb-2 text-sm font-medium">
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="price" className="block mb-2 text-sm font-medium">
            Price
          </label>
          <input
            onChange={(e) => setPrice(parseInt(e.target.value))}
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="category" className="block mb-2 text-sm font-medium">
            Category
          </label>
          <input
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            id="category"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium"
          >
            Description
          </label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            id="description"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="file" className="block mb-2 text-sm font-medium">
            Upload Image
          </label>
          <input
            onChange={handleFileChange}
            multiple
            type="file"
            id="file"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <button
          onClick={onSubmit}
          type="submit"
          className="bg-gray-100 rounded-lg px-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateItem;
