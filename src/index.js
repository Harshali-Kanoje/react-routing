import React from 'react';
import ReactDOM from 'react-dom/client';
import Tech from './view/Tech/Tech';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path : "/reactjs",
      element : <Tech pageTitle={'Getting started with React - Learn web development'} imgSrc={`https://spaceship.roadtocode.org/img/menu_icons/reactjs.svg`} heading={"ReactJs"} para={"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js."}/>
    },
    {
      path : "/javascript",
      element : <Tech pageTitle={'An Introduction To JavaScript '} imgSrc={`https://spaceship.roadtocode.org/img/menu_icons/javascript.svg`} heading={"Javascript"} para={"JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."}/>
    },
    {
      path : "/nodejs",
      element : <Tech pageTitle={'Getting Started with Node JS'} imgSrc={`https://spaceship.roadtocode.org/img/menu_icons/nodejs.svg`} heading={"NodeJs"} para={"Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser."}/>
    }
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar/>
    <RouterProvider router={router}/>
    <Footer/>
  </>
);
