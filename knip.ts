import type { KnipConfig } from 'knip'

const config: KnipConfig = {
    project: ['src/**/*.ts!'],
    entry: ['src/index.ts!', 'test/**/*.test.ts'],
    ignoreExportsUsedInFile: true,
}
export default config