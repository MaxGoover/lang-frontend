export default {
  isEmptyObject: obj => Object.keys(obj).length,

  widthBreakpoints: name => {
    switch (name) {
      case 'xs': return '220px'
      case 'sm': return '400px'
      case 'md': return '500px'
      case 'lg': return '600px'
      case 'xl': return '800px'
    }
  }
}
