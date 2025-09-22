import JASG from '../../../public/jasg.jpg'


export default function Example() {
    return (
        <>
            <div class='max-w-screen-xl flex flex-col items-center justify-center p-5 pt-5 mx-auto gap-1'>
                <span class='text-2xl font-bold text-blue-300' >Jesus Adair Sosa García</span>
                <span className='text-transparent text-xl bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400'>Desarrollador Java BackEnd</span>
            </div>
            <div id="section-aboutMe" class='max-w-screen-xl flex flex-col lg:flex-row justify-center items-center lg:items-center p-5 pt-5 mx-auto gap-5'>
                <div class='p-4 mr-5 mb-5 max-w-xl rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                    <img src={JASG} class="h-lg w-xl"  alt="Flowbite Logo" />
                </div>
                <div>
                    <a href="#" class="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Perfil Profesional</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400 text-justify">
                            Desarrollador Java Backend con más de 4 años de experiencia, especializado en la creación de soluciones escalables y eficientes utilizando tecnologías como Spring Boot y PostgreSQL. Apasionado por la innovación y la mejora continua, me mantengo actualizado en nuevas herramientas y metodologías, integrando prácticas de DevOps y tecnologías en la nube como GCP y AWS para optimizar despliegues, automatizar procesos y garantizar la confiabilidad de los sistemas.                          
                        </p>
                    </a>
                </div>
            </div>
        </>
    )
}