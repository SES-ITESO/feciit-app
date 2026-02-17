<template>
  <section id="about" class="min-h-fit md:min-h-[120vh] bg-white rounded-t-[3rem] -mt-[20vh] relative z-10 px-6 pt-48 pb-24 overflow-hidden">
    <!-- Circular gradient overlay - planet-like small -->
    <div class="absolute bottom-48 left-[60%] -translate-x-1/2 w-[150%] h-[80%] md:h-[60%] pointer-events-none" 
         style="background: radial-gradient(circle at center bottom, #000000 0%, #000000 50%, #252c5b 55%, #086cc5 58%, white 65%);">
    </div>
    
    <!-- Grain filter overlay -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
    
    <div class="max-w-7xl mx-auto relative z-10 flex flex-col min-h-[180vh]">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
        <!-- Left: Big Welcome Text -->
        <div>
          
          <h2 class="text-4xl md:text-6xl font-bold text-feciit-dark leading-tight">
            Te damos la bienvenida a la V edición de la Feria de Ciencias del ITESO
          </h2>
        </div>
  
        <!-- Right: Description Text -->
        <div>
          <p class="text-gray-600 text-xl md:text-2xl mb-6">
            Acerca del evento...
          </p>
          
          <div class="space-y-6 text-gray-700 leading-relaxed text-lg md:text-xl font-bold">
            <p>
              ¡Bienvenidos a FECIIT! Un espacio sin fines de lucro y abierto al público, con la intención de celebrar la ciencia de una forma divertida.
            </p>
  
            <p>
              FECIIT es una feria de ciencia en la cual se convocan proyectos de investigación para darles reconocimiento y mejores oportunidades, abierto a todas las ciencias desde lo social hasta lo químico.
            </p>
  
            <p>
              El público podrá asistir y conocer sobre investigaciones de alumnos actuales e innovadoras, en la feria habrán talleres científicos y didácticos ofertados por académicos y personas apasionadas por la ciencia con la intención de transmitir su conocimiento y generar un espacio de diversión.
            </p>
  
            <p>
              Al final de la feria tendremos una conferencia y más sorpresas las cuales estaremos anunciando por nuestras redes.
            </p>
          </div>
        </div>
      </div>
  
      <!-- Details Section - From Details.astro - Positioned lower -->
      <div class="mt-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Date Card - Liquid Glass -->
        <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
          <div class="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-white"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          
          <span class="relative z-10 inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-bold mb-6 border border-white/30">CUÁNDO</span>
          
          <div class="space-y-2 relative z-10 text-white">
            <h3 class="text-6xl md:text-8xl font-bold tracking-tighter drop-shadow-lg">03</h3>
            <p class="text-2xl md:text-3xl font-medium uppercase tracking-widest drop-shadow-md">Marzo 2026</p>
          </div>
        </div>
  
        <!-- Location Card - Liquid Glass -->
        <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
          <div class="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          
          <span class="relative z-10 inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-bold mb-6 border border-white/30">DÓNDE</span>
          
          <div class="space-y-6 relative z-10">
            <h3 class="text-2xl md:text-4xl font-bold leading-tight text-white drop-shadow-md">ITESO, Universidad Jesuita de Guadalajara</h3>
            
            <a 
              href="https://maps.app.goo.gl/9CgTYYCJMSrNhPFo8?g_st=ipc" 
              target="_blank" 
              class="inline-flex items-center gap-2 bg-white/20 text-white font-bold py-3 px-8 rounded-full hover:bg-white/30 transition-colors border border-white/30 backdrop-blur-md"
            >
              <span>Ver ubicación</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
      </div>
  
      <!-- Sponsors Section - 3 sponsors only -->
      <div class="mt-12 mb-32">
        <div class="text-center mb-12">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">Nuestros Patrocinadores</h3>
          <p class="text-gray-300">Gracias a quienes hacen posible este evento</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex items-center justify-center min-h-[200px]">
            <p class="text-white/40 text-lg font-semibold">Se revelara proximamente</p>
          </div>
          <div class="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex items-center justify-center min-h-[200px]">
            <p class="text-white/40 text-lg font-semibold">Se revelara proximamente</p>
          </div>
          <div class="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex items-center justify-center min-h-[200px]">
            <p class="text-white/40 text-lg font-semibold">Se revelara proximamente</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
