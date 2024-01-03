import {expect, test} from "vitest";

test('간단한 출력', () => {
   const path = process.cwd();
   expect(path).toBe(process.cwd());
});