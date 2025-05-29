import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../validations/authSchema";
import { loginApi } from "../api";
import { toast } from "react-toastify";

const Login = () => {
  const nav = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(loginSchema);
  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await loginApi(data);
      console.log(res);
      if (res) {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        nav("/");
        toast.success("Login successfully");
      }
    } catch (error) {
      reset();
      console.error("Login failed:", error);
      toast.error(error.response.data || "Login failed");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-danger">{errors.password.message}</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
