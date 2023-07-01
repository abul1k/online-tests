import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes/constants";
import { register } from "../../auth/jwtService";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    name: "",
    password: "",
  });

  const registerUser = (e) => {
    e.preventDefault();
    register(user)
      .then(() => {
        navigate("/sign-in");
        toast.success("Successfully registered");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-1/4">
        <div className="text-center">
          <h2 className="text-center text-4xl font-bold text-gray-700 dark:text-white">
            Зарегистрироваться
          </h2>
        </div>

        <div className="mt-8">
          <form onSubmit={registerUser}>
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="username"
                  className="text-sm text-gray-600 dark:text-gray-200"
                >
                  Your username
                </label>
              </div>

              <input
                id="username"
                required
                type="text"
                name="username"
                placeholder="Username"
                className="form-input"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>

            <div className="my-4">
              <div className="flex justify-between">
                <label
                  htmlFor="name"
                  className="text-sm text-gray-600 dark:text-gray-200"
                >
                  Your name
                </label>
              </div>

              <input
                id="name"
                required
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>

            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="text-sm text-gray-600 dark:text-gray-200"
                >
                  Пароль
                </label>
              </div>

              <input
                id="password"
                required
                type="password"
                name="password"
                placeholder="Your Password"
                className="form-input"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>

            <div className="flex items-center mt-3">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 rounded-md text-blue-600 bg-gray-100 border-gray-200 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm text-gray-400 dark:text-gray-200"
              >
                Я принимаю Условия а также Заявление о конфиденциальности
                данных.
              </label>
            </div>

            <div className="mt-12">
              {/* <Link
                to={ROUTES.MAIN}
                type="submit"
                className="btn-primary text-center w-full"
              >
                Зарегистрироваться
              </Link> */}
              <button type="submit" className="btn-primary text-center w-full">
                Зарегистрироваться
              </button>
              <p className="text-center my-3 text-sm text-gray-400 dark:text-gray-200">
                Вы уже зарегистрированы?
              </p>
              <Link
                to={ROUTES.SINGIN}
                type="button"
                className="btn-outline-primary text-center w-full"
              >
                Авторизоваться {/* Логин */}
              </Link>
            </div>
          </form>

          {/* <p className="mt-6 text-center text-sm text-gray-400 underline hover:text-blue-500 cursor-pointer">
            Забыли пароль?
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
