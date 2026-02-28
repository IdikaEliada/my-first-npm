import { expect, test, vi } from 'vitest';
import { add } from './index';

test('adds numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('displays name', () => {
  const consoleSpy = vi.spyOn(console, 'log');
  const name = 'Alice';
  console.log(`The result is: ${name}`);
  expect(consoleSpy).toHaveBeenCalledWith(`The result is: ${name}`);
  consoleSpy.mockRestore();
});