import Rect from './Rect.js';

export default class Rects {
  constructor(table, colors) {
    this.table = table;
    this.colors = colors;
  }

  build() {
    const rects = []
    for (const [rowIndex, row] of this.table.entries()) {
      for (const [columnIndex, cellValue] of row.entries()) {
        const color = this.findColor(cellValue);
        rects.push(new Rect(columnIndex, rowIndex, color).build());
      }
    }

    return rects.join("\n");
  }

  findColor(index) {
    return Object.values(this.colors)[index];
  }
}
