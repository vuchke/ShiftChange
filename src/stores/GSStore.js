import { defineStore } from 'pinia'

export const useGSStore = defineStore('GearSetStore', {
  state: () => ({
    GSList: [
      { GS: "1",  model: "M220", pinionNumber: "10009811",  ringNumber: "2021760",  color: "Green",   onMachine:[""] },
      { GS: "2",  model: "M200", pinionNumber: "10010883",  ringNumber: "2023171",  color: "Blue",    onMachine:[""] },
      { GS: "3",  model: "M200", pinionNumber: "10010877",  ringNumber: "2023165",  color: "Yellow",  onMachine:[""] },
      { GS: "4",  model: "M200", pinionNumber: "10010879",  ringNumber: "2023176",  color: "Orange",  onMachine:[""] },
      { GS: "5",  model: "M220", pinionNumber: "2019767",   ringNumber: "2021754",  color: "#9000bc", onMachine:[""] },
      { GS: "6",  model: "M200", pinionNumber: "10009922",  ringNumber: "10009921", color: "Magenta", onMachine:[""] },
      { GS: "7",  model: "M220", pinionNumber: "2016364",   ringNumber: "2021756",  color: "Gray",    onMachine:[""] },
      { GS: "8",  model: "M200", pinionNumber: "10010881",  ringNumber: "2023178",  color: "#542424", onMachine:[""] },
      { GS: "9",  model: "M220", pinionNumber: "2021469",   ringNumber: "2021758",  color: "Black",   onMachine:[""] },
      { GS: "10", model: "M220", pinionNumber: "10010895",  ringNumber: "2021760",  color: "White",   onMachine:[""] },
      { GS: "11", model: "M220", pinionNumber: "10120949",  ringNumber: "10120952", color: "White",   onMachine:[""] },
      { GS: "12", model: "M220", pinionNumber: "10010891",  ringNumber: "2021756",  color: "White",   onMachine:[""] },
      { GS: "13", model: "M200", pinionNumber: "10010467",  ringNumber: "10008852", color: "White",   onMachine:[""] },
      { GS: "14", model: "M220", pinionNumber: "10042989",  ringNumber: "10042988", color: "White",   onMachine:[""] },
      { GS: "15", model: "M220", pinionNumber: "10133997",  ringNumber: "10008344", color: "White",   onMachine:[""] },
      { GS: "16", model: "M220", pinionNumber: "10164834",  ringNumber: "10164833", color: "White",   onMachine:[""] },
      { GS: "17", model: "M220", pinionNumber: "10156882",  ringNumber: "10156878", color: "White",   onMachine:[""] }
    ],

  }),

  getters: {
    getCurrentType(machineName) {
      const current = this.GSList.find(GS => GS.onMachine === machineName)
      return current ? { ...current } : {}
    },
  },

  actions: {
    addMachineToGearSet(GS, machineName) {
      const gearSet = this.GSList.find(gearSet => gearSet.GS === GS)
      if (gearSet) {
        if (!gearSet.onMachine.includes(machineName)) {
          gearSet.onMachine.push(machineName)
        }
      }
    },
    removeMachineFromGearSet(GS, machineName) {
      const gearSet = this.GSList.find(gearSet => gearSet.GS === GS)
      if (gearSet) {
        const index = gearSet.onMachine.indexOf(machineName)
        if (index !== -1) {
          gearSet.onMachine.splice(index, 1)
        }
      }
    },
  },

})