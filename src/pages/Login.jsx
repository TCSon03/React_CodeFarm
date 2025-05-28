import { useForm } from "react-hook-form";
import { loginApi } from "../api";
import { loginSchema } from "../validations/authSchema";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(loginSchema);
  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await loginApi(data);
      if (res.status !== 200) {
        throw new Error("Login failed");
      }
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("isAuthenticated", true);
      console.log(res);
      toast.success("Login successfully")
    } catch (error) {
      toast.error("Login failed:", error);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <span className="text-danger">{errors.username.message}</span>
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
