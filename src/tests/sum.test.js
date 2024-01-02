import {expect, test} from "vitest";
import {sun} from "../sum";

test('합', () => {
   expect(sun(1,1)).toBe(2);
});