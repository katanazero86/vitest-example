 import {defineWorkspace} from "vitest/config";

export default defineWorkspace([
    {
        test: {
            include: ['src/tests/*.test.{js,ts}'],
            name: 'default',
            environment: 'node'
        }
    },
    {
        test: {
            include: ['src/tests/work1/*.test.{js,ts}'],
            name: 'work1',
            environment: 'node'
        }
    },
    {
        test: {
            include: ['src/tests/work2/*.test.{js,ts}'],
            name: 'work2',
            environment: 'jsdom'
        }
    }
])