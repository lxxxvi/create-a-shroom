import Rects from './Rects.js';

export default class Svg {
  constructor(blueprint) {
    this.table = blueprint.table;
    this.colors = blueprint.colors;
  }

  build() {
    return `<svg width="100%" height="100%" viewBox="${this.viewBoxValue}" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
    <g id="rects">
${this.rects()}
    </g>
  </svg>`;
  }

  rects() {
    return new Rects(this.table, this.colors).build()
  }

  get height() {
    return this.table.length;
  }

  get width() {
    return this.table[0].length;
  }

  get viewBoxValue() {
    return `0 0 ${this.width} ${this.height}`;
  }
}
