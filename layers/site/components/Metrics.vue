<template>
  <section id="metrics" class="min-h-[80vh] bg-white px-6 pb-24 pt-0 flex items-center relative z-20">
    <div class="max-w-7xl mx-auto w-full -mt-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <span class="text-feciit-blue font-bold tracking-widest text-sm uppercase mb-4 block">Resultados Históricos</span>
          <h2 class="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-[#252c5b] leading-tight">
            4ta Edición <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#086cc5] to-[#252c5b]">en números</span>
          </h2>
        </div>
        
        <div>
          <p class="text-xl text-gray-600 leading-relaxed font-medium">
            Un evento sin fines de lucro, organizado totalmente por estudiantes para inspirar a la comunidad. El impacto de nuestras ediciones anteriores habla por sí mismo.
          </p>
        </div>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Stat Card 1 -->
        <div class="bg-feciit-surface p-8 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(8,108,197,0.3)] transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
          <h3 class="text-5xl md:text-6xl font-bold text-feciit-dark mb-2 tracking-tighter counter">+500</h3>
          <p class="text-lg font-bold text-gray-500 uppercase tracking-wider">Asistentes</p>
          <p class="text-sm text-gray-400 mt-4 leading-relaxed">Estudiantes, académicos y público general celebrando la ciencia.</p>
        </div>
  
        <!-- Stat Card 2 -->
        <div class="bg-feciit-surface p-8 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(8,108,197,0.3)] transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-purple-100 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
          <h3 class="text-5xl md:text-6xl font-bold text-feciit-dark mb-2 tracking-tighter counter">+30</h3>
          <p class="text-lg font-bold text-gray-500 uppercase tracking-wider">Proyectos</p>
          <p class="text-sm text-gray-400 mt-4 leading-relaxed">Investigaciones innovadoras presentadas por alumnos destacados.</p>
        </div>
  
        <!-- Stat Card 3 -->
        <div class="bg-feciit-surface p-8 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(8,108,197,0.3)] transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-green-100 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
          <h3 class="text-5xl md:text-6xl font-bold text-feciit-dark mb-2 tracking-tighter counter">6</h3>
          <p class="text-lg font-bold text-gray-500 uppercase tracking-wider">Patrocinadores</p>
          <p class="text-sm text-gray-400 mt-4 leading-relaxed">Empresas líderes confiando en el talento del ITESO.</p>
        </div>
  
        <!-- Stat Card 4 -->
        <div class="bg-[#252c5b] text-white p-8 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(37,44,91,0.5)] hover:shadow-[0_30px_60px_-15px_rgba(37,44,91,0.7)] transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <h3 class="text-5xl md:text-6xl font-bold mb-2 tracking-tighter text-white counter">$35k</h3>
          <p class="text-lg font-bold text-white/60 uppercase tracking-wider">En Premios</p>
          <p class="text-sm text-white/40 mt-4 leading-relaxed">Incentivos económicos para los mejores proyectos de la feria.</p>
        </div>
      </div>
    </div>
  </section>
</template>
