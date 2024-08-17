import { join } from 'path'
import { workingDir } from './index'

export default () => ({
    graphql: {
        enabled: true,
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: true,
            generateArtifacts: true,
            artifacts: {
                schema: join(workingDir, 'src', 'graphql', 'schema.graphql'),
                typegen: join(workingDir, 'types', 'generated', 'api.d.ts'),
            },
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
                introspection: true
            }
        }
    },
});
