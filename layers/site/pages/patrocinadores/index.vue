<script setup lang="ts">
useHead({
  title: 'Patrocinadores | FECIIT 2026'
})

definePageMeta({
  navTheme: 'light'
})
</script>

<template>
    <main class="bg-white min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
        <!-- Floating shapes -->
        <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-feciit-blue/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

        <div class="max-w-5xl mx-auto relative z-10 space-y-24">
            <!-- Header -->
            <div class="text-center space-y-6">
                <span class="inline-block py-1 px-3 rounded-full bg-blue-50 text-feciit-blue font-semibold text-sm tracking-wide border border-blue-100">
                    Únete a la ciencia
                </span>
                <h1 class="text-5xl md:text-7xl font-bold text-feciit-dark tracking-tight leading-tight">
                    Patrocina el <span class="text-transparent bg-clip-text bg-gradient-to-r from-feciit-blue to-[#252c5b]">Futuro</span>
                </h1>
                <p class="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Forma parte de FECIIT 2026 y conecta tu marca con la innovación y el talento joven.
                </p>
            </div>

            <!-- Benefits -->
            <section>
                <div class="text-center mb-12">
                     <h2 class="text-3xl md:text-4xl font-bold text-feciit-dark mb-4">¿Por qué patrocinar?</h2>
                     <p class="text-xl text-gray-600">Impulsamos el desarrollo científico</p>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Benefit 1 -->
                    <div class="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                        <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-feciit-blue mb-6 group-hover:bg-feciit-blue group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold text-feciit-dark mb-3">Visibilidad de Marca</h3>
                        <p class="text-gray-600">
                            Posiciona tu empresa ante miles de estudiantes, académicos y profesionales del sector tecnológico.
                        </p>
                    </div>

                    <!-- Benefit 2 -->
                    <div class="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                        <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-feciit-blue mb-6 group-hover:bg-feciit-blue group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold text-feciit-dark mb-3">Networking</h3>
                        <p class="text-gray-600">
                            Conecta directamente con talento joven y líderes de la industria en un ambiente de innovación.
                        </p>
                    </div>

                    <!-- Benefit 3 -->
                    <div class="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                        <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-feciit-blue mb-6 group-hover:bg-feciit-blue group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                        </div>
                        <h3 class="text-xl font-bold text-feciit-dark mb-3">Responsabilidad Social</h3>
                        <p class="text-gray-600">
                            Apoya iniciativas educativas y fomenta el desarrollo científico en la comunidad.
                        </p>
                    </div>
                </div>
            </section>



            <!-- Requirements / Steps -->
            <section class="grid md:grid-cols-2 gap-12 items-center bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                <div class="space-y-8 relative z-10">
                    <div>
                         <h2 class="text-3xl font-bold text-feciit-dark mb-4">¿Cómo ser Patrocinador?</h2>
                         <p class="text-lg text-gray-600">Es muy sencillo unirte a nuestra causa. Sigue estos pasos para comenzar.</p>
                    </div>

                    <div class="space-y-6">
                        <div class="flex gap-4">
                            <div class="w-8 h-8 rounded-full bg-feciit-dark text-white flex items-center justify-center font-bold shrink-0">1</div>
                            <div>
                                <h4 class="font-bold text-feciit-dark text-lg">Elige tu nivel</h4>
                                <p class="text-gray-600 text-sm">Contamos con diferentes paquetes de patrocinio (Oro, Plata, Bronce) adaptados a tus objetivos.</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="w-8 h-8 rounded-full bg-feciit-dark text-white flex items-center justify-center font-bold shrink-0">2</div>
                            <div>
                                <h4 class="font-bold text-feciit-dark text-lg">Envía tus datos</h4>
                                <p class="text-gray-600 text-sm">Completa el formulario de contacto o escríbenos directamente.</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="w-8 h-8 rounded-full bg-feciit-dark text-white flex items-center justify-center font-bold shrink-0">3</div>
                            <div>
                                <h4 class="font-bold text-feciit-dark text-lg">Envía tus materiales</h4>
                                <p class="text-gray-600 text-sm">Logo en alta resolución y material promocional para incluirte en nuestra publicidad.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative z-10 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center h-full">
                    <div class="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <h3 class="text-2xl font-bold text-feciit-dark mb-2">Contáctanos</h3>
                    <p class="text-gray-600 mb-8 max-w-sm">
                        Envíanos un correo para recibir el Kit de Patrocinio completo y resolver tus dudas.
                    </p>
                    <a href="mailto:sain@iteso.mx" class="inline-flex items-center gap-2 bg-feciit-dark text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 w-full justify-center md:w-auto">
                        <span>Solicitar Información</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </a>
                </div>
                
                <!-- Background decoration -->
                <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-feciit-blue/5 rounded-full blur-3xl pointer-events-none"></div>
            </section>
        </div>
    </main>
</template>
