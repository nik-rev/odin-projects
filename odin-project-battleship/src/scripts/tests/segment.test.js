import Segment from "../logic/segment";

describe("Testing segment class", () => {
  const seg = new Segment();
  it("Returns nothing when hit for the first time", () => {
    expect(seg.kill()).toBe(undefined);
  });
  it("Throws error when hit again or anytime after that", () => {
    expect(() => {
      seg.kill();
    }).toThrow("This segment has already been hit");
    expect(() => {
      seg.kill();
    }).toThrow("This segment has already been hit");
    expect(() => {
      seg.kill();
    }).toThrow("This segment has already been hit");
    expect(() => {
      seg.kill();
    }).toThrow("This segment has already been hit");
    expect(() => {
      seg.kill();
    }).toThrow("This segment has already been hit");
    expect(() => {
      seg.kill();
    }).toThrow("This segment has already been hit");
    expect(() => {
      seg.kill();
    }).toThrow("This segment has already been hit");
    expect(() => {
      seg.kill();
    }).toThrow("This segment has already been hit");
  });
});
