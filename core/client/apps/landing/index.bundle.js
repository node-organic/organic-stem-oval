import Cell from 'cell'
import './landing-view.tag'

const DNA = {}
const ORGANELLES = [
  // { source: "client/plasma/organelle1" },
  // { source: "client/plasma/organelle2" }
]

const MyAppIntance = new Cell(DNA)
MyAppIntance.start(ORGANELLES)
