import { useState } from "react";
import { createProduct } from './../../api/productApi';
import Form from "../../Components/Form";
const initFormData = {
  title: "",
  description: "",
};

const ProductForm = () => {
  const [formData, setFormData] = useState(initFormData);
  const handleChange = (data) => {
    const { name, value } = data.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const data = await createProduct(formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center text-red-600">
        Them San Pham
      </h1>
      <Form handleSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="" name="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            name="title"
            placeholder="Product name"
            className="border form-control"
            onChange={handleChange}
            defaultValue={formData.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" name="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="description"
            placeholder="Description "
            className="border form-control"
            onChange={handleChange}
            defaultValue={formData.description}
          />
        </div>
        <div className="mb-3">
          <button className="w-full btn btn-primary">Them SP</button>
        </div>
      </Form>
    </div>
  );
};

export default ProductForm;
