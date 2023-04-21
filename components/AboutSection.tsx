import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Flask" },
  { skill: "Symfony" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Mongo DB" },
  { skill: "Sql Server" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Sobre mí
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              ¡Conóceme!
            </h1>
            <p>
              Hola, mi nombre es Aldair y soy {" Ingeniero informático, "}
              <span className="font-bold">{"muy ambicioso"}</span>,
              <span className="font-bold">{" motivado"}</span>, y
              <span className="font-bold">{" proactivo "}</span>
              perteneciente a la ciudad del eterno calor, Piura.
            </p>
            <br />
            <p>
              Me gradué de la Universidad Nacional de Piura, Perú en 2022 con
              grado Bachiller en Ingeniería Informática y he estado trabajando
              el campo del desarrollo web así como de analista programador
              desde entonces.
            </p>
            <br />
            <p>
              Tengo una amplia gama de pasatiempos y pasiones que me mantienen
              ocupado. Desde la lectura, practicar deporte, conocer nuevos lugares,
              hasta hacer fotografía; siempre estoy buscando nuevas experiencias y me 
              encanta mantenerme comprometido ya que aprendo cosas nuevas.
            </p>
            <br />
            <p>
              Creo que nunca se debe {" "}
              <span className="font-bold text-teal-500">
                dejar de crecer
              </span>{" "}
              y eso es lo que me esfuerzo por hacer, tengo una pasión por la
              tecnología y el deseo de empujar siempre los límites de lo posible.
              Me entusiasma ver a dónde me lleva mi carrera y siempre estoy 
              abierto a nuevas oportunidades. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Mis habilidades</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt="hero image"
              width={325}
              height={325}
              className="hidden md:block md:relative md:top-4 md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
