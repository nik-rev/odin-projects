import Cell from "../logic/cell";
import Segment from "../logic/segment";

describe("Testing cell class", () => {
  const cell = new Cell(4, 9);
  const seg = cell.attach();

  it("Knows its coordinates", () => {
    expect(cell.x).toBe(4);
    expect(cell.y).toBe(9);
  });

  it("Throws error if there is already a segment attached", () => {
    expect(() => {
      cell.attach(new Segment());
    }).toThrow("This cell is already occupied");
  });

  it("Knows it has a segment", () => {
    expect(cell.segment).toEqual(seg);
  });

  it("Calls segment kill method and returns 'Hit'", () => {
    const newCell = new Cell();
    const newSegment = newCell.attach();
    const spy = jest.spyOn(newSegment, "kill");
    expect(newCell.hit()).toBe("Hit");
    expect(spy).toHaveBeenCalled();
  });

  it("If there is no segment it changes isAlive to false", () => {
    const newCell = new Cell();
    newCell.hit();
    expect(newCell.isAlive).toBe(false);
  });

  it("Can get own coordinates", () => {
    expect(new Cell(1, 2).getCoordinates()).toEqual([1, 2]);
    expect(new Cell(3, 9).getCoordinates()).toEqual([3, 9]);
    expect(new Cell(10, 2).getCoordinates()).toEqual([10, 2]);
    expect(new Cell(3, 7).getCoordinates()).toEqual([3, 7]);
  });

  it("Throws error when hit multiple times", () => {
    const newCell = new Cell();
    newCell.hit();
    expect(() => {
      newCell.hit();
    }).toThrow("This cell has already been hit");
  });

  it("If there is no segment it returns 'Miss'", () => {
    const newCell = new Cell();
    expect(newCell.hit()).toBe("Miss");
  });
});
