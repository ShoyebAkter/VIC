import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
   await createUserWithEmailAndPassword(auth, email, pass)
   .then((userCredential) => {
     // Signed up 
     const user = userCredential.user;
     if(user){
      navigate('/login')
     }
     // ...
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     // ..
   });
  }

  return (
    <div>
      <section class="border-red-500 bg-gray-200  min-h-screen flex items-center justify-center loginSection">
        <div class="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
          <div class="md:w-1/2 px-5">
            <h2 class="text-2xl font-bold text-[#002D74]">Register</h2>
            <p class="text-sm mt-4 text-[#002D74]">Create your acoount</p>
            <form class="mt-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label class="block text-gray-700">Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Name"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                />
              </div>
              <div class="mt-4">
                <label class="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minlength="6"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                  required
                  onChange={handlePassChange}
                />
              </div>

              <button
                type="submit"
                class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
              >
                Sign Up
              </button>
            </form>

            <div class="mt-7 grid grid-cols-3 items-center text-gray-500">
              <hr class="border-gray-500" />
              <p class="text-center text-sm">OR</p>
              <hr class="border-gray-500" />
            </div>

            <div class="text-sm flex justify-between items-center mt-3">
              <p>If you have an account...</p>
              <button
                onClick={() => navigate("/login")}
                class="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  "
              >
                Login
              </button>
            </div>
          </div>

          <div class="w-1/2 md:block hidden ">
            <img src="/login.avif" class="rounded-2xl" alt="page img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
