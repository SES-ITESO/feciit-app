<script setup lang="ts">
const events = [
  { time: "11:30", title: "Inauguración", type: "Ceremonia" },
  { time: "12:00", title: "Primera ronda de evaluación de proyectos", type: "Evaluación" },
  { time: "13:00", title: "Segunda Ronda de evaluación", type: "Evaluación" },
  { time: "15:30", title: "Conferencia", type: "Charla" },
  { time: "16:00", title: "Panel abierto de interacción para proyectos", type: "Panel" },
  { time: "16:40", title: "Clausura del evento", type: "Ceremonia" },
]
</script>

<template>
  <section id="programa" class="min-h-screen bg-white p-4 md:p-6">
      <div class="bg-black relative rounded-[3rem] w-full min-h-[calc(100vh-3rem)] py-24 px-6 md:px-12 flex items-center overflow-hidden">
          <!-- Ambient blue glow -->
          <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
  
          <div class="max-w-5xl mx-auto relative z-10 w-full">
              <div class="mb-20">
                  <span class="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4 block">Agenda</span>
                  <h2 class="text-5xl md:text-7xl font-bold text-white tracking-tight">Programa <br/><span class="text-white/50">del Evento</span></h2>
              </div>
  
              <div class="space-y-4">
                  <div
                      v-for="(event, index) in events"
                      :key="index"
                      class="group relative flex items-center p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-500 hover:scale-[1.01] overflow-hidden"
                  >
                      <!-- Glass shine effect -->
                      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <div class="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full relative z-10">
                          <div class="w-24 shrink-0">
                              <span class="text-xl font-medium text-blue-400">{{ event.time }}</span>
                          </div>
                          
                          <div class="grow">
                              <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{{ event.title }}</h3>
                              <div class="flex items-center gap-4 text-sm text-gray-400">
                                  <span class="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">{{ event.type }}</span>
                              </div>
                          </div>
                      </div>
  
                      <div class="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
