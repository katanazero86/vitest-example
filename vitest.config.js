/// <reference types="vitest" />
import { defineConfig} from "vitest/config";

export default defineConfig({
    test: {
        reporters: ['json', 'html', 'default'],
        outputFile: {
            json: './test-result.json',
        },
        coverage: {
            provider: 'istanbul' // or v8
        }
    }
})