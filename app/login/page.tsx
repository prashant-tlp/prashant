"use client";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter()
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });


  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthData((prev) => ({ ...prev, [name]: value }));
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = authData;
    if (email === "som@gmail.com" && password === "prashant@99") {
      enqueueSnackbar("Login Successfull", {
        variant: "success",
        autoHideDuration: 3000,
      });
      router.push('/messages')
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
            onSubmit={submit}
            action=""
            className="gap-5 bg-gradient-to-r from-gray-300 to-orange-300 p-3 text-2xl flex flex-col"
          >
            <div className="flex text-black  p-2 flex-col gap-2">
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
            <button className="bg-orange-400 rounded-md">
              Login
            </button>
          </form>
        </div>
      </SnackbarProvider>
    </>
  );
};

export default Page;
