export default class MenuItem {
  icon
  title
  route
  event

  constructor (icon, title, route, event = () => {}) {
    this.icon = icon
    this.title = title
    this.route = route
    this.event = event
  }

  get icon () {
    return this._icon
  }

  get title () {
    return this._title
  }

  get route () {
    return this._route
  }

  get event () {
    return this._event()
  }
}
