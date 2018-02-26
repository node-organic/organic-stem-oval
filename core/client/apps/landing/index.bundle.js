require('cell')({
  protected: false,
  requireTags: function () {
    require('./landing-view')
  },
  organelles: (plasma) => {

  }
}, require('webpack-dna-loader!'))
