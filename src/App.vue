<template>
  <main>
    <header>
      <h1> Műszakváltás </h1>
    </header>

    <!-- filter Nav -->
    <nav class="filter">
      <button @click="filter = 'horizont'">Horizont</button>
      <button @click="filter = 'vertikal'">Vertikál</button>
      <button @click="filter = 'straightening'">Egyengető</button>
      <button @click="filter = 'zoom'">Zömítő</button>
    </nav>

    <TransitionGroup @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave" appear>

      <section class="horizont" v-if="filter === 'horizont'" :key="'horizont'">
        <h2>Horizont</h2>
        <div class="contentContainer">
          <div class="">
            <h3 class="machineName">HLH-01</h3>
            <MachineDetails :currentMachine="'HLH-01'" />
          </div>

          <div class="">
            <h3 class="machineName">HLH-02</h3>
            <MachineDetails :currentMachine="'HLH-02'" />
          </div>

          <div class="">
            <h3 class="machineName">HLH-04</h3>
            <MachineDetails :currentMachine="'HLH-04'" />
          </div>
        </div>
      </section>

      <section class="vertikal" v-if="filter === 'vertikal'" :key="'vertikal'">
        <h2>Vertikal</h2>
        <div class="contentContainer">
          <div class="">
            <h3 class="machineName">LV-01</h3>
            <MachineDetails :currentMachine="'VLV-01'" />
          </div>

          <div class="">
            <h3 class="machineName">LV-02</h3>
            <MachineDetails :currentMachine="'VLV-02'" />
          </div>

          <div class="">
            <h3 class="machineName">LV-03</h3>
            <MachineDetails :currentMachine="'VLV-03'" />
          </div>

          <div class="">
            <h3 class="machineName">LV-04</h3>
            <MachineDetails :currentMachine="'VLV-04'" />
          </div>
        </div>
      </section>

      <section class="straightening" v-if="filter === 'straightening'" :key="'straightening'">
        <h2>Egyengető</h2>
        <div class="contentContainer">
          <div class="">
            <h3 class="machineName">Egy-01</h3>
            <MachineDetails :currentMachine="'EGY-01'" />
          </div>

          <div class="">
            <h3 class="machineName">Egy-02</h3>
            <MachineDetails :currentMachine="'EGY-02'" />
          </div>

          <div class="">
            <h3 class="machineName">Menet</h3>
            <MachineDetails :currentMachine="'MENET'" />
          </div>
        </div>
      </section>

      <section class="zoom" v-if="filter === 'zoom'" :key="'zoom'">
        <h2>Zömítő</h2>
        <div class="contentContainer">
          <div class="">
            <h3 class="machineName">Zöm-01</h3>
            <MachineDetails :currentMachine="'ZOOM-01'" />
          </div>

          <div class="">
            <h3 class="machineName">Zöm-02</h3>
            <MachineDetails :currentMachine="'ZOOM-02'" />
          </div>
        </div>
      </section>

    </TransitionGroup>


  </main>
</template>

<script>

import { ref } from 'vue';
import gsap from 'gsap'
import MachineDetails from './components/MachineDetails.vue'


export default {
  components: {
    MachineDetails
  },



  setup() {

    const filter = ref('horizont')

    const beforeEnter = (el) => {
      console.log('before enter');
      el.style.transform = 'translateX(100px)'
      el.style.opacity = 0
    }
    const enter = (el, done) => {
      console.log('enter');
      gsap.to(el, {
        
        duration: 0.5,
        x: 0,
        opacity: 1,
        ease: "back.out(2.7)",
        onComplete: done
      })
    }





    return {
      filter,
      beforeEnter,
      enter,

    }
  }
}
</script>

<style>
main {
  overflow: hidden;
  height: 100VH;
}
</style>