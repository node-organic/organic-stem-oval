# client usage quicksheet

## structure

* `apps` - SPAs with entry points:
  * `.bundle.js`
* `common` - common `apps` code

## apps

### app as cell

```
// some.index.bundle.js

require('cell')({
  root: '/dashboard',
  urls: {
    groupEdit: 'groups/:groupId/edit',
    accountEdit: 'groups/:groupId/accounts/:accountId'
  },
  protected: true,
  redirectNotAuthorized: 'login',
  requireTags: function () {
    require('./dashboard-view')
  }
})
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
