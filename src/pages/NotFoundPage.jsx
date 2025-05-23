import { Link } from "react-router-dom";

const NotfoundPage = () => {
  return (
    <div>
      <h1>Không tìm thấy trang!</h1>
      <ul>
        <li>
          <Link to="/">
            <button>Về trang chủ</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NotfoundPage;
