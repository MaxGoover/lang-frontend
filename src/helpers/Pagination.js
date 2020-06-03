const LIMIT = 10

export default class Pagination {
  /**
   * Constructor.
   *
   * @param count
   * @param descending
   * @param limit
   * @param sortBy
   * @param page
   */
  constructor ({ descending, limit, offset, sortBy, page, pages, totalItems } = {}) {
    this.descending = descending
    this.limit = limit || LIMIT
    this.offset = offset
    this.page = page
    this.pages = pages
    this.sortBy = sortBy
    this.totalItems = totalItems
  }

  getPage () {
    return this.page
  }

  getPages () {
    return this.pages
  }

  getTotalItems () {
    return this.totalItems
  }
}
