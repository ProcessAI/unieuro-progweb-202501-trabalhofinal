
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model sede
 * 
 */
export type sede = $Result.DefaultSelection<Prisma.$sedePayload>
/**
 * Model endereco
 * 
 */
export type endereco = $Result.DefaultSelection<Prisma.$enderecoPayload>
/**
 * Model tipoeq
 * 
 */
export type tipoeq = $Result.DefaultSelection<Prisma.$tipoeqPayload>
/**
 * Model equipamento
 * 
 */
export type equipamento = $Result.DefaultSelection<Prisma.$equipamentoPayload>
/**
 * Model tipoinstalacao
 * 
 */
export type tipoinstalacao = $Result.DefaultSelection<Prisma.$tipoinstalacaoPayload>
/**
 * Model tipolaudo
 * 
 */
export type tipolaudo = $Result.DefaultSelection<Prisma.$tipolaudoPayload>
/**
 * Model laudo
 * 
 */
export type laudo = $Result.DefaultSelection<Prisma.$laudoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sede`: Exposes CRUD operations for the **sede** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sedes
    * const sedes = await prisma.sede.findMany()
    * ```
    */
  get sede(): Prisma.sedeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.enderecoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoeq`: Exposes CRUD operations for the **tipoeq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipoeqs
    * const tipoeqs = await prisma.tipoeq.findMany()
    * ```
    */
  get tipoeq(): Prisma.tipoeqDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipamento`: Exposes CRUD operations for the **equipamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipamentos
    * const equipamentos = await prisma.equipamento.findMany()
    * ```
    */
  get equipamento(): Prisma.equipamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoinstalacao`: Exposes CRUD operations for the **tipoinstalacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipoinstalacaos
    * const tipoinstalacaos = await prisma.tipoinstalacao.findMany()
    * ```
    */
  get tipoinstalacao(): Prisma.tipoinstalacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipolaudo`: Exposes CRUD operations for the **tipolaudo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipolaudos
    * const tipolaudos = await prisma.tipolaudo.findMany()
    * ```
    */
  get tipolaudo(): Prisma.tipolaudoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.laudo`: Exposes CRUD operations for the **laudo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Laudos
    * const laudos = await prisma.laudo.findMany()
    * ```
    */
  get laudo(): Prisma.laudoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    sede: 'sede',
    endereco: 'endereco',
    tipoeq: 'tipoeq',
    equipamento: 'equipamento',
    tipoinstalacao: 'tipoinstalacao',
    tipolaudo: 'tipolaudo',
    laudo: 'laudo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "sede" | "endereco" | "tipoeq" | "equipamento" | "tipoinstalacao" | "tipolaudo" | "laudo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      sede: {
        payload: Prisma.$sedePayload<ExtArgs>
        fields: Prisma.sedeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sedeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sedePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sedeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sedePayload>
          }
          findFirst: {
            args: Prisma.sedeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sedePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sedeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sedePayload>
          }
          findMany: {
            args: Prisma.sedeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sedePayload>[]
          }
          create: {
            args: Prisma.sedeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sedePayload>
          }
          createMany: {
            args: Prisma.sedeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sedeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sedePayload>[]
          }
          delete: {
            args: Prisma.sedeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sedePayload>
          }
          update: {
            args: Prisma.sedeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sedePayload>
          }
          deleteMany: {
            args: Prisma.sedeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sedeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sedeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sedePayload>[]
          }
          upsert: {
            args: Prisma.sedeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sedePayload>
          }
          aggregate: {
            args: Prisma.SedeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSede>
          }
          groupBy: {
            args: Prisma.sedeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SedeGroupByOutputType>[]
          }
          count: {
            args: Prisma.sedeCountArgs<ExtArgs>
            result: $Utils.Optional<SedeCountAggregateOutputType> | number
          }
        }
      }
      endereco: {
        payload: Prisma.$enderecoPayload<ExtArgs>
        fields: Prisma.enderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enderecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enderecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          findFirst: {
            args: Prisma.enderecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enderecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          findMany: {
            args: Prisma.enderecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>[]
          }
          create: {
            args: Prisma.enderecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          createMany: {
            args: Prisma.enderecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.enderecoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>[]
          }
          delete: {
            args: Prisma.enderecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          update: {
            args: Prisma.enderecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          deleteMany: {
            args: Prisma.enderecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enderecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.enderecoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>[]
          }
          upsert: {
            args: Prisma.enderecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.enderecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.enderecoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
          }
        }
      }
      tipoeq: {
        payload: Prisma.$tipoeqPayload<ExtArgs>
        fields: Prisma.tipoeqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipoeqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoeqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipoeqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoeqPayload>
          }
          findFirst: {
            args: Prisma.tipoeqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoeqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipoeqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoeqPayload>
          }
          findMany: {
            args: Prisma.tipoeqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoeqPayload>[]
          }
          create: {
            args: Prisma.tipoeqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoeqPayload>
          }
          createMany: {
            args: Prisma.tipoeqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipoeqCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoeqPayload>[]
          }
          delete: {
            args: Prisma.tipoeqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoeqPayload>
          }
          update: {
            args: Prisma.tipoeqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoeqPayload>
          }
          deleteMany: {
            args: Prisma.tipoeqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipoeqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipoeqUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoeqPayload>[]
          }
          upsert: {
            args: Prisma.tipoeqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoeqPayload>
          }
          aggregate: {
            args: Prisma.TipoeqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoeq>
          }
          groupBy: {
            args: Prisma.tipoeqGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoeqGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipoeqCountArgs<ExtArgs>
            result: $Utils.Optional<TipoeqCountAggregateOutputType> | number
          }
        }
      }
      equipamento: {
        payload: Prisma.$equipamentoPayload<ExtArgs>
        fields: Prisma.equipamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.equipamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.equipamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          findFirst: {
            args: Prisma.equipamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.equipamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          findMany: {
            args: Prisma.equipamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>[]
          }
          create: {
            args: Prisma.equipamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          createMany: {
            args: Prisma.equipamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.equipamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>[]
          }
          delete: {
            args: Prisma.equipamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          update: {
            args: Prisma.equipamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          deleteMany: {
            args: Prisma.equipamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.equipamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.equipamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>[]
          }
          upsert: {
            args: Prisma.equipamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          aggregate: {
            args: Prisma.EquipamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipamento>
          }
          groupBy: {
            args: Prisma.equipamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.equipamentoCountArgs<ExtArgs>
            result: $Utils.Optional<EquipamentoCountAggregateOutputType> | number
          }
        }
      }
      tipoinstalacao: {
        payload: Prisma.$tipoinstalacaoPayload<ExtArgs>
        fields: Prisma.tipoinstalacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipoinstalacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoinstalacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipoinstalacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoinstalacaoPayload>
          }
          findFirst: {
            args: Prisma.tipoinstalacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoinstalacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipoinstalacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoinstalacaoPayload>
          }
          findMany: {
            args: Prisma.tipoinstalacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoinstalacaoPayload>[]
          }
          create: {
            args: Prisma.tipoinstalacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoinstalacaoPayload>
          }
          createMany: {
            args: Prisma.tipoinstalacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipoinstalacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoinstalacaoPayload>[]
          }
          delete: {
            args: Prisma.tipoinstalacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoinstalacaoPayload>
          }
          update: {
            args: Prisma.tipoinstalacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoinstalacaoPayload>
          }
          deleteMany: {
            args: Prisma.tipoinstalacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipoinstalacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipoinstalacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoinstalacaoPayload>[]
          }
          upsert: {
            args: Prisma.tipoinstalacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipoinstalacaoPayload>
          }
          aggregate: {
            args: Prisma.TipoinstalacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoinstalacao>
          }
          groupBy: {
            args: Prisma.tipoinstalacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoinstalacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipoinstalacaoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoinstalacaoCountAggregateOutputType> | number
          }
        }
      }
      tipolaudo: {
        payload: Prisma.$tipolaudoPayload<ExtArgs>
        fields: Prisma.tipolaudoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipolaudoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipolaudoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipolaudoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipolaudoPayload>
          }
          findFirst: {
            args: Prisma.tipolaudoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipolaudoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipolaudoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipolaudoPayload>
          }
          findMany: {
            args: Prisma.tipolaudoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipolaudoPayload>[]
          }
          create: {
            args: Prisma.tipolaudoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipolaudoPayload>
          }
          createMany: {
            args: Prisma.tipolaudoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipolaudoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipolaudoPayload>[]
          }
          delete: {
            args: Prisma.tipolaudoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipolaudoPayload>
          }
          update: {
            args: Prisma.tipolaudoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipolaudoPayload>
          }
          deleteMany: {
            args: Prisma.tipolaudoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipolaudoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipolaudoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipolaudoPayload>[]
          }
          upsert: {
            args: Prisma.tipolaudoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipolaudoPayload>
          }
          aggregate: {
            args: Prisma.TipolaudoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipolaudo>
          }
          groupBy: {
            args: Prisma.tipolaudoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipolaudoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipolaudoCountArgs<ExtArgs>
            result: $Utils.Optional<TipolaudoCountAggregateOutputType> | number
          }
        }
      }
      laudo: {
        payload: Prisma.$laudoPayload<ExtArgs>
        fields: Prisma.laudoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.laudoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laudoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.laudoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laudoPayload>
          }
          findFirst: {
            args: Prisma.laudoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laudoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.laudoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laudoPayload>
          }
          findMany: {
            args: Prisma.laudoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laudoPayload>[]
          }
          create: {
            args: Prisma.laudoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laudoPayload>
          }
          createMany: {
            args: Prisma.laudoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.laudoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laudoPayload>[]
          }
          delete: {
            args: Prisma.laudoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laudoPayload>
          }
          update: {
            args: Prisma.laudoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laudoPayload>
          }
          deleteMany: {
            args: Prisma.laudoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.laudoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.laudoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laudoPayload>[]
          }
          upsert: {
            args: Prisma.laudoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laudoPayload>
          }
          aggregate: {
            args: Prisma.LaudoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaudo>
          }
          groupBy: {
            args: Prisma.laudoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaudoGroupByOutputType>[]
          }
          count: {
            args: Prisma.laudoCountArgs<ExtArgs>
            result: $Utils.Optional<LaudoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    sede?: sedeOmit
    endereco?: enderecoOmit
    tipoeq?: tipoeqOmit
    equipamento?: equipamentoOmit
    tipoinstalacao?: tipoinstalacaoOmit
    tipolaudo?: tipolaudoOmit
    laudo?: laudoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    sede: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sede?: boolean | ClienteCountOutputTypeCountSedeArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountSedeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sedeWhereInput
  }


  /**
   * Count Type SedeCountOutputType
   */

  export type SedeCountOutputType = {
    endereco: number
    equipamento: number
  }

  export type SedeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | SedeCountOutputTypeCountEnderecoArgs
    equipamento?: boolean | SedeCountOutputTypeCountEquipamentoArgs
  }

  // Custom InputTypes
  /**
   * SedeCountOutputType without action
   */
  export type SedeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SedeCountOutputType
     */
    select?: SedeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SedeCountOutputType without action
   */
  export type SedeCountOutputTypeCountEnderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enderecoWhereInput
  }

  /**
   * SedeCountOutputType without action
   */
  export type SedeCountOutputTypeCountEquipamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: equipamentoWhereInput
  }


  /**
   * Count Type TipoeqCountOutputType
   */

  export type TipoeqCountOutputType = {
    equipamento: number
  }

  export type TipoeqCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipamento?: boolean | TipoeqCountOutputTypeCountEquipamentoArgs
  }

  // Custom InputTypes
  /**
   * TipoeqCountOutputType without action
   */
  export type TipoeqCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoeqCountOutputType
     */
    select?: TipoeqCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoeqCountOutputType without action
   */
  export type TipoeqCountOutputTypeCountEquipamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: equipamentoWhereInput
  }


  /**
   * Count Type TipoinstalacaoCountOutputType
   */

  export type TipoinstalacaoCountOutputType = {
    laudo: number
  }

  export type TipoinstalacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laudo?: boolean | TipoinstalacaoCountOutputTypeCountLaudoArgs
  }

  // Custom InputTypes
  /**
   * TipoinstalacaoCountOutputType without action
   */
  export type TipoinstalacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoinstalacaoCountOutputType
     */
    select?: TipoinstalacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoinstalacaoCountOutputType without action
   */
  export type TipoinstalacaoCountOutputTypeCountLaudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: laudoWhereInput
  }


  /**
   * Count Type TipolaudoCountOutputType
   */

  export type TipolaudoCountOutputType = {
    laudo: number
  }

  export type TipolaudoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laudo?: boolean | TipolaudoCountOutputTypeCountLaudoArgs
  }

  // Custom InputTypes
  /**
   * TipolaudoCountOutputType without action
   */
  export type TipolaudoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipolaudoCountOutputType
     */
    select?: TipolaudoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipolaudoCountOutputType without action
   */
  export type TipolaudoCountOutputTypeCountLaudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: laudoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    idcliente: number | null
    clientestatus: number | null
  }

  export type ClienteSumAggregateOutputType = {
    idcliente: bigint | null
    clientestatus: number | null
  }

  export type ClienteMinAggregateOutputType = {
    idcliente: bigint | null
    clientenome: string | null
    clientestatus: number | null
  }

  export type ClienteMaxAggregateOutputType = {
    idcliente: bigint | null
    clientenome: string | null
    clientestatus: number | null
  }

  export type ClienteCountAggregateOutputType = {
    idcliente: number
    clientenome: number
    clientestatus: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    idcliente?: true
    clientestatus?: true
  }

  export type ClienteSumAggregateInputType = {
    idcliente?: true
    clientestatus?: true
  }

  export type ClienteMinAggregateInputType = {
    idcliente?: true
    clientenome?: true
    clientestatus?: true
  }

  export type ClienteMaxAggregateInputType = {
    idcliente?: true
    clientenome?: true
    clientestatus?: true
  }

  export type ClienteCountAggregateInputType = {
    idcliente?: true
    clientenome?: true
    clientestatus?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    idcliente: bigint
    clientenome: string
    clientestatus: number | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idcliente?: boolean
    clientenome?: boolean
    clientestatus?: boolean
    sede?: boolean | Cliente$sedeArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idcliente?: boolean
    clientenome?: boolean
    clientestatus?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idcliente?: boolean
    clientenome?: boolean
    clientestatus?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    idcliente?: boolean
    clientenome?: boolean
    clientestatus?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idcliente" | "clientenome" | "clientestatus", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sede?: boolean | Cliente$sedeArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      sede: Prisma.$sedePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idcliente: bigint
      clientenome: string
      clientestatus: number | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `idcliente`
     * const clienteWithIdclienteOnly = await prisma.cliente.findMany({ select: { idcliente: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `idcliente`
     * const clienteWithIdclienteOnly = await prisma.cliente.createManyAndReturn({
     *   select: { idcliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `idcliente`
     * const clienteWithIdclienteOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { idcliente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sede<T extends Cliente$sedeArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$sedeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sedePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly idcliente: FieldRef<"Cliente", 'BigInt'>
    readonly clientenome: FieldRef<"Cliente", 'String'>
    readonly clientestatus: FieldRef<"Cliente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.sede
   */
  export type Cliente$sedeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sede
     */
    select?: sedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sede
     */
    omit?: sedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sedeInclude<ExtArgs> | null
    where?: sedeWhereInput
    orderBy?: sedeOrderByWithRelationInput | sedeOrderByWithRelationInput[]
    cursor?: sedeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SedeScalarFieldEnum | SedeScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model sede
   */

  export type AggregateSede = {
    _count: SedeCountAggregateOutputType | null
    _avg: SedeAvgAggregateOutputType | null
    _sum: SedeSumAggregateOutputType | null
    _min: SedeMinAggregateOutputType | null
    _max: SedeMaxAggregateOutputType | null
  }

  export type SedeAvgAggregateOutputType = {
    idsede: number | null
    sedestatus: number | null
    idcliente: number | null
  }

  export type SedeSumAggregateOutputType = {
    idsede: number | null
    sedestatus: number | null
    idcliente: bigint | null
  }

  export type SedeMinAggregateOutputType = {
    idsede: number | null
    sedenome: string | null
    sedestatus: number | null
    idcliente: bigint | null
    sededtinclusao: Date | null
  }

  export type SedeMaxAggregateOutputType = {
    idsede: number | null
    sedenome: string | null
    sedestatus: number | null
    idcliente: bigint | null
    sededtinclusao: Date | null
  }

  export type SedeCountAggregateOutputType = {
    idsede: number
    sedenome: number
    sedestatus: number
    idcliente: number
    sededtinclusao: number
    _all: number
  }


  export type SedeAvgAggregateInputType = {
    idsede?: true
    sedestatus?: true
    idcliente?: true
  }

  export type SedeSumAggregateInputType = {
    idsede?: true
    sedestatus?: true
    idcliente?: true
  }

  export type SedeMinAggregateInputType = {
    idsede?: true
    sedenome?: true
    sedestatus?: true
    idcliente?: true
    sededtinclusao?: true
  }

  export type SedeMaxAggregateInputType = {
    idsede?: true
    sedenome?: true
    sedestatus?: true
    idcliente?: true
    sededtinclusao?: true
  }

  export type SedeCountAggregateInputType = {
    idsede?: true
    sedenome?: true
    sedestatus?: true
    idcliente?: true
    sededtinclusao?: true
    _all?: true
  }

  export type SedeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sede to aggregate.
     */
    where?: sedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sedes to fetch.
     */
    orderBy?: sedeOrderByWithRelationInput | sedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sedes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sedes
    **/
    _count?: true | SedeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SedeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SedeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SedeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SedeMaxAggregateInputType
  }

  export type GetSedeAggregateType<T extends SedeAggregateArgs> = {
        [P in keyof T & keyof AggregateSede]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSede[P]>
      : GetScalarType<T[P], AggregateSede[P]>
  }




  export type sedeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sedeWhereInput
    orderBy?: sedeOrderByWithAggregationInput | sedeOrderByWithAggregationInput[]
    by: SedeScalarFieldEnum[] | SedeScalarFieldEnum
    having?: sedeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SedeCountAggregateInputType | true
    _avg?: SedeAvgAggregateInputType
    _sum?: SedeSumAggregateInputType
    _min?: SedeMinAggregateInputType
    _max?: SedeMaxAggregateInputType
  }

  export type SedeGroupByOutputType = {
    idsede: number
    sedenome: string
    sedestatus: number
    idcliente: bigint
    sededtinclusao: Date | null
    _count: SedeCountAggregateOutputType | null
    _avg: SedeAvgAggregateOutputType | null
    _sum: SedeSumAggregateOutputType | null
    _min: SedeMinAggregateOutputType | null
    _max: SedeMaxAggregateOutputType | null
  }

  type GetSedeGroupByPayload<T extends sedeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SedeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SedeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SedeGroupByOutputType[P]>
            : GetScalarType<T[P], SedeGroupByOutputType[P]>
        }
      >
    >


  export type sedeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idsede?: boolean
    sedenome?: boolean
    sedestatus?: boolean
    idcliente?: boolean
    sededtinclusao?: boolean
    endereco?: boolean | sede$enderecoArgs<ExtArgs>
    equipamento?: boolean | sede$equipamentoArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    _count?: boolean | SedeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sede"]>

  export type sedeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idsede?: boolean
    sedenome?: boolean
    sedestatus?: boolean
    idcliente?: boolean
    sededtinclusao?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sede"]>

  export type sedeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idsede?: boolean
    sedenome?: boolean
    sedestatus?: boolean
    idcliente?: boolean
    sededtinclusao?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sede"]>

  export type sedeSelectScalar = {
    idsede?: boolean
    sedenome?: boolean
    sedestatus?: boolean
    idcliente?: boolean
    sededtinclusao?: boolean
  }

  export type sedeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idsede" | "sedenome" | "sedestatus" | "idcliente" | "sededtinclusao", ExtArgs["result"]["sede"]>
  export type sedeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endereco?: boolean | sede$enderecoArgs<ExtArgs>
    equipamento?: boolean | sede$equipamentoArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    _count?: boolean | SedeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sedeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type sedeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $sedePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sede"
    objects: {
      endereco: Prisma.$enderecoPayload<ExtArgs>[]
      equipamento: Prisma.$equipamentoPayload<ExtArgs>[]
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idsede: number
      sedenome: string
      sedestatus: number
      idcliente: bigint
      sededtinclusao: Date | null
    }, ExtArgs["result"]["sede"]>
    composites: {}
  }

  type sedeGetPayload<S extends boolean | null | undefined | sedeDefaultArgs> = $Result.GetResult<Prisma.$sedePayload, S>

  type sedeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sedeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SedeCountAggregateInputType | true
    }

  export interface sedeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sede'], meta: { name: 'sede' } }
    /**
     * Find zero or one Sede that matches the filter.
     * @param {sedeFindUniqueArgs} args - Arguments to find a Sede
     * @example
     * // Get one Sede
     * const sede = await prisma.sede.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sedeFindUniqueArgs>(args: SelectSubset<T, sedeFindUniqueArgs<ExtArgs>>): Prisma__sedeClient<$Result.GetResult<Prisma.$sedePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sede that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sedeFindUniqueOrThrowArgs} args - Arguments to find a Sede
     * @example
     * // Get one Sede
     * const sede = await prisma.sede.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sedeFindUniqueOrThrowArgs>(args: SelectSubset<T, sedeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sedeClient<$Result.GetResult<Prisma.$sedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sede that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sedeFindFirstArgs} args - Arguments to find a Sede
     * @example
     * // Get one Sede
     * const sede = await prisma.sede.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sedeFindFirstArgs>(args?: SelectSubset<T, sedeFindFirstArgs<ExtArgs>>): Prisma__sedeClient<$Result.GetResult<Prisma.$sedePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sede that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sedeFindFirstOrThrowArgs} args - Arguments to find a Sede
     * @example
     * // Get one Sede
     * const sede = await prisma.sede.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sedeFindFirstOrThrowArgs>(args?: SelectSubset<T, sedeFindFirstOrThrowArgs<ExtArgs>>): Prisma__sedeClient<$Result.GetResult<Prisma.$sedePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sedes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sedeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sedes
     * const sedes = await prisma.sede.findMany()
     * 
     * // Get first 10 Sedes
     * const sedes = await prisma.sede.findMany({ take: 10 })
     * 
     * // Only select the `idsede`
     * const sedeWithIdsedeOnly = await prisma.sede.findMany({ select: { idsede: true } })
     * 
     */
    findMany<T extends sedeFindManyArgs>(args?: SelectSubset<T, sedeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sedePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sede.
     * @param {sedeCreateArgs} args - Arguments to create a Sede.
     * @example
     * // Create one Sede
     * const Sede = await prisma.sede.create({
     *   data: {
     *     // ... data to create a Sede
     *   }
     * })
     * 
     */
    create<T extends sedeCreateArgs>(args: SelectSubset<T, sedeCreateArgs<ExtArgs>>): Prisma__sedeClient<$Result.GetResult<Prisma.$sedePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sedes.
     * @param {sedeCreateManyArgs} args - Arguments to create many Sedes.
     * @example
     * // Create many Sedes
     * const sede = await prisma.sede.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sedeCreateManyArgs>(args?: SelectSubset<T, sedeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sedes and returns the data saved in the database.
     * @param {sedeCreateManyAndReturnArgs} args - Arguments to create many Sedes.
     * @example
     * // Create many Sedes
     * const sede = await prisma.sede.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sedes and only return the `idsede`
     * const sedeWithIdsedeOnly = await prisma.sede.createManyAndReturn({
     *   select: { idsede: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sedeCreateManyAndReturnArgs>(args?: SelectSubset<T, sedeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sedePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sede.
     * @param {sedeDeleteArgs} args - Arguments to delete one Sede.
     * @example
     * // Delete one Sede
     * const Sede = await prisma.sede.delete({
     *   where: {
     *     // ... filter to delete one Sede
     *   }
     * })
     * 
     */
    delete<T extends sedeDeleteArgs>(args: SelectSubset<T, sedeDeleteArgs<ExtArgs>>): Prisma__sedeClient<$Result.GetResult<Prisma.$sedePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sede.
     * @param {sedeUpdateArgs} args - Arguments to update one Sede.
     * @example
     * // Update one Sede
     * const sede = await prisma.sede.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sedeUpdateArgs>(args: SelectSubset<T, sedeUpdateArgs<ExtArgs>>): Prisma__sedeClient<$Result.GetResult<Prisma.$sedePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sedes.
     * @param {sedeDeleteManyArgs} args - Arguments to filter Sedes to delete.
     * @example
     * // Delete a few Sedes
     * const { count } = await prisma.sede.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sedeDeleteManyArgs>(args?: SelectSubset<T, sedeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sedes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sedeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sedes
     * const sede = await prisma.sede.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sedeUpdateManyArgs>(args: SelectSubset<T, sedeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sedes and returns the data updated in the database.
     * @param {sedeUpdateManyAndReturnArgs} args - Arguments to update many Sedes.
     * @example
     * // Update many Sedes
     * const sede = await prisma.sede.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sedes and only return the `idsede`
     * const sedeWithIdsedeOnly = await prisma.sede.updateManyAndReturn({
     *   select: { idsede: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sedeUpdateManyAndReturnArgs>(args: SelectSubset<T, sedeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sedePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sede.
     * @param {sedeUpsertArgs} args - Arguments to update or create a Sede.
     * @example
     * // Update or create a Sede
     * const sede = await prisma.sede.upsert({
     *   create: {
     *     // ... data to create a Sede
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sede we want to update
     *   }
     * })
     */
    upsert<T extends sedeUpsertArgs>(args: SelectSubset<T, sedeUpsertArgs<ExtArgs>>): Prisma__sedeClient<$Result.GetResult<Prisma.$sedePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sedes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sedeCountArgs} args - Arguments to filter Sedes to count.
     * @example
     * // Count the number of Sedes
     * const count = await prisma.sede.count({
     *   where: {
     *     // ... the filter for the Sedes we want to count
     *   }
     * })
    **/
    count<T extends sedeCountArgs>(
      args?: Subset<T, sedeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SedeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sede.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SedeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SedeAggregateArgs>(args: Subset<T, SedeAggregateArgs>): Prisma.PrismaPromise<GetSedeAggregateType<T>>

    /**
     * Group by Sede.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sedeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sedeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sedeGroupByArgs['orderBy'] }
        : { orderBy?: sedeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sedeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSedeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sede model
   */
  readonly fields: sedeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sede.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sedeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endereco<T extends sede$enderecoArgs<ExtArgs> = {}>(args?: Subset<T, sede$enderecoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipamento<T extends sede$equipamentoArgs<ExtArgs> = {}>(args?: Subset<T, sede$equipamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sede model
   */
  interface sedeFieldRefs {
    readonly idsede: FieldRef<"sede", 'Int'>
    readonly sedenome: FieldRef<"sede", 'String'>
    readonly sedestatus: FieldRef<"sede", 'Int'>
    readonly idcliente: FieldRef<"sede", 'BigInt'>
    readonly sededtinclusao: FieldRef<"sede", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sede findUnique
   */
  export type sedeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sede
     */
    select?: sedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sede
     */
    omit?: sedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sedeInclude<ExtArgs> | null
    /**
     * Filter, which sede to fetch.
     */
    where: sedeWhereUniqueInput
  }

  /**
   * sede findUniqueOrThrow
   */
  export type sedeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sede
     */
    select?: sedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sede
     */
    omit?: sedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sedeInclude<ExtArgs> | null
    /**
     * Filter, which sede to fetch.
     */
    where: sedeWhereUniqueInput
  }

  /**
   * sede findFirst
   */
  export type sedeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sede
     */
    select?: sedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sede
     */
    omit?: sedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sedeInclude<ExtArgs> | null
    /**
     * Filter, which sede to fetch.
     */
    where?: sedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sedes to fetch.
     */
    orderBy?: sedeOrderByWithRelationInput | sedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sedes.
     */
    cursor?: sedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sedes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sedes.
     */
    distinct?: SedeScalarFieldEnum | SedeScalarFieldEnum[]
  }

  /**
   * sede findFirstOrThrow
   */
  export type sedeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sede
     */
    select?: sedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sede
     */
    omit?: sedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sedeInclude<ExtArgs> | null
    /**
     * Filter, which sede to fetch.
     */
    where?: sedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sedes to fetch.
     */
    orderBy?: sedeOrderByWithRelationInput | sedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sedes.
     */
    cursor?: sedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sedes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sedes.
     */
    distinct?: SedeScalarFieldEnum | SedeScalarFieldEnum[]
  }

  /**
   * sede findMany
   */
  export type sedeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sede
     */
    select?: sedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sede
     */
    omit?: sedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sedeInclude<ExtArgs> | null
    /**
     * Filter, which sedes to fetch.
     */
    where?: sedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sedes to fetch.
     */
    orderBy?: sedeOrderByWithRelationInput | sedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sedes.
     */
    cursor?: sedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sedes.
     */
    skip?: number
    distinct?: SedeScalarFieldEnum | SedeScalarFieldEnum[]
  }

  /**
   * sede create
   */
  export type sedeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sede
     */
    select?: sedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sede
     */
    omit?: sedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sedeInclude<ExtArgs> | null
    /**
     * The data needed to create a sede.
     */
    data: XOR<sedeCreateInput, sedeUncheckedCreateInput>
  }

  /**
   * sede createMany
   */
  export type sedeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sedes.
     */
    data: sedeCreateManyInput | sedeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sede createManyAndReturn
   */
  export type sedeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sede
     */
    select?: sedeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sede
     */
    omit?: sedeOmit<ExtArgs> | null
    /**
     * The data used to create many sedes.
     */
    data: sedeCreateManyInput | sedeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sedeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sede update
   */
  export type sedeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sede
     */
    select?: sedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sede
     */
    omit?: sedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sedeInclude<ExtArgs> | null
    /**
     * The data needed to update a sede.
     */
    data: XOR<sedeUpdateInput, sedeUncheckedUpdateInput>
    /**
     * Choose, which sede to update.
     */
    where: sedeWhereUniqueInput
  }

  /**
   * sede updateMany
   */
  export type sedeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sedes.
     */
    data: XOR<sedeUpdateManyMutationInput, sedeUncheckedUpdateManyInput>
    /**
     * Filter which sedes to update
     */
    where?: sedeWhereInput
    /**
     * Limit how many sedes to update.
     */
    limit?: number
  }

  /**
   * sede updateManyAndReturn
   */
  export type sedeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sede
     */
    select?: sedeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sede
     */
    omit?: sedeOmit<ExtArgs> | null
    /**
     * The data used to update sedes.
     */
    data: XOR<sedeUpdateManyMutationInput, sedeUncheckedUpdateManyInput>
    /**
     * Filter which sedes to update
     */
    where?: sedeWhereInput
    /**
     * Limit how many sedes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sedeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sede upsert
   */
  export type sedeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sede
     */
    select?: sedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sede
     */
    omit?: sedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sedeInclude<ExtArgs> | null
    /**
     * The filter to search for the sede to update in case it exists.
     */
    where: sedeWhereUniqueInput
    /**
     * In case the sede found by the `where` argument doesn't exist, create a new sede with this data.
     */
    create: XOR<sedeCreateInput, sedeUncheckedCreateInput>
    /**
     * In case the sede was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sedeUpdateInput, sedeUncheckedUpdateInput>
  }

  /**
   * sede delete
   */
  export type sedeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sede
     */
    select?: sedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sede
     */
    omit?: sedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sedeInclude<ExtArgs> | null
    /**
     * Filter which sede to delete.
     */
    where: sedeWhereUniqueInput
  }

  /**
   * sede deleteMany
   */
  export type sedeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sedes to delete
     */
    where?: sedeWhereInput
    /**
     * Limit how many sedes to delete.
     */
    limit?: number
  }

  /**
   * sede.endereco
   */
  export type sede$enderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    where?: enderecoWhereInput
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    cursor?: enderecoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * sede.equipamento
   */
  export type sede$equipamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    where?: equipamentoWhereInput
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    cursor?: equipamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * sede without action
   */
  export type sedeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sede
     */
    select?: sedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sede
     */
    omit?: sedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sedeInclude<ExtArgs> | null
  }


  /**
   * Model endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoAvgAggregateOutputType = {
    idendereco: number | null
    enderecolat: Decimal | null
    enderecolon: Decimal | null
    enderecostatus: number | null
    idsede: number | null
  }

  export type EnderecoSumAggregateOutputType = {
    idendereco: number | null
    enderecolat: Decimal | null
    enderecolon: Decimal | null
    enderecostatus: number | null
    idsede: number | null
  }

  export type EnderecoMinAggregateOutputType = {
    idendereco: number | null
    enderecoendereco: string | null
    enderecocep: string | null
    enderecolat: Decimal | null
    enderecolon: Decimal | null
    enderecostatus: number | null
    idsede: number | null
  }

  export type EnderecoMaxAggregateOutputType = {
    idendereco: number | null
    enderecoendereco: string | null
    enderecocep: string | null
    enderecolat: Decimal | null
    enderecolon: Decimal | null
    enderecostatus: number | null
    idsede: number | null
  }

  export type EnderecoCountAggregateOutputType = {
    idendereco: number
    enderecoendereco: number
    enderecocep: number
    enderecolat: number
    enderecolon: number
    enderecostatus: number
    idsede: number
    _all: number
  }


  export type EnderecoAvgAggregateInputType = {
    idendereco?: true
    enderecolat?: true
    enderecolon?: true
    enderecostatus?: true
    idsede?: true
  }

  export type EnderecoSumAggregateInputType = {
    idendereco?: true
    enderecolat?: true
    enderecolon?: true
    enderecostatus?: true
    idsede?: true
  }

  export type EnderecoMinAggregateInputType = {
    idendereco?: true
    enderecoendereco?: true
    enderecocep?: true
    enderecolat?: true
    enderecolon?: true
    enderecostatus?: true
    idsede?: true
  }

  export type EnderecoMaxAggregateInputType = {
    idendereco?: true
    enderecoendereco?: true
    enderecocep?: true
    enderecolat?: true
    enderecolon?: true
    enderecostatus?: true
    idsede?: true
  }

  export type EnderecoCountAggregateInputType = {
    idendereco?: true
    enderecoendereco?: true
    enderecocep?: true
    enderecolat?: true
    enderecolon?: true
    enderecostatus?: true
    idsede?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endereco to aggregate.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type enderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enderecoWhereInput
    orderBy?: enderecoOrderByWithAggregationInput | enderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: enderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _avg?: EnderecoAvgAggregateInputType
    _sum?: EnderecoSumAggregateInputType
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    idendereco: number
    enderecoendereco: string
    enderecocep: string
    enderecolat: Decimal | null
    enderecolon: Decimal | null
    enderecostatus: number | null
    idsede: number
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends enderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type enderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idendereco?: boolean
    enderecoendereco?: boolean
    enderecocep?: boolean
    enderecolat?: boolean
    enderecolon?: boolean
    enderecostatus?: boolean
    idsede?: boolean
    sede?: boolean | sedeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type enderecoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idendereco?: boolean
    enderecoendereco?: boolean
    enderecocep?: boolean
    enderecolat?: boolean
    enderecolon?: boolean
    enderecostatus?: boolean
    idsede?: boolean
    sede?: boolean | sedeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type enderecoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idendereco?: boolean
    enderecoendereco?: boolean
    enderecocep?: boolean
    enderecolat?: boolean
    enderecolon?: boolean
    enderecostatus?: boolean
    idsede?: boolean
    sede?: boolean | sedeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type enderecoSelectScalar = {
    idendereco?: boolean
    enderecoendereco?: boolean
    enderecocep?: boolean
    enderecolat?: boolean
    enderecolon?: boolean
    enderecostatus?: boolean
    idsede?: boolean
  }

  export type enderecoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idendereco" | "enderecoendereco" | "enderecocep" | "enderecolat" | "enderecolon" | "enderecostatus" | "idsede", ExtArgs["result"]["endereco"]>
  export type enderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sede?: boolean | sedeDefaultArgs<ExtArgs>
  }
  export type enderecoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sede?: boolean | sedeDefaultArgs<ExtArgs>
  }
  export type enderecoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sede?: boolean | sedeDefaultArgs<ExtArgs>
  }

  export type $enderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "endereco"
    objects: {
      sede: Prisma.$sedePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idendereco: number
      enderecoendereco: string
      enderecocep: string
      enderecolat: Prisma.Decimal | null
      enderecolon: Prisma.Decimal | null
      enderecostatus: number | null
      idsede: number
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }

  type enderecoGetPayload<S extends boolean | null | undefined | enderecoDefaultArgs> = $Result.GetResult<Prisma.$enderecoPayload, S>

  type enderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enderecoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface enderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['endereco'], meta: { name: 'endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {enderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enderecoFindUniqueArgs>(args: SelectSubset<T, enderecoFindUniqueArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enderecoFindUniqueOrThrowArgs>(args: SelectSubset<T, enderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enderecoFindFirstArgs>(args?: SelectSubset<T, enderecoFindFirstArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enderecoFindFirstOrThrowArgs>(args?: SelectSubset<T, enderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `idendereco`
     * const enderecoWithIdenderecoOnly = await prisma.endereco.findMany({ select: { idendereco: true } })
     * 
     */
    findMany<T extends enderecoFindManyArgs>(args?: SelectSubset<T, enderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereco.
     * @param {enderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
     */
    create<T extends enderecoCreateArgs>(args: SelectSubset<T, enderecoCreateArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enderecos.
     * @param {enderecoCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enderecoCreateManyArgs>(args?: SelectSubset<T, enderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enderecos and returns the data saved in the database.
     * @param {enderecoCreateManyAndReturnArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enderecos and only return the `idendereco`
     * const enderecoWithIdenderecoOnly = await prisma.endereco.createManyAndReturn({
     *   select: { idendereco: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends enderecoCreateManyAndReturnArgs>(args?: SelectSubset<T, enderecoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endereco.
     * @param {enderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
     */
    delete<T extends enderecoDeleteArgs>(args: SelectSubset<T, enderecoDeleteArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereco.
     * @param {enderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enderecoUpdateArgs>(args: SelectSubset<T, enderecoUpdateArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enderecos.
     * @param {enderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enderecoDeleteManyArgs>(args?: SelectSubset<T, enderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enderecoUpdateManyArgs>(args: SelectSubset<T, enderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos and returns the data updated in the database.
     * @param {enderecoUpdateManyAndReturnArgs} args - Arguments to update many Enderecos.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enderecos and only return the `idendereco`
     * const enderecoWithIdenderecoOnly = await prisma.endereco.updateManyAndReturn({
     *   select: { idendereco: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends enderecoUpdateManyAndReturnArgs>(args: SelectSubset<T, enderecoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endereco.
     * @param {enderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
     */
    upsert<T extends enderecoUpsertArgs>(args: SelectSubset<T, enderecoUpsertArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends enderecoCountArgs>(
      args?: Subset<T, enderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends enderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enderecoGroupByArgs['orderBy'] }
        : { orderBy?: enderecoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, enderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the endereco model
   */
  readonly fields: enderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sede<T extends sedeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sedeDefaultArgs<ExtArgs>>): Prisma__sedeClient<$Result.GetResult<Prisma.$sedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the endereco model
   */
  interface enderecoFieldRefs {
    readonly idendereco: FieldRef<"endereco", 'Int'>
    readonly enderecoendereco: FieldRef<"endereco", 'String'>
    readonly enderecocep: FieldRef<"endereco", 'String'>
    readonly enderecolat: FieldRef<"endereco", 'Decimal'>
    readonly enderecolon: FieldRef<"endereco", 'Decimal'>
    readonly enderecostatus: FieldRef<"endereco", 'Int'>
    readonly idsede: FieldRef<"endereco", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * endereco findUnique
   */
  export type enderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco findUniqueOrThrow
   */
  export type enderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco findFirst
   */
  export type enderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco findFirstOrThrow
   */
  export type enderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco findMany
   */
  export type enderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which enderecos to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco create
   */
  export type enderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a endereco.
     */
    data: XOR<enderecoCreateInput, enderecoUncheckedCreateInput>
  }

  /**
   * endereco createMany
   */
  export type enderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enderecos.
     */
    data: enderecoCreateManyInput | enderecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * endereco createManyAndReturn
   */
  export type enderecoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * The data used to create many enderecos.
     */
    data: enderecoCreateManyInput | enderecoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * endereco update
   */
  export type enderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a endereco.
     */
    data: XOR<enderecoUpdateInput, enderecoUncheckedUpdateInput>
    /**
     * Choose, which endereco to update.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco updateMany
   */
  export type enderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enderecos.
     */
    data: XOR<enderecoUpdateManyMutationInput, enderecoUncheckedUpdateManyInput>
    /**
     * Filter which enderecos to update
     */
    where?: enderecoWhereInput
    /**
     * Limit how many enderecos to update.
     */
    limit?: number
  }

  /**
   * endereco updateManyAndReturn
   */
  export type enderecoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * The data used to update enderecos.
     */
    data: XOR<enderecoUpdateManyMutationInput, enderecoUncheckedUpdateManyInput>
    /**
     * Filter which enderecos to update
     */
    where?: enderecoWhereInput
    /**
     * Limit how many enderecos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * endereco upsert
   */
  export type enderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the endereco to update in case it exists.
     */
    where: enderecoWhereUniqueInput
    /**
     * In case the endereco found by the `where` argument doesn't exist, create a new endereco with this data.
     */
    create: XOR<enderecoCreateInput, enderecoUncheckedCreateInput>
    /**
     * In case the endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enderecoUpdateInput, enderecoUncheckedUpdateInput>
  }

  /**
   * endereco delete
   */
  export type enderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter which endereco to delete.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco deleteMany
   */
  export type enderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enderecos to delete
     */
    where?: enderecoWhereInput
    /**
     * Limit how many enderecos to delete.
     */
    limit?: number
  }

  /**
   * endereco without action
   */
  export type enderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
  }


  /**
   * Model tipoeq
   */

  export type AggregateTipoeq = {
    _count: TipoeqCountAggregateOutputType | null
    _avg: TipoeqAvgAggregateOutputType | null
    _sum: TipoeqSumAggregateOutputType | null
    _min: TipoeqMinAggregateOutputType | null
    _max: TipoeqMaxAggregateOutputType | null
  }

  export type TipoeqAvgAggregateOutputType = {
    idtipoeq: number | null
  }

  export type TipoeqSumAggregateOutputType = {
    idtipoeq: number | null
  }

  export type TipoeqMinAggregateOutputType = {
    idtipoeq: number | null
    tipoeqnome: string | null
  }

  export type TipoeqMaxAggregateOutputType = {
    idtipoeq: number | null
    tipoeqnome: string | null
  }

  export type TipoeqCountAggregateOutputType = {
    idtipoeq: number
    tipoeqnome: number
    _all: number
  }


  export type TipoeqAvgAggregateInputType = {
    idtipoeq?: true
  }

  export type TipoeqSumAggregateInputType = {
    idtipoeq?: true
  }

  export type TipoeqMinAggregateInputType = {
    idtipoeq?: true
    tipoeqnome?: true
  }

  export type TipoeqMaxAggregateInputType = {
    idtipoeq?: true
    tipoeqnome?: true
  }

  export type TipoeqCountAggregateInputType = {
    idtipoeq?: true
    tipoeqnome?: true
    _all?: true
  }

  export type TipoeqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipoeq to aggregate.
     */
    where?: tipoeqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoeqs to fetch.
     */
    orderBy?: tipoeqOrderByWithRelationInput | tipoeqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipoeqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoeqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoeqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipoeqs
    **/
    _count?: true | TipoeqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoeqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoeqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoeqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoeqMaxAggregateInputType
  }

  export type GetTipoeqAggregateType<T extends TipoeqAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoeq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoeq[P]>
      : GetScalarType<T[P], AggregateTipoeq[P]>
  }




  export type tipoeqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipoeqWhereInput
    orderBy?: tipoeqOrderByWithAggregationInput | tipoeqOrderByWithAggregationInput[]
    by: TipoeqScalarFieldEnum[] | TipoeqScalarFieldEnum
    having?: tipoeqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoeqCountAggregateInputType | true
    _avg?: TipoeqAvgAggregateInputType
    _sum?: TipoeqSumAggregateInputType
    _min?: TipoeqMinAggregateInputType
    _max?: TipoeqMaxAggregateInputType
  }

  export type TipoeqGroupByOutputType = {
    idtipoeq: number
    tipoeqnome: string
    _count: TipoeqCountAggregateOutputType | null
    _avg: TipoeqAvgAggregateOutputType | null
    _sum: TipoeqSumAggregateOutputType | null
    _min: TipoeqMinAggregateOutputType | null
    _max: TipoeqMaxAggregateOutputType | null
  }

  type GetTipoeqGroupByPayload<T extends tipoeqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoeqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoeqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoeqGroupByOutputType[P]>
            : GetScalarType<T[P], TipoeqGroupByOutputType[P]>
        }
      >
    >


  export type tipoeqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idtipoeq?: boolean
    tipoeqnome?: boolean
    equipamento?: boolean | tipoeq$equipamentoArgs<ExtArgs>
    _count?: boolean | TipoeqCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoeq"]>

  export type tipoeqSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idtipoeq?: boolean
    tipoeqnome?: boolean
  }, ExtArgs["result"]["tipoeq"]>

  export type tipoeqSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idtipoeq?: boolean
    tipoeqnome?: boolean
  }, ExtArgs["result"]["tipoeq"]>

  export type tipoeqSelectScalar = {
    idtipoeq?: boolean
    tipoeqnome?: boolean
  }

  export type tipoeqOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idtipoeq" | "tipoeqnome", ExtArgs["result"]["tipoeq"]>
  export type tipoeqInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipamento?: boolean | tipoeq$equipamentoArgs<ExtArgs>
    _count?: boolean | TipoeqCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tipoeqIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tipoeqIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tipoeqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipoeq"
    objects: {
      equipamento: Prisma.$equipamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idtipoeq: number
      tipoeqnome: string
    }, ExtArgs["result"]["tipoeq"]>
    composites: {}
  }

  type tipoeqGetPayload<S extends boolean | null | undefined | tipoeqDefaultArgs> = $Result.GetResult<Prisma.$tipoeqPayload, S>

  type tipoeqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipoeqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoeqCountAggregateInputType | true
    }

  export interface tipoeqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipoeq'], meta: { name: 'tipoeq' } }
    /**
     * Find zero or one Tipoeq that matches the filter.
     * @param {tipoeqFindUniqueArgs} args - Arguments to find a Tipoeq
     * @example
     * // Get one Tipoeq
     * const tipoeq = await prisma.tipoeq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipoeqFindUniqueArgs>(args: SelectSubset<T, tipoeqFindUniqueArgs<ExtArgs>>): Prisma__tipoeqClient<$Result.GetResult<Prisma.$tipoeqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipoeq that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipoeqFindUniqueOrThrowArgs} args - Arguments to find a Tipoeq
     * @example
     * // Get one Tipoeq
     * const tipoeq = await prisma.tipoeq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipoeqFindUniqueOrThrowArgs>(args: SelectSubset<T, tipoeqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipoeqClient<$Result.GetResult<Prisma.$tipoeqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipoeq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoeqFindFirstArgs} args - Arguments to find a Tipoeq
     * @example
     * // Get one Tipoeq
     * const tipoeq = await prisma.tipoeq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipoeqFindFirstArgs>(args?: SelectSubset<T, tipoeqFindFirstArgs<ExtArgs>>): Prisma__tipoeqClient<$Result.GetResult<Prisma.$tipoeqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipoeq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoeqFindFirstOrThrowArgs} args - Arguments to find a Tipoeq
     * @example
     * // Get one Tipoeq
     * const tipoeq = await prisma.tipoeq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipoeqFindFirstOrThrowArgs>(args?: SelectSubset<T, tipoeqFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipoeqClient<$Result.GetResult<Prisma.$tipoeqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipoeqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoeqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipoeqs
     * const tipoeqs = await prisma.tipoeq.findMany()
     * 
     * // Get first 10 Tipoeqs
     * const tipoeqs = await prisma.tipoeq.findMany({ take: 10 })
     * 
     * // Only select the `idtipoeq`
     * const tipoeqWithIdtipoeqOnly = await prisma.tipoeq.findMany({ select: { idtipoeq: true } })
     * 
     */
    findMany<T extends tipoeqFindManyArgs>(args?: SelectSubset<T, tipoeqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipoeqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipoeq.
     * @param {tipoeqCreateArgs} args - Arguments to create a Tipoeq.
     * @example
     * // Create one Tipoeq
     * const Tipoeq = await prisma.tipoeq.create({
     *   data: {
     *     // ... data to create a Tipoeq
     *   }
     * })
     * 
     */
    create<T extends tipoeqCreateArgs>(args: SelectSubset<T, tipoeqCreateArgs<ExtArgs>>): Prisma__tipoeqClient<$Result.GetResult<Prisma.$tipoeqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipoeqs.
     * @param {tipoeqCreateManyArgs} args - Arguments to create many Tipoeqs.
     * @example
     * // Create many Tipoeqs
     * const tipoeq = await prisma.tipoeq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipoeqCreateManyArgs>(args?: SelectSubset<T, tipoeqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipoeqs and returns the data saved in the database.
     * @param {tipoeqCreateManyAndReturnArgs} args - Arguments to create many Tipoeqs.
     * @example
     * // Create many Tipoeqs
     * const tipoeq = await prisma.tipoeq.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipoeqs and only return the `idtipoeq`
     * const tipoeqWithIdtipoeqOnly = await prisma.tipoeq.createManyAndReturn({
     *   select: { idtipoeq: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipoeqCreateManyAndReturnArgs>(args?: SelectSubset<T, tipoeqCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipoeqPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipoeq.
     * @param {tipoeqDeleteArgs} args - Arguments to delete one Tipoeq.
     * @example
     * // Delete one Tipoeq
     * const Tipoeq = await prisma.tipoeq.delete({
     *   where: {
     *     // ... filter to delete one Tipoeq
     *   }
     * })
     * 
     */
    delete<T extends tipoeqDeleteArgs>(args: SelectSubset<T, tipoeqDeleteArgs<ExtArgs>>): Prisma__tipoeqClient<$Result.GetResult<Prisma.$tipoeqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipoeq.
     * @param {tipoeqUpdateArgs} args - Arguments to update one Tipoeq.
     * @example
     * // Update one Tipoeq
     * const tipoeq = await prisma.tipoeq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipoeqUpdateArgs>(args: SelectSubset<T, tipoeqUpdateArgs<ExtArgs>>): Prisma__tipoeqClient<$Result.GetResult<Prisma.$tipoeqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipoeqs.
     * @param {tipoeqDeleteManyArgs} args - Arguments to filter Tipoeqs to delete.
     * @example
     * // Delete a few Tipoeqs
     * const { count } = await prisma.tipoeq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipoeqDeleteManyArgs>(args?: SelectSubset<T, tipoeqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipoeqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoeqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipoeqs
     * const tipoeq = await prisma.tipoeq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipoeqUpdateManyArgs>(args: SelectSubset<T, tipoeqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipoeqs and returns the data updated in the database.
     * @param {tipoeqUpdateManyAndReturnArgs} args - Arguments to update many Tipoeqs.
     * @example
     * // Update many Tipoeqs
     * const tipoeq = await prisma.tipoeq.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipoeqs and only return the `idtipoeq`
     * const tipoeqWithIdtipoeqOnly = await prisma.tipoeq.updateManyAndReturn({
     *   select: { idtipoeq: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tipoeqUpdateManyAndReturnArgs>(args: SelectSubset<T, tipoeqUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipoeqPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipoeq.
     * @param {tipoeqUpsertArgs} args - Arguments to update or create a Tipoeq.
     * @example
     * // Update or create a Tipoeq
     * const tipoeq = await prisma.tipoeq.upsert({
     *   create: {
     *     // ... data to create a Tipoeq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipoeq we want to update
     *   }
     * })
     */
    upsert<T extends tipoeqUpsertArgs>(args: SelectSubset<T, tipoeqUpsertArgs<ExtArgs>>): Prisma__tipoeqClient<$Result.GetResult<Prisma.$tipoeqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipoeqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoeqCountArgs} args - Arguments to filter Tipoeqs to count.
     * @example
     * // Count the number of Tipoeqs
     * const count = await prisma.tipoeq.count({
     *   where: {
     *     // ... the filter for the Tipoeqs we want to count
     *   }
     * })
    **/
    count<T extends tipoeqCountArgs>(
      args?: Subset<T, tipoeqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoeqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipoeq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoeqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoeqAggregateArgs>(args: Subset<T, TipoeqAggregateArgs>): Prisma.PrismaPromise<GetTipoeqAggregateType<T>>

    /**
     * Group by Tipoeq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoeqGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipoeqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipoeqGroupByArgs['orderBy'] }
        : { orderBy?: tipoeqGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipoeqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoeqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipoeq model
   */
  readonly fields: tipoeqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipoeq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipoeqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipamento<T extends tipoeq$equipamentoArgs<ExtArgs> = {}>(args?: Subset<T, tipoeq$equipamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipoeq model
   */
  interface tipoeqFieldRefs {
    readonly idtipoeq: FieldRef<"tipoeq", 'Int'>
    readonly tipoeqnome: FieldRef<"tipoeq", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipoeq findUnique
   */
  export type tipoeqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoeq
     */
    select?: tipoeqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoeq
     */
    omit?: tipoeqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoeqInclude<ExtArgs> | null
    /**
     * Filter, which tipoeq to fetch.
     */
    where: tipoeqWhereUniqueInput
  }

  /**
   * tipoeq findUniqueOrThrow
   */
  export type tipoeqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoeq
     */
    select?: tipoeqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoeq
     */
    omit?: tipoeqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoeqInclude<ExtArgs> | null
    /**
     * Filter, which tipoeq to fetch.
     */
    where: tipoeqWhereUniqueInput
  }

  /**
   * tipoeq findFirst
   */
  export type tipoeqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoeq
     */
    select?: tipoeqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoeq
     */
    omit?: tipoeqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoeqInclude<ExtArgs> | null
    /**
     * Filter, which tipoeq to fetch.
     */
    where?: tipoeqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoeqs to fetch.
     */
    orderBy?: tipoeqOrderByWithRelationInput | tipoeqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipoeqs.
     */
    cursor?: tipoeqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoeqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoeqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipoeqs.
     */
    distinct?: TipoeqScalarFieldEnum | TipoeqScalarFieldEnum[]
  }

  /**
   * tipoeq findFirstOrThrow
   */
  export type tipoeqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoeq
     */
    select?: tipoeqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoeq
     */
    omit?: tipoeqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoeqInclude<ExtArgs> | null
    /**
     * Filter, which tipoeq to fetch.
     */
    where?: tipoeqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoeqs to fetch.
     */
    orderBy?: tipoeqOrderByWithRelationInput | tipoeqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipoeqs.
     */
    cursor?: tipoeqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoeqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoeqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipoeqs.
     */
    distinct?: TipoeqScalarFieldEnum | TipoeqScalarFieldEnum[]
  }

  /**
   * tipoeq findMany
   */
  export type tipoeqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoeq
     */
    select?: tipoeqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoeq
     */
    omit?: tipoeqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoeqInclude<ExtArgs> | null
    /**
     * Filter, which tipoeqs to fetch.
     */
    where?: tipoeqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoeqs to fetch.
     */
    orderBy?: tipoeqOrderByWithRelationInput | tipoeqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipoeqs.
     */
    cursor?: tipoeqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoeqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoeqs.
     */
    skip?: number
    distinct?: TipoeqScalarFieldEnum | TipoeqScalarFieldEnum[]
  }

  /**
   * tipoeq create
   */
  export type tipoeqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoeq
     */
    select?: tipoeqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoeq
     */
    omit?: tipoeqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoeqInclude<ExtArgs> | null
    /**
     * The data needed to create a tipoeq.
     */
    data: XOR<tipoeqCreateInput, tipoeqUncheckedCreateInput>
  }

  /**
   * tipoeq createMany
   */
  export type tipoeqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipoeqs.
     */
    data: tipoeqCreateManyInput | tipoeqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipoeq createManyAndReturn
   */
  export type tipoeqCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoeq
     */
    select?: tipoeqSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipoeq
     */
    omit?: tipoeqOmit<ExtArgs> | null
    /**
     * The data used to create many tipoeqs.
     */
    data: tipoeqCreateManyInput | tipoeqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipoeq update
   */
  export type tipoeqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoeq
     */
    select?: tipoeqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoeq
     */
    omit?: tipoeqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoeqInclude<ExtArgs> | null
    /**
     * The data needed to update a tipoeq.
     */
    data: XOR<tipoeqUpdateInput, tipoeqUncheckedUpdateInput>
    /**
     * Choose, which tipoeq to update.
     */
    where: tipoeqWhereUniqueInput
  }

  /**
   * tipoeq updateMany
   */
  export type tipoeqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipoeqs.
     */
    data: XOR<tipoeqUpdateManyMutationInput, tipoeqUncheckedUpdateManyInput>
    /**
     * Filter which tipoeqs to update
     */
    where?: tipoeqWhereInput
    /**
     * Limit how many tipoeqs to update.
     */
    limit?: number
  }

  /**
   * tipoeq updateManyAndReturn
   */
  export type tipoeqUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoeq
     */
    select?: tipoeqSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipoeq
     */
    omit?: tipoeqOmit<ExtArgs> | null
    /**
     * The data used to update tipoeqs.
     */
    data: XOR<tipoeqUpdateManyMutationInput, tipoeqUncheckedUpdateManyInput>
    /**
     * Filter which tipoeqs to update
     */
    where?: tipoeqWhereInput
    /**
     * Limit how many tipoeqs to update.
     */
    limit?: number
  }

  /**
   * tipoeq upsert
   */
  export type tipoeqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoeq
     */
    select?: tipoeqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoeq
     */
    omit?: tipoeqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoeqInclude<ExtArgs> | null
    /**
     * The filter to search for the tipoeq to update in case it exists.
     */
    where: tipoeqWhereUniqueInput
    /**
     * In case the tipoeq found by the `where` argument doesn't exist, create a new tipoeq with this data.
     */
    create: XOR<tipoeqCreateInput, tipoeqUncheckedCreateInput>
    /**
     * In case the tipoeq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipoeqUpdateInput, tipoeqUncheckedUpdateInput>
  }

  /**
   * tipoeq delete
   */
  export type tipoeqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoeq
     */
    select?: tipoeqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoeq
     */
    omit?: tipoeqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoeqInclude<ExtArgs> | null
    /**
     * Filter which tipoeq to delete.
     */
    where: tipoeqWhereUniqueInput
  }

  /**
   * tipoeq deleteMany
   */
  export type tipoeqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipoeqs to delete
     */
    where?: tipoeqWhereInput
    /**
     * Limit how many tipoeqs to delete.
     */
    limit?: number
  }

  /**
   * tipoeq.equipamento
   */
  export type tipoeq$equipamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    where?: equipamentoWhereInput
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    cursor?: equipamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * tipoeq without action
   */
  export type tipoeqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoeq
     */
    select?: tipoeqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoeq
     */
    omit?: tipoeqOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoeqInclude<ExtArgs> | null
  }


  /**
   * Model equipamento
   */

  export type AggregateEquipamento = {
    _count: EquipamentoCountAggregateOutputType | null
    _avg: EquipamentoAvgAggregateOutputType | null
    _sum: EquipamentoSumAggregateOutputType | null
    _min: EquipamentoMinAggregateOutputType | null
    _max: EquipamentoMaxAggregateOutputType | null
  }

  export type EquipamentoAvgAggregateOutputType = {
    idequipamento: number | null
    idsede: number | null
    idtipoeq: number | null
  }

  export type EquipamentoSumAggregateOutputType = {
    idequipamento: number | null
    idsede: number | null
    idtipoeq: number | null
  }

  export type EquipamentoMinAggregateOutputType = {
    idequipamento: number | null
    equipamentoserie: string | null
    equipamentomodelo: string | null
    equipamentomac: string | null
    equipamentoipv4: string | null
    equipamentoipv6: string | null
    equipamentoanydesk: string | null
    equipamentodw: string | null
    equipamentoalugado: boolean | null
    idsede: number | null
    idtipoeq: number | null
  }

  export type EquipamentoMaxAggregateOutputType = {
    idequipamento: number | null
    equipamentoserie: string | null
    equipamentomodelo: string | null
    equipamentomac: string | null
    equipamentoipv4: string | null
    equipamentoipv6: string | null
    equipamentoanydesk: string | null
    equipamentodw: string | null
    equipamentoalugado: boolean | null
    idsede: number | null
    idtipoeq: number | null
  }

  export type EquipamentoCountAggregateOutputType = {
    idequipamento: number
    equipamentoserie: number
    equipamentomodelo: number
    equipamentomac: number
    equipamentoipv4: number
    equipamentoipv6: number
    equipamentoanydesk: number
    equipamentodw: number
    equipamentoalugado: number
    idsede: number
    idtipoeq: number
    _all: number
  }


  export type EquipamentoAvgAggregateInputType = {
    idequipamento?: true
    idsede?: true
    idtipoeq?: true
  }

  export type EquipamentoSumAggregateInputType = {
    idequipamento?: true
    idsede?: true
    idtipoeq?: true
  }

  export type EquipamentoMinAggregateInputType = {
    idequipamento?: true
    equipamentoserie?: true
    equipamentomodelo?: true
    equipamentomac?: true
    equipamentoipv4?: true
    equipamentoipv6?: true
    equipamentoanydesk?: true
    equipamentodw?: true
    equipamentoalugado?: true
    idsede?: true
    idtipoeq?: true
  }

  export type EquipamentoMaxAggregateInputType = {
    idequipamento?: true
    equipamentoserie?: true
    equipamentomodelo?: true
    equipamentomac?: true
    equipamentoipv4?: true
    equipamentoipv6?: true
    equipamentoanydesk?: true
    equipamentodw?: true
    equipamentoalugado?: true
    idsede?: true
    idtipoeq?: true
  }

  export type EquipamentoCountAggregateInputType = {
    idequipamento?: true
    equipamentoserie?: true
    equipamentomodelo?: true
    equipamentomac?: true
    equipamentoipv4?: true
    equipamentoipv6?: true
    equipamentoanydesk?: true
    equipamentodw?: true
    equipamentoalugado?: true
    idsede?: true
    idtipoeq?: true
    _all?: true
  }

  export type EquipamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipamento to aggregate.
     */
    where?: equipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipamentos to fetch.
     */
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: equipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned equipamentos
    **/
    _count?: true | EquipamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipamentoMaxAggregateInputType
  }

  export type GetEquipamentoAggregateType<T extends EquipamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipamento[P]>
      : GetScalarType<T[P], AggregateEquipamento[P]>
  }




  export type equipamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: equipamentoWhereInput
    orderBy?: equipamentoOrderByWithAggregationInput | equipamentoOrderByWithAggregationInput[]
    by: EquipamentoScalarFieldEnum[] | EquipamentoScalarFieldEnum
    having?: equipamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipamentoCountAggregateInputType | true
    _avg?: EquipamentoAvgAggregateInputType
    _sum?: EquipamentoSumAggregateInputType
    _min?: EquipamentoMinAggregateInputType
    _max?: EquipamentoMaxAggregateInputType
  }

  export type EquipamentoGroupByOutputType = {
    idequipamento: number
    equipamentoserie: string | null
    equipamentomodelo: string | null
    equipamentomac: string | null
    equipamentoipv4: string | null
    equipamentoipv6: string | null
    equipamentoanydesk: string | null
    equipamentodw: string | null
    equipamentoalugado: boolean | null
    idsede: number
    idtipoeq: number
    _count: EquipamentoCountAggregateOutputType | null
    _avg: EquipamentoAvgAggregateOutputType | null
    _sum: EquipamentoSumAggregateOutputType | null
    _min: EquipamentoMinAggregateOutputType | null
    _max: EquipamentoMaxAggregateOutputType | null
  }

  type GetEquipamentoGroupByPayload<T extends equipamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipamentoGroupByOutputType[P]>
            : GetScalarType<T[P], EquipamentoGroupByOutputType[P]>
        }
      >
    >


  export type equipamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idequipamento?: boolean
    equipamentoserie?: boolean
    equipamentomodelo?: boolean
    equipamentomac?: boolean
    equipamentoipv4?: boolean
    equipamentoipv6?: boolean
    equipamentoanydesk?: boolean
    equipamentodw?: boolean
    equipamentoalugado?: boolean
    idsede?: boolean
    idtipoeq?: boolean
    sede?: boolean | sedeDefaultArgs<ExtArgs>
    tipoeq?: boolean | tipoeqDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipamento"]>

  export type equipamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idequipamento?: boolean
    equipamentoserie?: boolean
    equipamentomodelo?: boolean
    equipamentomac?: boolean
    equipamentoipv4?: boolean
    equipamentoipv6?: boolean
    equipamentoanydesk?: boolean
    equipamentodw?: boolean
    equipamentoalugado?: boolean
    idsede?: boolean
    idtipoeq?: boolean
    sede?: boolean | sedeDefaultArgs<ExtArgs>
    tipoeq?: boolean | tipoeqDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipamento"]>

  export type equipamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idequipamento?: boolean
    equipamentoserie?: boolean
    equipamentomodelo?: boolean
    equipamentomac?: boolean
    equipamentoipv4?: boolean
    equipamentoipv6?: boolean
    equipamentoanydesk?: boolean
    equipamentodw?: boolean
    equipamentoalugado?: boolean
    idsede?: boolean
    idtipoeq?: boolean
    sede?: boolean | sedeDefaultArgs<ExtArgs>
    tipoeq?: boolean | tipoeqDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipamento"]>

  export type equipamentoSelectScalar = {
    idequipamento?: boolean
    equipamentoserie?: boolean
    equipamentomodelo?: boolean
    equipamentomac?: boolean
    equipamentoipv4?: boolean
    equipamentoipv6?: boolean
    equipamentoanydesk?: boolean
    equipamentodw?: boolean
    equipamentoalugado?: boolean
    idsede?: boolean
    idtipoeq?: boolean
  }

  export type equipamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idequipamento" | "equipamentoserie" | "equipamentomodelo" | "equipamentomac" | "equipamentoipv4" | "equipamentoipv6" | "equipamentoanydesk" | "equipamentodw" | "equipamentoalugado" | "idsede" | "idtipoeq", ExtArgs["result"]["equipamento"]>
  export type equipamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sede?: boolean | sedeDefaultArgs<ExtArgs>
    tipoeq?: boolean | tipoeqDefaultArgs<ExtArgs>
  }
  export type equipamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sede?: boolean | sedeDefaultArgs<ExtArgs>
    tipoeq?: boolean | tipoeqDefaultArgs<ExtArgs>
  }
  export type equipamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sede?: boolean | sedeDefaultArgs<ExtArgs>
    tipoeq?: boolean | tipoeqDefaultArgs<ExtArgs>
  }

  export type $equipamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "equipamento"
    objects: {
      sede: Prisma.$sedePayload<ExtArgs>
      tipoeq: Prisma.$tipoeqPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idequipamento: number
      equipamentoserie: string | null
      equipamentomodelo: string | null
      equipamentomac: string | null
      equipamentoipv4: string | null
      equipamentoipv6: string | null
      equipamentoanydesk: string | null
      equipamentodw: string | null
      equipamentoalugado: boolean | null
      idsede: number
      idtipoeq: number
    }, ExtArgs["result"]["equipamento"]>
    composites: {}
  }

  type equipamentoGetPayload<S extends boolean | null | undefined | equipamentoDefaultArgs> = $Result.GetResult<Prisma.$equipamentoPayload, S>

  type equipamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<equipamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipamentoCountAggregateInputType | true
    }

  export interface equipamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['equipamento'], meta: { name: 'equipamento' } }
    /**
     * Find zero or one Equipamento that matches the filter.
     * @param {equipamentoFindUniqueArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends equipamentoFindUniqueArgs>(args: SelectSubset<T, equipamentoFindUniqueArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {equipamentoFindUniqueOrThrowArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends equipamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, equipamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoFindFirstArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends equipamentoFindFirstArgs>(args?: SelectSubset<T, equipamentoFindFirstArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoFindFirstOrThrowArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends equipamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, equipamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipamentos
     * const equipamentos = await prisma.equipamento.findMany()
     * 
     * // Get first 10 Equipamentos
     * const equipamentos = await prisma.equipamento.findMany({ take: 10 })
     * 
     * // Only select the `idequipamento`
     * const equipamentoWithIdequipamentoOnly = await prisma.equipamento.findMany({ select: { idequipamento: true } })
     * 
     */
    findMany<T extends equipamentoFindManyArgs>(args?: SelectSubset<T, equipamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipamento.
     * @param {equipamentoCreateArgs} args - Arguments to create a Equipamento.
     * @example
     * // Create one Equipamento
     * const Equipamento = await prisma.equipamento.create({
     *   data: {
     *     // ... data to create a Equipamento
     *   }
     * })
     * 
     */
    create<T extends equipamentoCreateArgs>(args: SelectSubset<T, equipamentoCreateArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipamentos.
     * @param {equipamentoCreateManyArgs} args - Arguments to create many Equipamentos.
     * @example
     * // Create many Equipamentos
     * const equipamento = await prisma.equipamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends equipamentoCreateManyArgs>(args?: SelectSubset<T, equipamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipamentos and returns the data saved in the database.
     * @param {equipamentoCreateManyAndReturnArgs} args - Arguments to create many Equipamentos.
     * @example
     * // Create many Equipamentos
     * const equipamento = await prisma.equipamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipamentos and only return the `idequipamento`
     * const equipamentoWithIdequipamentoOnly = await prisma.equipamento.createManyAndReturn({
     *   select: { idequipamento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends equipamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, equipamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipamento.
     * @param {equipamentoDeleteArgs} args - Arguments to delete one Equipamento.
     * @example
     * // Delete one Equipamento
     * const Equipamento = await prisma.equipamento.delete({
     *   where: {
     *     // ... filter to delete one Equipamento
     *   }
     * })
     * 
     */
    delete<T extends equipamentoDeleteArgs>(args: SelectSubset<T, equipamentoDeleteArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipamento.
     * @param {equipamentoUpdateArgs} args - Arguments to update one Equipamento.
     * @example
     * // Update one Equipamento
     * const equipamento = await prisma.equipamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends equipamentoUpdateArgs>(args: SelectSubset<T, equipamentoUpdateArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipamentos.
     * @param {equipamentoDeleteManyArgs} args - Arguments to filter Equipamentos to delete.
     * @example
     * // Delete a few Equipamentos
     * const { count } = await prisma.equipamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends equipamentoDeleteManyArgs>(args?: SelectSubset<T, equipamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipamentos
     * const equipamento = await prisma.equipamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends equipamentoUpdateManyArgs>(args: SelectSubset<T, equipamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipamentos and returns the data updated in the database.
     * @param {equipamentoUpdateManyAndReturnArgs} args - Arguments to update many Equipamentos.
     * @example
     * // Update many Equipamentos
     * const equipamento = await prisma.equipamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipamentos and only return the `idequipamento`
     * const equipamentoWithIdequipamentoOnly = await prisma.equipamento.updateManyAndReturn({
     *   select: { idequipamento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends equipamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, equipamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipamento.
     * @param {equipamentoUpsertArgs} args - Arguments to update or create a Equipamento.
     * @example
     * // Update or create a Equipamento
     * const equipamento = await prisma.equipamento.upsert({
     *   create: {
     *     // ... data to create a Equipamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipamento we want to update
     *   }
     * })
     */
    upsert<T extends equipamentoUpsertArgs>(args: SelectSubset<T, equipamentoUpsertArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoCountArgs} args - Arguments to filter Equipamentos to count.
     * @example
     * // Count the number of Equipamentos
     * const count = await prisma.equipamento.count({
     *   where: {
     *     // ... the filter for the Equipamentos we want to count
     *   }
     * })
    **/
    count<T extends equipamentoCountArgs>(
      args?: Subset<T, equipamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipamentoAggregateArgs>(args: Subset<T, EquipamentoAggregateArgs>): Prisma.PrismaPromise<GetEquipamentoAggregateType<T>>

    /**
     * Group by Equipamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends equipamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: equipamentoGroupByArgs['orderBy'] }
        : { orderBy?: equipamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, equipamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the equipamento model
   */
  readonly fields: equipamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for equipamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__equipamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sede<T extends sedeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sedeDefaultArgs<ExtArgs>>): Prisma__sedeClient<$Result.GetResult<Prisma.$sedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoeq<T extends tipoeqDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipoeqDefaultArgs<ExtArgs>>): Prisma__tipoeqClient<$Result.GetResult<Prisma.$tipoeqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the equipamento model
   */
  interface equipamentoFieldRefs {
    readonly idequipamento: FieldRef<"equipamento", 'Int'>
    readonly equipamentoserie: FieldRef<"equipamento", 'String'>
    readonly equipamentomodelo: FieldRef<"equipamento", 'String'>
    readonly equipamentomac: FieldRef<"equipamento", 'String'>
    readonly equipamentoipv4: FieldRef<"equipamento", 'String'>
    readonly equipamentoipv6: FieldRef<"equipamento", 'String'>
    readonly equipamentoanydesk: FieldRef<"equipamento", 'String'>
    readonly equipamentodw: FieldRef<"equipamento", 'String'>
    readonly equipamentoalugado: FieldRef<"equipamento", 'Boolean'>
    readonly idsede: FieldRef<"equipamento", 'Int'>
    readonly idtipoeq: FieldRef<"equipamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * equipamento findUnique
   */
  export type equipamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamento to fetch.
     */
    where: equipamentoWhereUniqueInput
  }

  /**
   * equipamento findUniqueOrThrow
   */
  export type equipamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamento to fetch.
     */
    where: equipamentoWhereUniqueInput
  }

  /**
   * equipamento findFirst
   */
  export type equipamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamento to fetch.
     */
    where?: equipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipamentos to fetch.
     */
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for equipamentos.
     */
    cursor?: equipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of equipamentos.
     */
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * equipamento findFirstOrThrow
   */
  export type equipamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamento to fetch.
     */
    where?: equipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipamentos to fetch.
     */
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for equipamentos.
     */
    cursor?: equipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of equipamentos.
     */
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * equipamento findMany
   */
  export type equipamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamentos to fetch.
     */
    where?: equipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipamentos to fetch.
     */
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing equipamentos.
     */
    cursor?: equipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipamentos.
     */
    skip?: number
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * equipamento create
   */
  export type equipamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a equipamento.
     */
    data: XOR<equipamentoCreateInput, equipamentoUncheckedCreateInput>
  }

  /**
   * equipamento createMany
   */
  export type equipamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many equipamentos.
     */
    data: equipamentoCreateManyInput | equipamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * equipamento createManyAndReturn
   */
  export type equipamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * The data used to create many equipamentos.
     */
    data: equipamentoCreateManyInput | equipamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * equipamento update
   */
  export type equipamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a equipamento.
     */
    data: XOR<equipamentoUpdateInput, equipamentoUncheckedUpdateInput>
    /**
     * Choose, which equipamento to update.
     */
    where: equipamentoWhereUniqueInput
  }

  /**
   * equipamento updateMany
   */
  export type equipamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update equipamentos.
     */
    data: XOR<equipamentoUpdateManyMutationInput, equipamentoUncheckedUpdateManyInput>
    /**
     * Filter which equipamentos to update
     */
    where?: equipamentoWhereInput
    /**
     * Limit how many equipamentos to update.
     */
    limit?: number
  }

  /**
   * equipamento updateManyAndReturn
   */
  export type equipamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * The data used to update equipamentos.
     */
    data: XOR<equipamentoUpdateManyMutationInput, equipamentoUncheckedUpdateManyInput>
    /**
     * Filter which equipamentos to update
     */
    where?: equipamentoWhereInput
    /**
     * Limit how many equipamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * equipamento upsert
   */
  export type equipamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the equipamento to update in case it exists.
     */
    where: equipamentoWhereUniqueInput
    /**
     * In case the equipamento found by the `where` argument doesn't exist, create a new equipamento with this data.
     */
    create: XOR<equipamentoCreateInput, equipamentoUncheckedCreateInput>
    /**
     * In case the equipamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<equipamentoUpdateInput, equipamentoUncheckedUpdateInput>
  }

  /**
   * equipamento delete
   */
  export type equipamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter which equipamento to delete.
     */
    where: equipamentoWhereUniqueInput
  }

  /**
   * equipamento deleteMany
   */
  export type equipamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipamentos to delete
     */
    where?: equipamentoWhereInput
    /**
     * Limit how many equipamentos to delete.
     */
    limit?: number
  }

  /**
   * equipamento without action
   */
  export type equipamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
  }


  /**
   * Model tipoinstalacao
   */

  export type AggregateTipoinstalacao = {
    _count: TipoinstalacaoCountAggregateOutputType | null
    _avg: TipoinstalacaoAvgAggregateOutputType | null
    _sum: TipoinstalacaoSumAggregateOutputType | null
    _min: TipoinstalacaoMinAggregateOutputType | null
    _max: TipoinstalacaoMaxAggregateOutputType | null
  }

  export type TipoinstalacaoAvgAggregateOutputType = {
    idtipoinstalacao: number | null
  }

  export type TipoinstalacaoSumAggregateOutputType = {
    idtipoinstalacao: number | null
  }

  export type TipoinstalacaoMinAggregateOutputType = {
    idtipoinstalacao: number | null
    tipoinstalacaonome: string | null
  }

  export type TipoinstalacaoMaxAggregateOutputType = {
    idtipoinstalacao: number | null
    tipoinstalacaonome: string | null
  }

  export type TipoinstalacaoCountAggregateOutputType = {
    idtipoinstalacao: number
    tipoinstalacaonome: number
    _all: number
  }


  export type TipoinstalacaoAvgAggregateInputType = {
    idtipoinstalacao?: true
  }

  export type TipoinstalacaoSumAggregateInputType = {
    idtipoinstalacao?: true
  }

  export type TipoinstalacaoMinAggregateInputType = {
    idtipoinstalacao?: true
    tipoinstalacaonome?: true
  }

  export type TipoinstalacaoMaxAggregateInputType = {
    idtipoinstalacao?: true
    tipoinstalacaonome?: true
  }

  export type TipoinstalacaoCountAggregateInputType = {
    idtipoinstalacao?: true
    tipoinstalacaonome?: true
    _all?: true
  }

  export type TipoinstalacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipoinstalacao to aggregate.
     */
    where?: tipoinstalacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoinstalacaos to fetch.
     */
    orderBy?: tipoinstalacaoOrderByWithRelationInput | tipoinstalacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipoinstalacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoinstalacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoinstalacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipoinstalacaos
    **/
    _count?: true | TipoinstalacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoinstalacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoinstalacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoinstalacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoinstalacaoMaxAggregateInputType
  }

  export type GetTipoinstalacaoAggregateType<T extends TipoinstalacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoinstalacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoinstalacao[P]>
      : GetScalarType<T[P], AggregateTipoinstalacao[P]>
  }




  export type tipoinstalacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipoinstalacaoWhereInput
    orderBy?: tipoinstalacaoOrderByWithAggregationInput | tipoinstalacaoOrderByWithAggregationInput[]
    by: TipoinstalacaoScalarFieldEnum[] | TipoinstalacaoScalarFieldEnum
    having?: tipoinstalacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoinstalacaoCountAggregateInputType | true
    _avg?: TipoinstalacaoAvgAggregateInputType
    _sum?: TipoinstalacaoSumAggregateInputType
    _min?: TipoinstalacaoMinAggregateInputType
    _max?: TipoinstalacaoMaxAggregateInputType
  }

  export type TipoinstalacaoGroupByOutputType = {
    idtipoinstalacao: number
    tipoinstalacaonome: string
    _count: TipoinstalacaoCountAggregateOutputType | null
    _avg: TipoinstalacaoAvgAggregateOutputType | null
    _sum: TipoinstalacaoSumAggregateOutputType | null
    _min: TipoinstalacaoMinAggregateOutputType | null
    _max: TipoinstalacaoMaxAggregateOutputType | null
  }

  type GetTipoinstalacaoGroupByPayload<T extends tipoinstalacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoinstalacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoinstalacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoinstalacaoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoinstalacaoGroupByOutputType[P]>
        }
      >
    >


  export type tipoinstalacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idtipoinstalacao?: boolean
    tipoinstalacaonome?: boolean
    laudo?: boolean | tipoinstalacao$laudoArgs<ExtArgs>
    _count?: boolean | TipoinstalacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoinstalacao"]>

  export type tipoinstalacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idtipoinstalacao?: boolean
    tipoinstalacaonome?: boolean
  }, ExtArgs["result"]["tipoinstalacao"]>

  export type tipoinstalacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idtipoinstalacao?: boolean
    tipoinstalacaonome?: boolean
  }, ExtArgs["result"]["tipoinstalacao"]>

  export type tipoinstalacaoSelectScalar = {
    idtipoinstalacao?: boolean
    tipoinstalacaonome?: boolean
  }

  export type tipoinstalacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idtipoinstalacao" | "tipoinstalacaonome", ExtArgs["result"]["tipoinstalacao"]>
  export type tipoinstalacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laudo?: boolean | tipoinstalacao$laudoArgs<ExtArgs>
    _count?: boolean | TipoinstalacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tipoinstalacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tipoinstalacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tipoinstalacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipoinstalacao"
    objects: {
      laudo: Prisma.$laudoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idtipoinstalacao: number
      tipoinstalacaonome: string
    }, ExtArgs["result"]["tipoinstalacao"]>
    composites: {}
  }

  type tipoinstalacaoGetPayload<S extends boolean | null | undefined | tipoinstalacaoDefaultArgs> = $Result.GetResult<Prisma.$tipoinstalacaoPayload, S>

  type tipoinstalacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipoinstalacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoinstalacaoCountAggregateInputType | true
    }

  export interface tipoinstalacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipoinstalacao'], meta: { name: 'tipoinstalacao' } }
    /**
     * Find zero or one Tipoinstalacao that matches the filter.
     * @param {tipoinstalacaoFindUniqueArgs} args - Arguments to find a Tipoinstalacao
     * @example
     * // Get one Tipoinstalacao
     * const tipoinstalacao = await prisma.tipoinstalacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipoinstalacaoFindUniqueArgs>(args: SelectSubset<T, tipoinstalacaoFindUniqueArgs<ExtArgs>>): Prisma__tipoinstalacaoClient<$Result.GetResult<Prisma.$tipoinstalacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipoinstalacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipoinstalacaoFindUniqueOrThrowArgs} args - Arguments to find a Tipoinstalacao
     * @example
     * // Get one Tipoinstalacao
     * const tipoinstalacao = await prisma.tipoinstalacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipoinstalacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, tipoinstalacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipoinstalacaoClient<$Result.GetResult<Prisma.$tipoinstalacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipoinstalacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoinstalacaoFindFirstArgs} args - Arguments to find a Tipoinstalacao
     * @example
     * // Get one Tipoinstalacao
     * const tipoinstalacao = await prisma.tipoinstalacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipoinstalacaoFindFirstArgs>(args?: SelectSubset<T, tipoinstalacaoFindFirstArgs<ExtArgs>>): Prisma__tipoinstalacaoClient<$Result.GetResult<Prisma.$tipoinstalacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipoinstalacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoinstalacaoFindFirstOrThrowArgs} args - Arguments to find a Tipoinstalacao
     * @example
     * // Get one Tipoinstalacao
     * const tipoinstalacao = await prisma.tipoinstalacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipoinstalacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, tipoinstalacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipoinstalacaoClient<$Result.GetResult<Prisma.$tipoinstalacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipoinstalacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoinstalacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipoinstalacaos
     * const tipoinstalacaos = await prisma.tipoinstalacao.findMany()
     * 
     * // Get first 10 Tipoinstalacaos
     * const tipoinstalacaos = await prisma.tipoinstalacao.findMany({ take: 10 })
     * 
     * // Only select the `idtipoinstalacao`
     * const tipoinstalacaoWithIdtipoinstalacaoOnly = await prisma.tipoinstalacao.findMany({ select: { idtipoinstalacao: true } })
     * 
     */
    findMany<T extends tipoinstalacaoFindManyArgs>(args?: SelectSubset<T, tipoinstalacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipoinstalacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipoinstalacao.
     * @param {tipoinstalacaoCreateArgs} args - Arguments to create a Tipoinstalacao.
     * @example
     * // Create one Tipoinstalacao
     * const Tipoinstalacao = await prisma.tipoinstalacao.create({
     *   data: {
     *     // ... data to create a Tipoinstalacao
     *   }
     * })
     * 
     */
    create<T extends tipoinstalacaoCreateArgs>(args: SelectSubset<T, tipoinstalacaoCreateArgs<ExtArgs>>): Prisma__tipoinstalacaoClient<$Result.GetResult<Prisma.$tipoinstalacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipoinstalacaos.
     * @param {tipoinstalacaoCreateManyArgs} args - Arguments to create many Tipoinstalacaos.
     * @example
     * // Create many Tipoinstalacaos
     * const tipoinstalacao = await prisma.tipoinstalacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipoinstalacaoCreateManyArgs>(args?: SelectSubset<T, tipoinstalacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipoinstalacaos and returns the data saved in the database.
     * @param {tipoinstalacaoCreateManyAndReturnArgs} args - Arguments to create many Tipoinstalacaos.
     * @example
     * // Create many Tipoinstalacaos
     * const tipoinstalacao = await prisma.tipoinstalacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipoinstalacaos and only return the `idtipoinstalacao`
     * const tipoinstalacaoWithIdtipoinstalacaoOnly = await prisma.tipoinstalacao.createManyAndReturn({
     *   select: { idtipoinstalacao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipoinstalacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, tipoinstalacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipoinstalacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipoinstalacao.
     * @param {tipoinstalacaoDeleteArgs} args - Arguments to delete one Tipoinstalacao.
     * @example
     * // Delete one Tipoinstalacao
     * const Tipoinstalacao = await prisma.tipoinstalacao.delete({
     *   where: {
     *     // ... filter to delete one Tipoinstalacao
     *   }
     * })
     * 
     */
    delete<T extends tipoinstalacaoDeleteArgs>(args: SelectSubset<T, tipoinstalacaoDeleteArgs<ExtArgs>>): Prisma__tipoinstalacaoClient<$Result.GetResult<Prisma.$tipoinstalacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipoinstalacao.
     * @param {tipoinstalacaoUpdateArgs} args - Arguments to update one Tipoinstalacao.
     * @example
     * // Update one Tipoinstalacao
     * const tipoinstalacao = await prisma.tipoinstalacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipoinstalacaoUpdateArgs>(args: SelectSubset<T, tipoinstalacaoUpdateArgs<ExtArgs>>): Prisma__tipoinstalacaoClient<$Result.GetResult<Prisma.$tipoinstalacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipoinstalacaos.
     * @param {tipoinstalacaoDeleteManyArgs} args - Arguments to filter Tipoinstalacaos to delete.
     * @example
     * // Delete a few Tipoinstalacaos
     * const { count } = await prisma.tipoinstalacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipoinstalacaoDeleteManyArgs>(args?: SelectSubset<T, tipoinstalacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipoinstalacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoinstalacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipoinstalacaos
     * const tipoinstalacao = await prisma.tipoinstalacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipoinstalacaoUpdateManyArgs>(args: SelectSubset<T, tipoinstalacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipoinstalacaos and returns the data updated in the database.
     * @param {tipoinstalacaoUpdateManyAndReturnArgs} args - Arguments to update many Tipoinstalacaos.
     * @example
     * // Update many Tipoinstalacaos
     * const tipoinstalacao = await prisma.tipoinstalacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipoinstalacaos and only return the `idtipoinstalacao`
     * const tipoinstalacaoWithIdtipoinstalacaoOnly = await prisma.tipoinstalacao.updateManyAndReturn({
     *   select: { idtipoinstalacao: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tipoinstalacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, tipoinstalacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipoinstalacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipoinstalacao.
     * @param {tipoinstalacaoUpsertArgs} args - Arguments to update or create a Tipoinstalacao.
     * @example
     * // Update or create a Tipoinstalacao
     * const tipoinstalacao = await prisma.tipoinstalacao.upsert({
     *   create: {
     *     // ... data to create a Tipoinstalacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipoinstalacao we want to update
     *   }
     * })
     */
    upsert<T extends tipoinstalacaoUpsertArgs>(args: SelectSubset<T, tipoinstalacaoUpsertArgs<ExtArgs>>): Prisma__tipoinstalacaoClient<$Result.GetResult<Prisma.$tipoinstalacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipoinstalacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoinstalacaoCountArgs} args - Arguments to filter Tipoinstalacaos to count.
     * @example
     * // Count the number of Tipoinstalacaos
     * const count = await prisma.tipoinstalacao.count({
     *   where: {
     *     // ... the filter for the Tipoinstalacaos we want to count
     *   }
     * })
    **/
    count<T extends tipoinstalacaoCountArgs>(
      args?: Subset<T, tipoinstalacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoinstalacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipoinstalacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoinstalacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoinstalacaoAggregateArgs>(args: Subset<T, TipoinstalacaoAggregateArgs>): Prisma.PrismaPromise<GetTipoinstalacaoAggregateType<T>>

    /**
     * Group by Tipoinstalacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipoinstalacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipoinstalacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipoinstalacaoGroupByArgs['orderBy'] }
        : { orderBy?: tipoinstalacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipoinstalacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoinstalacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipoinstalacao model
   */
  readonly fields: tipoinstalacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipoinstalacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipoinstalacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laudo<T extends tipoinstalacao$laudoArgs<ExtArgs> = {}>(args?: Subset<T, tipoinstalacao$laudoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$laudoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipoinstalacao model
   */
  interface tipoinstalacaoFieldRefs {
    readonly idtipoinstalacao: FieldRef<"tipoinstalacao", 'Int'>
    readonly tipoinstalacaonome: FieldRef<"tipoinstalacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipoinstalacao findUnique
   */
  export type tipoinstalacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoinstalacao
     */
    select?: tipoinstalacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoinstalacao
     */
    omit?: tipoinstalacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoinstalacaoInclude<ExtArgs> | null
    /**
     * Filter, which tipoinstalacao to fetch.
     */
    where: tipoinstalacaoWhereUniqueInput
  }

  /**
   * tipoinstalacao findUniqueOrThrow
   */
  export type tipoinstalacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoinstalacao
     */
    select?: tipoinstalacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoinstalacao
     */
    omit?: tipoinstalacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoinstalacaoInclude<ExtArgs> | null
    /**
     * Filter, which tipoinstalacao to fetch.
     */
    where: tipoinstalacaoWhereUniqueInput
  }

  /**
   * tipoinstalacao findFirst
   */
  export type tipoinstalacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoinstalacao
     */
    select?: tipoinstalacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoinstalacao
     */
    omit?: tipoinstalacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoinstalacaoInclude<ExtArgs> | null
    /**
     * Filter, which tipoinstalacao to fetch.
     */
    where?: tipoinstalacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoinstalacaos to fetch.
     */
    orderBy?: tipoinstalacaoOrderByWithRelationInput | tipoinstalacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipoinstalacaos.
     */
    cursor?: tipoinstalacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoinstalacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoinstalacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipoinstalacaos.
     */
    distinct?: TipoinstalacaoScalarFieldEnum | TipoinstalacaoScalarFieldEnum[]
  }

  /**
   * tipoinstalacao findFirstOrThrow
   */
  export type tipoinstalacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoinstalacao
     */
    select?: tipoinstalacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoinstalacao
     */
    omit?: tipoinstalacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoinstalacaoInclude<ExtArgs> | null
    /**
     * Filter, which tipoinstalacao to fetch.
     */
    where?: tipoinstalacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoinstalacaos to fetch.
     */
    orderBy?: tipoinstalacaoOrderByWithRelationInput | tipoinstalacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipoinstalacaos.
     */
    cursor?: tipoinstalacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoinstalacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoinstalacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipoinstalacaos.
     */
    distinct?: TipoinstalacaoScalarFieldEnum | TipoinstalacaoScalarFieldEnum[]
  }

  /**
   * tipoinstalacao findMany
   */
  export type tipoinstalacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoinstalacao
     */
    select?: tipoinstalacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoinstalacao
     */
    omit?: tipoinstalacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoinstalacaoInclude<ExtArgs> | null
    /**
     * Filter, which tipoinstalacaos to fetch.
     */
    where?: tipoinstalacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipoinstalacaos to fetch.
     */
    orderBy?: tipoinstalacaoOrderByWithRelationInput | tipoinstalacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipoinstalacaos.
     */
    cursor?: tipoinstalacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipoinstalacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipoinstalacaos.
     */
    skip?: number
    distinct?: TipoinstalacaoScalarFieldEnum | TipoinstalacaoScalarFieldEnum[]
  }

  /**
   * tipoinstalacao create
   */
  export type tipoinstalacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoinstalacao
     */
    select?: tipoinstalacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoinstalacao
     */
    omit?: tipoinstalacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoinstalacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a tipoinstalacao.
     */
    data: XOR<tipoinstalacaoCreateInput, tipoinstalacaoUncheckedCreateInput>
  }

  /**
   * tipoinstalacao createMany
   */
  export type tipoinstalacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipoinstalacaos.
     */
    data: tipoinstalacaoCreateManyInput | tipoinstalacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipoinstalacao createManyAndReturn
   */
  export type tipoinstalacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoinstalacao
     */
    select?: tipoinstalacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipoinstalacao
     */
    omit?: tipoinstalacaoOmit<ExtArgs> | null
    /**
     * The data used to create many tipoinstalacaos.
     */
    data: tipoinstalacaoCreateManyInput | tipoinstalacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipoinstalacao update
   */
  export type tipoinstalacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoinstalacao
     */
    select?: tipoinstalacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoinstalacao
     */
    omit?: tipoinstalacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoinstalacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a tipoinstalacao.
     */
    data: XOR<tipoinstalacaoUpdateInput, tipoinstalacaoUncheckedUpdateInput>
    /**
     * Choose, which tipoinstalacao to update.
     */
    where: tipoinstalacaoWhereUniqueInput
  }

  /**
   * tipoinstalacao updateMany
   */
  export type tipoinstalacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipoinstalacaos.
     */
    data: XOR<tipoinstalacaoUpdateManyMutationInput, tipoinstalacaoUncheckedUpdateManyInput>
    /**
     * Filter which tipoinstalacaos to update
     */
    where?: tipoinstalacaoWhereInput
    /**
     * Limit how many tipoinstalacaos to update.
     */
    limit?: number
  }

  /**
   * tipoinstalacao updateManyAndReturn
   */
  export type tipoinstalacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoinstalacao
     */
    select?: tipoinstalacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipoinstalacao
     */
    omit?: tipoinstalacaoOmit<ExtArgs> | null
    /**
     * The data used to update tipoinstalacaos.
     */
    data: XOR<tipoinstalacaoUpdateManyMutationInput, tipoinstalacaoUncheckedUpdateManyInput>
    /**
     * Filter which tipoinstalacaos to update
     */
    where?: tipoinstalacaoWhereInput
    /**
     * Limit how many tipoinstalacaos to update.
     */
    limit?: number
  }

  /**
   * tipoinstalacao upsert
   */
  export type tipoinstalacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoinstalacao
     */
    select?: tipoinstalacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoinstalacao
     */
    omit?: tipoinstalacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoinstalacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the tipoinstalacao to update in case it exists.
     */
    where: tipoinstalacaoWhereUniqueInput
    /**
     * In case the tipoinstalacao found by the `where` argument doesn't exist, create a new tipoinstalacao with this data.
     */
    create: XOR<tipoinstalacaoCreateInput, tipoinstalacaoUncheckedCreateInput>
    /**
     * In case the tipoinstalacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipoinstalacaoUpdateInput, tipoinstalacaoUncheckedUpdateInput>
  }

  /**
   * tipoinstalacao delete
   */
  export type tipoinstalacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoinstalacao
     */
    select?: tipoinstalacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoinstalacao
     */
    omit?: tipoinstalacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoinstalacaoInclude<ExtArgs> | null
    /**
     * Filter which tipoinstalacao to delete.
     */
    where: tipoinstalacaoWhereUniqueInput
  }

  /**
   * tipoinstalacao deleteMany
   */
  export type tipoinstalacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipoinstalacaos to delete
     */
    where?: tipoinstalacaoWhereInput
    /**
     * Limit how many tipoinstalacaos to delete.
     */
    limit?: number
  }

  /**
   * tipoinstalacao.laudo
   */
  export type tipoinstalacao$laudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laudo
     */
    select?: laudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laudo
     */
    omit?: laudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laudoInclude<ExtArgs> | null
    where?: laudoWhereInput
    orderBy?: laudoOrderByWithRelationInput | laudoOrderByWithRelationInput[]
    cursor?: laudoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaudoScalarFieldEnum | LaudoScalarFieldEnum[]
  }

  /**
   * tipoinstalacao without action
   */
  export type tipoinstalacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipoinstalacao
     */
    select?: tipoinstalacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipoinstalacao
     */
    omit?: tipoinstalacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipoinstalacaoInclude<ExtArgs> | null
  }


  /**
   * Model tipolaudo
   */

  export type AggregateTipolaudo = {
    _count: TipolaudoCountAggregateOutputType | null
    _avg: TipolaudoAvgAggregateOutputType | null
    _sum: TipolaudoSumAggregateOutputType | null
    _min: TipolaudoMinAggregateOutputType | null
    _max: TipolaudoMaxAggregateOutputType | null
  }

  export type TipolaudoAvgAggregateOutputType = {
    idtipolaudo: number | null
  }

  export type TipolaudoSumAggregateOutputType = {
    idtipolaudo: number | null
  }

  export type TipolaudoMinAggregateOutputType = {
    idtipolaudo: number | null
    tipolaudonome: string | null
    tipolaudotemplate: string | null
  }

  export type TipolaudoMaxAggregateOutputType = {
    idtipolaudo: number | null
    tipolaudonome: string | null
    tipolaudotemplate: string | null
  }

  export type TipolaudoCountAggregateOutputType = {
    idtipolaudo: number
    tipolaudonome: number
    tipolaudotemplate: number
    _all: number
  }


  export type TipolaudoAvgAggregateInputType = {
    idtipolaudo?: true
  }

  export type TipolaudoSumAggregateInputType = {
    idtipolaudo?: true
  }

  export type TipolaudoMinAggregateInputType = {
    idtipolaudo?: true
    tipolaudonome?: true
    tipolaudotemplate?: true
  }

  export type TipolaudoMaxAggregateInputType = {
    idtipolaudo?: true
    tipolaudonome?: true
    tipolaudotemplate?: true
  }

  export type TipolaudoCountAggregateInputType = {
    idtipolaudo?: true
    tipolaudonome?: true
    tipolaudotemplate?: true
    _all?: true
  }

  export type TipolaudoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipolaudo to aggregate.
     */
    where?: tipolaudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipolaudos to fetch.
     */
    orderBy?: tipolaudoOrderByWithRelationInput | tipolaudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipolaudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipolaudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipolaudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipolaudos
    **/
    _count?: true | TipolaudoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipolaudoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipolaudoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipolaudoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipolaudoMaxAggregateInputType
  }

  export type GetTipolaudoAggregateType<T extends TipolaudoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipolaudo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipolaudo[P]>
      : GetScalarType<T[P], AggregateTipolaudo[P]>
  }




  export type tipolaudoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipolaudoWhereInput
    orderBy?: tipolaudoOrderByWithAggregationInput | tipolaudoOrderByWithAggregationInput[]
    by: TipolaudoScalarFieldEnum[] | TipolaudoScalarFieldEnum
    having?: tipolaudoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipolaudoCountAggregateInputType | true
    _avg?: TipolaudoAvgAggregateInputType
    _sum?: TipolaudoSumAggregateInputType
    _min?: TipolaudoMinAggregateInputType
    _max?: TipolaudoMaxAggregateInputType
  }

  export type TipolaudoGroupByOutputType = {
    idtipolaudo: number
    tipolaudonome: string
    tipolaudotemplate: string | null
    _count: TipolaudoCountAggregateOutputType | null
    _avg: TipolaudoAvgAggregateOutputType | null
    _sum: TipolaudoSumAggregateOutputType | null
    _min: TipolaudoMinAggregateOutputType | null
    _max: TipolaudoMaxAggregateOutputType | null
  }

  type GetTipolaudoGroupByPayload<T extends tipolaudoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipolaudoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipolaudoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipolaudoGroupByOutputType[P]>
            : GetScalarType<T[P], TipolaudoGroupByOutputType[P]>
        }
      >
    >


  export type tipolaudoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idtipolaudo?: boolean
    tipolaudonome?: boolean
    tipolaudotemplate?: boolean
    laudo?: boolean | tipolaudo$laudoArgs<ExtArgs>
    _count?: boolean | TipolaudoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipolaudo"]>

  export type tipolaudoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idtipolaudo?: boolean
    tipolaudonome?: boolean
    tipolaudotemplate?: boolean
  }, ExtArgs["result"]["tipolaudo"]>

  export type tipolaudoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idtipolaudo?: boolean
    tipolaudonome?: boolean
    tipolaudotemplate?: boolean
  }, ExtArgs["result"]["tipolaudo"]>

  export type tipolaudoSelectScalar = {
    idtipolaudo?: boolean
    tipolaudonome?: boolean
    tipolaudotemplate?: boolean
  }

  export type tipolaudoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idtipolaudo" | "tipolaudonome" | "tipolaudotemplate", ExtArgs["result"]["tipolaudo"]>
  export type tipolaudoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laudo?: boolean | tipolaudo$laudoArgs<ExtArgs>
    _count?: boolean | TipolaudoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tipolaudoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tipolaudoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tipolaudoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipolaudo"
    objects: {
      laudo: Prisma.$laudoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idtipolaudo: number
      tipolaudonome: string
      tipolaudotemplate: string | null
    }, ExtArgs["result"]["tipolaudo"]>
    composites: {}
  }

  type tipolaudoGetPayload<S extends boolean | null | undefined | tipolaudoDefaultArgs> = $Result.GetResult<Prisma.$tipolaudoPayload, S>

  type tipolaudoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipolaudoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipolaudoCountAggregateInputType | true
    }

  export interface tipolaudoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipolaudo'], meta: { name: 'tipolaudo' } }
    /**
     * Find zero or one Tipolaudo that matches the filter.
     * @param {tipolaudoFindUniqueArgs} args - Arguments to find a Tipolaudo
     * @example
     * // Get one Tipolaudo
     * const tipolaudo = await prisma.tipolaudo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipolaudoFindUniqueArgs>(args: SelectSubset<T, tipolaudoFindUniqueArgs<ExtArgs>>): Prisma__tipolaudoClient<$Result.GetResult<Prisma.$tipolaudoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipolaudo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipolaudoFindUniqueOrThrowArgs} args - Arguments to find a Tipolaudo
     * @example
     * // Get one Tipolaudo
     * const tipolaudo = await prisma.tipolaudo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipolaudoFindUniqueOrThrowArgs>(args: SelectSubset<T, tipolaudoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipolaudoClient<$Result.GetResult<Prisma.$tipolaudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipolaudo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipolaudoFindFirstArgs} args - Arguments to find a Tipolaudo
     * @example
     * // Get one Tipolaudo
     * const tipolaudo = await prisma.tipolaudo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipolaudoFindFirstArgs>(args?: SelectSubset<T, tipolaudoFindFirstArgs<ExtArgs>>): Prisma__tipolaudoClient<$Result.GetResult<Prisma.$tipolaudoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipolaudo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipolaudoFindFirstOrThrowArgs} args - Arguments to find a Tipolaudo
     * @example
     * // Get one Tipolaudo
     * const tipolaudo = await prisma.tipolaudo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipolaudoFindFirstOrThrowArgs>(args?: SelectSubset<T, tipolaudoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipolaudoClient<$Result.GetResult<Prisma.$tipolaudoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipolaudos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipolaudoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipolaudos
     * const tipolaudos = await prisma.tipolaudo.findMany()
     * 
     * // Get first 10 Tipolaudos
     * const tipolaudos = await prisma.tipolaudo.findMany({ take: 10 })
     * 
     * // Only select the `idtipolaudo`
     * const tipolaudoWithIdtipolaudoOnly = await prisma.tipolaudo.findMany({ select: { idtipolaudo: true } })
     * 
     */
    findMany<T extends tipolaudoFindManyArgs>(args?: SelectSubset<T, tipolaudoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipolaudoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipolaudo.
     * @param {tipolaudoCreateArgs} args - Arguments to create a Tipolaudo.
     * @example
     * // Create one Tipolaudo
     * const Tipolaudo = await prisma.tipolaudo.create({
     *   data: {
     *     // ... data to create a Tipolaudo
     *   }
     * })
     * 
     */
    create<T extends tipolaudoCreateArgs>(args: SelectSubset<T, tipolaudoCreateArgs<ExtArgs>>): Prisma__tipolaudoClient<$Result.GetResult<Prisma.$tipolaudoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipolaudos.
     * @param {tipolaudoCreateManyArgs} args - Arguments to create many Tipolaudos.
     * @example
     * // Create many Tipolaudos
     * const tipolaudo = await prisma.tipolaudo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipolaudoCreateManyArgs>(args?: SelectSubset<T, tipolaudoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipolaudos and returns the data saved in the database.
     * @param {tipolaudoCreateManyAndReturnArgs} args - Arguments to create many Tipolaudos.
     * @example
     * // Create many Tipolaudos
     * const tipolaudo = await prisma.tipolaudo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipolaudos and only return the `idtipolaudo`
     * const tipolaudoWithIdtipolaudoOnly = await prisma.tipolaudo.createManyAndReturn({
     *   select: { idtipolaudo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipolaudoCreateManyAndReturnArgs>(args?: SelectSubset<T, tipolaudoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipolaudoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipolaudo.
     * @param {tipolaudoDeleteArgs} args - Arguments to delete one Tipolaudo.
     * @example
     * // Delete one Tipolaudo
     * const Tipolaudo = await prisma.tipolaudo.delete({
     *   where: {
     *     // ... filter to delete one Tipolaudo
     *   }
     * })
     * 
     */
    delete<T extends tipolaudoDeleteArgs>(args: SelectSubset<T, tipolaudoDeleteArgs<ExtArgs>>): Prisma__tipolaudoClient<$Result.GetResult<Prisma.$tipolaudoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipolaudo.
     * @param {tipolaudoUpdateArgs} args - Arguments to update one Tipolaudo.
     * @example
     * // Update one Tipolaudo
     * const tipolaudo = await prisma.tipolaudo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipolaudoUpdateArgs>(args: SelectSubset<T, tipolaudoUpdateArgs<ExtArgs>>): Prisma__tipolaudoClient<$Result.GetResult<Prisma.$tipolaudoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipolaudos.
     * @param {tipolaudoDeleteManyArgs} args - Arguments to filter Tipolaudos to delete.
     * @example
     * // Delete a few Tipolaudos
     * const { count } = await prisma.tipolaudo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipolaudoDeleteManyArgs>(args?: SelectSubset<T, tipolaudoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipolaudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipolaudoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipolaudos
     * const tipolaudo = await prisma.tipolaudo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipolaudoUpdateManyArgs>(args: SelectSubset<T, tipolaudoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipolaudos and returns the data updated in the database.
     * @param {tipolaudoUpdateManyAndReturnArgs} args - Arguments to update many Tipolaudos.
     * @example
     * // Update many Tipolaudos
     * const tipolaudo = await prisma.tipolaudo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipolaudos and only return the `idtipolaudo`
     * const tipolaudoWithIdtipolaudoOnly = await prisma.tipolaudo.updateManyAndReturn({
     *   select: { idtipolaudo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tipolaudoUpdateManyAndReturnArgs>(args: SelectSubset<T, tipolaudoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipolaudoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipolaudo.
     * @param {tipolaudoUpsertArgs} args - Arguments to update or create a Tipolaudo.
     * @example
     * // Update or create a Tipolaudo
     * const tipolaudo = await prisma.tipolaudo.upsert({
     *   create: {
     *     // ... data to create a Tipolaudo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipolaudo we want to update
     *   }
     * })
     */
    upsert<T extends tipolaudoUpsertArgs>(args: SelectSubset<T, tipolaudoUpsertArgs<ExtArgs>>): Prisma__tipolaudoClient<$Result.GetResult<Prisma.$tipolaudoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipolaudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipolaudoCountArgs} args - Arguments to filter Tipolaudos to count.
     * @example
     * // Count the number of Tipolaudos
     * const count = await prisma.tipolaudo.count({
     *   where: {
     *     // ... the filter for the Tipolaudos we want to count
     *   }
     * })
    **/
    count<T extends tipolaudoCountArgs>(
      args?: Subset<T, tipolaudoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipolaudoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipolaudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipolaudoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipolaudoAggregateArgs>(args: Subset<T, TipolaudoAggregateArgs>): Prisma.PrismaPromise<GetTipolaudoAggregateType<T>>

    /**
     * Group by Tipolaudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipolaudoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipolaudoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipolaudoGroupByArgs['orderBy'] }
        : { orderBy?: tipolaudoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipolaudoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipolaudoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipolaudo model
   */
  readonly fields: tipolaudoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipolaudo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipolaudoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laudo<T extends tipolaudo$laudoArgs<ExtArgs> = {}>(args?: Subset<T, tipolaudo$laudoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$laudoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipolaudo model
   */
  interface tipolaudoFieldRefs {
    readonly idtipolaudo: FieldRef<"tipolaudo", 'Int'>
    readonly tipolaudonome: FieldRef<"tipolaudo", 'String'>
    readonly tipolaudotemplate: FieldRef<"tipolaudo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipolaudo findUnique
   */
  export type tipolaudoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipolaudo
     */
    select?: tipolaudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipolaudo
     */
    omit?: tipolaudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipolaudoInclude<ExtArgs> | null
    /**
     * Filter, which tipolaudo to fetch.
     */
    where: tipolaudoWhereUniqueInput
  }

  /**
   * tipolaudo findUniqueOrThrow
   */
  export type tipolaudoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipolaudo
     */
    select?: tipolaudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipolaudo
     */
    omit?: tipolaudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipolaudoInclude<ExtArgs> | null
    /**
     * Filter, which tipolaudo to fetch.
     */
    where: tipolaudoWhereUniqueInput
  }

  /**
   * tipolaudo findFirst
   */
  export type tipolaudoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipolaudo
     */
    select?: tipolaudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipolaudo
     */
    omit?: tipolaudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipolaudoInclude<ExtArgs> | null
    /**
     * Filter, which tipolaudo to fetch.
     */
    where?: tipolaudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipolaudos to fetch.
     */
    orderBy?: tipolaudoOrderByWithRelationInput | tipolaudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipolaudos.
     */
    cursor?: tipolaudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipolaudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipolaudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipolaudos.
     */
    distinct?: TipolaudoScalarFieldEnum | TipolaudoScalarFieldEnum[]
  }

  /**
   * tipolaudo findFirstOrThrow
   */
  export type tipolaudoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipolaudo
     */
    select?: tipolaudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipolaudo
     */
    omit?: tipolaudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipolaudoInclude<ExtArgs> | null
    /**
     * Filter, which tipolaudo to fetch.
     */
    where?: tipolaudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipolaudos to fetch.
     */
    orderBy?: tipolaudoOrderByWithRelationInput | tipolaudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipolaudos.
     */
    cursor?: tipolaudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipolaudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipolaudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipolaudos.
     */
    distinct?: TipolaudoScalarFieldEnum | TipolaudoScalarFieldEnum[]
  }

  /**
   * tipolaudo findMany
   */
  export type tipolaudoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipolaudo
     */
    select?: tipolaudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipolaudo
     */
    omit?: tipolaudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipolaudoInclude<ExtArgs> | null
    /**
     * Filter, which tipolaudos to fetch.
     */
    where?: tipolaudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipolaudos to fetch.
     */
    orderBy?: tipolaudoOrderByWithRelationInput | tipolaudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipolaudos.
     */
    cursor?: tipolaudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipolaudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipolaudos.
     */
    skip?: number
    distinct?: TipolaudoScalarFieldEnum | TipolaudoScalarFieldEnum[]
  }

  /**
   * tipolaudo create
   */
  export type tipolaudoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipolaudo
     */
    select?: tipolaudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipolaudo
     */
    omit?: tipolaudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipolaudoInclude<ExtArgs> | null
    /**
     * The data needed to create a tipolaudo.
     */
    data: XOR<tipolaudoCreateInput, tipolaudoUncheckedCreateInput>
  }

  /**
   * tipolaudo createMany
   */
  export type tipolaudoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipolaudos.
     */
    data: tipolaudoCreateManyInput | tipolaudoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipolaudo createManyAndReturn
   */
  export type tipolaudoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipolaudo
     */
    select?: tipolaudoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipolaudo
     */
    omit?: tipolaudoOmit<ExtArgs> | null
    /**
     * The data used to create many tipolaudos.
     */
    data: tipolaudoCreateManyInput | tipolaudoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipolaudo update
   */
  export type tipolaudoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipolaudo
     */
    select?: tipolaudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipolaudo
     */
    omit?: tipolaudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipolaudoInclude<ExtArgs> | null
    /**
     * The data needed to update a tipolaudo.
     */
    data: XOR<tipolaudoUpdateInput, tipolaudoUncheckedUpdateInput>
    /**
     * Choose, which tipolaudo to update.
     */
    where: tipolaudoWhereUniqueInput
  }

  /**
   * tipolaudo updateMany
   */
  export type tipolaudoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipolaudos.
     */
    data: XOR<tipolaudoUpdateManyMutationInput, tipolaudoUncheckedUpdateManyInput>
    /**
     * Filter which tipolaudos to update
     */
    where?: tipolaudoWhereInput
    /**
     * Limit how many tipolaudos to update.
     */
    limit?: number
  }

  /**
   * tipolaudo updateManyAndReturn
   */
  export type tipolaudoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipolaudo
     */
    select?: tipolaudoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipolaudo
     */
    omit?: tipolaudoOmit<ExtArgs> | null
    /**
     * The data used to update tipolaudos.
     */
    data: XOR<tipolaudoUpdateManyMutationInput, tipolaudoUncheckedUpdateManyInput>
    /**
     * Filter which tipolaudos to update
     */
    where?: tipolaudoWhereInput
    /**
     * Limit how many tipolaudos to update.
     */
    limit?: number
  }

  /**
   * tipolaudo upsert
   */
  export type tipolaudoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipolaudo
     */
    select?: tipolaudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipolaudo
     */
    omit?: tipolaudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipolaudoInclude<ExtArgs> | null
    /**
     * The filter to search for the tipolaudo to update in case it exists.
     */
    where: tipolaudoWhereUniqueInput
    /**
     * In case the tipolaudo found by the `where` argument doesn't exist, create a new tipolaudo with this data.
     */
    create: XOR<tipolaudoCreateInput, tipolaudoUncheckedCreateInput>
    /**
     * In case the tipolaudo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipolaudoUpdateInput, tipolaudoUncheckedUpdateInput>
  }

  /**
   * tipolaudo delete
   */
  export type tipolaudoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipolaudo
     */
    select?: tipolaudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipolaudo
     */
    omit?: tipolaudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipolaudoInclude<ExtArgs> | null
    /**
     * Filter which tipolaudo to delete.
     */
    where: tipolaudoWhereUniqueInput
  }

  /**
   * tipolaudo deleteMany
   */
  export type tipolaudoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipolaudos to delete
     */
    where?: tipolaudoWhereInput
    /**
     * Limit how many tipolaudos to delete.
     */
    limit?: number
  }

  /**
   * tipolaudo.laudo
   */
  export type tipolaudo$laudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laudo
     */
    select?: laudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laudo
     */
    omit?: laudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laudoInclude<ExtArgs> | null
    where?: laudoWhereInput
    orderBy?: laudoOrderByWithRelationInput | laudoOrderByWithRelationInput[]
    cursor?: laudoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaudoScalarFieldEnum | LaudoScalarFieldEnum[]
  }

  /**
   * tipolaudo without action
   */
  export type tipolaudoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipolaudo
     */
    select?: tipolaudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipolaudo
     */
    omit?: tipolaudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipolaudoInclude<ExtArgs> | null
  }


  /**
   * Model laudo
   */

  export type AggregateLaudo = {
    _count: LaudoCountAggregateOutputType | null
    _avg: LaudoAvgAggregateOutputType | null
    _sum: LaudoSumAggregateOutputType | null
    _min: LaudoMinAggregateOutputType | null
    _max: LaudoMaxAggregateOutputType | null
  }

  export type LaudoAvgAggregateOutputType = {
    idlaudo: number | null
    laudostatus: number | null
    idtipolaudo: number | null
    idtipoinstalacao: number | null
  }

  export type LaudoSumAggregateOutputType = {
    idlaudo: number | null
    laudostatus: number | null
    idtipolaudo: number | null
    idtipoinstalacao: number | null
  }

  export type LaudoMinAggregateOutputType = {
    idlaudo: number | null
    laudodescricao: string | null
    laudohtmlmd: string | null
    laudodatainclusao: Date | null
    laudofechamento: Date | null
    laudostatus: number | null
    idtipolaudo: number | null
    idtipoinstalacao: number | null
    laudoosclickup: string | null
  }

  export type LaudoMaxAggregateOutputType = {
    idlaudo: number | null
    laudodescricao: string | null
    laudohtmlmd: string | null
    laudodatainclusao: Date | null
    laudofechamento: Date | null
    laudostatus: number | null
    idtipolaudo: number | null
    idtipoinstalacao: number | null
    laudoosclickup: string | null
  }

  export type LaudoCountAggregateOutputType = {
    idlaudo: number
    laudodescricao: number
    laudohtmlmd: number
    laudodatainclusao: number
    laudofechamento: number
    laudostatus: number
    idtipolaudo: number
    idtipoinstalacao: number
    laudoosclickup: number
    _all: number
  }


  export type LaudoAvgAggregateInputType = {
    idlaudo?: true
    laudostatus?: true
    idtipolaudo?: true
    idtipoinstalacao?: true
  }

  export type LaudoSumAggregateInputType = {
    idlaudo?: true
    laudostatus?: true
    idtipolaudo?: true
    idtipoinstalacao?: true
  }

  export type LaudoMinAggregateInputType = {
    idlaudo?: true
    laudodescricao?: true
    laudohtmlmd?: true
    laudodatainclusao?: true
    laudofechamento?: true
    laudostatus?: true
    idtipolaudo?: true
    idtipoinstalacao?: true
    laudoosclickup?: true
  }

  export type LaudoMaxAggregateInputType = {
    idlaudo?: true
    laudodescricao?: true
    laudohtmlmd?: true
    laudodatainclusao?: true
    laudofechamento?: true
    laudostatus?: true
    idtipolaudo?: true
    idtipoinstalacao?: true
    laudoosclickup?: true
  }

  export type LaudoCountAggregateInputType = {
    idlaudo?: true
    laudodescricao?: true
    laudohtmlmd?: true
    laudodatainclusao?: true
    laudofechamento?: true
    laudostatus?: true
    idtipolaudo?: true
    idtipoinstalacao?: true
    laudoosclickup?: true
    _all?: true
  }

  export type LaudoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which laudo to aggregate.
     */
    where?: laudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of laudos to fetch.
     */
    orderBy?: laudoOrderByWithRelationInput | laudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: laudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` laudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` laudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned laudos
    **/
    _count?: true | LaudoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaudoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaudoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaudoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaudoMaxAggregateInputType
  }

  export type GetLaudoAggregateType<T extends LaudoAggregateArgs> = {
        [P in keyof T & keyof AggregateLaudo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaudo[P]>
      : GetScalarType<T[P], AggregateLaudo[P]>
  }




  export type laudoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: laudoWhereInput
    orderBy?: laudoOrderByWithAggregationInput | laudoOrderByWithAggregationInput[]
    by: LaudoScalarFieldEnum[] | LaudoScalarFieldEnum
    having?: laudoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaudoCountAggregateInputType | true
    _avg?: LaudoAvgAggregateInputType
    _sum?: LaudoSumAggregateInputType
    _min?: LaudoMinAggregateInputType
    _max?: LaudoMaxAggregateInputType
  }

  export type LaudoGroupByOutputType = {
    idlaudo: number
    laudodescricao: string
    laudohtmlmd: string
    laudodatainclusao: Date
    laudofechamento: Date | null
    laudostatus: number
    idtipolaudo: number
    idtipoinstalacao: number
    laudoosclickup: string | null
    _count: LaudoCountAggregateOutputType | null
    _avg: LaudoAvgAggregateOutputType | null
    _sum: LaudoSumAggregateOutputType | null
    _min: LaudoMinAggregateOutputType | null
    _max: LaudoMaxAggregateOutputType | null
  }

  type GetLaudoGroupByPayload<T extends laudoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaudoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaudoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaudoGroupByOutputType[P]>
            : GetScalarType<T[P], LaudoGroupByOutputType[P]>
        }
      >
    >


  export type laudoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idlaudo?: boolean
    laudodescricao?: boolean
    laudohtmlmd?: boolean
    laudodatainclusao?: boolean
    laudofechamento?: boolean
    laudostatus?: boolean
    idtipolaudo?: boolean
    idtipoinstalacao?: boolean
    laudoosclickup?: boolean
    tipoinstalacao?: boolean | tipoinstalacaoDefaultArgs<ExtArgs>
    tipolaudo?: boolean | tipolaudoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laudo"]>

  export type laudoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idlaudo?: boolean
    laudodescricao?: boolean
    laudohtmlmd?: boolean
    laudodatainclusao?: boolean
    laudofechamento?: boolean
    laudostatus?: boolean
    idtipolaudo?: boolean
    idtipoinstalacao?: boolean
    laudoosclickup?: boolean
    tipoinstalacao?: boolean | tipoinstalacaoDefaultArgs<ExtArgs>
    tipolaudo?: boolean | tipolaudoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laudo"]>

  export type laudoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idlaudo?: boolean
    laudodescricao?: boolean
    laudohtmlmd?: boolean
    laudodatainclusao?: boolean
    laudofechamento?: boolean
    laudostatus?: boolean
    idtipolaudo?: boolean
    idtipoinstalacao?: boolean
    laudoosclickup?: boolean
    tipoinstalacao?: boolean | tipoinstalacaoDefaultArgs<ExtArgs>
    tipolaudo?: boolean | tipolaudoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laudo"]>

  export type laudoSelectScalar = {
    idlaudo?: boolean
    laudodescricao?: boolean
    laudohtmlmd?: boolean
    laudodatainclusao?: boolean
    laudofechamento?: boolean
    laudostatus?: boolean
    idtipolaudo?: boolean
    idtipoinstalacao?: boolean
    laudoosclickup?: boolean
  }

  export type laudoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idlaudo" | "laudodescricao" | "laudohtmlmd" | "laudodatainclusao" | "laudofechamento" | "laudostatus" | "idtipolaudo" | "idtipoinstalacao" | "laudoosclickup", ExtArgs["result"]["laudo"]>
  export type laudoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoinstalacao?: boolean | tipoinstalacaoDefaultArgs<ExtArgs>
    tipolaudo?: boolean | tipolaudoDefaultArgs<ExtArgs>
  }
  export type laudoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoinstalacao?: boolean | tipoinstalacaoDefaultArgs<ExtArgs>
    tipolaudo?: boolean | tipolaudoDefaultArgs<ExtArgs>
  }
  export type laudoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoinstalacao?: boolean | tipoinstalacaoDefaultArgs<ExtArgs>
    tipolaudo?: boolean | tipolaudoDefaultArgs<ExtArgs>
  }

  export type $laudoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "laudo"
    objects: {
      tipoinstalacao: Prisma.$tipoinstalacaoPayload<ExtArgs>
      tipolaudo: Prisma.$tipolaudoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idlaudo: number
      laudodescricao: string
      laudohtmlmd: string
      laudodatainclusao: Date
      laudofechamento: Date | null
      laudostatus: number
      idtipolaudo: number
      idtipoinstalacao: number
      laudoosclickup: string | null
    }, ExtArgs["result"]["laudo"]>
    composites: {}
  }

  type laudoGetPayload<S extends boolean | null | undefined | laudoDefaultArgs> = $Result.GetResult<Prisma.$laudoPayload, S>

  type laudoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<laudoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaudoCountAggregateInputType | true
    }

  export interface laudoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['laudo'], meta: { name: 'laudo' } }
    /**
     * Find zero or one Laudo that matches the filter.
     * @param {laudoFindUniqueArgs} args - Arguments to find a Laudo
     * @example
     * // Get one Laudo
     * const laudo = await prisma.laudo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends laudoFindUniqueArgs>(args: SelectSubset<T, laudoFindUniqueArgs<ExtArgs>>): Prisma__laudoClient<$Result.GetResult<Prisma.$laudoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Laudo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {laudoFindUniqueOrThrowArgs} args - Arguments to find a Laudo
     * @example
     * // Get one Laudo
     * const laudo = await prisma.laudo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends laudoFindUniqueOrThrowArgs>(args: SelectSubset<T, laudoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__laudoClient<$Result.GetResult<Prisma.$laudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laudo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laudoFindFirstArgs} args - Arguments to find a Laudo
     * @example
     * // Get one Laudo
     * const laudo = await prisma.laudo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends laudoFindFirstArgs>(args?: SelectSubset<T, laudoFindFirstArgs<ExtArgs>>): Prisma__laudoClient<$Result.GetResult<Prisma.$laudoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laudo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laudoFindFirstOrThrowArgs} args - Arguments to find a Laudo
     * @example
     * // Get one Laudo
     * const laudo = await prisma.laudo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends laudoFindFirstOrThrowArgs>(args?: SelectSubset<T, laudoFindFirstOrThrowArgs<ExtArgs>>): Prisma__laudoClient<$Result.GetResult<Prisma.$laudoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Laudos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laudoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laudos
     * const laudos = await prisma.laudo.findMany()
     * 
     * // Get first 10 Laudos
     * const laudos = await prisma.laudo.findMany({ take: 10 })
     * 
     * // Only select the `idlaudo`
     * const laudoWithIdlaudoOnly = await prisma.laudo.findMany({ select: { idlaudo: true } })
     * 
     */
    findMany<T extends laudoFindManyArgs>(args?: SelectSubset<T, laudoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$laudoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Laudo.
     * @param {laudoCreateArgs} args - Arguments to create a Laudo.
     * @example
     * // Create one Laudo
     * const Laudo = await prisma.laudo.create({
     *   data: {
     *     // ... data to create a Laudo
     *   }
     * })
     * 
     */
    create<T extends laudoCreateArgs>(args: SelectSubset<T, laudoCreateArgs<ExtArgs>>): Prisma__laudoClient<$Result.GetResult<Prisma.$laudoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Laudos.
     * @param {laudoCreateManyArgs} args - Arguments to create many Laudos.
     * @example
     * // Create many Laudos
     * const laudo = await prisma.laudo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends laudoCreateManyArgs>(args?: SelectSubset<T, laudoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Laudos and returns the data saved in the database.
     * @param {laudoCreateManyAndReturnArgs} args - Arguments to create many Laudos.
     * @example
     * // Create many Laudos
     * const laudo = await prisma.laudo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Laudos and only return the `idlaudo`
     * const laudoWithIdlaudoOnly = await prisma.laudo.createManyAndReturn({
     *   select: { idlaudo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends laudoCreateManyAndReturnArgs>(args?: SelectSubset<T, laudoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$laudoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Laudo.
     * @param {laudoDeleteArgs} args - Arguments to delete one Laudo.
     * @example
     * // Delete one Laudo
     * const Laudo = await prisma.laudo.delete({
     *   where: {
     *     // ... filter to delete one Laudo
     *   }
     * })
     * 
     */
    delete<T extends laudoDeleteArgs>(args: SelectSubset<T, laudoDeleteArgs<ExtArgs>>): Prisma__laudoClient<$Result.GetResult<Prisma.$laudoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Laudo.
     * @param {laudoUpdateArgs} args - Arguments to update one Laudo.
     * @example
     * // Update one Laudo
     * const laudo = await prisma.laudo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends laudoUpdateArgs>(args: SelectSubset<T, laudoUpdateArgs<ExtArgs>>): Prisma__laudoClient<$Result.GetResult<Prisma.$laudoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Laudos.
     * @param {laudoDeleteManyArgs} args - Arguments to filter Laudos to delete.
     * @example
     * // Delete a few Laudos
     * const { count } = await prisma.laudo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends laudoDeleteManyArgs>(args?: SelectSubset<T, laudoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laudoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laudos
     * const laudo = await prisma.laudo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends laudoUpdateManyArgs>(args: SelectSubset<T, laudoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laudos and returns the data updated in the database.
     * @param {laudoUpdateManyAndReturnArgs} args - Arguments to update many Laudos.
     * @example
     * // Update many Laudos
     * const laudo = await prisma.laudo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Laudos and only return the `idlaudo`
     * const laudoWithIdlaudoOnly = await prisma.laudo.updateManyAndReturn({
     *   select: { idlaudo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends laudoUpdateManyAndReturnArgs>(args: SelectSubset<T, laudoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$laudoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Laudo.
     * @param {laudoUpsertArgs} args - Arguments to update or create a Laudo.
     * @example
     * // Update or create a Laudo
     * const laudo = await prisma.laudo.upsert({
     *   create: {
     *     // ... data to create a Laudo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Laudo we want to update
     *   }
     * })
     */
    upsert<T extends laudoUpsertArgs>(args: SelectSubset<T, laudoUpsertArgs<ExtArgs>>): Prisma__laudoClient<$Result.GetResult<Prisma.$laudoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Laudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laudoCountArgs} args - Arguments to filter Laudos to count.
     * @example
     * // Count the number of Laudos
     * const count = await prisma.laudo.count({
     *   where: {
     *     // ... the filter for the Laudos we want to count
     *   }
     * })
    **/
    count<T extends laudoCountArgs>(
      args?: Subset<T, laudoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaudoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Laudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaudoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LaudoAggregateArgs>(args: Subset<T, LaudoAggregateArgs>): Prisma.PrismaPromise<GetLaudoAggregateType<T>>

    /**
     * Group by Laudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laudoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends laudoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: laudoGroupByArgs['orderBy'] }
        : { orderBy?: laudoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, laudoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaudoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the laudo model
   */
  readonly fields: laudoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for laudo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__laudoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipoinstalacao<T extends tipoinstalacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipoinstalacaoDefaultArgs<ExtArgs>>): Prisma__tipoinstalacaoClient<$Result.GetResult<Prisma.$tipoinstalacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipolaudo<T extends tipolaudoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipolaudoDefaultArgs<ExtArgs>>): Prisma__tipolaudoClient<$Result.GetResult<Prisma.$tipolaudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the laudo model
   */
  interface laudoFieldRefs {
    readonly idlaudo: FieldRef<"laudo", 'Int'>
    readonly laudodescricao: FieldRef<"laudo", 'String'>
    readonly laudohtmlmd: FieldRef<"laudo", 'String'>
    readonly laudodatainclusao: FieldRef<"laudo", 'DateTime'>
    readonly laudofechamento: FieldRef<"laudo", 'DateTime'>
    readonly laudostatus: FieldRef<"laudo", 'Int'>
    readonly idtipolaudo: FieldRef<"laudo", 'Int'>
    readonly idtipoinstalacao: FieldRef<"laudo", 'Int'>
    readonly laudoosclickup: FieldRef<"laudo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * laudo findUnique
   */
  export type laudoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laudo
     */
    select?: laudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laudo
     */
    omit?: laudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laudoInclude<ExtArgs> | null
    /**
     * Filter, which laudo to fetch.
     */
    where: laudoWhereUniqueInput
  }

  /**
   * laudo findUniqueOrThrow
   */
  export type laudoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laudo
     */
    select?: laudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laudo
     */
    omit?: laudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laudoInclude<ExtArgs> | null
    /**
     * Filter, which laudo to fetch.
     */
    where: laudoWhereUniqueInput
  }

  /**
   * laudo findFirst
   */
  export type laudoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laudo
     */
    select?: laudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laudo
     */
    omit?: laudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laudoInclude<ExtArgs> | null
    /**
     * Filter, which laudo to fetch.
     */
    where?: laudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of laudos to fetch.
     */
    orderBy?: laudoOrderByWithRelationInput | laudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for laudos.
     */
    cursor?: laudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` laudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` laudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of laudos.
     */
    distinct?: LaudoScalarFieldEnum | LaudoScalarFieldEnum[]
  }

  /**
   * laudo findFirstOrThrow
   */
  export type laudoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laudo
     */
    select?: laudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laudo
     */
    omit?: laudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laudoInclude<ExtArgs> | null
    /**
     * Filter, which laudo to fetch.
     */
    where?: laudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of laudos to fetch.
     */
    orderBy?: laudoOrderByWithRelationInput | laudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for laudos.
     */
    cursor?: laudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` laudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` laudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of laudos.
     */
    distinct?: LaudoScalarFieldEnum | LaudoScalarFieldEnum[]
  }

  /**
   * laudo findMany
   */
  export type laudoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laudo
     */
    select?: laudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laudo
     */
    omit?: laudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laudoInclude<ExtArgs> | null
    /**
     * Filter, which laudos to fetch.
     */
    where?: laudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of laudos to fetch.
     */
    orderBy?: laudoOrderByWithRelationInput | laudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing laudos.
     */
    cursor?: laudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` laudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` laudos.
     */
    skip?: number
    distinct?: LaudoScalarFieldEnum | LaudoScalarFieldEnum[]
  }

  /**
   * laudo create
   */
  export type laudoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laudo
     */
    select?: laudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laudo
     */
    omit?: laudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laudoInclude<ExtArgs> | null
    /**
     * The data needed to create a laudo.
     */
    data: XOR<laudoCreateInput, laudoUncheckedCreateInput>
  }

  /**
   * laudo createMany
   */
  export type laudoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many laudos.
     */
    data: laudoCreateManyInput | laudoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * laudo createManyAndReturn
   */
  export type laudoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laudo
     */
    select?: laudoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the laudo
     */
    omit?: laudoOmit<ExtArgs> | null
    /**
     * The data used to create many laudos.
     */
    data: laudoCreateManyInput | laudoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laudoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * laudo update
   */
  export type laudoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laudo
     */
    select?: laudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laudo
     */
    omit?: laudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laudoInclude<ExtArgs> | null
    /**
     * The data needed to update a laudo.
     */
    data: XOR<laudoUpdateInput, laudoUncheckedUpdateInput>
    /**
     * Choose, which laudo to update.
     */
    where: laudoWhereUniqueInput
  }

  /**
   * laudo updateMany
   */
  export type laudoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update laudos.
     */
    data: XOR<laudoUpdateManyMutationInput, laudoUncheckedUpdateManyInput>
    /**
     * Filter which laudos to update
     */
    where?: laudoWhereInput
    /**
     * Limit how many laudos to update.
     */
    limit?: number
  }

  /**
   * laudo updateManyAndReturn
   */
  export type laudoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laudo
     */
    select?: laudoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the laudo
     */
    omit?: laudoOmit<ExtArgs> | null
    /**
     * The data used to update laudos.
     */
    data: XOR<laudoUpdateManyMutationInput, laudoUncheckedUpdateManyInput>
    /**
     * Filter which laudos to update
     */
    where?: laudoWhereInput
    /**
     * Limit how many laudos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laudoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * laudo upsert
   */
  export type laudoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laudo
     */
    select?: laudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laudo
     */
    omit?: laudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laudoInclude<ExtArgs> | null
    /**
     * The filter to search for the laudo to update in case it exists.
     */
    where: laudoWhereUniqueInput
    /**
     * In case the laudo found by the `where` argument doesn't exist, create a new laudo with this data.
     */
    create: XOR<laudoCreateInput, laudoUncheckedCreateInput>
    /**
     * In case the laudo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<laudoUpdateInput, laudoUncheckedUpdateInput>
  }

  /**
   * laudo delete
   */
  export type laudoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laudo
     */
    select?: laudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laudo
     */
    omit?: laudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laudoInclude<ExtArgs> | null
    /**
     * Filter which laudo to delete.
     */
    where: laudoWhereUniqueInput
  }

  /**
   * laudo deleteMany
   */
  export type laudoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which laudos to delete
     */
    where?: laudoWhereInput
    /**
     * Limit how many laudos to delete.
     */
    limit?: number
  }

  /**
   * laudo without action
   */
  export type laudoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laudo
     */
    select?: laudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laudo
     */
    omit?: laudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laudoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    idcliente: 'idcliente',
    clientenome: 'clientenome',
    clientestatus: 'clientestatus'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const SedeScalarFieldEnum: {
    idsede: 'idsede',
    sedenome: 'sedenome',
    sedestatus: 'sedestatus',
    idcliente: 'idcliente',
    sededtinclusao: 'sededtinclusao'
  };

  export type SedeScalarFieldEnum = (typeof SedeScalarFieldEnum)[keyof typeof SedeScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    idendereco: 'idendereco',
    enderecoendereco: 'enderecoendereco',
    enderecocep: 'enderecocep',
    enderecolat: 'enderecolat',
    enderecolon: 'enderecolon',
    enderecostatus: 'enderecostatus',
    idsede: 'idsede'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


  export const TipoeqScalarFieldEnum: {
    idtipoeq: 'idtipoeq',
    tipoeqnome: 'tipoeqnome'
  };

  export type TipoeqScalarFieldEnum = (typeof TipoeqScalarFieldEnum)[keyof typeof TipoeqScalarFieldEnum]


  export const EquipamentoScalarFieldEnum: {
    idequipamento: 'idequipamento',
    equipamentoserie: 'equipamentoserie',
    equipamentomodelo: 'equipamentomodelo',
    equipamentomac: 'equipamentomac',
    equipamentoipv4: 'equipamentoipv4',
    equipamentoipv6: 'equipamentoipv6',
    equipamentoanydesk: 'equipamentoanydesk',
    equipamentodw: 'equipamentodw',
    equipamentoalugado: 'equipamentoalugado',
    idsede: 'idsede',
    idtipoeq: 'idtipoeq'
  };

  export type EquipamentoScalarFieldEnum = (typeof EquipamentoScalarFieldEnum)[keyof typeof EquipamentoScalarFieldEnum]


  export const TipoinstalacaoScalarFieldEnum: {
    idtipoinstalacao: 'idtipoinstalacao',
    tipoinstalacaonome: 'tipoinstalacaonome'
  };

  export type TipoinstalacaoScalarFieldEnum = (typeof TipoinstalacaoScalarFieldEnum)[keyof typeof TipoinstalacaoScalarFieldEnum]


  export const TipolaudoScalarFieldEnum: {
    idtipolaudo: 'idtipolaudo',
    tipolaudonome: 'tipolaudonome',
    tipolaudotemplate: 'tipolaudotemplate'
  };

  export type TipolaudoScalarFieldEnum = (typeof TipolaudoScalarFieldEnum)[keyof typeof TipolaudoScalarFieldEnum]


  export const LaudoScalarFieldEnum: {
    idlaudo: 'idlaudo',
    laudodescricao: 'laudodescricao',
    laudohtmlmd: 'laudohtmlmd',
    laudodatainclusao: 'laudodatainclusao',
    laudofechamento: 'laudofechamento',
    laudostatus: 'laudostatus',
    idtipolaudo: 'idtipolaudo',
    idtipoinstalacao: 'idtipoinstalacao',
    laudoosclickup: 'laudoosclickup'
  };

  export type LaudoScalarFieldEnum = (typeof LaudoScalarFieldEnum)[keyof typeof LaudoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    idcliente?: BigIntFilter<"Cliente"> | bigint | number
    clientenome?: StringFilter<"Cliente"> | string
    clientestatus?: IntNullableFilter<"Cliente"> | number | null
    sede?: SedeListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    idcliente?: SortOrder
    clientenome?: SortOrder
    clientestatus?: SortOrderInput | SortOrder
    sede?: sedeOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    idcliente?: bigint | number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    clientenome?: StringFilter<"Cliente"> | string
    clientestatus?: IntNullableFilter<"Cliente"> | number | null
    sede?: SedeListRelationFilter
  }, "idcliente">

  export type ClienteOrderByWithAggregationInput = {
    idcliente?: SortOrder
    clientenome?: SortOrder
    clientestatus?: SortOrderInput | SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    idcliente?: BigIntWithAggregatesFilter<"Cliente"> | bigint | number
    clientenome?: StringWithAggregatesFilter<"Cliente"> | string
    clientestatus?: IntNullableWithAggregatesFilter<"Cliente"> | number | null
  }

  export type sedeWhereInput = {
    AND?: sedeWhereInput | sedeWhereInput[]
    OR?: sedeWhereInput[]
    NOT?: sedeWhereInput | sedeWhereInput[]
    idsede?: IntFilter<"sede"> | number
    sedenome?: StringFilter<"sede"> | string
    sedestatus?: IntFilter<"sede"> | number
    idcliente?: BigIntFilter<"sede"> | bigint | number
    sededtinclusao?: DateTimeNullableFilter<"sede"> | Date | string | null
    endereco?: EnderecoListRelationFilter
    equipamento?: EquipamentoListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type sedeOrderByWithRelationInput = {
    idsede?: SortOrder
    sedenome?: SortOrder
    sedestatus?: SortOrder
    idcliente?: SortOrder
    sededtinclusao?: SortOrderInput | SortOrder
    endereco?: enderecoOrderByRelationAggregateInput
    equipamento?: equipamentoOrderByRelationAggregateInput
    cliente?: ClienteOrderByWithRelationInput
  }

  export type sedeWhereUniqueInput = Prisma.AtLeast<{
    idsede?: number
    AND?: sedeWhereInput | sedeWhereInput[]
    OR?: sedeWhereInput[]
    NOT?: sedeWhereInput | sedeWhereInput[]
    sedenome?: StringFilter<"sede"> | string
    sedestatus?: IntFilter<"sede"> | number
    idcliente?: BigIntFilter<"sede"> | bigint | number
    sededtinclusao?: DateTimeNullableFilter<"sede"> | Date | string | null
    endereco?: EnderecoListRelationFilter
    equipamento?: EquipamentoListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "idsede">

  export type sedeOrderByWithAggregationInput = {
    idsede?: SortOrder
    sedenome?: SortOrder
    sedestatus?: SortOrder
    idcliente?: SortOrder
    sededtinclusao?: SortOrderInput | SortOrder
    _count?: sedeCountOrderByAggregateInput
    _avg?: sedeAvgOrderByAggregateInput
    _max?: sedeMaxOrderByAggregateInput
    _min?: sedeMinOrderByAggregateInput
    _sum?: sedeSumOrderByAggregateInput
  }

  export type sedeScalarWhereWithAggregatesInput = {
    AND?: sedeScalarWhereWithAggregatesInput | sedeScalarWhereWithAggregatesInput[]
    OR?: sedeScalarWhereWithAggregatesInput[]
    NOT?: sedeScalarWhereWithAggregatesInput | sedeScalarWhereWithAggregatesInput[]
    idsede?: IntWithAggregatesFilter<"sede"> | number
    sedenome?: StringWithAggregatesFilter<"sede"> | string
    sedestatus?: IntWithAggregatesFilter<"sede"> | number
    idcliente?: BigIntWithAggregatesFilter<"sede"> | bigint | number
    sededtinclusao?: DateTimeNullableWithAggregatesFilter<"sede"> | Date | string | null
  }

  export type enderecoWhereInput = {
    AND?: enderecoWhereInput | enderecoWhereInput[]
    OR?: enderecoWhereInput[]
    NOT?: enderecoWhereInput | enderecoWhereInput[]
    idendereco?: IntFilter<"endereco"> | number
    enderecoendereco?: StringFilter<"endereco"> | string
    enderecocep?: StringFilter<"endereco"> | string
    enderecolat?: DecimalNullableFilter<"endereco"> | Decimal | DecimalJsLike | number | string | null
    enderecolon?: DecimalNullableFilter<"endereco"> | Decimal | DecimalJsLike | number | string | null
    enderecostatus?: IntNullableFilter<"endereco"> | number | null
    idsede?: IntFilter<"endereco"> | number
    sede?: XOR<SedeScalarRelationFilter, sedeWhereInput>
  }

  export type enderecoOrderByWithRelationInput = {
    idendereco?: SortOrder
    enderecoendereco?: SortOrder
    enderecocep?: SortOrder
    enderecolat?: SortOrderInput | SortOrder
    enderecolon?: SortOrderInput | SortOrder
    enderecostatus?: SortOrderInput | SortOrder
    idsede?: SortOrder
    sede?: sedeOrderByWithRelationInput
  }

  export type enderecoWhereUniqueInput = Prisma.AtLeast<{
    idendereco?: number
    AND?: enderecoWhereInput | enderecoWhereInput[]
    OR?: enderecoWhereInput[]
    NOT?: enderecoWhereInput | enderecoWhereInput[]
    enderecoendereco?: StringFilter<"endereco"> | string
    enderecocep?: StringFilter<"endereco"> | string
    enderecolat?: DecimalNullableFilter<"endereco"> | Decimal | DecimalJsLike | number | string | null
    enderecolon?: DecimalNullableFilter<"endereco"> | Decimal | DecimalJsLike | number | string | null
    enderecostatus?: IntNullableFilter<"endereco"> | number | null
    idsede?: IntFilter<"endereco"> | number
    sede?: XOR<SedeScalarRelationFilter, sedeWhereInput>
  }, "idendereco">

  export type enderecoOrderByWithAggregationInput = {
    idendereco?: SortOrder
    enderecoendereco?: SortOrder
    enderecocep?: SortOrder
    enderecolat?: SortOrderInput | SortOrder
    enderecolon?: SortOrderInput | SortOrder
    enderecostatus?: SortOrderInput | SortOrder
    idsede?: SortOrder
    _count?: enderecoCountOrderByAggregateInput
    _avg?: enderecoAvgOrderByAggregateInput
    _max?: enderecoMaxOrderByAggregateInput
    _min?: enderecoMinOrderByAggregateInput
    _sum?: enderecoSumOrderByAggregateInput
  }

  export type enderecoScalarWhereWithAggregatesInput = {
    AND?: enderecoScalarWhereWithAggregatesInput | enderecoScalarWhereWithAggregatesInput[]
    OR?: enderecoScalarWhereWithAggregatesInput[]
    NOT?: enderecoScalarWhereWithAggregatesInput | enderecoScalarWhereWithAggregatesInput[]
    idendereco?: IntWithAggregatesFilter<"endereco"> | number
    enderecoendereco?: StringWithAggregatesFilter<"endereco"> | string
    enderecocep?: StringWithAggregatesFilter<"endereco"> | string
    enderecolat?: DecimalNullableWithAggregatesFilter<"endereco"> | Decimal | DecimalJsLike | number | string | null
    enderecolon?: DecimalNullableWithAggregatesFilter<"endereco"> | Decimal | DecimalJsLike | number | string | null
    enderecostatus?: IntNullableWithAggregatesFilter<"endereco"> | number | null
    idsede?: IntWithAggregatesFilter<"endereco"> | number
  }

  export type tipoeqWhereInput = {
    AND?: tipoeqWhereInput | tipoeqWhereInput[]
    OR?: tipoeqWhereInput[]
    NOT?: tipoeqWhereInput | tipoeqWhereInput[]
    idtipoeq?: IntFilter<"tipoeq"> | number
    tipoeqnome?: StringFilter<"tipoeq"> | string
    equipamento?: EquipamentoListRelationFilter
  }

  export type tipoeqOrderByWithRelationInput = {
    idtipoeq?: SortOrder
    tipoeqnome?: SortOrder
    equipamento?: equipamentoOrderByRelationAggregateInput
  }

  export type tipoeqWhereUniqueInput = Prisma.AtLeast<{
    idtipoeq?: number
    AND?: tipoeqWhereInput | tipoeqWhereInput[]
    OR?: tipoeqWhereInput[]
    NOT?: tipoeqWhereInput | tipoeqWhereInput[]
    tipoeqnome?: StringFilter<"tipoeq"> | string
    equipamento?: EquipamentoListRelationFilter
  }, "idtipoeq">

  export type tipoeqOrderByWithAggregationInput = {
    idtipoeq?: SortOrder
    tipoeqnome?: SortOrder
    _count?: tipoeqCountOrderByAggregateInput
    _avg?: tipoeqAvgOrderByAggregateInput
    _max?: tipoeqMaxOrderByAggregateInput
    _min?: tipoeqMinOrderByAggregateInput
    _sum?: tipoeqSumOrderByAggregateInput
  }

  export type tipoeqScalarWhereWithAggregatesInput = {
    AND?: tipoeqScalarWhereWithAggregatesInput | tipoeqScalarWhereWithAggregatesInput[]
    OR?: tipoeqScalarWhereWithAggregatesInput[]
    NOT?: tipoeqScalarWhereWithAggregatesInput | tipoeqScalarWhereWithAggregatesInput[]
    idtipoeq?: IntWithAggregatesFilter<"tipoeq"> | number
    tipoeqnome?: StringWithAggregatesFilter<"tipoeq"> | string
  }

  export type equipamentoWhereInput = {
    AND?: equipamentoWhereInput | equipamentoWhereInput[]
    OR?: equipamentoWhereInput[]
    NOT?: equipamentoWhereInput | equipamentoWhereInput[]
    idequipamento?: IntFilter<"equipamento"> | number
    equipamentoserie?: StringNullableFilter<"equipamento"> | string | null
    equipamentomodelo?: StringNullableFilter<"equipamento"> | string | null
    equipamentomac?: StringNullableFilter<"equipamento"> | string | null
    equipamentoipv4?: StringNullableFilter<"equipamento"> | string | null
    equipamentoipv6?: StringNullableFilter<"equipamento"> | string | null
    equipamentoanydesk?: StringNullableFilter<"equipamento"> | string | null
    equipamentodw?: StringNullableFilter<"equipamento"> | string | null
    equipamentoalugado?: BoolNullableFilter<"equipamento"> | boolean | null
    idsede?: IntFilter<"equipamento"> | number
    idtipoeq?: IntFilter<"equipamento"> | number
    sede?: XOR<SedeScalarRelationFilter, sedeWhereInput>
    tipoeq?: XOR<TipoeqScalarRelationFilter, tipoeqWhereInput>
  }

  export type equipamentoOrderByWithRelationInput = {
    idequipamento?: SortOrder
    equipamentoserie?: SortOrderInput | SortOrder
    equipamentomodelo?: SortOrderInput | SortOrder
    equipamentomac?: SortOrderInput | SortOrder
    equipamentoipv4?: SortOrderInput | SortOrder
    equipamentoipv6?: SortOrderInput | SortOrder
    equipamentoanydesk?: SortOrderInput | SortOrder
    equipamentodw?: SortOrderInput | SortOrder
    equipamentoalugado?: SortOrderInput | SortOrder
    idsede?: SortOrder
    idtipoeq?: SortOrder
    sede?: sedeOrderByWithRelationInput
    tipoeq?: tipoeqOrderByWithRelationInput
  }

  export type equipamentoWhereUniqueInput = Prisma.AtLeast<{
    idequipamento?: number
    AND?: equipamentoWhereInput | equipamentoWhereInput[]
    OR?: equipamentoWhereInput[]
    NOT?: equipamentoWhereInput | equipamentoWhereInput[]
    equipamentoserie?: StringNullableFilter<"equipamento"> | string | null
    equipamentomodelo?: StringNullableFilter<"equipamento"> | string | null
    equipamentomac?: StringNullableFilter<"equipamento"> | string | null
    equipamentoipv4?: StringNullableFilter<"equipamento"> | string | null
    equipamentoipv6?: StringNullableFilter<"equipamento"> | string | null
    equipamentoanydesk?: StringNullableFilter<"equipamento"> | string | null
    equipamentodw?: StringNullableFilter<"equipamento"> | string | null
    equipamentoalugado?: BoolNullableFilter<"equipamento"> | boolean | null
    idsede?: IntFilter<"equipamento"> | number
    idtipoeq?: IntFilter<"equipamento"> | number
    sede?: XOR<SedeScalarRelationFilter, sedeWhereInput>
    tipoeq?: XOR<TipoeqScalarRelationFilter, tipoeqWhereInput>
  }, "idequipamento">

  export type equipamentoOrderByWithAggregationInput = {
    idequipamento?: SortOrder
    equipamentoserie?: SortOrderInput | SortOrder
    equipamentomodelo?: SortOrderInput | SortOrder
    equipamentomac?: SortOrderInput | SortOrder
    equipamentoipv4?: SortOrderInput | SortOrder
    equipamentoipv6?: SortOrderInput | SortOrder
    equipamentoanydesk?: SortOrderInput | SortOrder
    equipamentodw?: SortOrderInput | SortOrder
    equipamentoalugado?: SortOrderInput | SortOrder
    idsede?: SortOrder
    idtipoeq?: SortOrder
    _count?: equipamentoCountOrderByAggregateInput
    _avg?: equipamentoAvgOrderByAggregateInput
    _max?: equipamentoMaxOrderByAggregateInput
    _min?: equipamentoMinOrderByAggregateInput
    _sum?: equipamentoSumOrderByAggregateInput
  }

  export type equipamentoScalarWhereWithAggregatesInput = {
    AND?: equipamentoScalarWhereWithAggregatesInput | equipamentoScalarWhereWithAggregatesInput[]
    OR?: equipamentoScalarWhereWithAggregatesInput[]
    NOT?: equipamentoScalarWhereWithAggregatesInput | equipamentoScalarWhereWithAggregatesInput[]
    idequipamento?: IntWithAggregatesFilter<"equipamento"> | number
    equipamentoserie?: StringNullableWithAggregatesFilter<"equipamento"> | string | null
    equipamentomodelo?: StringNullableWithAggregatesFilter<"equipamento"> | string | null
    equipamentomac?: StringNullableWithAggregatesFilter<"equipamento"> | string | null
    equipamentoipv4?: StringNullableWithAggregatesFilter<"equipamento"> | string | null
    equipamentoipv6?: StringNullableWithAggregatesFilter<"equipamento"> | string | null
    equipamentoanydesk?: StringNullableWithAggregatesFilter<"equipamento"> | string | null
    equipamentodw?: StringNullableWithAggregatesFilter<"equipamento"> | string | null
    equipamentoalugado?: BoolNullableWithAggregatesFilter<"equipamento"> | boolean | null
    idsede?: IntWithAggregatesFilter<"equipamento"> | number
    idtipoeq?: IntWithAggregatesFilter<"equipamento"> | number
  }

  export type tipoinstalacaoWhereInput = {
    AND?: tipoinstalacaoWhereInput | tipoinstalacaoWhereInput[]
    OR?: tipoinstalacaoWhereInput[]
    NOT?: tipoinstalacaoWhereInput | tipoinstalacaoWhereInput[]
    idtipoinstalacao?: IntFilter<"tipoinstalacao"> | number
    tipoinstalacaonome?: StringFilter<"tipoinstalacao"> | string
    laudo?: LaudoListRelationFilter
  }

  export type tipoinstalacaoOrderByWithRelationInput = {
    idtipoinstalacao?: SortOrder
    tipoinstalacaonome?: SortOrder
    laudo?: laudoOrderByRelationAggregateInput
  }

  export type tipoinstalacaoWhereUniqueInput = Prisma.AtLeast<{
    idtipoinstalacao?: number
    AND?: tipoinstalacaoWhereInput | tipoinstalacaoWhereInput[]
    OR?: tipoinstalacaoWhereInput[]
    NOT?: tipoinstalacaoWhereInput | tipoinstalacaoWhereInput[]
    tipoinstalacaonome?: StringFilter<"tipoinstalacao"> | string
    laudo?: LaudoListRelationFilter
  }, "idtipoinstalacao">

  export type tipoinstalacaoOrderByWithAggregationInput = {
    idtipoinstalacao?: SortOrder
    tipoinstalacaonome?: SortOrder
    _count?: tipoinstalacaoCountOrderByAggregateInput
    _avg?: tipoinstalacaoAvgOrderByAggregateInput
    _max?: tipoinstalacaoMaxOrderByAggregateInput
    _min?: tipoinstalacaoMinOrderByAggregateInput
    _sum?: tipoinstalacaoSumOrderByAggregateInput
  }

  export type tipoinstalacaoScalarWhereWithAggregatesInput = {
    AND?: tipoinstalacaoScalarWhereWithAggregatesInput | tipoinstalacaoScalarWhereWithAggregatesInput[]
    OR?: tipoinstalacaoScalarWhereWithAggregatesInput[]
    NOT?: tipoinstalacaoScalarWhereWithAggregatesInput | tipoinstalacaoScalarWhereWithAggregatesInput[]
    idtipoinstalacao?: IntWithAggregatesFilter<"tipoinstalacao"> | number
    tipoinstalacaonome?: StringWithAggregatesFilter<"tipoinstalacao"> | string
  }

  export type tipolaudoWhereInput = {
    AND?: tipolaudoWhereInput | tipolaudoWhereInput[]
    OR?: tipolaudoWhereInput[]
    NOT?: tipolaudoWhereInput | tipolaudoWhereInput[]
    idtipolaudo?: IntFilter<"tipolaudo"> | number
    tipolaudonome?: StringFilter<"tipolaudo"> | string
    tipolaudotemplate?: StringNullableFilter<"tipolaudo"> | string | null
    laudo?: LaudoListRelationFilter
  }

  export type tipolaudoOrderByWithRelationInput = {
    idtipolaudo?: SortOrder
    tipolaudonome?: SortOrder
    tipolaudotemplate?: SortOrderInput | SortOrder
    laudo?: laudoOrderByRelationAggregateInput
  }

  export type tipolaudoWhereUniqueInput = Prisma.AtLeast<{
    idtipolaudo?: number
    AND?: tipolaudoWhereInput | tipolaudoWhereInput[]
    OR?: tipolaudoWhereInput[]
    NOT?: tipolaudoWhereInput | tipolaudoWhereInput[]
    tipolaudonome?: StringFilter<"tipolaudo"> | string
    tipolaudotemplate?: StringNullableFilter<"tipolaudo"> | string | null
    laudo?: LaudoListRelationFilter
  }, "idtipolaudo">

  export type tipolaudoOrderByWithAggregationInput = {
    idtipolaudo?: SortOrder
    tipolaudonome?: SortOrder
    tipolaudotemplate?: SortOrderInput | SortOrder
    _count?: tipolaudoCountOrderByAggregateInput
    _avg?: tipolaudoAvgOrderByAggregateInput
    _max?: tipolaudoMaxOrderByAggregateInput
    _min?: tipolaudoMinOrderByAggregateInput
    _sum?: tipolaudoSumOrderByAggregateInput
  }

  export type tipolaudoScalarWhereWithAggregatesInput = {
    AND?: tipolaudoScalarWhereWithAggregatesInput | tipolaudoScalarWhereWithAggregatesInput[]
    OR?: tipolaudoScalarWhereWithAggregatesInput[]
    NOT?: tipolaudoScalarWhereWithAggregatesInput | tipolaudoScalarWhereWithAggregatesInput[]
    idtipolaudo?: IntWithAggregatesFilter<"tipolaudo"> | number
    tipolaudonome?: StringWithAggregatesFilter<"tipolaudo"> | string
    tipolaudotemplate?: StringNullableWithAggregatesFilter<"tipolaudo"> | string | null
  }

  export type laudoWhereInput = {
    AND?: laudoWhereInput | laudoWhereInput[]
    OR?: laudoWhereInput[]
    NOT?: laudoWhereInput | laudoWhereInput[]
    idlaudo?: IntFilter<"laudo"> | number
    laudodescricao?: StringFilter<"laudo"> | string
    laudohtmlmd?: StringFilter<"laudo"> | string
    laudodatainclusao?: DateTimeFilter<"laudo"> | Date | string
    laudofechamento?: DateTimeNullableFilter<"laudo"> | Date | string | null
    laudostatus?: IntFilter<"laudo"> | number
    idtipolaudo?: IntFilter<"laudo"> | number
    idtipoinstalacao?: IntFilter<"laudo"> | number
    laudoosclickup?: StringNullableFilter<"laudo"> | string | null
    tipoinstalacao?: XOR<TipoinstalacaoScalarRelationFilter, tipoinstalacaoWhereInput>
    tipolaudo?: XOR<TipolaudoScalarRelationFilter, tipolaudoWhereInput>
  }

  export type laudoOrderByWithRelationInput = {
    idlaudo?: SortOrder
    laudodescricao?: SortOrder
    laudohtmlmd?: SortOrder
    laudodatainclusao?: SortOrder
    laudofechamento?: SortOrderInput | SortOrder
    laudostatus?: SortOrder
    idtipolaudo?: SortOrder
    idtipoinstalacao?: SortOrder
    laudoosclickup?: SortOrderInput | SortOrder
    tipoinstalacao?: tipoinstalacaoOrderByWithRelationInput
    tipolaudo?: tipolaudoOrderByWithRelationInput
  }

  export type laudoWhereUniqueInput = Prisma.AtLeast<{
    idlaudo?: number
    AND?: laudoWhereInput | laudoWhereInput[]
    OR?: laudoWhereInput[]
    NOT?: laudoWhereInput | laudoWhereInput[]
    laudodescricao?: StringFilter<"laudo"> | string
    laudohtmlmd?: StringFilter<"laudo"> | string
    laudodatainclusao?: DateTimeFilter<"laudo"> | Date | string
    laudofechamento?: DateTimeNullableFilter<"laudo"> | Date | string | null
    laudostatus?: IntFilter<"laudo"> | number
    idtipolaudo?: IntFilter<"laudo"> | number
    idtipoinstalacao?: IntFilter<"laudo"> | number
    laudoosclickup?: StringNullableFilter<"laudo"> | string | null
    tipoinstalacao?: XOR<TipoinstalacaoScalarRelationFilter, tipoinstalacaoWhereInput>
    tipolaudo?: XOR<TipolaudoScalarRelationFilter, tipolaudoWhereInput>
  }, "idlaudo">

  export type laudoOrderByWithAggregationInput = {
    idlaudo?: SortOrder
    laudodescricao?: SortOrder
    laudohtmlmd?: SortOrder
    laudodatainclusao?: SortOrder
    laudofechamento?: SortOrderInput | SortOrder
    laudostatus?: SortOrder
    idtipolaudo?: SortOrder
    idtipoinstalacao?: SortOrder
    laudoosclickup?: SortOrderInput | SortOrder
    _count?: laudoCountOrderByAggregateInput
    _avg?: laudoAvgOrderByAggregateInput
    _max?: laudoMaxOrderByAggregateInput
    _min?: laudoMinOrderByAggregateInput
    _sum?: laudoSumOrderByAggregateInput
  }

  export type laudoScalarWhereWithAggregatesInput = {
    AND?: laudoScalarWhereWithAggregatesInput | laudoScalarWhereWithAggregatesInput[]
    OR?: laudoScalarWhereWithAggregatesInput[]
    NOT?: laudoScalarWhereWithAggregatesInput | laudoScalarWhereWithAggregatesInput[]
    idlaudo?: IntWithAggregatesFilter<"laudo"> | number
    laudodescricao?: StringWithAggregatesFilter<"laudo"> | string
    laudohtmlmd?: StringWithAggregatesFilter<"laudo"> | string
    laudodatainclusao?: DateTimeWithAggregatesFilter<"laudo"> | Date | string
    laudofechamento?: DateTimeNullableWithAggregatesFilter<"laudo"> | Date | string | null
    laudostatus?: IntWithAggregatesFilter<"laudo"> | number
    idtipolaudo?: IntWithAggregatesFilter<"laudo"> | number
    idtipoinstalacao?: IntWithAggregatesFilter<"laudo"> | number
    laudoosclickup?: StringNullableWithAggregatesFilter<"laudo"> | string | null
  }

  export type ClienteCreateInput = {
    idcliente?: bigint | number
    clientenome: string
    clientestatus?: number | null
    sede?: sedeCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    idcliente?: bigint | number
    clientenome: string
    clientestatus?: number | null
    sede?: sedeUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    clientenome?: StringFieldUpdateOperationsInput | string
    clientestatus?: NullableIntFieldUpdateOperationsInput | number | null
    sede?: sedeUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    clientenome?: StringFieldUpdateOperationsInput | string
    clientestatus?: NullableIntFieldUpdateOperationsInput | number | null
    sede?: sedeUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    idcliente?: bigint | number
    clientenome: string
    clientestatus?: number | null
  }

  export type ClienteUpdateManyMutationInput = {
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    clientenome?: StringFieldUpdateOperationsInput | string
    clientestatus?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClienteUncheckedUpdateManyInput = {
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    clientenome?: StringFieldUpdateOperationsInput | string
    clientestatus?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type sedeCreateInput = {
    sedenome: string
    sedestatus?: number
    sededtinclusao?: Date | string | null
    endereco?: enderecoCreateNestedManyWithoutSedeInput
    equipamento?: equipamentoCreateNestedManyWithoutSedeInput
    cliente: ClienteCreateNestedOneWithoutSedeInput
  }

  export type sedeUncheckedCreateInput = {
    idsede?: number
    sedenome: string
    sedestatus?: number
    idcliente: bigint | number
    sededtinclusao?: Date | string | null
    endereco?: enderecoUncheckedCreateNestedManyWithoutSedeInput
    equipamento?: equipamentoUncheckedCreateNestedManyWithoutSedeInput
  }

  export type sedeUpdateInput = {
    sedenome?: StringFieldUpdateOperationsInput | string
    sedestatus?: IntFieldUpdateOperationsInput | number
    sededtinclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: enderecoUpdateManyWithoutSedeNestedInput
    equipamento?: equipamentoUpdateManyWithoutSedeNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutSedeNestedInput
  }

  export type sedeUncheckedUpdateInput = {
    idsede?: IntFieldUpdateOperationsInput | number
    sedenome?: StringFieldUpdateOperationsInput | string
    sedestatus?: IntFieldUpdateOperationsInput | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    sededtinclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: enderecoUncheckedUpdateManyWithoutSedeNestedInput
    equipamento?: equipamentoUncheckedUpdateManyWithoutSedeNestedInput
  }

  export type sedeCreateManyInput = {
    idsede?: number
    sedenome: string
    sedestatus?: number
    idcliente: bigint | number
    sededtinclusao?: Date | string | null
  }

  export type sedeUpdateManyMutationInput = {
    sedenome?: StringFieldUpdateOperationsInput | string
    sedestatus?: IntFieldUpdateOperationsInput | number
    sededtinclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sedeUncheckedUpdateManyInput = {
    idsede?: IntFieldUpdateOperationsInput | number
    sedenome?: StringFieldUpdateOperationsInput | string
    sedestatus?: IntFieldUpdateOperationsInput | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    sededtinclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type enderecoCreateInput = {
    enderecoendereco: string
    enderecocep: string
    enderecolat?: Decimal | DecimalJsLike | number | string | null
    enderecolon?: Decimal | DecimalJsLike | number | string | null
    enderecostatus?: number | null
    sede: sedeCreateNestedOneWithoutEnderecoInput
  }

  export type enderecoUncheckedCreateInput = {
    idendereco?: number
    enderecoendereco: string
    enderecocep: string
    enderecolat?: Decimal | DecimalJsLike | number | string | null
    enderecolon?: Decimal | DecimalJsLike | number | string | null
    enderecostatus?: number | null
    idsede: number
  }

  export type enderecoUpdateInput = {
    enderecoendereco?: StringFieldUpdateOperationsInput | string
    enderecocep?: StringFieldUpdateOperationsInput | string
    enderecolat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enderecolon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enderecostatus?: NullableIntFieldUpdateOperationsInput | number | null
    sede?: sedeUpdateOneRequiredWithoutEnderecoNestedInput
  }

  export type enderecoUncheckedUpdateInput = {
    idendereco?: IntFieldUpdateOperationsInput | number
    enderecoendereco?: StringFieldUpdateOperationsInput | string
    enderecocep?: StringFieldUpdateOperationsInput | string
    enderecolat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enderecolon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enderecostatus?: NullableIntFieldUpdateOperationsInput | number | null
    idsede?: IntFieldUpdateOperationsInput | number
  }

  export type enderecoCreateManyInput = {
    idendereco?: number
    enderecoendereco: string
    enderecocep: string
    enderecolat?: Decimal | DecimalJsLike | number | string | null
    enderecolon?: Decimal | DecimalJsLike | number | string | null
    enderecostatus?: number | null
    idsede: number
  }

  export type enderecoUpdateManyMutationInput = {
    enderecoendereco?: StringFieldUpdateOperationsInput | string
    enderecocep?: StringFieldUpdateOperationsInput | string
    enderecolat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enderecolon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enderecostatus?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type enderecoUncheckedUpdateManyInput = {
    idendereco?: IntFieldUpdateOperationsInput | number
    enderecoendereco?: StringFieldUpdateOperationsInput | string
    enderecocep?: StringFieldUpdateOperationsInput | string
    enderecolat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enderecolon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enderecostatus?: NullableIntFieldUpdateOperationsInput | number | null
    idsede?: IntFieldUpdateOperationsInput | number
  }

  export type tipoeqCreateInput = {
    tipoeqnome: string
    equipamento?: equipamentoCreateNestedManyWithoutTipoeqInput
  }

  export type tipoeqUncheckedCreateInput = {
    idtipoeq?: number
    tipoeqnome: string
    equipamento?: equipamentoUncheckedCreateNestedManyWithoutTipoeqInput
  }

  export type tipoeqUpdateInput = {
    tipoeqnome?: StringFieldUpdateOperationsInput | string
    equipamento?: equipamentoUpdateManyWithoutTipoeqNestedInput
  }

  export type tipoeqUncheckedUpdateInput = {
    idtipoeq?: IntFieldUpdateOperationsInput | number
    tipoeqnome?: StringFieldUpdateOperationsInput | string
    equipamento?: equipamentoUncheckedUpdateManyWithoutTipoeqNestedInput
  }

  export type tipoeqCreateManyInput = {
    idtipoeq?: number
    tipoeqnome: string
  }

  export type tipoeqUpdateManyMutationInput = {
    tipoeqnome?: StringFieldUpdateOperationsInput | string
  }

  export type tipoeqUncheckedUpdateManyInput = {
    idtipoeq?: IntFieldUpdateOperationsInput | number
    tipoeqnome?: StringFieldUpdateOperationsInput | string
  }

  export type equipamentoCreateInput = {
    equipamentoserie?: string | null
    equipamentomodelo?: string | null
    equipamentomac?: string | null
    equipamentoipv4?: string | null
    equipamentoipv6?: string | null
    equipamentoanydesk?: string | null
    equipamentodw?: string | null
    equipamentoalugado?: boolean | null
    sede: sedeCreateNestedOneWithoutEquipamentoInput
    tipoeq: tipoeqCreateNestedOneWithoutEquipamentoInput
  }

  export type equipamentoUncheckedCreateInput = {
    idequipamento?: number
    equipamentoserie?: string | null
    equipamentomodelo?: string | null
    equipamentomac?: string | null
    equipamentoipv4?: string | null
    equipamentoipv6?: string | null
    equipamentoanydesk?: string | null
    equipamentodw?: string | null
    equipamentoalugado?: boolean | null
    idsede: number
    idtipoeq: number
  }

  export type equipamentoUpdateInput = {
    equipamentoserie?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomodelo?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomac?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv4?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv6?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoanydesk?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentodw?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoalugado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sede?: sedeUpdateOneRequiredWithoutEquipamentoNestedInput
    tipoeq?: tipoeqUpdateOneRequiredWithoutEquipamentoNestedInput
  }

  export type equipamentoUncheckedUpdateInput = {
    idequipamento?: IntFieldUpdateOperationsInput | number
    equipamentoserie?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomodelo?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomac?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv4?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv6?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoanydesk?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentodw?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoalugado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idsede?: IntFieldUpdateOperationsInput | number
    idtipoeq?: IntFieldUpdateOperationsInput | number
  }

  export type equipamentoCreateManyInput = {
    idequipamento?: number
    equipamentoserie?: string | null
    equipamentomodelo?: string | null
    equipamentomac?: string | null
    equipamentoipv4?: string | null
    equipamentoipv6?: string | null
    equipamentoanydesk?: string | null
    equipamentodw?: string | null
    equipamentoalugado?: boolean | null
    idsede: number
    idtipoeq: number
  }

  export type equipamentoUpdateManyMutationInput = {
    equipamentoserie?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomodelo?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomac?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv4?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv6?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoanydesk?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentodw?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoalugado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type equipamentoUncheckedUpdateManyInput = {
    idequipamento?: IntFieldUpdateOperationsInput | number
    equipamentoserie?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomodelo?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomac?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv4?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv6?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoanydesk?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentodw?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoalugado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idsede?: IntFieldUpdateOperationsInput | number
    idtipoeq?: IntFieldUpdateOperationsInput | number
  }

  export type tipoinstalacaoCreateInput = {
    tipoinstalacaonome: string
    laudo?: laudoCreateNestedManyWithoutTipoinstalacaoInput
  }

  export type tipoinstalacaoUncheckedCreateInput = {
    idtipoinstalacao?: number
    tipoinstalacaonome: string
    laudo?: laudoUncheckedCreateNestedManyWithoutTipoinstalacaoInput
  }

  export type tipoinstalacaoUpdateInput = {
    tipoinstalacaonome?: StringFieldUpdateOperationsInput | string
    laudo?: laudoUpdateManyWithoutTipoinstalacaoNestedInput
  }

  export type tipoinstalacaoUncheckedUpdateInput = {
    idtipoinstalacao?: IntFieldUpdateOperationsInput | number
    tipoinstalacaonome?: StringFieldUpdateOperationsInput | string
    laudo?: laudoUncheckedUpdateManyWithoutTipoinstalacaoNestedInput
  }

  export type tipoinstalacaoCreateManyInput = {
    idtipoinstalacao?: number
    tipoinstalacaonome: string
  }

  export type tipoinstalacaoUpdateManyMutationInput = {
    tipoinstalacaonome?: StringFieldUpdateOperationsInput | string
  }

  export type tipoinstalacaoUncheckedUpdateManyInput = {
    idtipoinstalacao?: IntFieldUpdateOperationsInput | number
    tipoinstalacaonome?: StringFieldUpdateOperationsInput | string
  }

  export type tipolaudoCreateInput = {
    tipolaudonome: string
    tipolaudotemplate?: string | null
    laudo?: laudoCreateNestedManyWithoutTipolaudoInput
  }

  export type tipolaudoUncheckedCreateInput = {
    idtipolaudo?: number
    tipolaudonome: string
    tipolaudotemplate?: string | null
    laudo?: laudoUncheckedCreateNestedManyWithoutTipolaudoInput
  }

  export type tipolaudoUpdateInput = {
    tipolaudonome?: StringFieldUpdateOperationsInput | string
    tipolaudotemplate?: NullableStringFieldUpdateOperationsInput | string | null
    laudo?: laudoUpdateManyWithoutTipolaudoNestedInput
  }

  export type tipolaudoUncheckedUpdateInput = {
    idtipolaudo?: IntFieldUpdateOperationsInput | number
    tipolaudonome?: StringFieldUpdateOperationsInput | string
    tipolaudotemplate?: NullableStringFieldUpdateOperationsInput | string | null
    laudo?: laudoUncheckedUpdateManyWithoutTipolaudoNestedInput
  }

  export type tipolaudoCreateManyInput = {
    idtipolaudo?: number
    tipolaudonome: string
    tipolaudotemplate?: string | null
  }

  export type tipolaudoUpdateManyMutationInput = {
    tipolaudonome?: StringFieldUpdateOperationsInput | string
    tipolaudotemplate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tipolaudoUncheckedUpdateManyInput = {
    idtipolaudo?: IntFieldUpdateOperationsInput | number
    tipolaudonome?: StringFieldUpdateOperationsInput | string
    tipolaudotemplate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type laudoCreateInput = {
    laudodescricao: string
    laudohtmlmd: string
    laudodatainclusao?: Date | string
    laudofechamento?: Date | string | null
    laudostatus?: number
    laudoosclickup?: string | null
    tipoinstalacao: tipoinstalacaoCreateNestedOneWithoutLaudoInput
    tipolaudo: tipolaudoCreateNestedOneWithoutLaudoInput
  }

  export type laudoUncheckedCreateInput = {
    idlaudo?: number
    laudodescricao: string
    laudohtmlmd: string
    laudodatainclusao?: Date | string
    laudofechamento?: Date | string | null
    laudostatus?: number
    idtipolaudo: number
    idtipoinstalacao: number
    laudoosclickup?: string | null
  }

  export type laudoUpdateInput = {
    laudodescricao?: StringFieldUpdateOperationsInput | string
    laudohtmlmd?: StringFieldUpdateOperationsInput | string
    laudodatainclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    laudofechamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laudostatus?: IntFieldUpdateOperationsInput | number
    laudoosclickup?: NullableStringFieldUpdateOperationsInput | string | null
    tipoinstalacao?: tipoinstalacaoUpdateOneRequiredWithoutLaudoNestedInput
    tipolaudo?: tipolaudoUpdateOneRequiredWithoutLaudoNestedInput
  }

  export type laudoUncheckedUpdateInput = {
    idlaudo?: IntFieldUpdateOperationsInput | number
    laudodescricao?: StringFieldUpdateOperationsInput | string
    laudohtmlmd?: StringFieldUpdateOperationsInput | string
    laudodatainclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    laudofechamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laudostatus?: IntFieldUpdateOperationsInput | number
    idtipolaudo?: IntFieldUpdateOperationsInput | number
    idtipoinstalacao?: IntFieldUpdateOperationsInput | number
    laudoosclickup?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type laudoCreateManyInput = {
    idlaudo?: number
    laudodescricao: string
    laudohtmlmd: string
    laudodatainclusao?: Date | string
    laudofechamento?: Date | string | null
    laudostatus?: number
    idtipolaudo: number
    idtipoinstalacao: number
    laudoosclickup?: string | null
  }

  export type laudoUpdateManyMutationInput = {
    laudodescricao?: StringFieldUpdateOperationsInput | string
    laudohtmlmd?: StringFieldUpdateOperationsInput | string
    laudodatainclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    laudofechamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laudostatus?: IntFieldUpdateOperationsInput | number
    laudoosclickup?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type laudoUncheckedUpdateManyInput = {
    idlaudo?: IntFieldUpdateOperationsInput | number
    laudodescricao?: StringFieldUpdateOperationsInput | string
    laudohtmlmd?: StringFieldUpdateOperationsInput | string
    laudodatainclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    laudofechamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laudostatus?: IntFieldUpdateOperationsInput | number
    idtipolaudo?: IntFieldUpdateOperationsInput | number
    idtipoinstalacao?: IntFieldUpdateOperationsInput | number
    laudoosclickup?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SedeListRelationFilter = {
    every?: sedeWhereInput
    some?: sedeWhereInput
    none?: sedeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type sedeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    idcliente?: SortOrder
    clientenome?: SortOrder
    clientestatus?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    idcliente?: SortOrder
    clientestatus?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    idcliente?: SortOrder
    clientenome?: SortOrder
    clientestatus?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    idcliente?: SortOrder
    clientenome?: SortOrder
    clientestatus?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    idcliente?: SortOrder
    clientestatus?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnderecoListRelationFilter = {
    every?: enderecoWhereInput
    some?: enderecoWhereInput
    none?: enderecoWhereInput
  }

  export type EquipamentoListRelationFilter = {
    every?: equipamentoWhereInput
    some?: equipamentoWhereInput
    none?: equipamentoWhereInput
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type enderecoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type equipamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sedeCountOrderByAggregateInput = {
    idsede?: SortOrder
    sedenome?: SortOrder
    sedestatus?: SortOrder
    idcliente?: SortOrder
    sededtinclusao?: SortOrder
  }

  export type sedeAvgOrderByAggregateInput = {
    idsede?: SortOrder
    sedestatus?: SortOrder
    idcliente?: SortOrder
  }

  export type sedeMaxOrderByAggregateInput = {
    idsede?: SortOrder
    sedenome?: SortOrder
    sedestatus?: SortOrder
    idcliente?: SortOrder
    sededtinclusao?: SortOrder
  }

  export type sedeMinOrderByAggregateInput = {
    idsede?: SortOrder
    sedenome?: SortOrder
    sedestatus?: SortOrder
    idcliente?: SortOrder
    sededtinclusao?: SortOrder
  }

  export type sedeSumOrderByAggregateInput = {
    idsede?: SortOrder
    sedestatus?: SortOrder
    idcliente?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type SedeScalarRelationFilter = {
    is?: sedeWhereInput
    isNot?: sedeWhereInput
  }

  export type enderecoCountOrderByAggregateInput = {
    idendereco?: SortOrder
    enderecoendereco?: SortOrder
    enderecocep?: SortOrder
    enderecolat?: SortOrder
    enderecolon?: SortOrder
    enderecostatus?: SortOrder
    idsede?: SortOrder
  }

  export type enderecoAvgOrderByAggregateInput = {
    idendereco?: SortOrder
    enderecolat?: SortOrder
    enderecolon?: SortOrder
    enderecostatus?: SortOrder
    idsede?: SortOrder
  }

  export type enderecoMaxOrderByAggregateInput = {
    idendereco?: SortOrder
    enderecoendereco?: SortOrder
    enderecocep?: SortOrder
    enderecolat?: SortOrder
    enderecolon?: SortOrder
    enderecostatus?: SortOrder
    idsede?: SortOrder
  }

  export type enderecoMinOrderByAggregateInput = {
    idendereco?: SortOrder
    enderecoendereco?: SortOrder
    enderecocep?: SortOrder
    enderecolat?: SortOrder
    enderecolon?: SortOrder
    enderecostatus?: SortOrder
    idsede?: SortOrder
  }

  export type enderecoSumOrderByAggregateInput = {
    idendereco?: SortOrder
    enderecolat?: SortOrder
    enderecolon?: SortOrder
    enderecostatus?: SortOrder
    idsede?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type tipoeqCountOrderByAggregateInput = {
    idtipoeq?: SortOrder
    tipoeqnome?: SortOrder
  }

  export type tipoeqAvgOrderByAggregateInput = {
    idtipoeq?: SortOrder
  }

  export type tipoeqMaxOrderByAggregateInput = {
    idtipoeq?: SortOrder
    tipoeqnome?: SortOrder
  }

  export type tipoeqMinOrderByAggregateInput = {
    idtipoeq?: SortOrder
    tipoeqnome?: SortOrder
  }

  export type tipoeqSumOrderByAggregateInput = {
    idtipoeq?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type TipoeqScalarRelationFilter = {
    is?: tipoeqWhereInput
    isNot?: tipoeqWhereInput
  }

  export type equipamentoCountOrderByAggregateInput = {
    idequipamento?: SortOrder
    equipamentoserie?: SortOrder
    equipamentomodelo?: SortOrder
    equipamentomac?: SortOrder
    equipamentoipv4?: SortOrder
    equipamentoipv6?: SortOrder
    equipamentoanydesk?: SortOrder
    equipamentodw?: SortOrder
    equipamentoalugado?: SortOrder
    idsede?: SortOrder
    idtipoeq?: SortOrder
  }

  export type equipamentoAvgOrderByAggregateInput = {
    idequipamento?: SortOrder
    idsede?: SortOrder
    idtipoeq?: SortOrder
  }

  export type equipamentoMaxOrderByAggregateInput = {
    idequipamento?: SortOrder
    equipamentoserie?: SortOrder
    equipamentomodelo?: SortOrder
    equipamentomac?: SortOrder
    equipamentoipv4?: SortOrder
    equipamentoipv6?: SortOrder
    equipamentoanydesk?: SortOrder
    equipamentodw?: SortOrder
    equipamentoalugado?: SortOrder
    idsede?: SortOrder
    idtipoeq?: SortOrder
  }

  export type equipamentoMinOrderByAggregateInput = {
    idequipamento?: SortOrder
    equipamentoserie?: SortOrder
    equipamentomodelo?: SortOrder
    equipamentomac?: SortOrder
    equipamentoipv4?: SortOrder
    equipamentoipv6?: SortOrder
    equipamentoanydesk?: SortOrder
    equipamentodw?: SortOrder
    equipamentoalugado?: SortOrder
    idsede?: SortOrder
    idtipoeq?: SortOrder
  }

  export type equipamentoSumOrderByAggregateInput = {
    idequipamento?: SortOrder
    idsede?: SortOrder
    idtipoeq?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type LaudoListRelationFilter = {
    every?: laudoWhereInput
    some?: laudoWhereInput
    none?: laudoWhereInput
  }

  export type laudoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tipoinstalacaoCountOrderByAggregateInput = {
    idtipoinstalacao?: SortOrder
    tipoinstalacaonome?: SortOrder
  }

  export type tipoinstalacaoAvgOrderByAggregateInput = {
    idtipoinstalacao?: SortOrder
  }

  export type tipoinstalacaoMaxOrderByAggregateInput = {
    idtipoinstalacao?: SortOrder
    tipoinstalacaonome?: SortOrder
  }

  export type tipoinstalacaoMinOrderByAggregateInput = {
    idtipoinstalacao?: SortOrder
    tipoinstalacaonome?: SortOrder
  }

  export type tipoinstalacaoSumOrderByAggregateInput = {
    idtipoinstalacao?: SortOrder
  }

  export type tipolaudoCountOrderByAggregateInput = {
    idtipolaudo?: SortOrder
    tipolaudonome?: SortOrder
    tipolaudotemplate?: SortOrder
  }

  export type tipolaudoAvgOrderByAggregateInput = {
    idtipolaudo?: SortOrder
  }

  export type tipolaudoMaxOrderByAggregateInput = {
    idtipolaudo?: SortOrder
    tipolaudonome?: SortOrder
    tipolaudotemplate?: SortOrder
  }

  export type tipolaudoMinOrderByAggregateInput = {
    idtipolaudo?: SortOrder
    tipolaudonome?: SortOrder
    tipolaudotemplate?: SortOrder
  }

  export type tipolaudoSumOrderByAggregateInput = {
    idtipolaudo?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TipoinstalacaoScalarRelationFilter = {
    is?: tipoinstalacaoWhereInput
    isNot?: tipoinstalacaoWhereInput
  }

  export type TipolaudoScalarRelationFilter = {
    is?: tipolaudoWhereInput
    isNot?: tipolaudoWhereInput
  }

  export type laudoCountOrderByAggregateInput = {
    idlaudo?: SortOrder
    laudodescricao?: SortOrder
    laudohtmlmd?: SortOrder
    laudodatainclusao?: SortOrder
    laudofechamento?: SortOrder
    laudostatus?: SortOrder
    idtipolaudo?: SortOrder
    idtipoinstalacao?: SortOrder
    laudoosclickup?: SortOrder
  }

  export type laudoAvgOrderByAggregateInput = {
    idlaudo?: SortOrder
    laudostatus?: SortOrder
    idtipolaudo?: SortOrder
    idtipoinstalacao?: SortOrder
  }

  export type laudoMaxOrderByAggregateInput = {
    idlaudo?: SortOrder
    laudodescricao?: SortOrder
    laudohtmlmd?: SortOrder
    laudodatainclusao?: SortOrder
    laudofechamento?: SortOrder
    laudostatus?: SortOrder
    idtipolaudo?: SortOrder
    idtipoinstalacao?: SortOrder
    laudoosclickup?: SortOrder
  }

  export type laudoMinOrderByAggregateInput = {
    idlaudo?: SortOrder
    laudodescricao?: SortOrder
    laudohtmlmd?: SortOrder
    laudodatainclusao?: SortOrder
    laudofechamento?: SortOrder
    laudostatus?: SortOrder
    idtipolaudo?: SortOrder
    idtipoinstalacao?: SortOrder
    laudoosclickup?: SortOrder
  }

  export type laudoSumOrderByAggregateInput = {
    idlaudo?: SortOrder
    laudostatus?: SortOrder
    idtipolaudo?: SortOrder
    idtipoinstalacao?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type sedeCreateNestedManyWithoutClienteInput = {
    create?: XOR<sedeCreateWithoutClienteInput, sedeUncheckedCreateWithoutClienteInput> | sedeCreateWithoutClienteInput[] | sedeUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: sedeCreateOrConnectWithoutClienteInput | sedeCreateOrConnectWithoutClienteInput[]
    createMany?: sedeCreateManyClienteInputEnvelope
    connect?: sedeWhereUniqueInput | sedeWhereUniqueInput[]
  }

  export type sedeUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<sedeCreateWithoutClienteInput, sedeUncheckedCreateWithoutClienteInput> | sedeCreateWithoutClienteInput[] | sedeUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: sedeCreateOrConnectWithoutClienteInput | sedeCreateOrConnectWithoutClienteInput[]
    createMany?: sedeCreateManyClienteInputEnvelope
    connect?: sedeWhereUniqueInput | sedeWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type sedeUpdateManyWithoutClienteNestedInput = {
    create?: XOR<sedeCreateWithoutClienteInput, sedeUncheckedCreateWithoutClienteInput> | sedeCreateWithoutClienteInput[] | sedeUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: sedeCreateOrConnectWithoutClienteInput | sedeCreateOrConnectWithoutClienteInput[]
    upsert?: sedeUpsertWithWhereUniqueWithoutClienteInput | sedeUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: sedeCreateManyClienteInputEnvelope
    set?: sedeWhereUniqueInput | sedeWhereUniqueInput[]
    disconnect?: sedeWhereUniqueInput | sedeWhereUniqueInput[]
    delete?: sedeWhereUniqueInput | sedeWhereUniqueInput[]
    connect?: sedeWhereUniqueInput | sedeWhereUniqueInput[]
    update?: sedeUpdateWithWhereUniqueWithoutClienteInput | sedeUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: sedeUpdateManyWithWhereWithoutClienteInput | sedeUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: sedeScalarWhereInput | sedeScalarWhereInput[]
  }

  export type sedeUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<sedeCreateWithoutClienteInput, sedeUncheckedCreateWithoutClienteInput> | sedeCreateWithoutClienteInput[] | sedeUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: sedeCreateOrConnectWithoutClienteInput | sedeCreateOrConnectWithoutClienteInput[]
    upsert?: sedeUpsertWithWhereUniqueWithoutClienteInput | sedeUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: sedeCreateManyClienteInputEnvelope
    set?: sedeWhereUniqueInput | sedeWhereUniqueInput[]
    disconnect?: sedeWhereUniqueInput | sedeWhereUniqueInput[]
    delete?: sedeWhereUniqueInput | sedeWhereUniqueInput[]
    connect?: sedeWhereUniqueInput | sedeWhereUniqueInput[]
    update?: sedeUpdateWithWhereUniqueWithoutClienteInput | sedeUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: sedeUpdateManyWithWhereWithoutClienteInput | sedeUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: sedeScalarWhereInput | sedeScalarWhereInput[]
  }

  export type enderecoCreateNestedManyWithoutSedeInput = {
    create?: XOR<enderecoCreateWithoutSedeInput, enderecoUncheckedCreateWithoutSedeInput> | enderecoCreateWithoutSedeInput[] | enderecoUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: enderecoCreateOrConnectWithoutSedeInput | enderecoCreateOrConnectWithoutSedeInput[]
    createMany?: enderecoCreateManySedeInputEnvelope
    connect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
  }

  export type equipamentoCreateNestedManyWithoutSedeInput = {
    create?: XOR<equipamentoCreateWithoutSedeInput, equipamentoUncheckedCreateWithoutSedeInput> | equipamentoCreateWithoutSedeInput[] | equipamentoUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutSedeInput | equipamentoCreateOrConnectWithoutSedeInput[]
    createMany?: equipamentoCreateManySedeInputEnvelope
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
  }

  export type ClienteCreateNestedOneWithoutSedeInput = {
    create?: XOR<ClienteCreateWithoutSedeInput, ClienteUncheckedCreateWithoutSedeInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutSedeInput
    connect?: ClienteWhereUniqueInput
  }

  export type enderecoUncheckedCreateNestedManyWithoutSedeInput = {
    create?: XOR<enderecoCreateWithoutSedeInput, enderecoUncheckedCreateWithoutSedeInput> | enderecoCreateWithoutSedeInput[] | enderecoUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: enderecoCreateOrConnectWithoutSedeInput | enderecoCreateOrConnectWithoutSedeInput[]
    createMany?: enderecoCreateManySedeInputEnvelope
    connect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
  }

  export type equipamentoUncheckedCreateNestedManyWithoutSedeInput = {
    create?: XOR<equipamentoCreateWithoutSedeInput, equipamentoUncheckedCreateWithoutSedeInput> | equipamentoCreateWithoutSedeInput[] | equipamentoUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutSedeInput | equipamentoCreateOrConnectWithoutSedeInput[]
    createMany?: equipamentoCreateManySedeInputEnvelope
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type enderecoUpdateManyWithoutSedeNestedInput = {
    create?: XOR<enderecoCreateWithoutSedeInput, enderecoUncheckedCreateWithoutSedeInput> | enderecoCreateWithoutSedeInput[] | enderecoUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: enderecoCreateOrConnectWithoutSedeInput | enderecoCreateOrConnectWithoutSedeInput[]
    upsert?: enderecoUpsertWithWhereUniqueWithoutSedeInput | enderecoUpsertWithWhereUniqueWithoutSedeInput[]
    createMany?: enderecoCreateManySedeInputEnvelope
    set?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    disconnect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    delete?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    connect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    update?: enderecoUpdateWithWhereUniqueWithoutSedeInput | enderecoUpdateWithWhereUniqueWithoutSedeInput[]
    updateMany?: enderecoUpdateManyWithWhereWithoutSedeInput | enderecoUpdateManyWithWhereWithoutSedeInput[]
    deleteMany?: enderecoScalarWhereInput | enderecoScalarWhereInput[]
  }

  export type equipamentoUpdateManyWithoutSedeNestedInput = {
    create?: XOR<equipamentoCreateWithoutSedeInput, equipamentoUncheckedCreateWithoutSedeInput> | equipamentoCreateWithoutSedeInput[] | equipamentoUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutSedeInput | equipamentoCreateOrConnectWithoutSedeInput[]
    upsert?: equipamentoUpsertWithWhereUniqueWithoutSedeInput | equipamentoUpsertWithWhereUniqueWithoutSedeInput[]
    createMany?: equipamentoCreateManySedeInputEnvelope
    set?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    disconnect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    delete?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    update?: equipamentoUpdateWithWhereUniqueWithoutSedeInput | equipamentoUpdateWithWhereUniqueWithoutSedeInput[]
    updateMany?: equipamentoUpdateManyWithWhereWithoutSedeInput | equipamentoUpdateManyWithWhereWithoutSedeInput[]
    deleteMany?: equipamentoScalarWhereInput | equipamentoScalarWhereInput[]
  }

  export type ClienteUpdateOneRequiredWithoutSedeNestedInput = {
    create?: XOR<ClienteCreateWithoutSedeInput, ClienteUncheckedCreateWithoutSedeInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutSedeInput
    upsert?: ClienteUpsertWithoutSedeInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutSedeInput, ClienteUpdateWithoutSedeInput>, ClienteUncheckedUpdateWithoutSedeInput>
  }

  export type enderecoUncheckedUpdateManyWithoutSedeNestedInput = {
    create?: XOR<enderecoCreateWithoutSedeInput, enderecoUncheckedCreateWithoutSedeInput> | enderecoCreateWithoutSedeInput[] | enderecoUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: enderecoCreateOrConnectWithoutSedeInput | enderecoCreateOrConnectWithoutSedeInput[]
    upsert?: enderecoUpsertWithWhereUniqueWithoutSedeInput | enderecoUpsertWithWhereUniqueWithoutSedeInput[]
    createMany?: enderecoCreateManySedeInputEnvelope
    set?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    disconnect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    delete?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    connect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    update?: enderecoUpdateWithWhereUniqueWithoutSedeInput | enderecoUpdateWithWhereUniqueWithoutSedeInput[]
    updateMany?: enderecoUpdateManyWithWhereWithoutSedeInput | enderecoUpdateManyWithWhereWithoutSedeInput[]
    deleteMany?: enderecoScalarWhereInput | enderecoScalarWhereInput[]
  }

  export type equipamentoUncheckedUpdateManyWithoutSedeNestedInput = {
    create?: XOR<equipamentoCreateWithoutSedeInput, equipamentoUncheckedCreateWithoutSedeInput> | equipamentoCreateWithoutSedeInput[] | equipamentoUncheckedCreateWithoutSedeInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutSedeInput | equipamentoCreateOrConnectWithoutSedeInput[]
    upsert?: equipamentoUpsertWithWhereUniqueWithoutSedeInput | equipamentoUpsertWithWhereUniqueWithoutSedeInput[]
    createMany?: equipamentoCreateManySedeInputEnvelope
    set?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    disconnect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    delete?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    update?: equipamentoUpdateWithWhereUniqueWithoutSedeInput | equipamentoUpdateWithWhereUniqueWithoutSedeInput[]
    updateMany?: equipamentoUpdateManyWithWhereWithoutSedeInput | equipamentoUpdateManyWithWhereWithoutSedeInput[]
    deleteMany?: equipamentoScalarWhereInput | equipamentoScalarWhereInput[]
  }

  export type sedeCreateNestedOneWithoutEnderecoInput = {
    create?: XOR<sedeCreateWithoutEnderecoInput, sedeUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: sedeCreateOrConnectWithoutEnderecoInput
    connect?: sedeWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type sedeUpdateOneRequiredWithoutEnderecoNestedInput = {
    create?: XOR<sedeCreateWithoutEnderecoInput, sedeUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: sedeCreateOrConnectWithoutEnderecoInput
    upsert?: sedeUpsertWithoutEnderecoInput
    connect?: sedeWhereUniqueInput
    update?: XOR<XOR<sedeUpdateToOneWithWhereWithoutEnderecoInput, sedeUpdateWithoutEnderecoInput>, sedeUncheckedUpdateWithoutEnderecoInput>
  }

  export type equipamentoCreateNestedManyWithoutTipoeqInput = {
    create?: XOR<equipamentoCreateWithoutTipoeqInput, equipamentoUncheckedCreateWithoutTipoeqInput> | equipamentoCreateWithoutTipoeqInput[] | equipamentoUncheckedCreateWithoutTipoeqInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutTipoeqInput | equipamentoCreateOrConnectWithoutTipoeqInput[]
    createMany?: equipamentoCreateManyTipoeqInputEnvelope
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
  }

  export type equipamentoUncheckedCreateNestedManyWithoutTipoeqInput = {
    create?: XOR<equipamentoCreateWithoutTipoeqInput, equipamentoUncheckedCreateWithoutTipoeqInput> | equipamentoCreateWithoutTipoeqInput[] | equipamentoUncheckedCreateWithoutTipoeqInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutTipoeqInput | equipamentoCreateOrConnectWithoutTipoeqInput[]
    createMany?: equipamentoCreateManyTipoeqInputEnvelope
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
  }

  export type equipamentoUpdateManyWithoutTipoeqNestedInput = {
    create?: XOR<equipamentoCreateWithoutTipoeqInput, equipamentoUncheckedCreateWithoutTipoeqInput> | equipamentoCreateWithoutTipoeqInput[] | equipamentoUncheckedCreateWithoutTipoeqInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutTipoeqInput | equipamentoCreateOrConnectWithoutTipoeqInput[]
    upsert?: equipamentoUpsertWithWhereUniqueWithoutTipoeqInput | equipamentoUpsertWithWhereUniqueWithoutTipoeqInput[]
    createMany?: equipamentoCreateManyTipoeqInputEnvelope
    set?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    disconnect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    delete?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    update?: equipamentoUpdateWithWhereUniqueWithoutTipoeqInput | equipamentoUpdateWithWhereUniqueWithoutTipoeqInput[]
    updateMany?: equipamentoUpdateManyWithWhereWithoutTipoeqInput | equipamentoUpdateManyWithWhereWithoutTipoeqInput[]
    deleteMany?: equipamentoScalarWhereInput | equipamentoScalarWhereInput[]
  }

  export type equipamentoUncheckedUpdateManyWithoutTipoeqNestedInput = {
    create?: XOR<equipamentoCreateWithoutTipoeqInput, equipamentoUncheckedCreateWithoutTipoeqInput> | equipamentoCreateWithoutTipoeqInput[] | equipamentoUncheckedCreateWithoutTipoeqInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutTipoeqInput | equipamentoCreateOrConnectWithoutTipoeqInput[]
    upsert?: equipamentoUpsertWithWhereUniqueWithoutTipoeqInput | equipamentoUpsertWithWhereUniqueWithoutTipoeqInput[]
    createMany?: equipamentoCreateManyTipoeqInputEnvelope
    set?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    disconnect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    delete?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    update?: equipamentoUpdateWithWhereUniqueWithoutTipoeqInput | equipamentoUpdateWithWhereUniqueWithoutTipoeqInput[]
    updateMany?: equipamentoUpdateManyWithWhereWithoutTipoeqInput | equipamentoUpdateManyWithWhereWithoutTipoeqInput[]
    deleteMany?: equipamentoScalarWhereInput | equipamentoScalarWhereInput[]
  }

  export type sedeCreateNestedOneWithoutEquipamentoInput = {
    create?: XOR<sedeCreateWithoutEquipamentoInput, sedeUncheckedCreateWithoutEquipamentoInput>
    connectOrCreate?: sedeCreateOrConnectWithoutEquipamentoInput
    connect?: sedeWhereUniqueInput
  }

  export type tipoeqCreateNestedOneWithoutEquipamentoInput = {
    create?: XOR<tipoeqCreateWithoutEquipamentoInput, tipoeqUncheckedCreateWithoutEquipamentoInput>
    connectOrCreate?: tipoeqCreateOrConnectWithoutEquipamentoInput
    connect?: tipoeqWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type sedeUpdateOneRequiredWithoutEquipamentoNestedInput = {
    create?: XOR<sedeCreateWithoutEquipamentoInput, sedeUncheckedCreateWithoutEquipamentoInput>
    connectOrCreate?: sedeCreateOrConnectWithoutEquipamentoInput
    upsert?: sedeUpsertWithoutEquipamentoInput
    connect?: sedeWhereUniqueInput
    update?: XOR<XOR<sedeUpdateToOneWithWhereWithoutEquipamentoInput, sedeUpdateWithoutEquipamentoInput>, sedeUncheckedUpdateWithoutEquipamentoInput>
  }

  export type tipoeqUpdateOneRequiredWithoutEquipamentoNestedInput = {
    create?: XOR<tipoeqCreateWithoutEquipamentoInput, tipoeqUncheckedCreateWithoutEquipamentoInput>
    connectOrCreate?: tipoeqCreateOrConnectWithoutEquipamentoInput
    upsert?: tipoeqUpsertWithoutEquipamentoInput
    connect?: tipoeqWhereUniqueInput
    update?: XOR<XOR<tipoeqUpdateToOneWithWhereWithoutEquipamentoInput, tipoeqUpdateWithoutEquipamentoInput>, tipoeqUncheckedUpdateWithoutEquipamentoInput>
  }

  export type laudoCreateNestedManyWithoutTipoinstalacaoInput = {
    create?: XOR<laudoCreateWithoutTipoinstalacaoInput, laudoUncheckedCreateWithoutTipoinstalacaoInput> | laudoCreateWithoutTipoinstalacaoInput[] | laudoUncheckedCreateWithoutTipoinstalacaoInput[]
    connectOrCreate?: laudoCreateOrConnectWithoutTipoinstalacaoInput | laudoCreateOrConnectWithoutTipoinstalacaoInput[]
    createMany?: laudoCreateManyTipoinstalacaoInputEnvelope
    connect?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
  }

  export type laudoUncheckedCreateNestedManyWithoutTipoinstalacaoInput = {
    create?: XOR<laudoCreateWithoutTipoinstalacaoInput, laudoUncheckedCreateWithoutTipoinstalacaoInput> | laudoCreateWithoutTipoinstalacaoInput[] | laudoUncheckedCreateWithoutTipoinstalacaoInput[]
    connectOrCreate?: laudoCreateOrConnectWithoutTipoinstalacaoInput | laudoCreateOrConnectWithoutTipoinstalacaoInput[]
    createMany?: laudoCreateManyTipoinstalacaoInputEnvelope
    connect?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
  }

  export type laudoUpdateManyWithoutTipoinstalacaoNestedInput = {
    create?: XOR<laudoCreateWithoutTipoinstalacaoInput, laudoUncheckedCreateWithoutTipoinstalacaoInput> | laudoCreateWithoutTipoinstalacaoInput[] | laudoUncheckedCreateWithoutTipoinstalacaoInput[]
    connectOrCreate?: laudoCreateOrConnectWithoutTipoinstalacaoInput | laudoCreateOrConnectWithoutTipoinstalacaoInput[]
    upsert?: laudoUpsertWithWhereUniqueWithoutTipoinstalacaoInput | laudoUpsertWithWhereUniqueWithoutTipoinstalacaoInput[]
    createMany?: laudoCreateManyTipoinstalacaoInputEnvelope
    set?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    disconnect?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    delete?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    connect?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    update?: laudoUpdateWithWhereUniqueWithoutTipoinstalacaoInput | laudoUpdateWithWhereUniqueWithoutTipoinstalacaoInput[]
    updateMany?: laudoUpdateManyWithWhereWithoutTipoinstalacaoInput | laudoUpdateManyWithWhereWithoutTipoinstalacaoInput[]
    deleteMany?: laudoScalarWhereInput | laudoScalarWhereInput[]
  }

  export type laudoUncheckedUpdateManyWithoutTipoinstalacaoNestedInput = {
    create?: XOR<laudoCreateWithoutTipoinstalacaoInput, laudoUncheckedCreateWithoutTipoinstalacaoInput> | laudoCreateWithoutTipoinstalacaoInput[] | laudoUncheckedCreateWithoutTipoinstalacaoInput[]
    connectOrCreate?: laudoCreateOrConnectWithoutTipoinstalacaoInput | laudoCreateOrConnectWithoutTipoinstalacaoInput[]
    upsert?: laudoUpsertWithWhereUniqueWithoutTipoinstalacaoInput | laudoUpsertWithWhereUniqueWithoutTipoinstalacaoInput[]
    createMany?: laudoCreateManyTipoinstalacaoInputEnvelope
    set?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    disconnect?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    delete?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    connect?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    update?: laudoUpdateWithWhereUniqueWithoutTipoinstalacaoInput | laudoUpdateWithWhereUniqueWithoutTipoinstalacaoInput[]
    updateMany?: laudoUpdateManyWithWhereWithoutTipoinstalacaoInput | laudoUpdateManyWithWhereWithoutTipoinstalacaoInput[]
    deleteMany?: laudoScalarWhereInput | laudoScalarWhereInput[]
  }

  export type laudoCreateNestedManyWithoutTipolaudoInput = {
    create?: XOR<laudoCreateWithoutTipolaudoInput, laudoUncheckedCreateWithoutTipolaudoInput> | laudoCreateWithoutTipolaudoInput[] | laudoUncheckedCreateWithoutTipolaudoInput[]
    connectOrCreate?: laudoCreateOrConnectWithoutTipolaudoInput | laudoCreateOrConnectWithoutTipolaudoInput[]
    createMany?: laudoCreateManyTipolaudoInputEnvelope
    connect?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
  }

  export type laudoUncheckedCreateNestedManyWithoutTipolaudoInput = {
    create?: XOR<laudoCreateWithoutTipolaudoInput, laudoUncheckedCreateWithoutTipolaudoInput> | laudoCreateWithoutTipolaudoInput[] | laudoUncheckedCreateWithoutTipolaudoInput[]
    connectOrCreate?: laudoCreateOrConnectWithoutTipolaudoInput | laudoCreateOrConnectWithoutTipolaudoInput[]
    createMany?: laudoCreateManyTipolaudoInputEnvelope
    connect?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
  }

  export type laudoUpdateManyWithoutTipolaudoNestedInput = {
    create?: XOR<laudoCreateWithoutTipolaudoInput, laudoUncheckedCreateWithoutTipolaudoInput> | laudoCreateWithoutTipolaudoInput[] | laudoUncheckedCreateWithoutTipolaudoInput[]
    connectOrCreate?: laudoCreateOrConnectWithoutTipolaudoInput | laudoCreateOrConnectWithoutTipolaudoInput[]
    upsert?: laudoUpsertWithWhereUniqueWithoutTipolaudoInput | laudoUpsertWithWhereUniqueWithoutTipolaudoInput[]
    createMany?: laudoCreateManyTipolaudoInputEnvelope
    set?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    disconnect?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    delete?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    connect?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    update?: laudoUpdateWithWhereUniqueWithoutTipolaudoInput | laudoUpdateWithWhereUniqueWithoutTipolaudoInput[]
    updateMany?: laudoUpdateManyWithWhereWithoutTipolaudoInput | laudoUpdateManyWithWhereWithoutTipolaudoInput[]
    deleteMany?: laudoScalarWhereInput | laudoScalarWhereInput[]
  }

  export type laudoUncheckedUpdateManyWithoutTipolaudoNestedInput = {
    create?: XOR<laudoCreateWithoutTipolaudoInput, laudoUncheckedCreateWithoutTipolaudoInput> | laudoCreateWithoutTipolaudoInput[] | laudoUncheckedCreateWithoutTipolaudoInput[]
    connectOrCreate?: laudoCreateOrConnectWithoutTipolaudoInput | laudoCreateOrConnectWithoutTipolaudoInput[]
    upsert?: laudoUpsertWithWhereUniqueWithoutTipolaudoInput | laudoUpsertWithWhereUniqueWithoutTipolaudoInput[]
    createMany?: laudoCreateManyTipolaudoInputEnvelope
    set?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    disconnect?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    delete?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    connect?: laudoWhereUniqueInput | laudoWhereUniqueInput[]
    update?: laudoUpdateWithWhereUniqueWithoutTipolaudoInput | laudoUpdateWithWhereUniqueWithoutTipolaudoInput[]
    updateMany?: laudoUpdateManyWithWhereWithoutTipolaudoInput | laudoUpdateManyWithWhereWithoutTipolaudoInput[]
    deleteMany?: laudoScalarWhereInput | laudoScalarWhereInput[]
  }

  export type tipoinstalacaoCreateNestedOneWithoutLaudoInput = {
    create?: XOR<tipoinstalacaoCreateWithoutLaudoInput, tipoinstalacaoUncheckedCreateWithoutLaudoInput>
    connectOrCreate?: tipoinstalacaoCreateOrConnectWithoutLaudoInput
    connect?: tipoinstalacaoWhereUniqueInput
  }

  export type tipolaudoCreateNestedOneWithoutLaudoInput = {
    create?: XOR<tipolaudoCreateWithoutLaudoInput, tipolaudoUncheckedCreateWithoutLaudoInput>
    connectOrCreate?: tipolaudoCreateOrConnectWithoutLaudoInput
    connect?: tipolaudoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tipoinstalacaoUpdateOneRequiredWithoutLaudoNestedInput = {
    create?: XOR<tipoinstalacaoCreateWithoutLaudoInput, tipoinstalacaoUncheckedCreateWithoutLaudoInput>
    connectOrCreate?: tipoinstalacaoCreateOrConnectWithoutLaudoInput
    upsert?: tipoinstalacaoUpsertWithoutLaudoInput
    connect?: tipoinstalacaoWhereUniqueInput
    update?: XOR<XOR<tipoinstalacaoUpdateToOneWithWhereWithoutLaudoInput, tipoinstalacaoUpdateWithoutLaudoInput>, tipoinstalacaoUncheckedUpdateWithoutLaudoInput>
  }

  export type tipolaudoUpdateOneRequiredWithoutLaudoNestedInput = {
    create?: XOR<tipolaudoCreateWithoutLaudoInput, tipolaudoUncheckedCreateWithoutLaudoInput>
    connectOrCreate?: tipolaudoCreateOrConnectWithoutLaudoInput
    upsert?: tipolaudoUpsertWithoutLaudoInput
    connect?: tipolaudoWhereUniqueInput
    update?: XOR<XOR<tipolaudoUpdateToOneWithWhereWithoutLaudoInput, tipolaudoUpdateWithoutLaudoInput>, tipolaudoUncheckedUpdateWithoutLaudoInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type sedeCreateWithoutClienteInput = {
    sedenome: string
    sedestatus?: number
    sededtinclusao?: Date | string | null
    endereco?: enderecoCreateNestedManyWithoutSedeInput
    equipamento?: equipamentoCreateNestedManyWithoutSedeInput
  }

  export type sedeUncheckedCreateWithoutClienteInput = {
    idsede?: number
    sedenome: string
    sedestatus?: number
    sededtinclusao?: Date | string | null
    endereco?: enderecoUncheckedCreateNestedManyWithoutSedeInput
    equipamento?: equipamentoUncheckedCreateNestedManyWithoutSedeInput
  }

  export type sedeCreateOrConnectWithoutClienteInput = {
    where: sedeWhereUniqueInput
    create: XOR<sedeCreateWithoutClienteInput, sedeUncheckedCreateWithoutClienteInput>
  }

  export type sedeCreateManyClienteInputEnvelope = {
    data: sedeCreateManyClienteInput | sedeCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type sedeUpsertWithWhereUniqueWithoutClienteInput = {
    where: sedeWhereUniqueInput
    update: XOR<sedeUpdateWithoutClienteInput, sedeUncheckedUpdateWithoutClienteInput>
    create: XOR<sedeCreateWithoutClienteInput, sedeUncheckedCreateWithoutClienteInput>
  }

  export type sedeUpdateWithWhereUniqueWithoutClienteInput = {
    where: sedeWhereUniqueInput
    data: XOR<sedeUpdateWithoutClienteInput, sedeUncheckedUpdateWithoutClienteInput>
  }

  export type sedeUpdateManyWithWhereWithoutClienteInput = {
    where: sedeScalarWhereInput
    data: XOR<sedeUpdateManyMutationInput, sedeUncheckedUpdateManyWithoutClienteInput>
  }

  export type sedeScalarWhereInput = {
    AND?: sedeScalarWhereInput | sedeScalarWhereInput[]
    OR?: sedeScalarWhereInput[]
    NOT?: sedeScalarWhereInput | sedeScalarWhereInput[]
    idsede?: IntFilter<"sede"> | number
    sedenome?: StringFilter<"sede"> | string
    sedestatus?: IntFilter<"sede"> | number
    idcliente?: BigIntFilter<"sede"> | bigint | number
    sededtinclusao?: DateTimeNullableFilter<"sede"> | Date | string | null
  }

  export type enderecoCreateWithoutSedeInput = {
    enderecoendereco: string
    enderecocep: string
    enderecolat?: Decimal | DecimalJsLike | number | string | null
    enderecolon?: Decimal | DecimalJsLike | number | string | null
    enderecostatus?: number | null
  }

  export type enderecoUncheckedCreateWithoutSedeInput = {
    idendereco?: number
    enderecoendereco: string
    enderecocep: string
    enderecolat?: Decimal | DecimalJsLike | number | string | null
    enderecolon?: Decimal | DecimalJsLike | number | string | null
    enderecostatus?: number | null
  }

  export type enderecoCreateOrConnectWithoutSedeInput = {
    where: enderecoWhereUniqueInput
    create: XOR<enderecoCreateWithoutSedeInput, enderecoUncheckedCreateWithoutSedeInput>
  }

  export type enderecoCreateManySedeInputEnvelope = {
    data: enderecoCreateManySedeInput | enderecoCreateManySedeInput[]
    skipDuplicates?: boolean
  }

  export type equipamentoCreateWithoutSedeInput = {
    equipamentoserie?: string | null
    equipamentomodelo?: string | null
    equipamentomac?: string | null
    equipamentoipv4?: string | null
    equipamentoipv6?: string | null
    equipamentoanydesk?: string | null
    equipamentodw?: string | null
    equipamentoalugado?: boolean | null
    tipoeq: tipoeqCreateNestedOneWithoutEquipamentoInput
  }

  export type equipamentoUncheckedCreateWithoutSedeInput = {
    idequipamento?: number
    equipamentoserie?: string | null
    equipamentomodelo?: string | null
    equipamentomac?: string | null
    equipamentoipv4?: string | null
    equipamentoipv6?: string | null
    equipamentoanydesk?: string | null
    equipamentodw?: string | null
    equipamentoalugado?: boolean | null
    idtipoeq: number
  }

  export type equipamentoCreateOrConnectWithoutSedeInput = {
    where: equipamentoWhereUniqueInput
    create: XOR<equipamentoCreateWithoutSedeInput, equipamentoUncheckedCreateWithoutSedeInput>
  }

  export type equipamentoCreateManySedeInputEnvelope = {
    data: equipamentoCreateManySedeInput | equipamentoCreateManySedeInput[]
    skipDuplicates?: boolean
  }

  export type ClienteCreateWithoutSedeInput = {
    idcliente?: bigint | number
    clientenome: string
    clientestatus?: number | null
  }

  export type ClienteUncheckedCreateWithoutSedeInput = {
    idcliente?: bigint | number
    clientenome: string
    clientestatus?: number | null
  }

  export type ClienteCreateOrConnectWithoutSedeInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutSedeInput, ClienteUncheckedCreateWithoutSedeInput>
  }

  export type enderecoUpsertWithWhereUniqueWithoutSedeInput = {
    where: enderecoWhereUniqueInput
    update: XOR<enderecoUpdateWithoutSedeInput, enderecoUncheckedUpdateWithoutSedeInput>
    create: XOR<enderecoCreateWithoutSedeInput, enderecoUncheckedCreateWithoutSedeInput>
  }

  export type enderecoUpdateWithWhereUniqueWithoutSedeInput = {
    where: enderecoWhereUniqueInput
    data: XOR<enderecoUpdateWithoutSedeInput, enderecoUncheckedUpdateWithoutSedeInput>
  }

  export type enderecoUpdateManyWithWhereWithoutSedeInput = {
    where: enderecoScalarWhereInput
    data: XOR<enderecoUpdateManyMutationInput, enderecoUncheckedUpdateManyWithoutSedeInput>
  }

  export type enderecoScalarWhereInput = {
    AND?: enderecoScalarWhereInput | enderecoScalarWhereInput[]
    OR?: enderecoScalarWhereInput[]
    NOT?: enderecoScalarWhereInput | enderecoScalarWhereInput[]
    idendereco?: IntFilter<"endereco"> | number
    enderecoendereco?: StringFilter<"endereco"> | string
    enderecocep?: StringFilter<"endereco"> | string
    enderecolat?: DecimalNullableFilter<"endereco"> | Decimal | DecimalJsLike | number | string | null
    enderecolon?: DecimalNullableFilter<"endereco"> | Decimal | DecimalJsLike | number | string | null
    enderecostatus?: IntNullableFilter<"endereco"> | number | null
    idsede?: IntFilter<"endereco"> | number
  }

  export type equipamentoUpsertWithWhereUniqueWithoutSedeInput = {
    where: equipamentoWhereUniqueInput
    update: XOR<equipamentoUpdateWithoutSedeInput, equipamentoUncheckedUpdateWithoutSedeInput>
    create: XOR<equipamentoCreateWithoutSedeInput, equipamentoUncheckedCreateWithoutSedeInput>
  }

  export type equipamentoUpdateWithWhereUniqueWithoutSedeInput = {
    where: equipamentoWhereUniqueInput
    data: XOR<equipamentoUpdateWithoutSedeInput, equipamentoUncheckedUpdateWithoutSedeInput>
  }

  export type equipamentoUpdateManyWithWhereWithoutSedeInput = {
    where: equipamentoScalarWhereInput
    data: XOR<equipamentoUpdateManyMutationInput, equipamentoUncheckedUpdateManyWithoutSedeInput>
  }

  export type equipamentoScalarWhereInput = {
    AND?: equipamentoScalarWhereInput | equipamentoScalarWhereInput[]
    OR?: equipamentoScalarWhereInput[]
    NOT?: equipamentoScalarWhereInput | equipamentoScalarWhereInput[]
    idequipamento?: IntFilter<"equipamento"> | number
    equipamentoserie?: StringNullableFilter<"equipamento"> | string | null
    equipamentomodelo?: StringNullableFilter<"equipamento"> | string | null
    equipamentomac?: StringNullableFilter<"equipamento"> | string | null
    equipamentoipv4?: StringNullableFilter<"equipamento"> | string | null
    equipamentoipv6?: StringNullableFilter<"equipamento"> | string | null
    equipamentoanydesk?: StringNullableFilter<"equipamento"> | string | null
    equipamentodw?: StringNullableFilter<"equipamento"> | string | null
    equipamentoalugado?: BoolNullableFilter<"equipamento"> | boolean | null
    idsede?: IntFilter<"equipamento"> | number
    idtipoeq?: IntFilter<"equipamento"> | number
  }

  export type ClienteUpsertWithoutSedeInput = {
    update: XOR<ClienteUpdateWithoutSedeInput, ClienteUncheckedUpdateWithoutSedeInput>
    create: XOR<ClienteCreateWithoutSedeInput, ClienteUncheckedCreateWithoutSedeInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutSedeInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutSedeInput, ClienteUncheckedUpdateWithoutSedeInput>
  }

  export type ClienteUpdateWithoutSedeInput = {
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    clientenome?: StringFieldUpdateOperationsInput | string
    clientestatus?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClienteUncheckedUpdateWithoutSedeInput = {
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    clientenome?: StringFieldUpdateOperationsInput | string
    clientestatus?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type sedeCreateWithoutEnderecoInput = {
    sedenome: string
    sedestatus?: number
    sededtinclusao?: Date | string | null
    equipamento?: equipamentoCreateNestedManyWithoutSedeInput
    cliente: ClienteCreateNestedOneWithoutSedeInput
  }

  export type sedeUncheckedCreateWithoutEnderecoInput = {
    idsede?: number
    sedenome: string
    sedestatus?: number
    idcliente: bigint | number
    sededtinclusao?: Date | string | null
    equipamento?: equipamentoUncheckedCreateNestedManyWithoutSedeInput
  }

  export type sedeCreateOrConnectWithoutEnderecoInput = {
    where: sedeWhereUniqueInput
    create: XOR<sedeCreateWithoutEnderecoInput, sedeUncheckedCreateWithoutEnderecoInput>
  }

  export type sedeUpsertWithoutEnderecoInput = {
    update: XOR<sedeUpdateWithoutEnderecoInput, sedeUncheckedUpdateWithoutEnderecoInput>
    create: XOR<sedeCreateWithoutEnderecoInput, sedeUncheckedCreateWithoutEnderecoInput>
    where?: sedeWhereInput
  }

  export type sedeUpdateToOneWithWhereWithoutEnderecoInput = {
    where?: sedeWhereInput
    data: XOR<sedeUpdateWithoutEnderecoInput, sedeUncheckedUpdateWithoutEnderecoInput>
  }

  export type sedeUpdateWithoutEnderecoInput = {
    sedenome?: StringFieldUpdateOperationsInput | string
    sedestatus?: IntFieldUpdateOperationsInput | number
    sededtinclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    equipamento?: equipamentoUpdateManyWithoutSedeNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutSedeNestedInput
  }

  export type sedeUncheckedUpdateWithoutEnderecoInput = {
    idsede?: IntFieldUpdateOperationsInput | number
    sedenome?: StringFieldUpdateOperationsInput | string
    sedestatus?: IntFieldUpdateOperationsInput | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    sededtinclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    equipamento?: equipamentoUncheckedUpdateManyWithoutSedeNestedInput
  }

  export type equipamentoCreateWithoutTipoeqInput = {
    equipamentoserie?: string | null
    equipamentomodelo?: string | null
    equipamentomac?: string | null
    equipamentoipv4?: string | null
    equipamentoipv6?: string | null
    equipamentoanydesk?: string | null
    equipamentodw?: string | null
    equipamentoalugado?: boolean | null
    sede: sedeCreateNestedOneWithoutEquipamentoInput
  }

  export type equipamentoUncheckedCreateWithoutTipoeqInput = {
    idequipamento?: number
    equipamentoserie?: string | null
    equipamentomodelo?: string | null
    equipamentomac?: string | null
    equipamentoipv4?: string | null
    equipamentoipv6?: string | null
    equipamentoanydesk?: string | null
    equipamentodw?: string | null
    equipamentoalugado?: boolean | null
    idsede: number
  }

  export type equipamentoCreateOrConnectWithoutTipoeqInput = {
    where: equipamentoWhereUniqueInput
    create: XOR<equipamentoCreateWithoutTipoeqInput, equipamentoUncheckedCreateWithoutTipoeqInput>
  }

  export type equipamentoCreateManyTipoeqInputEnvelope = {
    data: equipamentoCreateManyTipoeqInput | equipamentoCreateManyTipoeqInput[]
    skipDuplicates?: boolean
  }

  export type equipamentoUpsertWithWhereUniqueWithoutTipoeqInput = {
    where: equipamentoWhereUniqueInput
    update: XOR<equipamentoUpdateWithoutTipoeqInput, equipamentoUncheckedUpdateWithoutTipoeqInput>
    create: XOR<equipamentoCreateWithoutTipoeqInput, equipamentoUncheckedCreateWithoutTipoeqInput>
  }

  export type equipamentoUpdateWithWhereUniqueWithoutTipoeqInput = {
    where: equipamentoWhereUniqueInput
    data: XOR<equipamentoUpdateWithoutTipoeqInput, equipamentoUncheckedUpdateWithoutTipoeqInput>
  }

  export type equipamentoUpdateManyWithWhereWithoutTipoeqInput = {
    where: equipamentoScalarWhereInput
    data: XOR<equipamentoUpdateManyMutationInput, equipamentoUncheckedUpdateManyWithoutTipoeqInput>
  }

  export type sedeCreateWithoutEquipamentoInput = {
    sedenome: string
    sedestatus?: number
    sededtinclusao?: Date | string | null
    endereco?: enderecoCreateNestedManyWithoutSedeInput
    cliente: ClienteCreateNestedOneWithoutSedeInput
  }

  export type sedeUncheckedCreateWithoutEquipamentoInput = {
    idsede?: number
    sedenome: string
    sedestatus?: number
    idcliente: bigint | number
    sededtinclusao?: Date | string | null
    endereco?: enderecoUncheckedCreateNestedManyWithoutSedeInput
  }

  export type sedeCreateOrConnectWithoutEquipamentoInput = {
    where: sedeWhereUniqueInput
    create: XOR<sedeCreateWithoutEquipamentoInput, sedeUncheckedCreateWithoutEquipamentoInput>
  }

  export type tipoeqCreateWithoutEquipamentoInput = {
    tipoeqnome: string
  }

  export type tipoeqUncheckedCreateWithoutEquipamentoInput = {
    idtipoeq?: number
    tipoeqnome: string
  }

  export type tipoeqCreateOrConnectWithoutEquipamentoInput = {
    where: tipoeqWhereUniqueInput
    create: XOR<tipoeqCreateWithoutEquipamentoInput, tipoeqUncheckedCreateWithoutEquipamentoInput>
  }

  export type sedeUpsertWithoutEquipamentoInput = {
    update: XOR<sedeUpdateWithoutEquipamentoInput, sedeUncheckedUpdateWithoutEquipamentoInput>
    create: XOR<sedeCreateWithoutEquipamentoInput, sedeUncheckedCreateWithoutEquipamentoInput>
    where?: sedeWhereInput
  }

  export type sedeUpdateToOneWithWhereWithoutEquipamentoInput = {
    where?: sedeWhereInput
    data: XOR<sedeUpdateWithoutEquipamentoInput, sedeUncheckedUpdateWithoutEquipamentoInput>
  }

  export type sedeUpdateWithoutEquipamentoInput = {
    sedenome?: StringFieldUpdateOperationsInput | string
    sedestatus?: IntFieldUpdateOperationsInput | number
    sededtinclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: enderecoUpdateManyWithoutSedeNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutSedeNestedInput
  }

  export type sedeUncheckedUpdateWithoutEquipamentoInput = {
    idsede?: IntFieldUpdateOperationsInput | number
    sedenome?: StringFieldUpdateOperationsInput | string
    sedestatus?: IntFieldUpdateOperationsInput | number
    idcliente?: BigIntFieldUpdateOperationsInput | bigint | number
    sededtinclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: enderecoUncheckedUpdateManyWithoutSedeNestedInput
  }

  export type tipoeqUpsertWithoutEquipamentoInput = {
    update: XOR<tipoeqUpdateWithoutEquipamentoInput, tipoeqUncheckedUpdateWithoutEquipamentoInput>
    create: XOR<tipoeqCreateWithoutEquipamentoInput, tipoeqUncheckedCreateWithoutEquipamentoInput>
    where?: tipoeqWhereInput
  }

  export type tipoeqUpdateToOneWithWhereWithoutEquipamentoInput = {
    where?: tipoeqWhereInput
    data: XOR<tipoeqUpdateWithoutEquipamentoInput, tipoeqUncheckedUpdateWithoutEquipamentoInput>
  }

  export type tipoeqUpdateWithoutEquipamentoInput = {
    tipoeqnome?: StringFieldUpdateOperationsInput | string
  }

  export type tipoeqUncheckedUpdateWithoutEquipamentoInput = {
    idtipoeq?: IntFieldUpdateOperationsInput | number
    tipoeqnome?: StringFieldUpdateOperationsInput | string
  }

  export type laudoCreateWithoutTipoinstalacaoInput = {
    laudodescricao: string
    laudohtmlmd: string
    laudodatainclusao?: Date | string
    laudofechamento?: Date | string | null
    laudostatus?: number
    laudoosclickup?: string | null
    tipolaudo: tipolaudoCreateNestedOneWithoutLaudoInput
  }

  export type laudoUncheckedCreateWithoutTipoinstalacaoInput = {
    idlaudo?: number
    laudodescricao: string
    laudohtmlmd: string
    laudodatainclusao?: Date | string
    laudofechamento?: Date | string | null
    laudostatus?: number
    idtipolaudo: number
    laudoosclickup?: string | null
  }

  export type laudoCreateOrConnectWithoutTipoinstalacaoInput = {
    where: laudoWhereUniqueInput
    create: XOR<laudoCreateWithoutTipoinstalacaoInput, laudoUncheckedCreateWithoutTipoinstalacaoInput>
  }

  export type laudoCreateManyTipoinstalacaoInputEnvelope = {
    data: laudoCreateManyTipoinstalacaoInput | laudoCreateManyTipoinstalacaoInput[]
    skipDuplicates?: boolean
  }

  export type laudoUpsertWithWhereUniqueWithoutTipoinstalacaoInput = {
    where: laudoWhereUniqueInput
    update: XOR<laudoUpdateWithoutTipoinstalacaoInput, laudoUncheckedUpdateWithoutTipoinstalacaoInput>
    create: XOR<laudoCreateWithoutTipoinstalacaoInput, laudoUncheckedCreateWithoutTipoinstalacaoInput>
  }

  export type laudoUpdateWithWhereUniqueWithoutTipoinstalacaoInput = {
    where: laudoWhereUniqueInput
    data: XOR<laudoUpdateWithoutTipoinstalacaoInput, laudoUncheckedUpdateWithoutTipoinstalacaoInput>
  }

  export type laudoUpdateManyWithWhereWithoutTipoinstalacaoInput = {
    where: laudoScalarWhereInput
    data: XOR<laudoUpdateManyMutationInput, laudoUncheckedUpdateManyWithoutTipoinstalacaoInput>
  }

  export type laudoScalarWhereInput = {
    AND?: laudoScalarWhereInput | laudoScalarWhereInput[]
    OR?: laudoScalarWhereInput[]
    NOT?: laudoScalarWhereInput | laudoScalarWhereInput[]
    idlaudo?: IntFilter<"laudo"> | number
    laudodescricao?: StringFilter<"laudo"> | string
    laudohtmlmd?: StringFilter<"laudo"> | string
    laudodatainclusao?: DateTimeFilter<"laudo"> | Date | string
    laudofechamento?: DateTimeNullableFilter<"laudo"> | Date | string | null
    laudostatus?: IntFilter<"laudo"> | number
    idtipolaudo?: IntFilter<"laudo"> | number
    idtipoinstalacao?: IntFilter<"laudo"> | number
    laudoosclickup?: StringNullableFilter<"laudo"> | string | null
  }

  export type laudoCreateWithoutTipolaudoInput = {
    laudodescricao: string
    laudohtmlmd: string
    laudodatainclusao?: Date | string
    laudofechamento?: Date | string | null
    laudostatus?: number
    laudoosclickup?: string | null
    tipoinstalacao: tipoinstalacaoCreateNestedOneWithoutLaudoInput
  }

  export type laudoUncheckedCreateWithoutTipolaudoInput = {
    idlaudo?: number
    laudodescricao: string
    laudohtmlmd: string
    laudodatainclusao?: Date | string
    laudofechamento?: Date | string | null
    laudostatus?: number
    idtipoinstalacao: number
    laudoosclickup?: string | null
  }

  export type laudoCreateOrConnectWithoutTipolaudoInput = {
    where: laudoWhereUniqueInput
    create: XOR<laudoCreateWithoutTipolaudoInput, laudoUncheckedCreateWithoutTipolaudoInput>
  }

  export type laudoCreateManyTipolaudoInputEnvelope = {
    data: laudoCreateManyTipolaudoInput | laudoCreateManyTipolaudoInput[]
    skipDuplicates?: boolean
  }

  export type laudoUpsertWithWhereUniqueWithoutTipolaudoInput = {
    where: laudoWhereUniqueInput
    update: XOR<laudoUpdateWithoutTipolaudoInput, laudoUncheckedUpdateWithoutTipolaudoInput>
    create: XOR<laudoCreateWithoutTipolaudoInput, laudoUncheckedCreateWithoutTipolaudoInput>
  }

  export type laudoUpdateWithWhereUniqueWithoutTipolaudoInput = {
    where: laudoWhereUniqueInput
    data: XOR<laudoUpdateWithoutTipolaudoInput, laudoUncheckedUpdateWithoutTipolaudoInput>
  }

  export type laudoUpdateManyWithWhereWithoutTipolaudoInput = {
    where: laudoScalarWhereInput
    data: XOR<laudoUpdateManyMutationInput, laudoUncheckedUpdateManyWithoutTipolaudoInput>
  }

  export type tipoinstalacaoCreateWithoutLaudoInput = {
    tipoinstalacaonome: string
  }

  export type tipoinstalacaoUncheckedCreateWithoutLaudoInput = {
    idtipoinstalacao?: number
    tipoinstalacaonome: string
  }

  export type tipoinstalacaoCreateOrConnectWithoutLaudoInput = {
    where: tipoinstalacaoWhereUniqueInput
    create: XOR<tipoinstalacaoCreateWithoutLaudoInput, tipoinstalacaoUncheckedCreateWithoutLaudoInput>
  }

  export type tipolaudoCreateWithoutLaudoInput = {
    tipolaudonome: string
    tipolaudotemplate?: string | null
  }

  export type tipolaudoUncheckedCreateWithoutLaudoInput = {
    idtipolaudo?: number
    tipolaudonome: string
    tipolaudotemplate?: string | null
  }

  export type tipolaudoCreateOrConnectWithoutLaudoInput = {
    where: tipolaudoWhereUniqueInput
    create: XOR<tipolaudoCreateWithoutLaudoInput, tipolaudoUncheckedCreateWithoutLaudoInput>
  }

  export type tipoinstalacaoUpsertWithoutLaudoInput = {
    update: XOR<tipoinstalacaoUpdateWithoutLaudoInput, tipoinstalacaoUncheckedUpdateWithoutLaudoInput>
    create: XOR<tipoinstalacaoCreateWithoutLaudoInput, tipoinstalacaoUncheckedCreateWithoutLaudoInput>
    where?: tipoinstalacaoWhereInput
  }

  export type tipoinstalacaoUpdateToOneWithWhereWithoutLaudoInput = {
    where?: tipoinstalacaoWhereInput
    data: XOR<tipoinstalacaoUpdateWithoutLaudoInput, tipoinstalacaoUncheckedUpdateWithoutLaudoInput>
  }

  export type tipoinstalacaoUpdateWithoutLaudoInput = {
    tipoinstalacaonome?: StringFieldUpdateOperationsInput | string
  }

  export type tipoinstalacaoUncheckedUpdateWithoutLaudoInput = {
    idtipoinstalacao?: IntFieldUpdateOperationsInput | number
    tipoinstalacaonome?: StringFieldUpdateOperationsInput | string
  }

  export type tipolaudoUpsertWithoutLaudoInput = {
    update: XOR<tipolaudoUpdateWithoutLaudoInput, tipolaudoUncheckedUpdateWithoutLaudoInput>
    create: XOR<tipolaudoCreateWithoutLaudoInput, tipolaudoUncheckedCreateWithoutLaudoInput>
    where?: tipolaudoWhereInput
  }

  export type tipolaudoUpdateToOneWithWhereWithoutLaudoInput = {
    where?: tipolaudoWhereInput
    data: XOR<tipolaudoUpdateWithoutLaudoInput, tipolaudoUncheckedUpdateWithoutLaudoInput>
  }

  export type tipolaudoUpdateWithoutLaudoInput = {
    tipolaudonome?: StringFieldUpdateOperationsInput | string
    tipolaudotemplate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tipolaudoUncheckedUpdateWithoutLaudoInput = {
    idtipolaudo?: IntFieldUpdateOperationsInput | number
    tipolaudonome?: StringFieldUpdateOperationsInput | string
    tipolaudotemplate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sedeCreateManyClienteInput = {
    idsede?: number
    sedenome: string
    sedestatus?: number
    sededtinclusao?: Date | string | null
  }

  export type sedeUpdateWithoutClienteInput = {
    sedenome?: StringFieldUpdateOperationsInput | string
    sedestatus?: IntFieldUpdateOperationsInput | number
    sededtinclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: enderecoUpdateManyWithoutSedeNestedInput
    equipamento?: equipamentoUpdateManyWithoutSedeNestedInput
  }

  export type sedeUncheckedUpdateWithoutClienteInput = {
    idsede?: IntFieldUpdateOperationsInput | number
    sedenome?: StringFieldUpdateOperationsInput | string
    sedestatus?: IntFieldUpdateOperationsInput | number
    sededtinclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: enderecoUncheckedUpdateManyWithoutSedeNestedInput
    equipamento?: equipamentoUncheckedUpdateManyWithoutSedeNestedInput
  }

  export type sedeUncheckedUpdateManyWithoutClienteInput = {
    idsede?: IntFieldUpdateOperationsInput | number
    sedenome?: StringFieldUpdateOperationsInput | string
    sedestatus?: IntFieldUpdateOperationsInput | number
    sededtinclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type enderecoCreateManySedeInput = {
    idendereco?: number
    enderecoendereco: string
    enderecocep: string
    enderecolat?: Decimal | DecimalJsLike | number | string | null
    enderecolon?: Decimal | DecimalJsLike | number | string | null
    enderecostatus?: number | null
  }

  export type equipamentoCreateManySedeInput = {
    idequipamento?: number
    equipamentoserie?: string | null
    equipamentomodelo?: string | null
    equipamentomac?: string | null
    equipamentoipv4?: string | null
    equipamentoipv6?: string | null
    equipamentoanydesk?: string | null
    equipamentodw?: string | null
    equipamentoalugado?: boolean | null
    idtipoeq: number
  }

  export type enderecoUpdateWithoutSedeInput = {
    enderecoendereco?: StringFieldUpdateOperationsInput | string
    enderecocep?: StringFieldUpdateOperationsInput | string
    enderecolat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enderecolon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enderecostatus?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type enderecoUncheckedUpdateWithoutSedeInput = {
    idendereco?: IntFieldUpdateOperationsInput | number
    enderecoendereco?: StringFieldUpdateOperationsInput | string
    enderecocep?: StringFieldUpdateOperationsInput | string
    enderecolat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enderecolon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enderecostatus?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type enderecoUncheckedUpdateManyWithoutSedeInput = {
    idendereco?: IntFieldUpdateOperationsInput | number
    enderecoendereco?: StringFieldUpdateOperationsInput | string
    enderecocep?: StringFieldUpdateOperationsInput | string
    enderecolat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enderecolon?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    enderecostatus?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type equipamentoUpdateWithoutSedeInput = {
    equipamentoserie?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomodelo?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomac?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv4?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv6?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoanydesk?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentodw?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoalugado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tipoeq?: tipoeqUpdateOneRequiredWithoutEquipamentoNestedInput
  }

  export type equipamentoUncheckedUpdateWithoutSedeInput = {
    idequipamento?: IntFieldUpdateOperationsInput | number
    equipamentoserie?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomodelo?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomac?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv4?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv6?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoanydesk?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentodw?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoalugado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idtipoeq?: IntFieldUpdateOperationsInput | number
  }

  export type equipamentoUncheckedUpdateManyWithoutSedeInput = {
    idequipamento?: IntFieldUpdateOperationsInput | number
    equipamentoserie?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomodelo?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomac?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv4?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv6?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoanydesk?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentodw?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoalugado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idtipoeq?: IntFieldUpdateOperationsInput | number
  }

  export type equipamentoCreateManyTipoeqInput = {
    idequipamento?: number
    equipamentoserie?: string | null
    equipamentomodelo?: string | null
    equipamentomac?: string | null
    equipamentoipv4?: string | null
    equipamentoipv6?: string | null
    equipamentoanydesk?: string | null
    equipamentodw?: string | null
    equipamentoalugado?: boolean | null
    idsede: number
  }

  export type equipamentoUpdateWithoutTipoeqInput = {
    equipamentoserie?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomodelo?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomac?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv4?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv6?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoanydesk?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentodw?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoalugado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sede?: sedeUpdateOneRequiredWithoutEquipamentoNestedInput
  }

  export type equipamentoUncheckedUpdateWithoutTipoeqInput = {
    idequipamento?: IntFieldUpdateOperationsInput | number
    equipamentoserie?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomodelo?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomac?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv4?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv6?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoanydesk?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentodw?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoalugado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idsede?: IntFieldUpdateOperationsInput | number
  }

  export type equipamentoUncheckedUpdateManyWithoutTipoeqInput = {
    idequipamento?: IntFieldUpdateOperationsInput | number
    equipamentoserie?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomodelo?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentomac?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv4?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoipv6?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoanydesk?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentodw?: NullableStringFieldUpdateOperationsInput | string | null
    equipamentoalugado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idsede?: IntFieldUpdateOperationsInput | number
  }

  export type laudoCreateManyTipoinstalacaoInput = {
    idlaudo?: number
    laudodescricao: string
    laudohtmlmd: string
    laudodatainclusao?: Date | string
    laudofechamento?: Date | string | null
    laudostatus?: number
    idtipolaudo: number
    laudoosclickup?: string | null
  }

  export type laudoUpdateWithoutTipoinstalacaoInput = {
    laudodescricao?: StringFieldUpdateOperationsInput | string
    laudohtmlmd?: StringFieldUpdateOperationsInput | string
    laudodatainclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    laudofechamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laudostatus?: IntFieldUpdateOperationsInput | number
    laudoosclickup?: NullableStringFieldUpdateOperationsInput | string | null
    tipolaudo?: tipolaudoUpdateOneRequiredWithoutLaudoNestedInput
  }

  export type laudoUncheckedUpdateWithoutTipoinstalacaoInput = {
    idlaudo?: IntFieldUpdateOperationsInput | number
    laudodescricao?: StringFieldUpdateOperationsInput | string
    laudohtmlmd?: StringFieldUpdateOperationsInput | string
    laudodatainclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    laudofechamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laudostatus?: IntFieldUpdateOperationsInput | number
    idtipolaudo?: IntFieldUpdateOperationsInput | number
    laudoosclickup?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type laudoUncheckedUpdateManyWithoutTipoinstalacaoInput = {
    idlaudo?: IntFieldUpdateOperationsInput | number
    laudodescricao?: StringFieldUpdateOperationsInput | string
    laudohtmlmd?: StringFieldUpdateOperationsInput | string
    laudodatainclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    laudofechamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laudostatus?: IntFieldUpdateOperationsInput | number
    idtipolaudo?: IntFieldUpdateOperationsInput | number
    laudoosclickup?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type laudoCreateManyTipolaudoInput = {
    idlaudo?: number
    laudodescricao: string
    laudohtmlmd: string
    laudodatainclusao?: Date | string
    laudofechamento?: Date | string | null
    laudostatus?: number
    idtipoinstalacao: number
    laudoosclickup?: string | null
  }

  export type laudoUpdateWithoutTipolaudoInput = {
    laudodescricao?: StringFieldUpdateOperationsInput | string
    laudohtmlmd?: StringFieldUpdateOperationsInput | string
    laudodatainclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    laudofechamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laudostatus?: IntFieldUpdateOperationsInput | number
    laudoosclickup?: NullableStringFieldUpdateOperationsInput | string | null
    tipoinstalacao?: tipoinstalacaoUpdateOneRequiredWithoutLaudoNestedInput
  }

  export type laudoUncheckedUpdateWithoutTipolaudoInput = {
    idlaudo?: IntFieldUpdateOperationsInput | number
    laudodescricao?: StringFieldUpdateOperationsInput | string
    laudohtmlmd?: StringFieldUpdateOperationsInput | string
    laudodatainclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    laudofechamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laudostatus?: IntFieldUpdateOperationsInput | number
    idtipoinstalacao?: IntFieldUpdateOperationsInput | number
    laudoosclickup?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type laudoUncheckedUpdateManyWithoutTipolaudoInput = {
    idlaudo?: IntFieldUpdateOperationsInput | number
    laudodescricao?: StringFieldUpdateOperationsInput | string
    laudohtmlmd?: StringFieldUpdateOperationsInput | string
    laudodatainclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    laudofechamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    laudostatus?: IntFieldUpdateOperationsInput | number
    idtipoinstalacao?: IntFieldUpdateOperationsInput | number
    laudoosclickup?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}