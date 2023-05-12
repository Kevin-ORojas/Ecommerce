import React from 'react'

const Footer = () => {
  return (
    <footer class="flex flex-col justify-center items-center bg-gray-900 text-white ">
    <div class="flex items-center ">
      <a href="#"  target="_blank"
          rel="noopener noreferrer"
 className="text-gray-300/80 hover:text-blue-500 mr-4"><i className='text-3xl bx bxl-linkedin-square'></i></a>
      <a href="https://github.com/NozoDev?tab=repositories" 
      target="_blank"
      rel="noopener noreferrer"
className="text-gray-400/80 hover:text-blue-500 mr-4"><i className='text-3xl bx bxl-github'></i></a>
    </div>
    <p class="text-gray-400 text-sm">&copy; 2023 Todos los derechos reservados</p>
    </footer>
    
  )
}

export default Footer