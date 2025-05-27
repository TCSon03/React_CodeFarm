import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, getTaskById, updateTask } from "../../api";

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const res = await getTaskById(id);
        const product = res.data;
        setValue("title", product.title);
        setValue("description", product.description);
        setValue("priority", product.priority);
        setValue("completed", product.completed ? "true" : "false");
      };
      fetchData();
    }
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      data.completed = data.completed === "true";

      if (id) {
        await updateTask(id, data);
      } else {
        await createTask(data);
      }

      navigate("/");
    } catch (err) {
      console.log("Lỗi khi submit:", err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{id ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm"}</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
        }}
      >
        <input
          placeholder="Title"
          {...register("title", { required: "Vui lòng nhập tiêu đề" })}
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}

        <textarea
          placeholder="Description"
          {...register("description", { required: "Vui lòng nhập mô tả" })}
        />
        {errors.description && (
          <p style={{ color: "red" }}>{errors.description.message}</p>
        )}

        <select
          {...register("priority", { required: "Vui lòng chọn độ ưu tiên" })}
        >
          <option value="">Chọn độ ưu tiên</option>
          <option value="low">Thấp</option>
          <option value="medium">Trung bình</option>
          <option value="high">Cao</option>
        </select>
        {errors.priority && (
          <p style={{ color: "red" }}>{errors.priority.message}</p>
        )}

        <label>
          Trạng thái:
          <select {...register("completed", { required: true })}>
            <option value="false">Chưa hoàn thành</option>
            <option value="true">Đã hoàn thành</option>
          </select>
        </label>

        <button type="submit">{id ? "Lưu chỉnh sửa" : "Thêm sản phẩm"}</button>
      </form>
    </div>
  );
};

export default ProductForm;
