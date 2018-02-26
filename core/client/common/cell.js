/* global oval */
import Plasma from 'organic-plasma'

oval.init()

export default class Cell {
  constructor (dna) {
    window.plasma = new Plasma()
    window.dna = dna
  }

  start (organelleClassMaps) {
    window.dna.plasma.forEach((organelleDNA) => {
      let Organelle = organelleClassMaps[organelleDNA.source]
      window.plasma.organelles.push(new Organelle(plasma, organeleDNA))
    })
    require('domready')(() => {
      oval.mountAll(document.body)
    })
  }
}
