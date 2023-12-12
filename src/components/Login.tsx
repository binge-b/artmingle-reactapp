import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";

interface LoginForm {
    name: string;
    email: string;
    password: string;
}


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({ mode: "onChange"});
    const onSubmit = (data: LoginForm) => {
        console.log(data);
    };

  return (
    <div className="form-container flex items-center justify-center h-screen bg-gray-200">
        <div className="bg-white p-6 rounded-lg shadow-lg w-7/8">
        <h1 className="text-2xl font-bold mb-6 text-center">ログインフォーム</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="名前" className="block text-sm mb-2">名前</label>
            <input id="name" type="text" {...register("name", { required: "名前は必須です。", minLength: {value: 6, message: "6文字以上で入力してください。"}})} className="w-full p-2 border-2 border-gray-300 rounded-md mb-2"/>
            <p className="text-xs text-red-600 text-end mb-3 p-2">{errors.name?.message as React.ReactNode}</p>

            <label htmlFor="メールアドレス" className="block text-sm mb-2">メールアドレス</label>
            <input id="email" type="email"{...register("email", { required: "emailは必須です。"})} className="w-full p-2 border-2 border-gray-300 rounded-md mb-2"/>
            <p className="text-xs text-red-600 text-end mb-3 p-2">{errors.email?.message as React.ReactNode}</p>

            <label htmlFor="パスワード" className="block text-sm mb-2">パスワード</label>
            <input id="password" type="password" {...register("password", { required: "パスワードは必須です。", minLength: {value: 8, message: "8文字以上で入力してください。"} })} className="w-full p-2 border-2 border-gray-300 rounded-md mb-2"/>
            <p className="text-xs text-red-600 text-end mb-3 p-2">{errors.password?.message as React.ReactNode}</p>

            <button type="submit" className="w-full py-2 px-4 text-sm font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">送信</button>
        </form>
        </div>
    </div>
  )
}

export default Login;