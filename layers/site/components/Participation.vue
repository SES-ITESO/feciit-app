<template>
  <section id="join" class="relative py-32 px-6 bg-white overflow-hidden">
      <!-- Reverse gradient at bottom - Extreme U shape with About colors -->
      <div class="absolute bottom-0 left-0 right-0 h-[600px] pointer-events-none" 
           style="background: radial-gradient(ellipse 120% 100% at 50% -20%, transparent 40%, rgba(8, 108, 197, 0.4) 60%, rgba(37, 44, 91, 0.9) 80%, #000000 100%); mask-image: linear-gradient(to bottom, transparent 0%, black 30%); -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 30%);">
      </div>
  
      <div class="max-w-7xl mx-auto relative z-10 text-center">
          <h2 class="text-5xl md:text-7xl font-bold text-feciit-dark mb-8 tracking-tighter">
              ¿Listo para <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#086cc5] to-[#252c5b]">participar?</span>
          </h2>
          
          <p class="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Se parte de la feria de ciencias más importante de la región. Inscripciones abiertas para proyectos y voluntarios.
          </p>
  
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <NuxtLink to="/participa#concursante" class="px-10 py-5 bg-white/10 text-white rounded-full font-bold text-lg hover:bg-white/20 backdrop-blur-md transition-all hover:scale-105 shadow-lg">
                  Registrar Proyecto
              </NuxtLink>
              <NuxtLink to="/participa#voluntario" class="px-10 py-5 bg-white/5 text-white/80 rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-md transition-all hover:scale-105">
                  Ser Voluntario
              </NuxtLink>
          </div>
      </div>
  </section>
</template>
