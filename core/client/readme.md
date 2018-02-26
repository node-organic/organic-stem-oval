# client usage quicksheet

## structure

* `apps` - SPAs with entry points:
  * `.bundle.js`
* `common` - common `apps` code

## apps

### app as cell

```
// some.index.bundle.js

import Cell from 'cell'
import './landing-view.tag'

const DNA = {}
const ORGANELLES = [
  // { source: "client/plasma/organelle1" },
  // { source: "client/plasma/organelle2" }
]

const MyAppIntance = new Cell(DNA)
MyAppIntance.start(ORGANELLES)

```

#### scoped class

```
// style.less
:local(.class) {

}
```

```
<component1>
  <script>
    this.root.className = require('./style.less').class
  </script>
</component1>
```
