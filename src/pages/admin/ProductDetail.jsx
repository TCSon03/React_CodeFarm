import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTaskById } from "../../api";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getTaskById(id);
        setProduct(res.data);
      } catch (err) {
        console.log("Lỗi khi lấy dữ liệu chi tiết:", err);
      }
    };
    fetch();
  }, [id]);

  if (!product) return <p>Đang tải...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chi tiết sản phẩm</h2>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Tiêu đề:</strong> {product.title}</p>
      <p><strong>Mô tả:</strong> {product.description}</p>
      <p><strong>Độ ưu tiên:</strong> {product.priority}</p>
      <p><strong>Trạng thái:</strong> {product.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}</p>

      <button onClick={() => navigate("/")}>Quay lại</button>
    </div>
  );
};

export default ProductDetail;
