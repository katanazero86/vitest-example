import {expect, test, vi} from "vitest";
import {sun} from "../sum";

test('합', () => {
   expect(sun(1,1)).toBe(2);
});

test.skip('뺄셈', () => {
   // skip test
});

const fakeFn = vi.fn();
fakeFn('hello vi');

const fakeFn2 = vi.fn(num => num * 2);

test('mocking', () => {
   expect(vi.isMockFunction(fakeFn)).toBe(true);
   // .mock.calls[호출 순서][인자 순서]
   expect(fakeFn.mock.calls[0][0]).toBe('hello vi');

   fakeFn2(10);
   fakeFn2(20);
   // 첫번째 호출의 첫번째 인자 값은
   expect(fakeFn2.mock.calls[0][0]).toBe(10);
   // 두번째 호출의 첫번째 인자 값은
   expect(fakeFn2.mock.calls[1][0]).toBe(20);

   // 첫번째 호출의 결과값은 20
   expect(fakeFn2.mock.results[0].value).toBe(20);
   // 두번째 호출의 결과값은 40
   expect(fakeFn2.mock.results[1].value).toBe(40);

   // fakeFn2 는 총 2번 호출
   expect(fakeFn2.mock.results.length).toBe(2);
})