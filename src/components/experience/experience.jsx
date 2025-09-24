import Motivus from '../../../public/Motivus-Logo.svg'
import KWN from '../../../public/KWN.jpg'
const school = () => {
    return(
        <>
            <div class='max-w-screen-xl flex flex-col lg:flex-row justify-center items-center lg:items-center p-5 pt-5 mx-auto gap-5'>
                <div class="max-w-screen-xl flex flex-col items-center justify-center p-5 pt-5 mx-auto gap-1">
                    <span class="text-2xl text-blue-600 dark:text-yellow-400 font-bold">Experience</span>
                </div>
            </div>
            <div class='max-w-screen-xl flex flex-col justify-center items-center lg:items-center mx-auto  p-5 pt-5  gap-5'>
                <div class="w-full items-start justify-center p-5 pt-5 border border-blue-600 dark:border-yellow-400 rounded-lg dark:bg-gray-950">
                    <div class="flex flex-col gap-2">
                        <span class="text-2xl text-blue-600 dark:text-yellow-400 font-bold">Desarrollador BackEnd - Motivus</span> 
                        <div class="max-w-screen flex flex-col lg:flex-row">
                            <span class="text-black dark:text-white">
                            Fue parte de la guild de BackEnd en donde se desempeño como Desarrollador Java y desarrollo nuevas habilidades de CI/CD trabajando con nuevas
                            tecnologías como lo es Terraform, Jenkins, GCP (Google Cloud Plataform). Trabajo de la mano con arquitectos para planear y analizar la infraestructura
                            en donde vivirian los distintos microservicios. 
                            Manejo y administro servicios nativos de la nube por mensionar algunos Pub/Sub, Api Gateway, Secret Manager, Buckets, Cloud SQl, Logging, Cloud Jobs, Cloud Run, entro otros.
                            </span>
                            <div class="bg-black">
                                <img class="h-auto max-w-auto rounded-lg" src={Motivus} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full items-start justify-center p-5 pt-5 border border-blue-600 dark:border-yellow-400 rounded-lg">
                    <div class="flex flex-col gap-2">
                        <span class="text-2xl text-blue-600 dark:text-yellow-400 font-bold">Desarrollador Java Fulls Stack - KWN Software</span> 
                        <div class="max-w-screen flex flex-col lg:flex-row">
                            <span class="text-black dark:text-white">
                                Formo parte del equipo de desarrollo en donde se desempeño como desarrollador Java FullStack participo en proyectos importantes en donde
                                ayudo a optimizar los tiempos de respuesta para el consumo Apis. Trabajando con HTML, CSS, JavaScript, Java, Spring, MySQL para el desarrollo, SVN 
                                como plataforma de control de versiones y alojamniento en aws (EC2, S3, Router 53, Redis).
                            </span>
                            <img class=" h-24 w-24" src={KWN} alt=""/>
                        </div>
                    </div>
                </div>
                <div class="w-full items-start justify-center p-5 pt-5 border border-blue-600 dark:border-yellow-400 rounded-lg">
                    <div class="flex flex-col">
                        <span class="text-2xl text-blue-600 dark:text-yellow-400 font-bold">Desarrollador BackEnd - Softitlan MX</span> 
                        <span class="text-white">Fue parte de la guild de BackEnd en donde se desempeño como Desarrollador Java y  </span>
                    </div>
                    
                </div>
                <div class="w-full items-start justify-center p-5 pt-5 border border-blue-600 dark:border-yellow-400 rounded-lg">
                    <div class="flex flex-col">
                        <span class="text-2xl text-blue-600 dark:text-yellow-400 font-bold">Club de alumnos destacados - UATx</span> 
                        <span class="text-white">Fue parte de la guild de BackEnd en donde se desempeño como Desarrollador Java y  </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default school;