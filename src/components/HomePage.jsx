import React from 'react'
import LikeButton from './LikeButton.tsx'

const HomePage = () => {
  return (
    <div>
    {/* ヘッダーイントロダクション */}
      <section className="text-gray-700" id="home">
      <div className="flex container mx-auto py-5 px-5 flex-col md:flex-row items-center">
      <div className="md:w-1/2 flex-grow mb-5 lg:pr-24 md:pr-16 text-center md:text-left">
        <h1 className="text-xl sm:text-3xl text-gray-900 font-medium mb-4">
          フィルターレスなArtの扉
          <br />知ってるテーマも新発見もすべて手中に。
        </h1>
        <p className="mb-8 leadeing-relaxed">
          世界を広げたいですか？ いまのあなたの観たいをPickup! <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque autem culpa eos veniam. 
        </p>
        <button className="text-white bg-orange-400 border-0 rounded text-lg px-6 py-2 hover:bg-orange-600 duration-300">
          チケット予約
        </button>
      </div>
      </div>
    </section>
      
    {/* pickupセクション */}
    <section className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-5 mx-auto">
        <div text-center>
        <h1  className="text-4xl sm:text-3xl font-medium mb-2 text-gray-900">
          Pick Up
        </h1>
        </div>
      </div>
    </section>

    {/* pickupエリア */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {/* 記事カード */}
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i01.jpg" alt="" className="object-cover"/>
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>アクターの微光：子どもからアバターまで、足元の生命と次世代のつながり</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>

      </article>

      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i26.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>デジタル・クオンタム：光の幻想と個体の躍動</h3>
          </a>
          <p className="text-gray-700">2023.3.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
      
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i03.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>Digital Auction: アート・フューチャーのNFT&DAOアートバーゼル</h3>
          </a>
          <p className="text-gray-700">2023.1.10-19まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>

      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i04.jpg" alt="" className="object-cover"/>
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>Dialogue with AI：デジタル・キャンバスの探索</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>

      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i05.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>Weaving Dreams, Spinning Futures:AIと持続可能な質感の詩学</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
      
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i33.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>星屑のアーキテクチャ：Building Algorithmic Dialogues with Earth</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i07.jpg" alt="" className="object-cover"/>
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>

      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i08.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
      
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i09.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i10.jpg" alt="" className="object-cover"/>
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
         <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>

      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i11.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
      
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i35.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
         <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i13.jpg" alt="" className="object-cover"/>
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
         <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>

      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i14.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
      
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i27.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i34.jpg" alt="" className="object-cover"/>
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>

      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i17.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
         <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
      
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i19.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
         <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i29.jpg" alt="" className="object-cover"/>
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>

      <article className="shadowpy-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i21.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
         <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
      
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i22.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i23.jpg" alt="" className="object-cover"/>
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
        <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>

      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i30.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
         <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
      
      <article className="shadow py-2 px-2 w-full">
        <a href="#" className="hover:opacity-75 duration-300">
          <img src="./img/i25.jpg" alt="" />
        </a>
        <div className="bg-gray-2006">
          <a href="#" className="text-blue-600 pb-4 font-bold">
            Installation
          </a>
          <a href="#" className="text-gray-900 text-lg font-bold hover:text-gray-600  duration-300 pb-4">
            <h3>光のインスタレーション</h3>
          </a>
          <p className="text-gray-700">2023.1.29まで</p>
          <p class="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tempora.</p>
          <a href="#" className="text-orange-600 hover:text-orange-300 duration-300">続きを読む</a>
        </div>
         <div className="text-sm h-7 w-16 bg-red-500 text-white p-1 rounded cursor-pointer text-center">
          <LikeButton />
        </div>
      </article>
    </div>




      {/* カードセクションのdivタグ */}
      {/* <div className="flex flex-wrap">
        <div className="md:w-1/3 p-4">
          <div className="bg-gray-200 rounded-lg p-8">
            <div className="item-center mb-3">
              <h2 className="text-gray-900 text-lg font-medium">
                Exhibition
              </h2>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem consequuntur quam culpa eius accusamus, repellendus impedit ratione sit ad!</p>
              </div>
              <a href="#" className="flex mt-3 text-orange-400 items-center">
                もっと見る
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 p-4">
          <div className="bg-gray-200 rounded-lg p-8">
            <div className="item-center mb-3">
              <h2 className="text-gray-900 text-lg font-medium">
                Exhibition
              </h2>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem consequuntur quam culpa eius accusamus, repellendus impedit ratione sit ad!</p>
              </div>
              <a href="#" className="flex mt-3 text-orange-400 items-center">
                もっと見る
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 p-4">
          <div className="bg-gray-200 rounded-lg p-8">
            <div className="item-center mb-3">
              <div className="bg-orange-600 text-white rounded-full">
                <img src="./" alt="" />
              </div>
              <h2 className="text-gray-900 text-lg font-medium">
                Exhibition
              </h2>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem consequuntur quam culpa eius accusamus, repellendus impedit ratione sit ad!</p>
              </div>
              <a href="#" className="flex mt-3 text-orange-400 items-center">
                もっと見る
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" /></svg>
              </a>
            </div>
          </div>
        </div>       
      </div>
    </section> */}
{/* ここまでカードセクション */}

    {/* install nowのセクション */}

    {/* <section className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto flex flex-wrap lg:flex-row flex-col">

      <div className="lg:w-1/2 lg:flex lg:items-center lg:justify-center">
       <img src="./img/img04.jpg" alt="#" />
      </div>

      <div className="lg:w-1/2 lg:px-12 lg:py-6">
        <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10">Install now</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, impedit.</h2>
      </div>
      </div>
    </section> */}

        {/* メインセクション */}
        <section className="text-gray-700" id="home">
      <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
      <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
        <h1 className="text-xl sm:text-3xl text-gray-900 font-medium mb-4">
          あなたのためのArtの扉
          <br />
          どうぞ、入って！
        </h1>
        <p className="mb-8 leadeing-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti itaque autem culpa eos veniam. 
          Laborum fugiat omnis vero impedit dolor veniam, porro sequi. Accusantium suscipit incidunt delectus accusamus cupiditate eum.
        </p>
        <button className="text-white bg-orange-400 border-0 rounded text-lg px-6 py-2 hover:bg-orange-600 duration-300">
          Install now!
        </button>
      </div>
      <div className="md:w-1/2 lg:max-w-lg w-7/8">
        <img src="./img/img01.jpg" alt="" />
      </div>
      </div>
    </section>
    </div>
  )
}

export default HomePage