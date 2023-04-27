import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Movie Search",
    description: "Movie Search es una aplicación web que permite buscar películas por su título. Para el desarrollo de esta aplicación se utilizaron las siguientes tecnologías: El framework Next.js se utilizó para la rendirizacion del lado del servidor, además se utilizó la librería React para la construcción de la interfáz de usuario. Se utilizaron los Hooks de React, como useState, useEffect, useCallback, useMemo y useRef, para manejar el estado de la aplicación, optimizar el rendimiento, y mejorar la experiencia del usuario. Además se utilizó la API Omdb.api, que es una base de datos de películas muy popular y completa. Finalmente, se utilizó Water.css para aplicar estilos a la aplicación ",
    image: "/movie-search.png",
    github: "https://github.com/AldairMorales/movie-search",
    link: "https://movie-search-three-mocha.vercel.app/",
  },
  {
    name: "Mail Notifier",
    description: "Mail notifier es una aplicación que permite enviar notificaciones al correo personal. Se implemento con Nextjs, React y Chakra-ui, este último para el control del formulario y el estilo. Finalmente para el envio de datos y la notificación se utilizó Nodemailer, que es un modulo de Node.js que permite el fácil envio de mensajes por correo.",
    image: "/mail-notifier.png",
    github: "https://github.com/AldairMorales/mail-notifier",
    link: "https://mail-notifier.vercel.app/",
  },
  {
    name: "Lancora Page",
    description: "Lancora Page es una pagina web donde se muestran las cartas de comida y un formulario de contacto para la reservacion al restobar.",
    image: "/lancorapage.png",
    github: "https://github.com/AldairMorales/lancoraPage",
    link: "https://lancora-page-xrck.vercel.app/",
  },
  {
    name: "SIGESBI",
    description:
      "Sigesbi es una sistema web para la administración de bibliotecas. Realizado con el lenguaje Python, base de datos Postgres y el framework Flask.",
    image: "/sigesbi.jpg",
    github: "https://github.com/AldairMorales/sigesbi_isnmg/tree/main/app",
    link: "https://github.com/AldairMorales/sigesbi_isnmg/tree/main/app",
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Proyectos
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
