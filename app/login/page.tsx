"use client";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import React, { ReactHTMLElement, useState } from "react";

const page = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthData((prev) => ({ ...prev, [name]: value }));
  };
  const submit = (e: any) => {
    e.preventDefault();
    const { email, password } = authData;
    if (email === "som@gmail.com" && password === "prashant@99") {
      enqueueSnackbar("Login Successfull", {
        variant: "success",
        autoHideDuration: 3000,
      });
    } else {
      enqueueSnackbar("Invalid Credentials", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div>
          <form
            action=""
            className="gap-5 bg-gradient-to-r from-gray-300 to-orange-300 p-3 text-2xl flex flex-col"
          >
            <div className="flex  p-2 flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="outline px-0.5 outline-1"
                onChange={inputHandle}
                name="email"
                id=""
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="outline px-0.5 outline-1"
                onChange={inputHandle}
                name="password"
              />
            </div>
            <button className="bg-red-200 rounded-md" onClick={submit}>
              Login
            </button>
          </form>
        </div>
      </SnackbarProvider>
    </>
  );
};

export default page;
