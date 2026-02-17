<script setup lang="ts">
import Countdown from '~/components/Countdown.vue';

useHead({
  title: 'Participa | FECIIT 2026'
})

definePageMeta({
  navTheme: 'light'
})
</script>

<template>
    <main class="bg-white min-h-screen relative overflow-hidden">
        
        <!-- Global Background Elements -->
        <div class="fixed inset-0 pointer-events-none z-0">
             <div class="absolute top-0 right-0 w-[50vw] h-[50vw] bg-feciit-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
             <div class="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"></div>
        </div>

        <!-- Section 1: Hero Countdown (100vh) -->
        <section class="h-screen w-full flex flex-col items-center justify-center relative z-10 px-6 snap-start">
            <div class="text-center space-y-12 w-full max-w-screen-2xl mx-auto">
                <div class="space-y-4">
                    <span class="inline-block py-1 px-3 rounded-full bg-black/[0.03] text-feciit-dark/60 font-semibold text-xs uppercase tracking-[0.2em] border border-black/[0.05]">
                        Próxima Edición
                    </span>
                    <h1 class="text-4xl md:text-6xl font-bold text-feciit-dark tracking-tighter">
                        Registro <span class="text-transparent bg-clip-text bg-gradient-to-r from-feciit-blue to-purple-600">abre en</span>
                    </h1>
                </div>

                <div class="py-12">
                     <Countdown />
                </div>
                
                <div class="flex flex-col items-center gap-4">
                    <p class="text-xl text-gray-500 font-light max-w-md mx-auto">
                        Prepárate para la experiencia científica más grande del año.
                    </p>
                    <a href="#visitante" class="animate-bounce mt-8 opacity-50 hover:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-feciit-dark"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
                    </a>
                </div>
            </div>
        </section>

        <!-- Section 2: Visitor (Min 80vh) -->
        <section id="visitante" class="min-h-[60vh] w-full flex items-center justify-center relative z-10 px-6 py-24 snap-start">
            <div class="max-w-4xl mx-auto w-full text-center">
                <div class="relative group cursor-pointer">
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-[3rem] rotate-1 blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div class="relative bg-white rounded-[3rem] p-12 md:p-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
                        
                        <div class="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        </div>

                        <div class="relative z-10 space-y-8">
                            <h2 class="text-5xl md:text-7xl font-bold text-feciit-dark tracking-tighter leading-none">
                                <span class="block text-2xl md:text-3xl text-feciit-blue font-medium mb-4 tracking-normal uppercase">¿Te lo vas a perder?</span>
                                Asiste a FECIIT
                            </h2>
                            <p class="text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
                                Reserva tu lugar ahora entérate de todas las sorpresas que tenemos para ti.
                            </p>
                            
                            <div class="pt-4">
                                <a href="https://www.eventbrite.com/e/feciit-2026-tickets-1976665888884?aff=oddtdtcreator" target="_blank" class="inline-flex items-center gap-3 px-10 py-5 bg-feciit-dark text-white text-xl font-bold rounded-full hover:bg-feciit-blue hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
                                    <span>Reservar Ticket</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                                <p class="mt-4 text-sm text-gray-400 font-medium">
                                    Entrada Gratuita • Cupo Limitado
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Contestant (Min 80vh) -->
        <section id="concursante" class="min-h-[80vh] w-full flex items-center justify-center relative z-10 px-6 py-24 snap-start bg-gray-50/50">
             <div class="max-w-4xl mx-auto w-full">
                 <details class="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group">
                    <summary class="list-none cursor-pointer">
                         <div class="space-y-6 text-center">
                             <span class="inline-block py-1 px-3 rounded-full bg-blue-50 text-feciit-blue font-semibold text-xs uppercase tracking-[0.2em]">
                                Compite
                            </span>
                            <h2 class="text-5xl md:text-7xl font-bold text-feciit-dark tracking-tighter leading-none group-hover:text-feciit-blue transition-colors">
                                Muestra tu<br/>Talento
                            </h2>
                            <p class="text-xl text-gray-500 max-w-md mx-auto leading-relaxed">
                                ¿Tienes un proyecto innovador? Preséntalo ante jueces expertos, gana premios y obtén reconocimiento internacional.
                            </p>
                            <div class="flex justify-center pt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-feciit-dark group-open:rotate-180 transition-transform duration-300"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </div>
                        </div>
                    </summary>

                    <div class="mt-12 space-y-12 animate-in fade-in slide-in-from-top-4 duration-500">
                        <!-- Prizes -->
                        <div class="flex flex-col md:flex-row gap-4 justify-center">
                            <div class="px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm text-center">
                                <span class="block text-xl font-bold text-feciit-dark mb-1">Acompañamiento en CUE, patente de marca y pase a congreso</span>
                                <span class="text-sm text-gray-500 uppercase font-bold">1er Lugar</span>
                            </div>
                        </div>

                        <!-- Timeline -->
                        <div class="grid md:grid-cols-3 gap-6">
                            <div class="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                                <h4 class="font-bold text-feciit-dark">1. Registro (15 Feb)</h4>
                                <p class="text-sm text-gray-500 mt-1">Inscribe a tu equipo y proyecto.</p>
                            </div>
                            <div class="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                                <h4 class="font-bold text-feciit-dark">2. Abstract (23 Feb)</h4>
                                <p class="text-sm text-gray-500 mt-1">Envía el resumen de tu investigación.</p>
                            </div>
                            <div class="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                                <h4 class="font-bold text-feciit-dark">3. Presenta (03 Mar)</h4>
                                <p class="text-sm text-gray-500 mt-1">Expone en tu stand durante la feria.</p>
                            </div>
                        </div>
                        
                        <div class="text-center">
                             <a href="https://drive.google.com/file/d/1ANrIJjKYAxjVwwfJgIOpS7Q0ONnDZczt/view?usp=drivesdk" class="inline-block px-12 py-4 bg-feciit-dark text-white hover:bg-gray-800 font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                Ver Convocatoria
                            </a>
                        </div>
                    </div>
                 </details>
            </div>
        </section>

        <!-- Section 4: Volunteer (Min 60vh) -->
        <section id="voluntario" class="min-h-[60vh] w-full flex items-center justify-center relative z-10 px-6 py-24 snap-start">
             <div class="max-w-4xl mx-auto w-full text-center">
                 <details class="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group">
                     <summary class="list-none cursor-pointer">
                        <div class="space-y-6">
                            <span class="inline-block py-1 px-3 rounded-full bg-blue-50 text-feciit-blue font-semibold text-xs uppercase tracking-[0.2em]">
                                Staff & Crew
                            </span>
                            <h2 class="text-4xl md:text-6xl font-bold text-feciit-dark tracking-tighter group-hover:text-feciit-blue transition-colors">
                                Únete al Equipo
                            </h2>
                             <p class="text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
                                Vive la FECIIT desde adentro. Obtén beneficios exclusivos, constancia curricular y haz networking.
                            </p>
                             <div class="flex justify-center pt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-feciit-dark group-open:rotate-180 transition-transform duration-300"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </div>
                        </div>
                     </summary>

                    <div class="mt-12 animate-in fade-in slide-in-from-top-4 duration-500">
                         <a href="https://forms.office.com/r/AuGsjGf82B" class="inline-block px-12 py-4 bg-white border-2 border-feciit-dark text-feciit-dark font-bold rounded-full hover:bg-feciit-dark hover:text-white transition-all">
                            Aplicar como Voluntario
                         </a>
                    </div>
                </details>
             </div>
        </section>

    </main>
</template>
