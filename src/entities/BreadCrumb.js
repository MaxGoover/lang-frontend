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
    return this._text
  }

  get to () {
    return this._to
  }

  get disabled () {
    return this._disabled
  }
}
