export default class BreadCrumb {
  text
  to
  disabled

  constructor (text, to, disabled = false) {
    this.text = text
    this.to = to
    this.disabled = disabled
  }

  get text () {
    return this.text
  }

  get to () {
    return this.to
  }

  get disabled () {
    return this.disabled
  }
}
