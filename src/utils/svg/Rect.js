export default class Rect {
  static get defaultAttributes() {
    return {
      height: 1,
      width: 1,
      x: -1,
      y: -1,
      color: null
    };
  }

  constructor(x, y, color) {
    this.attributes = {
      x: x,
      y: y,
      color: color
    };
  }

  getAttributes() {
    return {
      ...Rect.defaultAttributes,
      ...this.attributes
    };
  }

  build() {
    const {height, width, x, y, color} = this.getAttributes();
    return `<rect height="${height}" width="${width}" x="${x}" y="${y}" fill="${color}" />`;
  }
};
