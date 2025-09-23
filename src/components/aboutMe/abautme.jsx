import JASG from '../../../public/jasg.png'


export default function Example() {
    return (
        <>
            <div class='max-w-screen-xl flex flex-col items-center justify-center p-5 pt-5 mx-auto gap-1'>
                <div class="text-2xl font-bold">
                    <a class=" dark:text-white ">Hola, </a><a class='text-blue-600 dark:text-yellow-400' >soy [Jesus Adair Sosa García]</a>
                </div>
                <span className="text-lg dark:text-white ">Desarrollador Java BackEnd</span>
            </div>
            <div id="section-aboutMe" class='max-w-screen-xl flex flex-col lg:flex-row justify-center items-center lg:items-center p-5 pt-5 mx-auto gap-5'>
                <div class='p-2 mr-5 mb-5 max-w-lg rounded-lg c:\Users\jesus\Desktop\Imag-Photoroom.png bg-blue-600 dark:bg-yellow-400'>
                    <img src={JASG} class="h-lg w-xl"  alt="Flowbite Logo" />
                </div>
                <div>
                    <a href="#" class="block max-w-xl p-6 bg-blue-600 rounded-lg shadow-sm dark:bg-yellow-400 ">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Perfil Profesional</h5>
                        <p class="font-normal text-black text-justify">
                            Desarrollador Java Backend con más de 4 años de experiencia, especializado en la creación de soluciones escalables y eficientes utilizando tecnologías como Spring Boot y PostgreSQL. Apasionado por la innovación y la mejora continua, me mantengo actualizado en nuevas herramientas y metodologías, integrando prácticas de DevOps y tecnologías en la nube como GCP y AWS para optimizar despliegues, automatizar procesos y garantizar la confiabilidad de los sistemas.                          
                        </p>
                    </a>
                </div>
            </div>
        </>
    )
}