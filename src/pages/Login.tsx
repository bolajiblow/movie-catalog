import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginbg from "../img/login-bg.jpg";
import { AuthCredentials, IUserSignUpDto } from "../interfaces/auth.interface";
import { loginService, signupService } from "../services/auth.service";
import { toast } from "react-toastify";
import routes from "./routes";
const Login = () => {
  let navigate = useNavigate();
  const [isSignUp, setSignUp] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
  useEffect(() => {}, [reload]);

  const reloadData = () => {
    setReload(!reload);
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate,
    onSubmit: async (values) => {
      const authData: AuthCredentials = {
        email: values.email,
        password: values.password,
      };
      try {
        let auth = await loginService(authData);
        console.log(auth);
        if (auth.message == "user login success") {
          localStorage.setItem("movie_token", auth.body.token);
          navigate(routes.home);
          toast.success("Login Successful");
        } else {
        }
      } catch (error: any) {
        console.log(error);
      }
    },
  });

  const signUpformik = useFormik({
    validate: (values: any) => {
      const errors: any = {};
      const regex: any = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      if (!values.firstname) {
        errors.firstname = "First Name is required";
      }
      if (!values.lastname) {
        errors.lastname = "Last Name is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      if (!values.email) {
        errors.email = "Email Address is required";
      }
      if (!regex.test(values.email)) {
        errors.email = "Please enter a valid email address";
      }
      return errors;
    },
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const signupData: IUserSignUpDto = {
        first: values.firstname,
        last: values.lastname,
        email: values.email,
        password: values.password,
      };
      console.log(signupData);
      try {
        let signup = await signupService(signupData);
        console.log(signup);
        if (signup.message == "user creation success") {
          setSignUp(!isSignUp)
          toast.success("Signup Successful");
        } else {
        }
      } catch (error: any) {
        console.log(error);
      }
    },
  });

  useEffect(() => {}, [reload]);

  return (
    <section className="bg-primary min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {isSignUp ? (
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-primary">Sign Up</h2>
            <p className="text-xs mt-4 text-[#002D74]">
              Join us today for unlimited movies!
            </p>

            <form
              onSubmit={signUpformik.handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="mt-2">
                <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="First name"
                  value={signUpformik.values.firstname}
                  onChange={signUpformik.handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Last name"
                  value={signUpformik.values.lastname}
                  onChange={signUpformik.handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email- Address"
                  value={signUpformik.values.email}
                  onChange={signUpformik.handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={signUpformik.values.password}
                  onChange={signUpformik.handleChange}
                  className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-primary rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-3 text-xs flex justify-between items-center text-primary">
              <p>Have an account?</p>
              <button
                onClick={() => {
                  setSignUp(!isSignUp);
                }}
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
              >
                Login
              </button>
            </div>
          </div>
        ) : (
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-primary">Login</h2>
            <p className="text-xs mt-4 text-[#002D74]">
              If you are already a member, easily log in
            </p>

            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="mt-2">
                <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First Name
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="email-address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="enter password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Login
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-primary">
              <p>Don't have an account?</p>
              <button
                onClick={() => {
                  setSignUp(!isSignUp);
                }}
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
              >
                Register
              </button>
            </div>
          </div>
        )}

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={loginbg} />
        </div>
      </div>
    </section>
  );
};

export default Login;
function useToast() {
  throw new Error("Function not implemented.");
}
