const school = () => {
    return(
        <>
            <div class='max-w-screen-xl flex flex-col lg:flex-row justify-center items-center lg:items-center p-5 pt-5 mx-auto gap-5'>
                <div class="max-w-screen-xl flex flex-col items-center justify-center p-5 pt-5 mx-auto gap-1">
                    <span class="text-2xl text-blue-600 dark:text-yellow-400 font-bold">Escolaridad</span>
                </div>
            </div>
            <div class='max-w-screen-xl flex flex-col justify-center items-center lg:items-center mx-auto  p-5 pt-5  gap-5'>
                <div class="w-full items-start justify-center p-5 pt-5 border border-blue-600 dark:border-yellow-400 rounded-lg">
                    <div class="flex flex-col gap-2">
                        <span class="text-2xl text-blue-600 dark:text-yellow-400 font-bold">Maestria en DevOps</span>
                        <span class="text-black dark:text-white">Universidad Internacional de la Rioja en Mexíco</span>
                        <span class="text-black dark:text-white">Abril 2025 - Actualmente</span>
                        <div class="max-w-screen flex flex-col lg:flex-row">
                            <span class="text-black dark:text-white">
                                Conocimientos en Herramientas de despliegues como lo es Ansible, Jenkins al igual que herramientas de IaC Terraform practicando con despliegues en contenedores Docker.
                                Practicas en la nube de Aws y GCP conectando componentes nativos como Pub/Sub, Secret Manager, Router 53, EC2, Buckets, Cloud Run, GKE. 
                            </span>
                        </div>
                    </div>
                </div>
                <div class="w-full items-start justify-center p-5 pt-5 border border-blue-600 dark:border-yellow-400 rounded-lg">
                    
                    <div class="flex flex-col gap-2">
                        <span class="text-2xl text-blue-600 dark:text-yellow-400 font-bold">Licenciatura en Ingenieria en computación</span>
                        <span class="text-black dark:text-white">Universidad Autonoma de Tlaxcala</span>
                        <span class="text-black dark:text-white">2020 - Diciembre 2024</span>
                        <div class="max-w-screen flex flex-col lg:flex-row">
                            <span class="text-black dark:text-white">
                                Especialización en sistemas distribuido, abarcando desde el analisis hasta la implantación, conocimiento en metodologías agiles, scrum, kanban, CMMI-dev.
                                
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default school;