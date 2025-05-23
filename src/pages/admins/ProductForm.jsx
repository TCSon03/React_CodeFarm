import { createProduct } from "../../api/productApi";
import Form from "../../Components/Form";
import { useForm } from "react-hook-form";
const initFormData = {
  title: "",
  description: "",
};

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await createProduct(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center text-red-600">
        Them San Pham
      </h1>
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="" name="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            placeholder="Product name"
            className="border form-control"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-danger">Title khong de trong</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" name="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            placeholder="Description "
            className="border form-control"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-danger">Des khong de trong</span>
          )}
        </div>
        <div className="mb-3">
          <button className="w-full btn btn-primary">Them SP</button>
        </div>
        <button className="w-full btn btn-secondary" onClick={reset}>
          Cancel
        </button>
      </Form>
    </div>
  );
};

export default ProductForm;
