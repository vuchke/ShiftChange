<template>
  <div class="machine">
    <div class="circle" :style="{ '--clr': currentType.color }">
      <div class="dots"></div>
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70" id="secondCircle" :class="{ 'fadeIn': animateCirc }"></circle>
      </svg>
      <div class="days">
        <span @click="showSelect = true"># </span> {{ currentType.GS }}

        <select :value="currentType.GS" class="hidden" :class="{ showSelectOptions: showSelect }"
          @input="handleSelectChange">
          <option v-for="gearSet in GSStore.GSList" :value="gearSet.GS">
            {{ gearSet.GS }}
          </option>
        </select>
      </div>
    </div>
    <p class="description"
      v-if="currentMachine === 'HLH-01' || currentMachine === 'HLH-02' || currentMachine === 'HLH-04' || currentMachine === 'EGY-01' || currentMachine === 'EGY-02' || currentMachine === 'MENET'">
      {{ currentType.model }} <br>pinion:<strong>{{ currentType.pinionNumber }}</strong></p>

    <p class="description"
      v-else-if="currentMachine === 'VLV-01' || currentMachine === 'VLV-02' || currentMachine === 'VLV-03' || currentMachine === 'VLV-04'">
      {{ currentType.model }} <br> ring:<strong>{{ currentType.ringNumber }}</strong></p>

    <p class="description" v-else> {{ currentType.model }}<br>pinion:<strong>{{ currentType.pinionNumber }}</strong> <br> ring:<strong>{{ currentType.ringNumber }}</strong></p>

   
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'
import { useGSStore } from '../stores/GSStore'
export default {
  props: {
    currentMachine: {
      type: String,
      required: true
    }
  },
  setup(props) {

    const showSelect = ref(false)
    let animateCirc = ref(false)

    const GSStore = useGSStore()

    function handleSelectChange(event) {
      showSelect.value = false
      // Remove the current machine from its current gear set
      GSStore.removeMachineFromGearSet(currentType.value.GS, props.currentMachine)
      // Add the current machine to the selected gear set
      GSStore.addMachineToGearSet(event.target.value, props.currentMachine)

    }


    const currentType = computed(() => {
      return GSStore.GSList.find(gearSet => gearSet.onMachine.includes(props.currentMachine)) || {}
    })

    watch(currentType, (newVal) => {
      const dots = document.querySelector('.dots')

      animateCirc.value = false
      setTimeout(() => {
        dots.classList.add('fadeIn')
        // trigger animation for the second circle
        animateCirc.value = true
      }, 0)
    })




    return {
      GSStore,
      showSelect,
      currentType,
      animateCirc,
      handleSelectChange

    }
  }
}
</script>
