// src/controllers/slideshow_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

  initialize() {
    //const index = parseInt(this.element.getAttribute("data-slideshow-index"))
    const index = parseInt(this.data.get("data-slideshow-index"))
    console.log(`index, ${index}`)
    this.showSlide(index)
    //this.showSlide(0)
  }

  next() {
    this.showSlide(this.index + 1)
  }

  previous() {
    this.showSlide(this.index - 1)
  }

  showSlide(index) {
    this.index = index
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", index == i)
    })
  }
}