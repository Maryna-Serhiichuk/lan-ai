declare namespace Strapi {
    namespace Graphql {
        type ExtensionCallback = ({ nexus }: { nexus: typeof core }) => SchemaExtension
    
        type ResolverConfig = {
            [key: string]: Partial<{
              auth: boolean | { scope: string[] }
              policies: Policy[]
              middlewares: core.MiddlewareFn[]
            }>
          }
    }

    type ContentTypeUIDs = string

    type LogLevel = 'info' | 'warn' | 'error'

    type Primitive = string | number | null | boolean | unknown

    type EnvVar<T = Primitive> = T

    type EnvFunction = <T = EnvVar>(key: string | NodeJS.ProcessEnv, defaultValue?: T) => T

    type TypedEnvFunction = Partial<{
        string(key: string, defaultValue?: string): string
        int(key: string, defaultValue?: number): number
        date(key: string, defaultValue?: Date): number
        float(key: number, defaultValue?: number): number
        bool(key: string, defaultValue?: boolean): boolean
        array<T = EnvVar>(key: string, defaultValue?: T[]): T[]
        json<T = { [key: string]: any }>(key: string, defaultValue?: T): T
    }>

    type Env = { env: EnvFunction & TypedEnvFunction }

    interface Fs {
        appendFile(path: string, content: Buffer | string): void

        removeAppFile(path: string): void

        writePluginFile(path: string, content: Buffer | string): void

        writeAppFile(path: string, content: Buffer | string): void
    }

    type Log = {
        [key in LogLevel]: (...args: unknown[]) => void
    }

    interface EntityValidator {
        validateEntityCreation: Function
        validateEntityUpdate: Function
    }

    interface ServerApp {
        listRoutes(): Server.Route[]
    }

    interface GenericPlugin {
        get config<T>(): T

        service<T>(name: string): T
    }

    interface GenericMiddleware extends Middleware {
    }

    type PluginUID = "content-manager" | "graphql" | "content-builder" | "users-permissions" | "upload" | string
    type ServiceUID =
        `strapi::${string}.${string}`
        | `api::${string}.${string}`
        | `plugin::${string}.${string}`
        | string
    type MiddlewareUID = `strapi::${string}` | `global::${string}` | `plugin::${string}.${string}` | string

     interface StrapiInterface  {
        fs: Fs
        log: Log
        server: ServerApp
        dirs: StrapiDirectories

        entityService: EntityService
        entityValidator: EntityValidator

        service<T extends GenericService = GenericService, UID = ServiceUID | string>(name: UID): T

        services: { [key in ServiceUID]: GenericService }

        plugin<T extends GenericPlugin = GenericPlugin, UID = PluginUID | string>(name: UID): T

        plugins: { [key in PluginUID]: GenericPlugin }

        middleware<T extends GenericMiddleware = GenericMiddleware, UID = MiddlewareUID | string>(name?: UID): T

        middlewares: { [key in MiddlewareUID]: GenericMiddleware }
    }
}

declare namespace TeteTe {
    type SSt = 'info' | 'warn' | 'error'
}