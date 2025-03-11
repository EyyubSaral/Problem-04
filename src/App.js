import Image from "next/image";
import { useState } from "react";

// Görevler:
//  Kullanıcının oturum durumunu useState veya useReducer hook'u ile yönetin.
//    - Eğer kullanıcı giriş yapmamışsa (isAuthUser === false), yalnızca Login butonu görüntülenmelidir.
//    - Eğer kullanıcı giriş yapmışsa (isAuthUser === true), Dashboard ve Sign out linkleri görüntülenmelidir.
//  Login butonuna tıklandığında, kullanıcı oturum açmalı ve Dashboard ile Sign out linkleri görünmelidir.
//  Sign out linkine tıklandığında, kullanıcı oturumu kapatmalı ve yalnızca Login butonu görünmelidir.
//  Logo bileşenini bağımsız bir bileşen olarak tanımlayın ve tasarımı bozmadan üstte görüntüleyin.
//  Beklenen çıktıyı görmek için public/preview1.png  ve public/preview2.png dosyalarını inceleyin.

// Ek görev:
// - Navbar'a bir Contact Us linki ekleyin ve bu linkin her iki durumda da (giriş yapmış ya da yapmamış) görünür olmasını sağlayın.

export default function Navbar() {
  const [isAuthUser, setIsAuthUser] = useState(false);

  return (
    <header className="navbar-wrapper flex justify-center">
      <nav className="navbar  ">
        <Logo />

        <h1 className="font-bold text-xl">Hesabınıza Giriş Yapın</h1>
        {isAuthUser ? (
          <div className="navbar-links">
            <a
              href="#"
              className="m-[10px] p-[10px] w-[200px] h-[100%] bg-blue-500 inline-block rounded-lg text-center"
              onClick={() => {
                setIsAuthUser(false);
              }}
            >
              Sign out
            </a>
            <br />
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
              className="m-[10px] p-[10px] w-[200px] h-[100%] bg-blue-500 inline-block rounded-lg text-center"
            >
              Dashboard
            </a>
          </div>
        ) : (
          <div className="navbar-links">
            <a
              href="#"
              className="m-[10px] p-[10px] w-[200px] h-[100%] bg-blue-500 inline-block rounded-lg text-center"
              onClick={() => {
                setIsAuthUser(true);
              }}
            >
              Login
            </a>
          </div>
        )}
        <a
          href="https://www.youtube.com/watch?v=-IcGvBE5xfg"
          className="inline-block text-blue-500 "
        >
          Contact us
        </a>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <div className=" flex justify-center items-center mb-11">
      <a href="#" className="-m-1.5 p-1.5">
        <Image
          className="h-8 w-auto"
          src="/mark.svg"
          alt="Tailwind Logo"
          width={500}
          height={500}
        />
      </a>
    </div>
  );
}
