import React from 'react';
import AS from '../../../public/AS.png'
const navbar = () => {
  return (
    <>
      <nav class="dark:bg-black  max-w-screen">
        <div class="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
          <a class="text-blue-600 flex items-center space-x-3 rtl:space-x-reverse">
            <img src={AS} class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-yellow-400">JASG</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-600 rounded-lg md:hidden hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-yellow-400 dark:hover:bg-yellow-600 dark:focus:ring-yellow-400" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div class='hidden w-full md:block md:w-auto' id="navbar-default">
            <ul class="font-medium text-blue-600 dark:text-yellow-400 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <a href='#' class='block py-2 px-3'>Profesional</a>
              </li>
              <li>
                <a href='#' class='block py-2 px-3'>Tecnologias</a>
              </li>
              <li>
                <a href='#' class='block py-2 px-3'>Escolaridad</a>
              </li>
              <li>
                <a href='#' class='block py-2 px-3'>Proyectos</a>
              </li>
              <li>
                <a href='#' class='block py-2 px-3'>Cursos o certificados</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
