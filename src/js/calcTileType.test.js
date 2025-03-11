
import { calcTileType } from '../js/utils'; 
describe('calcTileType', () => {
  const boardSize = 3; // Пример размера доски 3x3
  
  test('should return top-left for index 0', () => {
    expect(calcTileType(0, boardSize)).toBe('top-left');
  });
  
  test('should return top for index 1', () => {
    expect(calcTileType(1, boardSize)).toBe('top');
  });

  test('should return top-right for index 2', () => {
    expect(calcTileType(2, boardSize)).toBe('top-right');
  });

  test('should return left for index 3', () => {
    expect(calcTileType(3, boardSize)).toBe('left');
  });

  test('should return center for index 4', () => {
    expect(calcTileType(4, boardSize)).toBe('center');
  });

  test('should return right for index 5', () => {
    expect(calcTileType(5, boardSize)).toBe('right');
  });

  test('should return bottom-left for index 6', () => {
    expect(calcTileType(6, boardSize)).toBe('bottom-left');
  });

  test('should return bottom for index 7', () => {
    expect(calcTileType(7, boardSize)).toBe('bottom');
  });

  test('should return bottom-right for index 8', () => {
    expect(calcTileType(8, boardSize)).toBe('bottom-right');
  });

  test('should handle larger boards', () => {
    const largeBoardSize = 4;

    expect(calcTileType(0, largeBoardSize)).toBe('top-left');
    expect(calcTileType(3, largeBoardSize)).toBe('top-right');
    expect(calcTileType(12, largeBoardSize)).toBe('bottom-left');
    expect(calcTileType(15, largeBoardSize)).toBe('bottom-right');
    expect(calcTileType(5, largeBoardSize)).toBe('center');
  });
});