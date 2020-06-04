export default class BreadCrumb {
  #_text
  #_to
  #_disabled

  constructor (text, to, disabled = false) {
    this.#_text = text
    this.#_to = to
    this.#_disabled = disabled
  }
}
