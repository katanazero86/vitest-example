import {describe, expect, test} from "vitest";

describe('jsdom tests', () => {
   test('jsdom test-1', () => {
      expect(typeof window).not.toBe('undefined')
   })

   test('jsdom test-2', () => {
      const element = document.createElement('div');
      expect(element).not.toBeNull();
   });
});