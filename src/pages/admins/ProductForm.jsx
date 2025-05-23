import { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center text-red-600">
        Them San Pham
      </h1>
      <form action="" onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default ProductForm;
