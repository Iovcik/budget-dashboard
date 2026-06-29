
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Board
 * 
 */
export type Board = $Result.DefaultSelection<Prisma.$BoardPayload>
/**
 * Model UserBoard
 * 
 */
export type UserBoard = $Result.DefaultSelection<Prisma.$UserBoardPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model CategoryBudget
 * 
 */
export type CategoryBudget = $Result.DefaultSelection<Prisma.$CategoryBudgetPayload>
/**
 * Model MonthlyBudget
 * 
 */
export type MonthlyBudget = $Result.DefaultSelection<Prisma.$MonthlyBudgetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BoardRole: {
  OWNER: 'OWNER',
  MEMBER: 'MEMBER'
};

export type BoardRole = (typeof BoardRole)[keyof typeof BoardRole]

}

export type BoardRole = $Enums.BoardRole

export const BoardRole: typeof $Enums.BoardRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBoard`: Exposes CRUD operations for the **UserBoard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBoards
    * const userBoards = await prisma.userBoard.findMany()
    * ```
    */
  get userBoard(): Prisma.UserBoardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryBudget`: Exposes CRUD operations for the **CategoryBudget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryBudgets
    * const categoryBudgets = await prisma.categoryBudget.findMany()
    * ```
    */
  get categoryBudget(): Prisma.CategoryBudgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlyBudget`: Exposes CRUD operations for the **MonthlyBudget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyBudgets
    * const monthlyBudgets = await prisma.monthlyBudget.findMany()
    * ```
    */
  get monthlyBudget(): Prisma.MonthlyBudgetDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Board: 'Board',
    UserBoard: 'UserBoard',
    Category: 'Category',
    Transaction: 'Transaction',
    CategoryBudget: 'CategoryBudget',
    MonthlyBudget: 'MonthlyBudget'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "board" | "userBoard" | "category" | "transaction" | "categoryBudget" | "monthlyBudget"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Board: {
        payload: Prisma.$BoardPayload<ExtArgs>
        fields: Prisma.BoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findFirst: {
            args: Prisma.BoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findMany: {
            args: Prisma.BoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          create: {
            args: Prisma.BoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          createMany: {
            args: Prisma.BoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          update: {
            args: Prisma.BoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          deleteMany: {
            args: Prisma.BoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoard>
          }
          groupBy: {
            args: Prisma.BoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardCountArgs<ExtArgs>
            result: $Utils.Optional<BoardCountAggregateOutputType> | number
          }
        }
      }
      UserBoard: {
        payload: Prisma.$UserBoardPayload<ExtArgs>
        fields: Prisma.UserBoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBoardPayload>
          }
          findFirst: {
            args: Prisma.UserBoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBoardPayload>
          }
          findMany: {
            args: Prisma.UserBoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBoardPayload>[]
          }
          create: {
            args: Prisma.UserBoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBoardPayload>
          }
          createMany: {
            args: Prisma.UserBoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserBoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBoardPayload>
          }
          update: {
            args: Prisma.UserBoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBoardPayload>
          }
          deleteMany: {
            args: Prisma.UserBoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserBoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBoardPayload>
          }
          aggregate: {
            args: Prisma.UserBoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBoard>
          }
          groupBy: {
            args: Prisma.UserBoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBoardCountArgs<ExtArgs>
            result: $Utils.Optional<UserBoardCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      CategoryBudget: {
        payload: Prisma.$CategoryBudgetPayload<ExtArgs>
        fields: Prisma.CategoryBudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryBudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryBudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBudgetPayload>
          }
          findFirst: {
            args: Prisma.CategoryBudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryBudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBudgetPayload>
          }
          findMany: {
            args: Prisma.CategoryBudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBudgetPayload>[]
          }
          create: {
            args: Prisma.CategoryBudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBudgetPayload>
          }
          createMany: {
            args: Prisma.CategoryBudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryBudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBudgetPayload>
          }
          update: {
            args: Prisma.CategoryBudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBudgetPayload>
          }
          deleteMany: {
            args: Prisma.CategoryBudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryBudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryBudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryBudgetPayload>
          }
          aggregate: {
            args: Prisma.CategoryBudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryBudget>
          }
          groupBy: {
            args: Prisma.CategoryBudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryBudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryBudgetCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryBudgetCountAggregateOutputType> | number
          }
        }
      }
      MonthlyBudget: {
        payload: Prisma.$MonthlyBudgetPayload<ExtArgs>
        fields: Prisma.MonthlyBudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyBudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyBudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>
          }
          findFirst: {
            args: Prisma.MonthlyBudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyBudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>
          }
          findMany: {
            args: Prisma.MonthlyBudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>[]
          }
          create: {
            args: Prisma.MonthlyBudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>
          }
          createMany: {
            args: Prisma.MonthlyBudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MonthlyBudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>
          }
          update: {
            args: Prisma.MonthlyBudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>
          }
          deleteMany: {
            args: Prisma.MonthlyBudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyBudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonthlyBudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyBudgetPayload>
          }
          aggregate: {
            args: Prisma.MonthlyBudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyBudget>
          }
          groupBy: {
            args: Prisma.MonthlyBudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyBudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyBudgetCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyBudgetCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    board?: BoardOmit
    userBoard?: UserBoardOmit
    category?: CategoryOmit
    transaction?: TransactionOmit
    categoryBudget?: CategoryBudgetOmit
    monthlyBudget?: MonthlyBudgetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    boards: number
    transactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | UserCountOutputTypeCountBoardsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBoardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type BoardCountOutputType
   */

  export type BoardCountOutputType = {
    members: number
    categories: number
    categoryBudgets: number
    monthlyBudgets: number
    transactions: number
  }

  export type BoardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | BoardCountOutputTypeCountMembersArgs
    categories?: boolean | BoardCountOutputTypeCountCategoriesArgs
    categoryBudgets?: boolean | BoardCountOutputTypeCountCategoryBudgetsArgs
    monthlyBudgets?: boolean | BoardCountOutputTypeCountMonthlyBudgetsArgs
    transactions?: boolean | BoardCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: BoardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBoardWhereInput
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountCategoryBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryBudgetWhereInput
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountMonthlyBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyBudgetWhereInput
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    categoryBudgets: number
    transactions: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryBudgets?: boolean | CategoryCountOutputTypeCountCategoryBudgetsArgs
    transactions?: boolean | CategoryCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCategoryBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryBudgetWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    boards?: boolean | User$boardsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | User$boardsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      boards: Prisma.$UserBoardPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boards<T extends User$boardsArgs<ExtArgs> = {}>(args?: Subset<T, User$boardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.boards
   */
  export type User$boardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBoard
     */
    select?: UserBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBoard
     */
    omit?: UserBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBoardInclude<ExtArgs> | null
    where?: UserBoardWhereInput
    orderBy?: UserBoardOrderByWithRelationInput | UserBoardOrderByWithRelationInput[]
    cursor?: UserBoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBoardScalarFieldEnum | UserBoardScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Board
   */

  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardAvgAggregateOutputType = {
    id: number | null
  }

  export type BoardSumAggregateOutputType = {
    id: number | null
  }

  export type BoardMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoardMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BoardAvgAggregateInputType = {
    id?: true
  }

  export type BoardSumAggregateInputType = {
    id?: true
  }

  export type BoardMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithAggregationInput | BoardOrderByWithAggregationInput[]
    by: BoardScalarFieldEnum[] | BoardScalarFieldEnum
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _avg?: BoardAvgAggregateInputType
    _sum?: BoardSumAggregateInputType
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }

  export type BoardGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Board$membersArgs<ExtArgs>
    categories?: boolean | Board$categoriesArgs<ExtArgs>
    categoryBudgets?: boolean | Board$categoryBudgetsArgs<ExtArgs>
    monthlyBudgets?: boolean | Board$monthlyBudgetsArgs<ExtArgs>
    transactions?: boolean | Board$transactionsArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>



  export type BoardSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["board"]>
  export type BoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Board$membersArgs<ExtArgs>
    categories?: boolean | Board$categoriesArgs<ExtArgs>
    categoryBudgets?: boolean | Board$categoryBudgetsArgs<ExtArgs>
    monthlyBudgets?: boolean | Board$monthlyBudgetsArgs<ExtArgs>
    transactions?: boolean | Board$transactionsArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Board"
    objects: {
      members: Prisma.$UserBoardPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      categoryBudgets: Prisma.$CategoryBudgetPayload<ExtArgs>[]
      monthlyBudgets: Prisma.$MonthlyBudgetPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["board"]>
    composites: {}
  }

  type BoardGetPayload<S extends boolean | null | undefined | BoardDefaultArgs> = $Result.GetResult<Prisma.$BoardPayload, S>

  type BoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Board'], meta: { name: 'Board' } }
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardFindUniqueArgs>(args: SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Board that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardFindFirstArgs>(args?: SelectSubset<T, BoardFindFirstArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoardFindManyArgs>(args?: SelectSubset<T, BoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
     */
    create<T extends BoardCreateArgs>(args: SelectSubset<T, BoardCreateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boards.
     * @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardCreateManyArgs>(args?: SelectSubset<T, BoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
     */
    delete<T extends BoardDeleteArgs>(args: SelectSubset<T, BoardDeleteArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardUpdateArgs>(args: SelectSubset<T, BoardUpdateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardDeleteManyArgs>(args?: SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardUpdateManyArgs>(args: SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
     */
    upsert<T extends BoardUpsertArgs>(args: SelectSubset<T, BoardUpsertArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
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
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Board model
   */
  readonly fields: BoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Board$membersArgs<ExtArgs> = {}>(args?: Subset<T, Board$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Board$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Board$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoryBudgets<T extends Board$categoryBudgetsArgs<ExtArgs> = {}>(args?: Subset<T, Board$categoryBudgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthlyBudgets<T extends Board$monthlyBudgetsArgs<ExtArgs> = {}>(args?: Subset<T, Board$monthlyBudgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Board$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Board$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Board model
   */
  interface BoardFieldRefs {
    readonly id: FieldRef<"Board", 'Int'>
    readonly name: FieldRef<"Board", 'String'>
    readonly createdAt: FieldRef<"Board", 'DateTime'>
    readonly updatedAt: FieldRef<"Board", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findMany
   */
  export type BoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board create
   */
  export type BoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }

  /**
   * Board createMany
   */
  export type BoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board update
   */
  export type BoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
  }

  /**
   * Board upsert
   */
  export type BoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }

  /**
   * Board delete
   */
  export type BoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to delete.
     */
    limit?: number
  }

  /**
   * Board.members
   */
  export type Board$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBoard
     */
    select?: UserBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBoard
     */
    omit?: UserBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBoardInclude<ExtArgs> | null
    where?: UserBoardWhereInput
    orderBy?: UserBoardOrderByWithRelationInput | UserBoardOrderByWithRelationInput[]
    cursor?: UserBoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBoardScalarFieldEnum | UserBoardScalarFieldEnum[]
  }

  /**
   * Board.categories
   */
  export type Board$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Board.categoryBudgets
   */
  export type Board$categoryBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBudget
     */
    select?: CategoryBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryBudget
     */
    omit?: CategoryBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBudgetInclude<ExtArgs> | null
    where?: CategoryBudgetWhereInput
    orderBy?: CategoryBudgetOrderByWithRelationInput | CategoryBudgetOrderByWithRelationInput[]
    cursor?: CategoryBudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryBudgetScalarFieldEnum | CategoryBudgetScalarFieldEnum[]
  }

  /**
   * Board.monthlyBudgets
   */
  export type Board$monthlyBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyBudget
     */
    omit?: MonthlyBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyBudgetInclude<ExtArgs> | null
    where?: MonthlyBudgetWhereInput
    orderBy?: MonthlyBudgetOrderByWithRelationInput | MonthlyBudgetOrderByWithRelationInput[]
    cursor?: MonthlyBudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyBudgetScalarFieldEnum | MonthlyBudgetScalarFieldEnum[]
  }

  /**
   * Board.transactions
   */
  export type Board$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Board without action
   */
  export type BoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
  }


  /**
   * Model UserBoard
   */

  export type AggregateUserBoard = {
    _count: UserBoardCountAggregateOutputType | null
    _avg: UserBoardAvgAggregateOutputType | null
    _sum: UserBoardSumAggregateOutputType | null
    _min: UserBoardMinAggregateOutputType | null
    _max: UserBoardMaxAggregateOutputType | null
  }

  export type UserBoardAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    boardId: number | null
  }

  export type UserBoardSumAggregateOutputType = {
    id: number | null
    userId: number | null
    boardId: number | null
  }

  export type UserBoardMinAggregateOutputType = {
    id: number | null
    userId: number | null
    boardId: number | null
    role: $Enums.BoardRole | null
    joinedAt: Date | null
  }

  export type UserBoardMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    boardId: number | null
    role: $Enums.BoardRole | null
    joinedAt: Date | null
  }

  export type UserBoardCountAggregateOutputType = {
    id: number
    userId: number
    boardId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type UserBoardAvgAggregateInputType = {
    id?: true
    userId?: true
    boardId?: true
  }

  export type UserBoardSumAggregateInputType = {
    id?: true
    userId?: true
    boardId?: true
  }

  export type UserBoardMinAggregateInputType = {
    id?: true
    userId?: true
    boardId?: true
    role?: true
    joinedAt?: true
  }

  export type UserBoardMaxAggregateInputType = {
    id?: true
    userId?: true
    boardId?: true
    role?: true
    joinedAt?: true
  }

  export type UserBoardCountAggregateInputType = {
    id?: true
    userId?: true
    boardId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type UserBoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBoard to aggregate.
     */
    where?: UserBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBoards to fetch.
     */
    orderBy?: UserBoardOrderByWithRelationInput | UserBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBoards
    **/
    _count?: true | UserBoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBoardMaxAggregateInputType
  }

  export type GetUserBoardAggregateType<T extends UserBoardAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBoard[P]>
      : GetScalarType<T[P], AggregateUserBoard[P]>
  }




  export type UserBoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBoardWhereInput
    orderBy?: UserBoardOrderByWithAggregationInput | UserBoardOrderByWithAggregationInput[]
    by: UserBoardScalarFieldEnum[] | UserBoardScalarFieldEnum
    having?: UserBoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBoardCountAggregateInputType | true
    _avg?: UserBoardAvgAggregateInputType
    _sum?: UserBoardSumAggregateInputType
    _min?: UserBoardMinAggregateInputType
    _max?: UserBoardMaxAggregateInputType
  }

  export type UserBoardGroupByOutputType = {
    id: number
    userId: number
    boardId: number
    role: $Enums.BoardRole
    joinedAt: Date
    _count: UserBoardCountAggregateOutputType | null
    _avg: UserBoardAvgAggregateOutputType | null
    _sum: UserBoardSumAggregateOutputType | null
    _min: UserBoardMinAggregateOutputType | null
    _max: UserBoardMaxAggregateOutputType | null
  }

  type GetUserBoardGroupByPayload<T extends UserBoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBoardGroupByOutputType[P]>
            : GetScalarType<T[P], UserBoardGroupByOutputType[P]>
        }
      >
    >


  export type UserBoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    boardId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBoard"]>



  export type UserBoardSelectScalar = {
    id?: boolean
    userId?: boolean
    boardId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type UserBoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "boardId" | "role" | "joinedAt", ExtArgs["result"]["userBoard"]>
  export type UserBoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }

  export type $UserBoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBoard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      board: Prisma.$BoardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      boardId: number
      role: $Enums.BoardRole
      joinedAt: Date
    }, ExtArgs["result"]["userBoard"]>
    composites: {}
  }

  type UserBoardGetPayload<S extends boolean | null | undefined | UserBoardDefaultArgs> = $Result.GetResult<Prisma.$UserBoardPayload, S>

  type UserBoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBoardCountAggregateInputType | true
    }

  export interface UserBoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBoard'], meta: { name: 'UserBoard' } }
    /**
     * Find zero or one UserBoard that matches the filter.
     * @param {UserBoardFindUniqueArgs} args - Arguments to find a UserBoard
     * @example
     * // Get one UserBoard
     * const userBoard = await prisma.userBoard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBoardFindUniqueArgs>(args: SelectSubset<T, UserBoardFindUniqueArgs<ExtArgs>>): Prisma__UserBoardClient<$Result.GetResult<Prisma.$UserBoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBoard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBoardFindUniqueOrThrowArgs} args - Arguments to find a UserBoard
     * @example
     * // Get one UserBoard
     * const userBoard = await prisma.userBoard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBoardFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBoardClient<$Result.GetResult<Prisma.$UserBoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBoard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBoardFindFirstArgs} args - Arguments to find a UserBoard
     * @example
     * // Get one UserBoard
     * const userBoard = await prisma.userBoard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBoardFindFirstArgs>(args?: SelectSubset<T, UserBoardFindFirstArgs<ExtArgs>>): Prisma__UserBoardClient<$Result.GetResult<Prisma.$UserBoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBoard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBoardFindFirstOrThrowArgs} args - Arguments to find a UserBoard
     * @example
     * // Get one UserBoard
     * const userBoard = await prisma.userBoard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBoardFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBoardClient<$Result.GetResult<Prisma.$UserBoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBoards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBoards
     * const userBoards = await prisma.userBoard.findMany()
     * 
     * // Get first 10 UserBoards
     * const userBoards = await prisma.userBoard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBoardWithIdOnly = await prisma.userBoard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBoardFindManyArgs>(args?: SelectSubset<T, UserBoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBoard.
     * @param {UserBoardCreateArgs} args - Arguments to create a UserBoard.
     * @example
     * // Create one UserBoard
     * const UserBoard = await prisma.userBoard.create({
     *   data: {
     *     // ... data to create a UserBoard
     *   }
     * })
     * 
     */
    create<T extends UserBoardCreateArgs>(args: SelectSubset<T, UserBoardCreateArgs<ExtArgs>>): Prisma__UserBoardClient<$Result.GetResult<Prisma.$UserBoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBoards.
     * @param {UserBoardCreateManyArgs} args - Arguments to create many UserBoards.
     * @example
     * // Create many UserBoards
     * const userBoard = await prisma.userBoard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBoardCreateManyArgs>(args?: SelectSubset<T, UserBoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserBoard.
     * @param {UserBoardDeleteArgs} args - Arguments to delete one UserBoard.
     * @example
     * // Delete one UserBoard
     * const UserBoard = await prisma.userBoard.delete({
     *   where: {
     *     // ... filter to delete one UserBoard
     *   }
     * })
     * 
     */
    delete<T extends UserBoardDeleteArgs>(args: SelectSubset<T, UserBoardDeleteArgs<ExtArgs>>): Prisma__UserBoardClient<$Result.GetResult<Prisma.$UserBoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBoard.
     * @param {UserBoardUpdateArgs} args - Arguments to update one UserBoard.
     * @example
     * // Update one UserBoard
     * const userBoard = await prisma.userBoard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBoardUpdateArgs>(args: SelectSubset<T, UserBoardUpdateArgs<ExtArgs>>): Prisma__UserBoardClient<$Result.GetResult<Prisma.$UserBoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBoards.
     * @param {UserBoardDeleteManyArgs} args - Arguments to filter UserBoards to delete.
     * @example
     * // Delete a few UserBoards
     * const { count } = await prisma.userBoard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBoardDeleteManyArgs>(args?: SelectSubset<T, UserBoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBoards
     * const userBoard = await prisma.userBoard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBoardUpdateManyArgs>(args: SelectSubset<T, UserBoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserBoard.
     * @param {UserBoardUpsertArgs} args - Arguments to update or create a UserBoard.
     * @example
     * // Update or create a UserBoard
     * const userBoard = await prisma.userBoard.upsert({
     *   create: {
     *     // ... data to create a UserBoard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBoard we want to update
     *   }
     * })
     */
    upsert<T extends UserBoardUpsertArgs>(args: SelectSubset<T, UserBoardUpsertArgs<ExtArgs>>): Prisma__UserBoardClient<$Result.GetResult<Prisma.$UserBoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBoardCountArgs} args - Arguments to filter UserBoards to count.
     * @example
     * // Count the number of UserBoards
     * const count = await prisma.userBoard.count({
     *   where: {
     *     // ... the filter for the UserBoards we want to count
     *   }
     * })
    **/
    count<T extends UserBoardCountArgs>(
      args?: Subset<T, UserBoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserBoardAggregateArgs>(args: Subset<T, UserBoardAggregateArgs>): Prisma.PrismaPromise<GetUserBoardAggregateType<T>>

    /**
     * Group by UserBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBoardGroupByArgs} args - Group by arguments.
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
      T extends UserBoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBoardGroupByArgs['orderBy'] }
        : { orderBy?: UserBoardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserBoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBoard model
   */
  readonly fields: UserBoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBoard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserBoard model
   */
  interface UserBoardFieldRefs {
    readonly id: FieldRef<"UserBoard", 'Int'>
    readonly userId: FieldRef<"UserBoard", 'Int'>
    readonly boardId: FieldRef<"UserBoard", 'Int'>
    readonly role: FieldRef<"UserBoard", 'BoardRole'>
    readonly joinedAt: FieldRef<"UserBoard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserBoard findUnique
   */
  export type UserBoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBoard
     */
    select?: UserBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBoard
     */
    omit?: UserBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBoardInclude<ExtArgs> | null
    /**
     * Filter, which UserBoard to fetch.
     */
    where: UserBoardWhereUniqueInput
  }

  /**
   * UserBoard findUniqueOrThrow
   */
  export type UserBoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBoard
     */
    select?: UserBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBoard
     */
    omit?: UserBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBoardInclude<ExtArgs> | null
    /**
     * Filter, which UserBoard to fetch.
     */
    where: UserBoardWhereUniqueInput
  }

  /**
   * UserBoard findFirst
   */
  export type UserBoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBoard
     */
    select?: UserBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBoard
     */
    omit?: UserBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBoardInclude<ExtArgs> | null
    /**
     * Filter, which UserBoard to fetch.
     */
    where?: UserBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBoards to fetch.
     */
    orderBy?: UserBoardOrderByWithRelationInput | UserBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBoards.
     */
    cursor?: UserBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBoards.
     */
    distinct?: UserBoardScalarFieldEnum | UserBoardScalarFieldEnum[]
  }

  /**
   * UserBoard findFirstOrThrow
   */
  export type UserBoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBoard
     */
    select?: UserBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBoard
     */
    omit?: UserBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBoardInclude<ExtArgs> | null
    /**
     * Filter, which UserBoard to fetch.
     */
    where?: UserBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBoards to fetch.
     */
    orderBy?: UserBoardOrderByWithRelationInput | UserBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBoards.
     */
    cursor?: UserBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBoards.
     */
    distinct?: UserBoardScalarFieldEnum | UserBoardScalarFieldEnum[]
  }

  /**
   * UserBoard findMany
   */
  export type UserBoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBoard
     */
    select?: UserBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBoard
     */
    omit?: UserBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBoardInclude<ExtArgs> | null
    /**
     * Filter, which UserBoards to fetch.
     */
    where?: UserBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBoards to fetch.
     */
    orderBy?: UserBoardOrderByWithRelationInput | UserBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBoards.
     */
    cursor?: UserBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBoards.
     */
    distinct?: UserBoardScalarFieldEnum | UserBoardScalarFieldEnum[]
  }

  /**
   * UserBoard create
   */
  export type UserBoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBoard
     */
    select?: UserBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBoard
     */
    omit?: UserBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBoardInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBoard.
     */
    data: XOR<UserBoardCreateInput, UserBoardUncheckedCreateInput>
  }

  /**
   * UserBoard createMany
   */
  export type UserBoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBoards.
     */
    data: UserBoardCreateManyInput | UserBoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBoard update
   */
  export type UserBoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBoard
     */
    select?: UserBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBoard
     */
    omit?: UserBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBoardInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBoard.
     */
    data: XOR<UserBoardUpdateInput, UserBoardUncheckedUpdateInput>
    /**
     * Choose, which UserBoard to update.
     */
    where: UserBoardWhereUniqueInput
  }

  /**
   * UserBoard updateMany
   */
  export type UserBoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBoards.
     */
    data: XOR<UserBoardUpdateManyMutationInput, UserBoardUncheckedUpdateManyInput>
    /**
     * Filter which UserBoards to update
     */
    where?: UserBoardWhereInput
    /**
     * Limit how many UserBoards to update.
     */
    limit?: number
  }

  /**
   * UserBoard upsert
   */
  export type UserBoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBoard
     */
    select?: UserBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBoard
     */
    omit?: UserBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBoardInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBoard to update in case it exists.
     */
    where: UserBoardWhereUniqueInput
    /**
     * In case the UserBoard found by the `where` argument doesn't exist, create a new UserBoard with this data.
     */
    create: XOR<UserBoardCreateInput, UserBoardUncheckedCreateInput>
    /**
     * In case the UserBoard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBoardUpdateInput, UserBoardUncheckedUpdateInput>
  }

  /**
   * UserBoard delete
   */
  export type UserBoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBoard
     */
    select?: UserBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBoard
     */
    omit?: UserBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBoardInclude<ExtArgs> | null
    /**
     * Filter which UserBoard to delete.
     */
    where: UserBoardWhereUniqueInput
  }

  /**
   * UserBoard deleteMany
   */
  export type UserBoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBoards to delete
     */
    where?: UserBoardWhereInput
    /**
     * Limit how many UserBoards to delete.
     */
    limit?: number
  }

  /**
   * UserBoard without action
   */
  export type UserBoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBoard
     */
    select?: UserBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBoard
     */
    omit?: UserBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBoardInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    boardId: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    boardId: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    boardId: number | null
    name: string | null
    color: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    boardId: number | null
    name: string | null
    color: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    boardId: number
    name: number
    color: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    boardId?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    boardId?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    boardId?: true
    name?: true
    color?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    boardId?: true
    name?: true
    color?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    boardId?: true
    name?: true
    color?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    boardId: number
    name: string
    color: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boardId?: boolean
    name?: boolean
    color?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
    categoryBudgets?: boolean | Category$categoryBudgetsArgs<ExtArgs>
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    boardId?: boolean
    name?: boolean
    color?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "boardId" | "name" | "color", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
    categoryBudgets?: boolean | Category$categoryBudgetsArgs<ExtArgs>
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      board: Prisma.$BoardPayload<ExtArgs>
      categoryBudgets: Prisma.$CategoryBudgetPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      boardId: number
      name: string
      color: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoryBudgets<T extends Category$categoryBudgetsArgs<ExtArgs> = {}>(args?: Subset<T, Category$categoryBudgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Category$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Category$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly boardId: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly color: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.categoryBudgets
   */
  export type Category$categoryBudgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBudget
     */
    select?: CategoryBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryBudget
     */
    omit?: CategoryBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBudgetInclude<ExtArgs> | null
    where?: CategoryBudgetWhereInput
    orderBy?: CategoryBudgetOrderByWithRelationInput | CategoryBudgetOrderByWithRelationInput[]
    cursor?: CategoryBudgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryBudgetScalarFieldEnum | CategoryBudgetScalarFieldEnum[]
  }

  /**
   * Category.transactions
   */
  export type Category$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    boardId: number | null
    categoryId: number | null
    userId: number | null
    amount: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    boardId: number | null
    categoryId: number | null
    userId: number | null
    amount: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    boardId: number | null
    categoryId: number | null
    userId: number | null
    amount: Decimal | null
    description: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    boardId: number | null
    categoryId: number | null
    userId: number | null
    amount: Decimal | null
    description: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    boardId: number
    categoryId: number
    userId: number
    amount: number
    description: number
    date: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    boardId?: true
    categoryId?: true
    userId?: true
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    boardId?: true
    categoryId?: true
    userId?: true
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    boardId?: true
    categoryId?: true
    userId?: true
    amount?: true
    description?: true
    date?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    boardId?: true
    categoryId?: true
    userId?: true
    amount?: true
    description?: true
    date?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    boardId?: true
    categoryId?: true
    userId?: true
    amount?: true
    description?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    boardId: number
    categoryId: number
    userId: number
    amount: Decimal
    description: string | null
    date: Date
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boardId?: boolean
    categoryId?: boolean
    userId?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>



  export type TransactionSelectScalar = {
    id?: boolean
    boardId?: boolean
    categoryId?: boolean
    userId?: boolean
    amount?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "boardId" | "categoryId" | "userId" | "amount" | "description" | "date" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      board: Prisma.$BoardPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      boardId: number
      categoryId: number
      userId: number
      amount: Prisma.Decimal
      description: string | null
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly boardId: FieldRef<"Transaction", 'Int'>
    readonly categoryId: FieldRef<"Transaction", 'Int'>
    readonly userId: FieldRef<"Transaction", 'Int'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model CategoryBudget
   */

  export type AggregateCategoryBudget = {
    _count: CategoryBudgetCountAggregateOutputType | null
    _avg: CategoryBudgetAvgAggregateOutputType | null
    _sum: CategoryBudgetSumAggregateOutputType | null
    _min: CategoryBudgetMinAggregateOutputType | null
    _max: CategoryBudgetMaxAggregateOutputType | null
  }

  export type CategoryBudgetAvgAggregateOutputType = {
    id: number | null
    boardId: number | null
    categoryId: number | null
    amount: Decimal | null
    month: number | null
    year: number | null
  }

  export type CategoryBudgetSumAggregateOutputType = {
    id: number | null
    boardId: number | null
    categoryId: number | null
    amount: Decimal | null
    month: number | null
    year: number | null
  }

  export type CategoryBudgetMinAggregateOutputType = {
    id: number | null
    boardId: number | null
    categoryId: number | null
    amount: Decimal | null
    month: number | null
    year: number | null
    createdAt: Date | null
  }

  export type CategoryBudgetMaxAggregateOutputType = {
    id: number | null
    boardId: number | null
    categoryId: number | null
    amount: Decimal | null
    month: number | null
    year: number | null
    createdAt: Date | null
  }

  export type CategoryBudgetCountAggregateOutputType = {
    id: number
    boardId: number
    categoryId: number
    amount: number
    month: number
    year: number
    createdAt: number
    _all: number
  }


  export type CategoryBudgetAvgAggregateInputType = {
    id?: true
    boardId?: true
    categoryId?: true
    amount?: true
    month?: true
    year?: true
  }

  export type CategoryBudgetSumAggregateInputType = {
    id?: true
    boardId?: true
    categoryId?: true
    amount?: true
    month?: true
    year?: true
  }

  export type CategoryBudgetMinAggregateInputType = {
    id?: true
    boardId?: true
    categoryId?: true
    amount?: true
    month?: true
    year?: true
    createdAt?: true
  }

  export type CategoryBudgetMaxAggregateInputType = {
    id?: true
    boardId?: true
    categoryId?: true
    amount?: true
    month?: true
    year?: true
    createdAt?: true
  }

  export type CategoryBudgetCountAggregateInputType = {
    id?: true
    boardId?: true
    categoryId?: true
    amount?: true
    month?: true
    year?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryBudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryBudget to aggregate.
     */
    where?: CategoryBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryBudgets to fetch.
     */
    orderBy?: CategoryBudgetOrderByWithRelationInput | CategoryBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryBudgets
    **/
    _count?: true | CategoryBudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryBudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryBudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryBudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryBudgetMaxAggregateInputType
  }

  export type GetCategoryBudgetAggregateType<T extends CategoryBudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryBudget[P]>
      : GetScalarType<T[P], AggregateCategoryBudget[P]>
  }




  export type CategoryBudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryBudgetWhereInput
    orderBy?: CategoryBudgetOrderByWithAggregationInput | CategoryBudgetOrderByWithAggregationInput[]
    by: CategoryBudgetScalarFieldEnum[] | CategoryBudgetScalarFieldEnum
    having?: CategoryBudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryBudgetCountAggregateInputType | true
    _avg?: CategoryBudgetAvgAggregateInputType
    _sum?: CategoryBudgetSumAggregateInputType
    _min?: CategoryBudgetMinAggregateInputType
    _max?: CategoryBudgetMaxAggregateInputType
  }

  export type CategoryBudgetGroupByOutputType = {
    id: number
    boardId: number
    categoryId: number
    amount: Decimal
    month: number
    year: number
    createdAt: Date
    _count: CategoryBudgetCountAggregateOutputType | null
    _avg: CategoryBudgetAvgAggregateOutputType | null
    _sum: CategoryBudgetSumAggregateOutputType | null
    _min: CategoryBudgetMinAggregateOutputType | null
    _max: CategoryBudgetMaxAggregateOutputType | null
  }

  type GetCategoryBudgetGroupByPayload<T extends CategoryBudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryBudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryBudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryBudgetGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryBudgetGroupByOutputType[P]>
        }
      >
    >


  export type CategoryBudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boardId?: boolean
    categoryId?: boolean
    amount?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryBudget"]>



  export type CategoryBudgetSelectScalar = {
    id?: boolean
    boardId?: boolean
    categoryId?: boolean
    amount?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
  }

  export type CategoryBudgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "boardId" | "categoryId" | "amount" | "month" | "year" | "createdAt", ExtArgs["result"]["categoryBudget"]>
  export type CategoryBudgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $CategoryBudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryBudget"
    objects: {
      board: Prisma.$BoardPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      boardId: number
      categoryId: number
      amount: Prisma.Decimal
      month: number
      year: number
      createdAt: Date
    }, ExtArgs["result"]["categoryBudget"]>
    composites: {}
  }

  type CategoryBudgetGetPayload<S extends boolean | null | undefined | CategoryBudgetDefaultArgs> = $Result.GetResult<Prisma.$CategoryBudgetPayload, S>

  type CategoryBudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryBudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryBudgetCountAggregateInputType | true
    }

  export interface CategoryBudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryBudget'], meta: { name: 'CategoryBudget' } }
    /**
     * Find zero or one CategoryBudget that matches the filter.
     * @param {CategoryBudgetFindUniqueArgs} args - Arguments to find a CategoryBudget
     * @example
     * // Get one CategoryBudget
     * const categoryBudget = await prisma.categoryBudget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryBudgetFindUniqueArgs>(args: SelectSubset<T, CategoryBudgetFindUniqueArgs<ExtArgs>>): Prisma__CategoryBudgetClient<$Result.GetResult<Prisma.$CategoryBudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryBudget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryBudgetFindUniqueOrThrowArgs} args - Arguments to find a CategoryBudget
     * @example
     * // Get one CategoryBudget
     * const categoryBudget = await prisma.categoryBudget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryBudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryBudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryBudgetClient<$Result.GetResult<Prisma.$CategoryBudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryBudget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryBudgetFindFirstArgs} args - Arguments to find a CategoryBudget
     * @example
     * // Get one CategoryBudget
     * const categoryBudget = await prisma.categoryBudget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryBudgetFindFirstArgs>(args?: SelectSubset<T, CategoryBudgetFindFirstArgs<ExtArgs>>): Prisma__CategoryBudgetClient<$Result.GetResult<Prisma.$CategoryBudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryBudget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryBudgetFindFirstOrThrowArgs} args - Arguments to find a CategoryBudget
     * @example
     * // Get one CategoryBudget
     * const categoryBudget = await prisma.categoryBudget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryBudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryBudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryBudgetClient<$Result.GetResult<Prisma.$CategoryBudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryBudgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryBudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryBudgets
     * const categoryBudgets = await prisma.categoryBudget.findMany()
     * 
     * // Get first 10 CategoryBudgets
     * const categoryBudgets = await prisma.categoryBudget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryBudgetWithIdOnly = await prisma.categoryBudget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryBudgetFindManyArgs>(args?: SelectSubset<T, CategoryBudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryBudget.
     * @param {CategoryBudgetCreateArgs} args - Arguments to create a CategoryBudget.
     * @example
     * // Create one CategoryBudget
     * const CategoryBudget = await prisma.categoryBudget.create({
     *   data: {
     *     // ... data to create a CategoryBudget
     *   }
     * })
     * 
     */
    create<T extends CategoryBudgetCreateArgs>(args: SelectSubset<T, CategoryBudgetCreateArgs<ExtArgs>>): Prisma__CategoryBudgetClient<$Result.GetResult<Prisma.$CategoryBudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryBudgets.
     * @param {CategoryBudgetCreateManyArgs} args - Arguments to create many CategoryBudgets.
     * @example
     * // Create many CategoryBudgets
     * const categoryBudget = await prisma.categoryBudget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryBudgetCreateManyArgs>(args?: SelectSubset<T, CategoryBudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoryBudget.
     * @param {CategoryBudgetDeleteArgs} args - Arguments to delete one CategoryBudget.
     * @example
     * // Delete one CategoryBudget
     * const CategoryBudget = await prisma.categoryBudget.delete({
     *   where: {
     *     // ... filter to delete one CategoryBudget
     *   }
     * })
     * 
     */
    delete<T extends CategoryBudgetDeleteArgs>(args: SelectSubset<T, CategoryBudgetDeleteArgs<ExtArgs>>): Prisma__CategoryBudgetClient<$Result.GetResult<Prisma.$CategoryBudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryBudget.
     * @param {CategoryBudgetUpdateArgs} args - Arguments to update one CategoryBudget.
     * @example
     * // Update one CategoryBudget
     * const categoryBudget = await prisma.categoryBudget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryBudgetUpdateArgs>(args: SelectSubset<T, CategoryBudgetUpdateArgs<ExtArgs>>): Prisma__CategoryBudgetClient<$Result.GetResult<Prisma.$CategoryBudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryBudgets.
     * @param {CategoryBudgetDeleteManyArgs} args - Arguments to filter CategoryBudgets to delete.
     * @example
     * // Delete a few CategoryBudgets
     * const { count } = await prisma.categoryBudget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryBudgetDeleteManyArgs>(args?: SelectSubset<T, CategoryBudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryBudgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryBudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryBudgets
     * const categoryBudget = await prisma.categoryBudget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryBudgetUpdateManyArgs>(args: SelectSubset<T, CategoryBudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryBudget.
     * @param {CategoryBudgetUpsertArgs} args - Arguments to update or create a CategoryBudget.
     * @example
     * // Update or create a CategoryBudget
     * const categoryBudget = await prisma.categoryBudget.upsert({
     *   create: {
     *     // ... data to create a CategoryBudget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryBudget we want to update
     *   }
     * })
     */
    upsert<T extends CategoryBudgetUpsertArgs>(args: SelectSubset<T, CategoryBudgetUpsertArgs<ExtArgs>>): Prisma__CategoryBudgetClient<$Result.GetResult<Prisma.$CategoryBudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryBudgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryBudgetCountArgs} args - Arguments to filter CategoryBudgets to count.
     * @example
     * // Count the number of CategoryBudgets
     * const count = await prisma.categoryBudget.count({
     *   where: {
     *     // ... the filter for the CategoryBudgets we want to count
     *   }
     * })
    **/
    count<T extends CategoryBudgetCountArgs>(
      args?: Subset<T, CategoryBudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryBudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryBudget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryBudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryBudgetAggregateArgs>(args: Subset<T, CategoryBudgetAggregateArgs>): Prisma.PrismaPromise<GetCategoryBudgetAggregateType<T>>

    /**
     * Group by CategoryBudget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryBudgetGroupByArgs} args - Group by arguments.
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
      T extends CategoryBudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryBudgetGroupByArgs['orderBy'] }
        : { orderBy?: CategoryBudgetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryBudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryBudget model
   */
  readonly fields: CategoryBudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryBudget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryBudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CategoryBudget model
   */
  interface CategoryBudgetFieldRefs {
    readonly id: FieldRef<"CategoryBudget", 'Int'>
    readonly boardId: FieldRef<"CategoryBudget", 'Int'>
    readonly categoryId: FieldRef<"CategoryBudget", 'Int'>
    readonly amount: FieldRef<"CategoryBudget", 'Decimal'>
    readonly month: FieldRef<"CategoryBudget", 'Int'>
    readonly year: FieldRef<"CategoryBudget", 'Int'>
    readonly createdAt: FieldRef<"CategoryBudget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CategoryBudget findUnique
   */
  export type CategoryBudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBudget
     */
    select?: CategoryBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryBudget
     */
    omit?: CategoryBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBudgetInclude<ExtArgs> | null
    /**
     * Filter, which CategoryBudget to fetch.
     */
    where: CategoryBudgetWhereUniqueInput
  }

  /**
   * CategoryBudget findUniqueOrThrow
   */
  export type CategoryBudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBudget
     */
    select?: CategoryBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryBudget
     */
    omit?: CategoryBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBudgetInclude<ExtArgs> | null
    /**
     * Filter, which CategoryBudget to fetch.
     */
    where: CategoryBudgetWhereUniqueInput
  }

  /**
   * CategoryBudget findFirst
   */
  export type CategoryBudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBudget
     */
    select?: CategoryBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryBudget
     */
    omit?: CategoryBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBudgetInclude<ExtArgs> | null
    /**
     * Filter, which CategoryBudget to fetch.
     */
    where?: CategoryBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryBudgets to fetch.
     */
    orderBy?: CategoryBudgetOrderByWithRelationInput | CategoryBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryBudgets.
     */
    cursor?: CategoryBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryBudgets.
     */
    distinct?: CategoryBudgetScalarFieldEnum | CategoryBudgetScalarFieldEnum[]
  }

  /**
   * CategoryBudget findFirstOrThrow
   */
  export type CategoryBudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBudget
     */
    select?: CategoryBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryBudget
     */
    omit?: CategoryBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBudgetInclude<ExtArgs> | null
    /**
     * Filter, which CategoryBudget to fetch.
     */
    where?: CategoryBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryBudgets to fetch.
     */
    orderBy?: CategoryBudgetOrderByWithRelationInput | CategoryBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryBudgets.
     */
    cursor?: CategoryBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryBudgets.
     */
    distinct?: CategoryBudgetScalarFieldEnum | CategoryBudgetScalarFieldEnum[]
  }

  /**
   * CategoryBudget findMany
   */
  export type CategoryBudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBudget
     */
    select?: CategoryBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryBudget
     */
    omit?: CategoryBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBudgetInclude<ExtArgs> | null
    /**
     * Filter, which CategoryBudgets to fetch.
     */
    where?: CategoryBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryBudgets to fetch.
     */
    orderBy?: CategoryBudgetOrderByWithRelationInput | CategoryBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryBudgets.
     */
    cursor?: CategoryBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryBudgets.
     */
    distinct?: CategoryBudgetScalarFieldEnum | CategoryBudgetScalarFieldEnum[]
  }

  /**
   * CategoryBudget create
   */
  export type CategoryBudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBudget
     */
    select?: CategoryBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryBudget
     */
    omit?: CategoryBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBudgetInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryBudget.
     */
    data: XOR<CategoryBudgetCreateInput, CategoryBudgetUncheckedCreateInput>
  }

  /**
   * CategoryBudget createMany
   */
  export type CategoryBudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryBudgets.
     */
    data: CategoryBudgetCreateManyInput | CategoryBudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryBudget update
   */
  export type CategoryBudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBudget
     */
    select?: CategoryBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryBudget
     */
    omit?: CategoryBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBudgetInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryBudget.
     */
    data: XOR<CategoryBudgetUpdateInput, CategoryBudgetUncheckedUpdateInput>
    /**
     * Choose, which CategoryBudget to update.
     */
    where: CategoryBudgetWhereUniqueInput
  }

  /**
   * CategoryBudget updateMany
   */
  export type CategoryBudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryBudgets.
     */
    data: XOR<CategoryBudgetUpdateManyMutationInput, CategoryBudgetUncheckedUpdateManyInput>
    /**
     * Filter which CategoryBudgets to update
     */
    where?: CategoryBudgetWhereInput
    /**
     * Limit how many CategoryBudgets to update.
     */
    limit?: number
  }

  /**
   * CategoryBudget upsert
   */
  export type CategoryBudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBudget
     */
    select?: CategoryBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryBudget
     */
    omit?: CategoryBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBudgetInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryBudget to update in case it exists.
     */
    where: CategoryBudgetWhereUniqueInput
    /**
     * In case the CategoryBudget found by the `where` argument doesn't exist, create a new CategoryBudget with this data.
     */
    create: XOR<CategoryBudgetCreateInput, CategoryBudgetUncheckedCreateInput>
    /**
     * In case the CategoryBudget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryBudgetUpdateInput, CategoryBudgetUncheckedUpdateInput>
  }

  /**
   * CategoryBudget delete
   */
  export type CategoryBudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBudget
     */
    select?: CategoryBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryBudget
     */
    omit?: CategoryBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBudgetInclude<ExtArgs> | null
    /**
     * Filter which CategoryBudget to delete.
     */
    where: CategoryBudgetWhereUniqueInput
  }

  /**
   * CategoryBudget deleteMany
   */
  export type CategoryBudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryBudgets to delete
     */
    where?: CategoryBudgetWhereInput
    /**
     * Limit how many CategoryBudgets to delete.
     */
    limit?: number
  }

  /**
   * CategoryBudget without action
   */
  export type CategoryBudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryBudget
     */
    select?: CategoryBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryBudget
     */
    omit?: CategoryBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryBudgetInclude<ExtArgs> | null
  }


  /**
   * Model MonthlyBudget
   */

  export type AggregateMonthlyBudget = {
    _count: MonthlyBudgetCountAggregateOutputType | null
    _avg: MonthlyBudgetAvgAggregateOutputType | null
    _sum: MonthlyBudgetSumAggregateOutputType | null
    _min: MonthlyBudgetMinAggregateOutputType | null
    _max: MonthlyBudgetMaxAggregateOutputType | null
  }

  export type MonthlyBudgetAvgAggregateOutputType = {
    id: number | null
    boardId: number | null
    amount: Decimal | null
    month: number | null
    year: number | null
  }

  export type MonthlyBudgetSumAggregateOutputType = {
    id: number | null
    boardId: number | null
    amount: Decimal | null
    month: number | null
    year: number | null
  }

  export type MonthlyBudgetMinAggregateOutputType = {
    id: number | null
    boardId: number | null
    amount: Decimal | null
    month: number | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyBudgetMaxAggregateOutputType = {
    id: number | null
    boardId: number | null
    amount: Decimal | null
    month: number | null
    year: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonthlyBudgetCountAggregateOutputType = {
    id: number
    boardId: number
    amount: number
    month: number
    year: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MonthlyBudgetAvgAggregateInputType = {
    id?: true
    boardId?: true
    amount?: true
    month?: true
    year?: true
  }

  export type MonthlyBudgetSumAggregateInputType = {
    id?: true
    boardId?: true
    amount?: true
    month?: true
    year?: true
  }

  export type MonthlyBudgetMinAggregateInputType = {
    id?: true
    boardId?: true
    amount?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonthlyBudgetMaxAggregateInputType = {
    id?: true
    boardId?: true
    amount?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonthlyBudgetCountAggregateInputType = {
    id?: true
    boardId?: true
    amount?: true
    month?: true
    year?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MonthlyBudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyBudget to aggregate.
     */
    where?: MonthlyBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyBudgets to fetch.
     */
    orderBy?: MonthlyBudgetOrderByWithRelationInput | MonthlyBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyBudgets
    **/
    _count?: true | MonthlyBudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyBudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyBudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyBudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyBudgetMaxAggregateInputType
  }

  export type GetMonthlyBudgetAggregateType<T extends MonthlyBudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyBudget[P]>
      : GetScalarType<T[P], AggregateMonthlyBudget[P]>
  }




  export type MonthlyBudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyBudgetWhereInput
    orderBy?: MonthlyBudgetOrderByWithAggregationInput | MonthlyBudgetOrderByWithAggregationInput[]
    by: MonthlyBudgetScalarFieldEnum[] | MonthlyBudgetScalarFieldEnum
    having?: MonthlyBudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyBudgetCountAggregateInputType | true
    _avg?: MonthlyBudgetAvgAggregateInputType
    _sum?: MonthlyBudgetSumAggregateInputType
    _min?: MonthlyBudgetMinAggregateInputType
    _max?: MonthlyBudgetMaxAggregateInputType
  }

  export type MonthlyBudgetGroupByOutputType = {
    id: number
    boardId: number
    amount: Decimal
    month: number
    year: number
    createdAt: Date
    updatedAt: Date
    _count: MonthlyBudgetCountAggregateOutputType | null
    _avg: MonthlyBudgetAvgAggregateOutputType | null
    _sum: MonthlyBudgetSumAggregateOutputType | null
    _min: MonthlyBudgetMinAggregateOutputType | null
    _max: MonthlyBudgetMaxAggregateOutputType | null
  }

  type GetMonthlyBudgetGroupByPayload<T extends MonthlyBudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyBudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyBudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyBudgetGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyBudgetGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyBudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boardId?: boolean
    amount?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyBudget"]>



  export type MonthlyBudgetSelectScalar = {
    id?: boolean
    boardId?: boolean
    amount?: boolean
    month?: boolean
    year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MonthlyBudgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "boardId" | "amount" | "month" | "year" | "createdAt" | "updatedAt", ExtArgs["result"]["monthlyBudget"]>
  export type MonthlyBudgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }

  export type $MonthlyBudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyBudget"
    objects: {
      board: Prisma.$BoardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      boardId: number
      amount: Prisma.Decimal
      month: number
      year: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["monthlyBudget"]>
    composites: {}
  }

  type MonthlyBudgetGetPayload<S extends boolean | null | undefined | MonthlyBudgetDefaultArgs> = $Result.GetResult<Prisma.$MonthlyBudgetPayload, S>

  type MonthlyBudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlyBudgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlyBudgetCountAggregateInputType | true
    }

  export interface MonthlyBudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyBudget'], meta: { name: 'MonthlyBudget' } }
    /**
     * Find zero or one MonthlyBudget that matches the filter.
     * @param {MonthlyBudgetFindUniqueArgs} args - Arguments to find a MonthlyBudget
     * @example
     * // Get one MonthlyBudget
     * const monthlyBudget = await prisma.monthlyBudget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyBudgetFindUniqueArgs>(args: SelectSubset<T, MonthlyBudgetFindUniqueArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlyBudget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlyBudgetFindUniqueOrThrowArgs} args - Arguments to find a MonthlyBudget
     * @example
     * // Get one MonthlyBudget
     * const monthlyBudget = await prisma.monthlyBudget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyBudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyBudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyBudget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyBudgetFindFirstArgs} args - Arguments to find a MonthlyBudget
     * @example
     * // Get one MonthlyBudget
     * const monthlyBudget = await prisma.monthlyBudget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyBudgetFindFirstArgs>(args?: SelectSubset<T, MonthlyBudgetFindFirstArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyBudget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyBudgetFindFirstOrThrowArgs} args - Arguments to find a MonthlyBudget
     * @example
     * // Get one MonthlyBudget
     * const monthlyBudget = await prisma.monthlyBudget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyBudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyBudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlyBudgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyBudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyBudgets
     * const monthlyBudgets = await prisma.monthlyBudget.findMany()
     * 
     * // Get first 10 MonthlyBudgets
     * const monthlyBudgets = await prisma.monthlyBudget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyBudgetWithIdOnly = await prisma.monthlyBudget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyBudgetFindManyArgs>(args?: SelectSubset<T, MonthlyBudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlyBudget.
     * @param {MonthlyBudgetCreateArgs} args - Arguments to create a MonthlyBudget.
     * @example
     * // Create one MonthlyBudget
     * const MonthlyBudget = await prisma.monthlyBudget.create({
     *   data: {
     *     // ... data to create a MonthlyBudget
     *   }
     * })
     * 
     */
    create<T extends MonthlyBudgetCreateArgs>(args: SelectSubset<T, MonthlyBudgetCreateArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlyBudgets.
     * @param {MonthlyBudgetCreateManyArgs} args - Arguments to create many MonthlyBudgets.
     * @example
     * // Create many MonthlyBudgets
     * const monthlyBudget = await prisma.monthlyBudget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyBudgetCreateManyArgs>(args?: SelectSubset<T, MonthlyBudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MonthlyBudget.
     * @param {MonthlyBudgetDeleteArgs} args - Arguments to delete one MonthlyBudget.
     * @example
     * // Delete one MonthlyBudget
     * const MonthlyBudget = await prisma.monthlyBudget.delete({
     *   where: {
     *     // ... filter to delete one MonthlyBudget
     *   }
     * })
     * 
     */
    delete<T extends MonthlyBudgetDeleteArgs>(args: SelectSubset<T, MonthlyBudgetDeleteArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlyBudget.
     * @param {MonthlyBudgetUpdateArgs} args - Arguments to update one MonthlyBudget.
     * @example
     * // Update one MonthlyBudget
     * const monthlyBudget = await prisma.monthlyBudget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyBudgetUpdateArgs>(args: SelectSubset<T, MonthlyBudgetUpdateArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlyBudgets.
     * @param {MonthlyBudgetDeleteManyArgs} args - Arguments to filter MonthlyBudgets to delete.
     * @example
     * // Delete a few MonthlyBudgets
     * const { count } = await prisma.monthlyBudget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyBudgetDeleteManyArgs>(args?: SelectSubset<T, MonthlyBudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyBudgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyBudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyBudgets
     * const monthlyBudget = await prisma.monthlyBudget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyBudgetUpdateManyArgs>(args: SelectSubset<T, MonthlyBudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonthlyBudget.
     * @param {MonthlyBudgetUpsertArgs} args - Arguments to update or create a MonthlyBudget.
     * @example
     * // Update or create a MonthlyBudget
     * const monthlyBudget = await prisma.monthlyBudget.upsert({
     *   create: {
     *     // ... data to create a MonthlyBudget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyBudget we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyBudgetUpsertArgs>(args: SelectSubset<T, MonthlyBudgetUpsertArgs<ExtArgs>>): Prisma__MonthlyBudgetClient<$Result.GetResult<Prisma.$MonthlyBudgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlyBudgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyBudgetCountArgs} args - Arguments to filter MonthlyBudgets to count.
     * @example
     * // Count the number of MonthlyBudgets
     * const count = await prisma.monthlyBudget.count({
     *   where: {
     *     // ... the filter for the MonthlyBudgets we want to count
     *   }
     * })
    **/
    count<T extends MonthlyBudgetCountArgs>(
      args?: Subset<T, MonthlyBudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyBudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyBudget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyBudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonthlyBudgetAggregateArgs>(args: Subset<T, MonthlyBudgetAggregateArgs>): Prisma.PrismaPromise<GetMonthlyBudgetAggregateType<T>>

    /**
     * Group by MonthlyBudget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyBudgetGroupByArgs} args - Group by arguments.
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
      T extends MonthlyBudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyBudgetGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyBudgetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonthlyBudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyBudget model
   */
  readonly fields: MonthlyBudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyBudget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyBudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MonthlyBudget model
   */
  interface MonthlyBudgetFieldRefs {
    readonly id: FieldRef<"MonthlyBudget", 'Int'>
    readonly boardId: FieldRef<"MonthlyBudget", 'Int'>
    readonly amount: FieldRef<"MonthlyBudget", 'Decimal'>
    readonly month: FieldRef<"MonthlyBudget", 'Int'>
    readonly year: FieldRef<"MonthlyBudget", 'Int'>
    readonly createdAt: FieldRef<"MonthlyBudget", 'DateTime'>
    readonly updatedAt: FieldRef<"MonthlyBudget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyBudget findUnique
   */
  export type MonthlyBudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyBudget
     */
    omit?: MonthlyBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyBudgetInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyBudget to fetch.
     */
    where: MonthlyBudgetWhereUniqueInput
  }

  /**
   * MonthlyBudget findUniqueOrThrow
   */
  export type MonthlyBudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyBudget
     */
    omit?: MonthlyBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyBudgetInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyBudget to fetch.
     */
    where: MonthlyBudgetWhereUniqueInput
  }

  /**
   * MonthlyBudget findFirst
   */
  export type MonthlyBudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyBudget
     */
    omit?: MonthlyBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyBudgetInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyBudget to fetch.
     */
    where?: MonthlyBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyBudgets to fetch.
     */
    orderBy?: MonthlyBudgetOrderByWithRelationInput | MonthlyBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyBudgets.
     */
    cursor?: MonthlyBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyBudgets.
     */
    distinct?: MonthlyBudgetScalarFieldEnum | MonthlyBudgetScalarFieldEnum[]
  }

  /**
   * MonthlyBudget findFirstOrThrow
   */
  export type MonthlyBudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyBudget
     */
    omit?: MonthlyBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyBudgetInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyBudget to fetch.
     */
    where?: MonthlyBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyBudgets to fetch.
     */
    orderBy?: MonthlyBudgetOrderByWithRelationInput | MonthlyBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyBudgets.
     */
    cursor?: MonthlyBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyBudgets.
     */
    distinct?: MonthlyBudgetScalarFieldEnum | MonthlyBudgetScalarFieldEnum[]
  }

  /**
   * MonthlyBudget findMany
   */
  export type MonthlyBudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyBudget
     */
    omit?: MonthlyBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyBudgetInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyBudgets to fetch.
     */
    where?: MonthlyBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyBudgets to fetch.
     */
    orderBy?: MonthlyBudgetOrderByWithRelationInput | MonthlyBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyBudgets.
     */
    cursor?: MonthlyBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyBudgets.
     */
    distinct?: MonthlyBudgetScalarFieldEnum | MonthlyBudgetScalarFieldEnum[]
  }

  /**
   * MonthlyBudget create
   */
  export type MonthlyBudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyBudget
     */
    omit?: MonthlyBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyBudgetInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthlyBudget.
     */
    data: XOR<MonthlyBudgetCreateInput, MonthlyBudgetUncheckedCreateInput>
  }

  /**
   * MonthlyBudget createMany
   */
  export type MonthlyBudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyBudgets.
     */
    data: MonthlyBudgetCreateManyInput | MonthlyBudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyBudget update
   */
  export type MonthlyBudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyBudget
     */
    omit?: MonthlyBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyBudgetInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthlyBudget.
     */
    data: XOR<MonthlyBudgetUpdateInput, MonthlyBudgetUncheckedUpdateInput>
    /**
     * Choose, which MonthlyBudget to update.
     */
    where: MonthlyBudgetWhereUniqueInput
  }

  /**
   * MonthlyBudget updateMany
   */
  export type MonthlyBudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyBudgets.
     */
    data: XOR<MonthlyBudgetUpdateManyMutationInput, MonthlyBudgetUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyBudgets to update
     */
    where?: MonthlyBudgetWhereInput
    /**
     * Limit how many MonthlyBudgets to update.
     */
    limit?: number
  }

  /**
   * MonthlyBudget upsert
   */
  export type MonthlyBudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyBudget
     */
    omit?: MonthlyBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyBudgetInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthlyBudget to update in case it exists.
     */
    where: MonthlyBudgetWhereUniqueInput
    /**
     * In case the MonthlyBudget found by the `where` argument doesn't exist, create a new MonthlyBudget with this data.
     */
    create: XOR<MonthlyBudgetCreateInput, MonthlyBudgetUncheckedCreateInput>
    /**
     * In case the MonthlyBudget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyBudgetUpdateInput, MonthlyBudgetUncheckedUpdateInput>
  }

  /**
   * MonthlyBudget delete
   */
  export type MonthlyBudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyBudget
     */
    omit?: MonthlyBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyBudgetInclude<ExtArgs> | null
    /**
     * Filter which MonthlyBudget to delete.
     */
    where: MonthlyBudgetWhereUniqueInput
  }

  /**
   * MonthlyBudget deleteMany
   */
  export type MonthlyBudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyBudgets to delete
     */
    where?: MonthlyBudgetWhereInput
    /**
     * Limit how many MonthlyBudgets to delete.
     */
    limit?: number
  }

  /**
   * MonthlyBudget without action
   */
  export type MonthlyBudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyBudget
     */
    select?: MonthlyBudgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyBudget
     */
    omit?: MonthlyBudgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlyBudgetInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const UserBoardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    boardId: 'boardId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type UserBoardScalarFieldEnum = (typeof UserBoardScalarFieldEnum)[keyof typeof UserBoardScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    boardId: 'boardId',
    name: 'name',
    color: 'color'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    boardId: 'boardId',
    categoryId: 'categoryId',
    userId: 'userId',
    amount: 'amount',
    description: 'description',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const CategoryBudgetScalarFieldEnum: {
    id: 'id',
    boardId: 'boardId',
    categoryId: 'categoryId',
    amount: 'amount',
    month: 'month',
    year: 'year',
    createdAt: 'createdAt'
  };

  export type CategoryBudgetScalarFieldEnum = (typeof CategoryBudgetScalarFieldEnum)[keyof typeof CategoryBudgetScalarFieldEnum]


  export const MonthlyBudgetScalarFieldEnum: {
    id: 'id',
    boardId: 'boardId',
    amount: 'amount',
    month: 'month',
    year: 'year',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MonthlyBudgetScalarFieldEnum = (typeof MonthlyBudgetScalarFieldEnum)[keyof typeof MonthlyBudgetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const BoardOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type BoardOrderByRelevanceFieldEnum = (typeof BoardOrderByRelevanceFieldEnum)[keyof typeof BoardOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name',
    color: 'color'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TransactionOrderByRelevanceFieldEnum: {
    description: 'description'
  };

  export type TransactionOrderByRelevanceFieldEnum = (typeof TransactionOrderByRelevanceFieldEnum)[keyof typeof TransactionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BoardRole'
   */
  export type EnumBoardRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BoardRole'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    boards?: UserBoardListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    boards?: UserBoardOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    boards?: UserBoardListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BoardWhereInput = {
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    id?: IntFilter<"Board"> | number
    name?: StringFilter<"Board"> | string
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
    members?: UserBoardListRelationFilter
    categories?: CategoryListRelationFilter
    categoryBudgets?: CategoryBudgetListRelationFilter
    monthlyBudgets?: MonthlyBudgetListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: UserBoardOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    categoryBudgets?: CategoryBudgetOrderByRelationAggregateInput
    monthlyBudgets?: MonthlyBudgetOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    _relevance?: BoardOrderByRelevanceInput
  }

  export type BoardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    name?: StringFilter<"Board"> | string
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
    members?: UserBoardListRelationFilter
    categories?: CategoryListRelationFilter
    categoryBudgets?: CategoryBudgetListRelationFilter
    monthlyBudgets?: MonthlyBudgetListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id">

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _avg?: BoardAvgOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
    _sum?: BoardSumOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    OR?: BoardScalarWhereWithAggregatesInput[]
    NOT?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Board"> | number
    name?: StringWithAggregatesFilter<"Board"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Board"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Board"> | Date | string
  }

  export type UserBoardWhereInput = {
    AND?: UserBoardWhereInput | UserBoardWhereInput[]
    OR?: UserBoardWhereInput[]
    NOT?: UserBoardWhereInput | UserBoardWhereInput[]
    id?: IntFilter<"UserBoard"> | number
    userId?: IntFilter<"UserBoard"> | number
    boardId?: IntFilter<"UserBoard"> | number
    role?: EnumBoardRoleFilter<"UserBoard"> | $Enums.BoardRole
    joinedAt?: DateTimeFilter<"UserBoard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
  }

  export type UserBoardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    board?: BoardOrderByWithRelationInput
  }

  export type UserBoardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_boardId?: UserBoardUserIdBoardIdCompoundUniqueInput
    AND?: UserBoardWhereInput | UserBoardWhereInput[]
    OR?: UserBoardWhereInput[]
    NOT?: UserBoardWhereInput | UserBoardWhereInput[]
    userId?: IntFilter<"UserBoard"> | number
    boardId?: IntFilter<"UserBoard"> | number
    role?: EnumBoardRoleFilter<"UserBoard"> | $Enums.BoardRole
    joinedAt?: DateTimeFilter<"UserBoard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
  }, "id" | "userId_boardId">

  export type UserBoardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: UserBoardCountOrderByAggregateInput
    _avg?: UserBoardAvgOrderByAggregateInput
    _max?: UserBoardMaxOrderByAggregateInput
    _min?: UserBoardMinOrderByAggregateInput
    _sum?: UserBoardSumOrderByAggregateInput
  }

  export type UserBoardScalarWhereWithAggregatesInput = {
    AND?: UserBoardScalarWhereWithAggregatesInput | UserBoardScalarWhereWithAggregatesInput[]
    OR?: UserBoardScalarWhereWithAggregatesInput[]
    NOT?: UserBoardScalarWhereWithAggregatesInput | UserBoardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserBoard"> | number
    userId?: IntWithAggregatesFilter<"UserBoard"> | number
    boardId?: IntWithAggregatesFilter<"UserBoard"> | number
    role?: EnumBoardRoleWithAggregatesFilter<"UserBoard"> | $Enums.BoardRole
    joinedAt?: DateTimeWithAggregatesFilter<"UserBoard"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    boardId?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    color?: StringFilter<"Category"> | string
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
    categoryBudgets?: CategoryBudgetListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    board?: BoardOrderByWithRelationInput
    categoryBudgets?: CategoryBudgetOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    boardId_name?: CategoryBoardIdNameCompoundUniqueInput
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    boardId?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    color?: StringFilter<"Category"> | string
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
    categoryBudgets?: CategoryBudgetListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id" | "boardId_name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    boardId?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    color?: StringWithAggregatesFilter<"Category"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    boardId?: IntFilter<"Transaction"> | number
    categoryId?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    boardId?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    board?: BoardOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: TransactionOrderByRelevanceInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    boardId?: IntFilter<"Transaction"> | number
    categoryId?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    boardId?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    boardId?: IntWithAggregatesFilter<"Transaction"> | number
    categoryId?: IntWithAggregatesFilter<"Transaction"> | number
    userId?: IntWithAggregatesFilter<"Transaction"> | number
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type CategoryBudgetWhereInput = {
    AND?: CategoryBudgetWhereInput | CategoryBudgetWhereInput[]
    OR?: CategoryBudgetWhereInput[]
    NOT?: CategoryBudgetWhereInput | CategoryBudgetWhereInput[]
    id?: IntFilter<"CategoryBudget"> | number
    boardId?: IntFilter<"CategoryBudget"> | number
    categoryId?: IntFilter<"CategoryBudget"> | number
    amount?: DecimalFilter<"CategoryBudget"> | Decimal | DecimalJsLike | number | string
    month?: IntFilter<"CategoryBudget"> | number
    year?: IntFilter<"CategoryBudget"> | number
    createdAt?: DateTimeFilter<"CategoryBudget"> | Date | string
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type CategoryBudgetOrderByWithRelationInput = {
    id?: SortOrder
    boardId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    board?: BoardOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type CategoryBudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    boardId_categoryId_month_year?: CategoryBudgetBoardIdCategoryIdMonthYearCompoundUniqueInput
    AND?: CategoryBudgetWhereInput | CategoryBudgetWhereInput[]
    OR?: CategoryBudgetWhereInput[]
    NOT?: CategoryBudgetWhereInput | CategoryBudgetWhereInput[]
    boardId?: IntFilter<"CategoryBudget"> | number
    categoryId?: IntFilter<"CategoryBudget"> | number
    amount?: DecimalFilter<"CategoryBudget"> | Decimal | DecimalJsLike | number | string
    month?: IntFilter<"CategoryBudget"> | number
    year?: IntFilter<"CategoryBudget"> | number
    createdAt?: DateTimeFilter<"CategoryBudget"> | Date | string
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id" | "boardId_categoryId_month_year">

  export type CategoryBudgetOrderByWithAggregationInput = {
    id?: SortOrder
    boardId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    _count?: CategoryBudgetCountOrderByAggregateInput
    _avg?: CategoryBudgetAvgOrderByAggregateInput
    _max?: CategoryBudgetMaxOrderByAggregateInput
    _min?: CategoryBudgetMinOrderByAggregateInput
    _sum?: CategoryBudgetSumOrderByAggregateInput
  }

  export type CategoryBudgetScalarWhereWithAggregatesInput = {
    AND?: CategoryBudgetScalarWhereWithAggregatesInput | CategoryBudgetScalarWhereWithAggregatesInput[]
    OR?: CategoryBudgetScalarWhereWithAggregatesInput[]
    NOT?: CategoryBudgetScalarWhereWithAggregatesInput | CategoryBudgetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategoryBudget"> | number
    boardId?: IntWithAggregatesFilter<"CategoryBudget"> | number
    categoryId?: IntWithAggregatesFilter<"CategoryBudget"> | number
    amount?: DecimalWithAggregatesFilter<"CategoryBudget"> | Decimal | DecimalJsLike | number | string
    month?: IntWithAggregatesFilter<"CategoryBudget"> | number
    year?: IntWithAggregatesFilter<"CategoryBudget"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CategoryBudget"> | Date | string
  }

  export type MonthlyBudgetWhereInput = {
    AND?: MonthlyBudgetWhereInput | MonthlyBudgetWhereInput[]
    OR?: MonthlyBudgetWhereInput[]
    NOT?: MonthlyBudgetWhereInput | MonthlyBudgetWhereInput[]
    id?: IntFilter<"MonthlyBudget"> | number
    boardId?: IntFilter<"MonthlyBudget"> | number
    amount?: DecimalFilter<"MonthlyBudget"> | Decimal | DecimalJsLike | number | string
    month?: IntFilter<"MonthlyBudget"> | number
    year?: IntFilter<"MonthlyBudget"> | number
    createdAt?: DateTimeFilter<"MonthlyBudget"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyBudget"> | Date | string
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
  }

  export type MonthlyBudgetOrderByWithRelationInput = {
    id?: SortOrder
    boardId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    board?: BoardOrderByWithRelationInput
  }

  export type MonthlyBudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    boardId_month_year?: MonthlyBudgetBoardIdMonthYearCompoundUniqueInput
    AND?: MonthlyBudgetWhereInput | MonthlyBudgetWhereInput[]
    OR?: MonthlyBudgetWhereInput[]
    NOT?: MonthlyBudgetWhereInput | MonthlyBudgetWhereInput[]
    boardId?: IntFilter<"MonthlyBudget"> | number
    amount?: DecimalFilter<"MonthlyBudget"> | Decimal | DecimalJsLike | number | string
    month?: IntFilter<"MonthlyBudget"> | number
    year?: IntFilter<"MonthlyBudget"> | number
    createdAt?: DateTimeFilter<"MonthlyBudget"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyBudget"> | Date | string
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
  }, "id" | "boardId_month_year">

  export type MonthlyBudgetOrderByWithAggregationInput = {
    id?: SortOrder
    boardId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MonthlyBudgetCountOrderByAggregateInput
    _avg?: MonthlyBudgetAvgOrderByAggregateInput
    _max?: MonthlyBudgetMaxOrderByAggregateInput
    _min?: MonthlyBudgetMinOrderByAggregateInput
    _sum?: MonthlyBudgetSumOrderByAggregateInput
  }

  export type MonthlyBudgetScalarWhereWithAggregatesInput = {
    AND?: MonthlyBudgetScalarWhereWithAggregatesInput | MonthlyBudgetScalarWhereWithAggregatesInput[]
    OR?: MonthlyBudgetScalarWhereWithAggregatesInput[]
    NOT?: MonthlyBudgetScalarWhereWithAggregatesInput | MonthlyBudgetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MonthlyBudget"> | number
    boardId?: IntWithAggregatesFilter<"MonthlyBudget"> | number
    amount?: DecimalWithAggregatesFilter<"MonthlyBudget"> | Decimal | DecimalJsLike | number | string
    month?: IntWithAggregatesFilter<"MonthlyBudget"> | number
    year?: IntWithAggregatesFilter<"MonthlyBudget"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MonthlyBudget"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MonthlyBudget"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    boards?: UserBoardCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    boards?: UserBoardUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boards?: UserBoardUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boards?: UserBoardUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserBoardCreateNestedManyWithoutBoardInput
    categories?: CategoryCreateNestedManyWithoutBoardInput
    categoryBudgets?: CategoryBudgetCreateNestedManyWithoutBoardInput
    monthlyBudgets?: MonthlyBudgetCreateNestedManyWithoutBoardInput
    transactions?: TransactionCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserBoardUncheckedCreateNestedManyWithoutBoardInput
    categories?: CategoryUncheckedCreateNestedManyWithoutBoardInput
    categoryBudgets?: CategoryBudgetUncheckedCreateNestedManyWithoutBoardInput
    monthlyBudgets?: MonthlyBudgetUncheckedCreateNestedManyWithoutBoardInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserBoardUpdateManyWithoutBoardNestedInput
    categories?: CategoryUpdateManyWithoutBoardNestedInput
    categoryBudgets?: CategoryBudgetUpdateManyWithoutBoardNestedInput
    monthlyBudgets?: MonthlyBudgetUpdateManyWithoutBoardNestedInput
    transactions?: TransactionUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserBoardUncheckedUpdateManyWithoutBoardNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutBoardNestedInput
    categoryBudgets?: CategoryBudgetUncheckedUpdateManyWithoutBoardNestedInput
    monthlyBudgets?: MonthlyBudgetUncheckedUpdateManyWithoutBoardNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBoardCreateInput = {
    role?: $Enums.BoardRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutBoardsInput
    board: BoardCreateNestedOneWithoutMembersInput
  }

  export type UserBoardUncheckedCreateInput = {
    id?: number
    userId: number
    boardId: number
    role?: $Enums.BoardRole
    joinedAt?: Date | string
  }

  export type UserBoardUpdateInput = {
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBoardsNestedInput
    board?: BoardUpdateOneRequiredWithoutMembersNestedInput
  }

  export type UserBoardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBoardCreateManyInput = {
    id?: number
    userId: number
    boardId: number
    role?: $Enums.BoardRole
    joinedAt?: Date | string
  }

  export type UserBoardUpdateManyMutationInput = {
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBoardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    color?: string
    board: BoardCreateNestedOneWithoutCategoriesInput
    categoryBudgets?: CategoryBudgetCreateNestedManyWithoutCategoryInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    boardId: number
    name: string
    color?: string
    categoryBudgets?: CategoryBudgetUncheckedCreateNestedManyWithoutCategoryInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateOneRequiredWithoutCategoriesNestedInput
    categoryBudgets?: CategoryBudgetUpdateManyWithoutCategoryNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    categoryBudgets?: CategoryBudgetUncheckedUpdateManyWithoutCategoryNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    boardId: number
    name: string
    color?: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    board: BoardCreateNestedOneWithoutTransactionsInput
    category: CategoryCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    boardId: number
    categoryId: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneRequiredWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    boardId: number
    categoryId: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryBudgetCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
    board: BoardCreateNestedOneWithoutCategoryBudgetsInput
    category: CategoryCreateNestedOneWithoutCategoryBudgetsInput
  }

  export type CategoryBudgetUncheckedCreateInput = {
    id?: number
    boardId: number
    categoryId: number
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
  }

  export type CategoryBudgetUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneRequiredWithoutCategoryBudgetsNestedInput
    category?: CategoryUpdateOneRequiredWithoutCategoryBudgetsNestedInput
  }

  export type CategoryBudgetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryBudgetCreateManyInput = {
    id?: number
    boardId: number
    categoryId: number
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
  }

  export type CategoryBudgetUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryBudgetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyBudgetCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
    board: BoardCreateNestedOneWithoutMonthlyBudgetsInput
  }

  export type MonthlyBudgetUncheckedCreateInput = {
    id?: number
    boardId: number
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyBudgetUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneRequiredWithoutMonthlyBudgetsNestedInput
  }

  export type MonthlyBudgetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyBudgetCreateManyInput = {
    id?: number
    boardId: number
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyBudgetUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyBudgetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserBoardListRelationFilter = {
    every?: UserBoardWhereInput
    some?: UserBoardWhereInput
    none?: UserBoardWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type UserBoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryBudgetListRelationFilter = {
    every?: CategoryBudgetWhereInput
    some?: CategoryBudgetWhereInput
    none?: CategoryBudgetWhereInput
  }

  export type MonthlyBudgetListRelationFilter = {
    every?: MonthlyBudgetWhereInput
    some?: MonthlyBudgetWhereInput
    none?: MonthlyBudgetWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryBudgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonthlyBudgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardOrderByRelevanceInput = {
    fields: BoardOrderByRelevanceFieldEnum | BoardOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumBoardRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardRole | EnumBoardRoleFieldRefInput<$PrismaModel>
    in?: $Enums.BoardRole[]
    notIn?: $Enums.BoardRole[]
    not?: NestedEnumBoardRoleFilter<$PrismaModel> | $Enums.BoardRole
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BoardScalarRelationFilter = {
    is?: BoardWhereInput
    isNot?: BoardWhereInput
  }

  export type UserBoardUserIdBoardIdCompoundUniqueInput = {
    userId: number
    boardId: number
  }

  export type UserBoardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type UserBoardAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
  }

  export type UserBoardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type UserBoardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type UserBoardSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
  }

  export type EnumBoardRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardRole | EnumBoardRoleFieldRefInput<$PrismaModel>
    in?: $Enums.BoardRole[]
    notIn?: $Enums.BoardRole[]
    not?: NestedEnumBoardRoleWithAggregatesFilter<$PrismaModel> | $Enums.BoardRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBoardRoleFilter<$PrismaModel>
    _max?: NestedEnumBoardRoleFilter<$PrismaModel>
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryBoardIdNameCompoundUniqueInput = {
    boardId: number
    name: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionOrderByRelevanceInput = {
    fields: TransactionOrderByRelevanceFieldEnum | TransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CategoryBudgetBoardIdCategoryIdMonthYearCompoundUniqueInput = {
    boardId: number
    categoryId: number
    month: number
    year: number
  }

  export type CategoryBudgetCountOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryBudgetAvgOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type CategoryBudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryBudgetMinOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryBudgetSumOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    categoryId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type MonthlyBudgetBoardIdMonthYearCompoundUniqueInput = {
    boardId: number
    month: number
    year: number
  }

  export type MonthlyBudgetCountOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyBudgetAvgOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type MonthlyBudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyBudgetMinOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonthlyBudgetSumOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type UserBoardCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBoardCreateWithoutUserInput, UserBoardUncheckedCreateWithoutUserInput> | UserBoardCreateWithoutUserInput[] | UserBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBoardCreateOrConnectWithoutUserInput | UserBoardCreateOrConnectWithoutUserInput[]
    createMany?: UserBoardCreateManyUserInputEnvelope
    connect?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserBoardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBoardCreateWithoutUserInput, UserBoardUncheckedCreateWithoutUserInput> | UserBoardCreateWithoutUserInput[] | UserBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBoardCreateOrConnectWithoutUserInput | UserBoardCreateOrConnectWithoutUserInput[]
    createMany?: UserBoardCreateManyUserInputEnvelope
    connect?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserBoardUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBoardCreateWithoutUserInput, UserBoardUncheckedCreateWithoutUserInput> | UserBoardCreateWithoutUserInput[] | UserBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBoardCreateOrConnectWithoutUserInput | UserBoardCreateOrConnectWithoutUserInput[]
    upsert?: UserBoardUpsertWithWhereUniqueWithoutUserInput | UserBoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBoardCreateManyUserInputEnvelope
    set?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    disconnect?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    delete?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    connect?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    update?: UserBoardUpdateWithWhereUniqueWithoutUserInput | UserBoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBoardUpdateManyWithWhereWithoutUserInput | UserBoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBoardScalarWhereInput | UserBoardScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserBoardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBoardCreateWithoutUserInput, UserBoardUncheckedCreateWithoutUserInput> | UserBoardCreateWithoutUserInput[] | UserBoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBoardCreateOrConnectWithoutUserInput | UserBoardCreateOrConnectWithoutUserInput[]
    upsert?: UserBoardUpsertWithWhereUniqueWithoutUserInput | UserBoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBoardCreateManyUserInputEnvelope
    set?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    disconnect?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    delete?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    connect?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    update?: UserBoardUpdateWithWhereUniqueWithoutUserInput | UserBoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBoardUpdateManyWithWhereWithoutUserInput | UserBoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBoardScalarWhereInput | UserBoardScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserBoardCreateNestedManyWithoutBoardInput = {
    create?: XOR<UserBoardCreateWithoutBoardInput, UserBoardUncheckedCreateWithoutBoardInput> | UserBoardCreateWithoutBoardInput[] | UserBoardUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: UserBoardCreateOrConnectWithoutBoardInput | UserBoardCreateOrConnectWithoutBoardInput[]
    createMany?: UserBoardCreateManyBoardInputEnvelope
    connect?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutBoardInput = {
    create?: XOR<CategoryCreateWithoutBoardInput, CategoryUncheckedCreateWithoutBoardInput> | CategoryCreateWithoutBoardInput[] | CategoryUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutBoardInput | CategoryCreateOrConnectWithoutBoardInput[]
    createMany?: CategoryCreateManyBoardInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryBudgetCreateNestedManyWithoutBoardInput = {
    create?: XOR<CategoryBudgetCreateWithoutBoardInput, CategoryBudgetUncheckedCreateWithoutBoardInput> | CategoryBudgetCreateWithoutBoardInput[] | CategoryBudgetUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: CategoryBudgetCreateOrConnectWithoutBoardInput | CategoryBudgetCreateOrConnectWithoutBoardInput[]
    createMany?: CategoryBudgetCreateManyBoardInputEnvelope
    connect?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
  }

  export type MonthlyBudgetCreateNestedManyWithoutBoardInput = {
    create?: XOR<MonthlyBudgetCreateWithoutBoardInput, MonthlyBudgetUncheckedCreateWithoutBoardInput> | MonthlyBudgetCreateWithoutBoardInput[] | MonthlyBudgetUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: MonthlyBudgetCreateOrConnectWithoutBoardInput | MonthlyBudgetCreateOrConnectWithoutBoardInput[]
    createMany?: MonthlyBudgetCreateManyBoardInputEnvelope
    connect?: MonthlyBudgetWhereUniqueInput | MonthlyBudgetWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutBoardInput = {
    create?: XOR<TransactionCreateWithoutBoardInput, TransactionUncheckedCreateWithoutBoardInput> | TransactionCreateWithoutBoardInput[] | TransactionUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBoardInput | TransactionCreateOrConnectWithoutBoardInput[]
    createMany?: TransactionCreateManyBoardInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserBoardUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<UserBoardCreateWithoutBoardInput, UserBoardUncheckedCreateWithoutBoardInput> | UserBoardCreateWithoutBoardInput[] | UserBoardUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: UserBoardCreateOrConnectWithoutBoardInput | UserBoardCreateOrConnectWithoutBoardInput[]
    createMany?: UserBoardCreateManyBoardInputEnvelope
    connect?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<CategoryCreateWithoutBoardInput, CategoryUncheckedCreateWithoutBoardInput> | CategoryCreateWithoutBoardInput[] | CategoryUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutBoardInput | CategoryCreateOrConnectWithoutBoardInput[]
    createMany?: CategoryCreateManyBoardInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryBudgetUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<CategoryBudgetCreateWithoutBoardInput, CategoryBudgetUncheckedCreateWithoutBoardInput> | CategoryBudgetCreateWithoutBoardInput[] | CategoryBudgetUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: CategoryBudgetCreateOrConnectWithoutBoardInput | CategoryBudgetCreateOrConnectWithoutBoardInput[]
    createMany?: CategoryBudgetCreateManyBoardInputEnvelope
    connect?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
  }

  export type MonthlyBudgetUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<MonthlyBudgetCreateWithoutBoardInput, MonthlyBudgetUncheckedCreateWithoutBoardInput> | MonthlyBudgetCreateWithoutBoardInput[] | MonthlyBudgetUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: MonthlyBudgetCreateOrConnectWithoutBoardInput | MonthlyBudgetCreateOrConnectWithoutBoardInput[]
    createMany?: MonthlyBudgetCreateManyBoardInputEnvelope
    connect?: MonthlyBudgetWhereUniqueInput | MonthlyBudgetWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<TransactionCreateWithoutBoardInput, TransactionUncheckedCreateWithoutBoardInput> | TransactionCreateWithoutBoardInput[] | TransactionUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBoardInput | TransactionCreateOrConnectWithoutBoardInput[]
    createMany?: TransactionCreateManyBoardInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserBoardUpdateManyWithoutBoardNestedInput = {
    create?: XOR<UserBoardCreateWithoutBoardInput, UserBoardUncheckedCreateWithoutBoardInput> | UserBoardCreateWithoutBoardInput[] | UserBoardUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: UserBoardCreateOrConnectWithoutBoardInput | UserBoardCreateOrConnectWithoutBoardInput[]
    upsert?: UserBoardUpsertWithWhereUniqueWithoutBoardInput | UserBoardUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: UserBoardCreateManyBoardInputEnvelope
    set?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    disconnect?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    delete?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    connect?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    update?: UserBoardUpdateWithWhereUniqueWithoutBoardInput | UserBoardUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: UserBoardUpdateManyWithWhereWithoutBoardInput | UserBoardUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: UserBoardScalarWhereInput | UserBoardScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutBoardNestedInput = {
    create?: XOR<CategoryCreateWithoutBoardInput, CategoryUncheckedCreateWithoutBoardInput> | CategoryCreateWithoutBoardInput[] | CategoryUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutBoardInput | CategoryCreateOrConnectWithoutBoardInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutBoardInput | CategoryUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: CategoryCreateManyBoardInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutBoardInput | CategoryUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutBoardInput | CategoryUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryBudgetUpdateManyWithoutBoardNestedInput = {
    create?: XOR<CategoryBudgetCreateWithoutBoardInput, CategoryBudgetUncheckedCreateWithoutBoardInput> | CategoryBudgetCreateWithoutBoardInput[] | CategoryBudgetUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: CategoryBudgetCreateOrConnectWithoutBoardInput | CategoryBudgetCreateOrConnectWithoutBoardInput[]
    upsert?: CategoryBudgetUpsertWithWhereUniqueWithoutBoardInput | CategoryBudgetUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: CategoryBudgetCreateManyBoardInputEnvelope
    set?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    disconnect?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    delete?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    connect?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    update?: CategoryBudgetUpdateWithWhereUniqueWithoutBoardInput | CategoryBudgetUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: CategoryBudgetUpdateManyWithWhereWithoutBoardInput | CategoryBudgetUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: CategoryBudgetScalarWhereInput | CategoryBudgetScalarWhereInput[]
  }

  export type MonthlyBudgetUpdateManyWithoutBoardNestedInput = {
    create?: XOR<MonthlyBudgetCreateWithoutBoardInput, MonthlyBudgetUncheckedCreateWithoutBoardInput> | MonthlyBudgetCreateWithoutBoardInput[] | MonthlyBudgetUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: MonthlyBudgetCreateOrConnectWithoutBoardInput | MonthlyBudgetCreateOrConnectWithoutBoardInput[]
    upsert?: MonthlyBudgetUpsertWithWhereUniqueWithoutBoardInput | MonthlyBudgetUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: MonthlyBudgetCreateManyBoardInputEnvelope
    set?: MonthlyBudgetWhereUniqueInput | MonthlyBudgetWhereUniqueInput[]
    disconnect?: MonthlyBudgetWhereUniqueInput | MonthlyBudgetWhereUniqueInput[]
    delete?: MonthlyBudgetWhereUniqueInput | MonthlyBudgetWhereUniqueInput[]
    connect?: MonthlyBudgetWhereUniqueInput | MonthlyBudgetWhereUniqueInput[]
    update?: MonthlyBudgetUpdateWithWhereUniqueWithoutBoardInput | MonthlyBudgetUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: MonthlyBudgetUpdateManyWithWhereWithoutBoardInput | MonthlyBudgetUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: MonthlyBudgetScalarWhereInput | MonthlyBudgetScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutBoardNestedInput = {
    create?: XOR<TransactionCreateWithoutBoardInput, TransactionUncheckedCreateWithoutBoardInput> | TransactionCreateWithoutBoardInput[] | TransactionUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBoardInput | TransactionCreateOrConnectWithoutBoardInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBoardInput | TransactionUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: TransactionCreateManyBoardInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBoardInput | TransactionUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBoardInput | TransactionUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserBoardUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<UserBoardCreateWithoutBoardInput, UserBoardUncheckedCreateWithoutBoardInput> | UserBoardCreateWithoutBoardInput[] | UserBoardUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: UserBoardCreateOrConnectWithoutBoardInput | UserBoardCreateOrConnectWithoutBoardInput[]
    upsert?: UserBoardUpsertWithWhereUniqueWithoutBoardInput | UserBoardUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: UserBoardCreateManyBoardInputEnvelope
    set?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    disconnect?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    delete?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    connect?: UserBoardWhereUniqueInput | UserBoardWhereUniqueInput[]
    update?: UserBoardUpdateWithWhereUniqueWithoutBoardInput | UserBoardUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: UserBoardUpdateManyWithWhereWithoutBoardInput | UserBoardUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: UserBoardScalarWhereInput | UserBoardScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<CategoryCreateWithoutBoardInput, CategoryUncheckedCreateWithoutBoardInput> | CategoryCreateWithoutBoardInput[] | CategoryUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutBoardInput | CategoryCreateOrConnectWithoutBoardInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutBoardInput | CategoryUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: CategoryCreateManyBoardInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutBoardInput | CategoryUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutBoardInput | CategoryUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryBudgetUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<CategoryBudgetCreateWithoutBoardInput, CategoryBudgetUncheckedCreateWithoutBoardInput> | CategoryBudgetCreateWithoutBoardInput[] | CategoryBudgetUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: CategoryBudgetCreateOrConnectWithoutBoardInput | CategoryBudgetCreateOrConnectWithoutBoardInput[]
    upsert?: CategoryBudgetUpsertWithWhereUniqueWithoutBoardInput | CategoryBudgetUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: CategoryBudgetCreateManyBoardInputEnvelope
    set?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    disconnect?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    delete?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    connect?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    update?: CategoryBudgetUpdateWithWhereUniqueWithoutBoardInput | CategoryBudgetUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: CategoryBudgetUpdateManyWithWhereWithoutBoardInput | CategoryBudgetUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: CategoryBudgetScalarWhereInput | CategoryBudgetScalarWhereInput[]
  }

  export type MonthlyBudgetUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<MonthlyBudgetCreateWithoutBoardInput, MonthlyBudgetUncheckedCreateWithoutBoardInput> | MonthlyBudgetCreateWithoutBoardInput[] | MonthlyBudgetUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: MonthlyBudgetCreateOrConnectWithoutBoardInput | MonthlyBudgetCreateOrConnectWithoutBoardInput[]
    upsert?: MonthlyBudgetUpsertWithWhereUniqueWithoutBoardInput | MonthlyBudgetUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: MonthlyBudgetCreateManyBoardInputEnvelope
    set?: MonthlyBudgetWhereUniqueInput | MonthlyBudgetWhereUniqueInput[]
    disconnect?: MonthlyBudgetWhereUniqueInput | MonthlyBudgetWhereUniqueInput[]
    delete?: MonthlyBudgetWhereUniqueInput | MonthlyBudgetWhereUniqueInput[]
    connect?: MonthlyBudgetWhereUniqueInput | MonthlyBudgetWhereUniqueInput[]
    update?: MonthlyBudgetUpdateWithWhereUniqueWithoutBoardInput | MonthlyBudgetUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: MonthlyBudgetUpdateManyWithWhereWithoutBoardInput | MonthlyBudgetUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: MonthlyBudgetScalarWhereInput | MonthlyBudgetScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<TransactionCreateWithoutBoardInput, TransactionUncheckedCreateWithoutBoardInput> | TransactionCreateWithoutBoardInput[] | TransactionUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBoardInput | TransactionCreateOrConnectWithoutBoardInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBoardInput | TransactionUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: TransactionCreateManyBoardInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBoardInput | TransactionUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBoardInput | TransactionUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBoardsInput = {
    create?: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardsInput
    connect?: UserWhereUniqueInput
  }

  export type BoardCreateNestedOneWithoutMembersInput = {
    create?: XOR<BoardCreateWithoutMembersInput, BoardUncheckedCreateWithoutMembersInput>
    connectOrCreate?: BoardCreateOrConnectWithoutMembersInput
    connect?: BoardWhereUniqueInput
  }

  export type EnumBoardRoleFieldUpdateOperationsInput = {
    set?: $Enums.BoardRole
  }

  export type UserUpdateOneRequiredWithoutBoardsNestedInput = {
    create?: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardsInput
    upsert?: UserUpsertWithoutBoardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBoardsInput, UserUpdateWithoutBoardsInput>, UserUncheckedUpdateWithoutBoardsInput>
  }

  export type BoardUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<BoardCreateWithoutMembersInput, BoardUncheckedCreateWithoutMembersInput>
    connectOrCreate?: BoardCreateOrConnectWithoutMembersInput
    upsert?: BoardUpsertWithoutMembersInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutMembersInput, BoardUpdateWithoutMembersInput>, BoardUncheckedUpdateWithoutMembersInput>
  }

  export type BoardCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<BoardCreateWithoutCategoriesInput, BoardUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BoardCreateOrConnectWithoutCategoriesInput
    connect?: BoardWhereUniqueInput
  }

  export type CategoryBudgetCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryBudgetCreateWithoutCategoryInput, CategoryBudgetUncheckedCreateWithoutCategoryInput> | CategoryBudgetCreateWithoutCategoryInput[] | CategoryBudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryBudgetCreateOrConnectWithoutCategoryInput | CategoryBudgetCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryBudgetCreateManyCategoryInputEnvelope
    connect?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type CategoryBudgetUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryBudgetCreateWithoutCategoryInput, CategoryBudgetUncheckedCreateWithoutCategoryInput> | CategoryBudgetCreateWithoutCategoryInput[] | CategoryBudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryBudgetCreateOrConnectWithoutCategoryInput | CategoryBudgetCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryBudgetCreateManyCategoryInputEnvelope
    connect?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BoardUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<BoardCreateWithoutCategoriesInput, BoardUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BoardCreateOrConnectWithoutCategoriesInput
    upsert?: BoardUpsertWithoutCategoriesInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutCategoriesInput, BoardUpdateWithoutCategoriesInput>, BoardUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryBudgetUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryBudgetCreateWithoutCategoryInput, CategoryBudgetUncheckedCreateWithoutCategoryInput> | CategoryBudgetCreateWithoutCategoryInput[] | CategoryBudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryBudgetCreateOrConnectWithoutCategoryInput | CategoryBudgetCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryBudgetUpsertWithWhereUniqueWithoutCategoryInput | CategoryBudgetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryBudgetCreateManyCategoryInputEnvelope
    set?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    disconnect?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    delete?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    connect?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    update?: CategoryBudgetUpdateWithWhereUniqueWithoutCategoryInput | CategoryBudgetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryBudgetUpdateManyWithWhereWithoutCategoryInput | CategoryBudgetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryBudgetScalarWhereInput | CategoryBudgetScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CategoryBudgetUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryBudgetCreateWithoutCategoryInput, CategoryBudgetUncheckedCreateWithoutCategoryInput> | CategoryBudgetCreateWithoutCategoryInput[] | CategoryBudgetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryBudgetCreateOrConnectWithoutCategoryInput | CategoryBudgetCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryBudgetUpsertWithWhereUniqueWithoutCategoryInput | CategoryBudgetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryBudgetCreateManyCategoryInputEnvelope
    set?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    disconnect?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    delete?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    connect?: CategoryBudgetWhereUniqueInput | CategoryBudgetWhereUniqueInput[]
    update?: CategoryBudgetUpdateWithWhereUniqueWithoutCategoryInput | CategoryBudgetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryBudgetUpdateManyWithWhereWithoutCategoryInput | CategoryBudgetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryBudgetScalarWhereInput | CategoryBudgetScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BoardCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<BoardCreateWithoutTransactionsInput, BoardUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BoardCreateOrConnectWithoutTransactionsInput
    connect?: BoardWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoardUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<BoardCreateWithoutTransactionsInput, BoardUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BoardCreateOrConnectWithoutTransactionsInput
    upsert?: BoardUpsertWithoutTransactionsInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutTransactionsInput, BoardUpdateWithoutTransactionsInput>, BoardUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    upsert?: CategoryUpsertWithoutTransactionsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTransactionsInput, CategoryUpdateWithoutTransactionsInput>, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type BoardCreateNestedOneWithoutCategoryBudgetsInput = {
    create?: XOR<BoardCreateWithoutCategoryBudgetsInput, BoardUncheckedCreateWithoutCategoryBudgetsInput>
    connectOrCreate?: BoardCreateOrConnectWithoutCategoryBudgetsInput
    connect?: BoardWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutCategoryBudgetsInput = {
    create?: XOR<CategoryCreateWithoutCategoryBudgetsInput, CategoryUncheckedCreateWithoutCategoryBudgetsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategoryBudgetsInput
    connect?: CategoryWhereUniqueInput
  }

  export type BoardUpdateOneRequiredWithoutCategoryBudgetsNestedInput = {
    create?: XOR<BoardCreateWithoutCategoryBudgetsInput, BoardUncheckedCreateWithoutCategoryBudgetsInput>
    connectOrCreate?: BoardCreateOrConnectWithoutCategoryBudgetsInput
    upsert?: BoardUpsertWithoutCategoryBudgetsInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutCategoryBudgetsInput, BoardUpdateWithoutCategoryBudgetsInput>, BoardUncheckedUpdateWithoutCategoryBudgetsInput>
  }

  export type CategoryUpdateOneRequiredWithoutCategoryBudgetsNestedInput = {
    create?: XOR<CategoryCreateWithoutCategoryBudgetsInput, CategoryUncheckedCreateWithoutCategoryBudgetsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategoryBudgetsInput
    upsert?: CategoryUpsertWithoutCategoryBudgetsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCategoryBudgetsInput, CategoryUpdateWithoutCategoryBudgetsInput>, CategoryUncheckedUpdateWithoutCategoryBudgetsInput>
  }

  export type BoardCreateNestedOneWithoutMonthlyBudgetsInput = {
    create?: XOR<BoardCreateWithoutMonthlyBudgetsInput, BoardUncheckedCreateWithoutMonthlyBudgetsInput>
    connectOrCreate?: BoardCreateOrConnectWithoutMonthlyBudgetsInput
    connect?: BoardWhereUniqueInput
  }

  export type BoardUpdateOneRequiredWithoutMonthlyBudgetsNestedInput = {
    create?: XOR<BoardCreateWithoutMonthlyBudgetsInput, BoardUncheckedCreateWithoutMonthlyBudgetsInput>
    connectOrCreate?: BoardCreateOrConnectWithoutMonthlyBudgetsInput
    upsert?: BoardUpsertWithoutMonthlyBudgetsInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutMonthlyBudgetsInput, BoardUpdateWithoutMonthlyBudgetsInput>, BoardUncheckedUpdateWithoutMonthlyBudgetsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumBoardRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardRole | EnumBoardRoleFieldRefInput<$PrismaModel>
    in?: $Enums.BoardRole[]
    notIn?: $Enums.BoardRole[]
    not?: NestedEnumBoardRoleFilter<$PrismaModel> | $Enums.BoardRole
  }

  export type NestedEnumBoardRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardRole | EnumBoardRoleFieldRefInput<$PrismaModel>
    in?: $Enums.BoardRole[]
    notIn?: $Enums.BoardRole[]
    not?: NestedEnumBoardRoleWithAggregatesFilter<$PrismaModel> | $Enums.BoardRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBoardRoleFilter<$PrismaModel>
    _max?: NestedEnumBoardRoleFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserBoardCreateWithoutUserInput = {
    role?: $Enums.BoardRole
    joinedAt?: Date | string
    board: BoardCreateNestedOneWithoutMembersInput
  }

  export type UserBoardUncheckedCreateWithoutUserInput = {
    id?: number
    boardId: number
    role?: $Enums.BoardRole
    joinedAt?: Date | string
  }

  export type UserBoardCreateOrConnectWithoutUserInput = {
    where: UserBoardWhereUniqueInput
    create: XOR<UserBoardCreateWithoutUserInput, UserBoardUncheckedCreateWithoutUserInput>
  }

  export type UserBoardCreateManyUserInputEnvelope = {
    data: UserBoardCreateManyUserInput | UserBoardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    board: BoardCreateNestedOneWithoutTransactionsInput
    category: CategoryCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    boardId: number
    categoryId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBoardUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBoardWhereUniqueInput
    update: XOR<UserBoardUpdateWithoutUserInput, UserBoardUncheckedUpdateWithoutUserInput>
    create: XOR<UserBoardCreateWithoutUserInput, UserBoardUncheckedCreateWithoutUserInput>
  }

  export type UserBoardUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBoardWhereUniqueInput
    data: XOR<UserBoardUpdateWithoutUserInput, UserBoardUncheckedUpdateWithoutUserInput>
  }

  export type UserBoardUpdateManyWithWhereWithoutUserInput = {
    where: UserBoardScalarWhereInput
    data: XOR<UserBoardUpdateManyMutationInput, UserBoardUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBoardScalarWhereInput = {
    AND?: UserBoardScalarWhereInput | UserBoardScalarWhereInput[]
    OR?: UserBoardScalarWhereInput[]
    NOT?: UserBoardScalarWhereInput | UserBoardScalarWhereInput[]
    id?: IntFilter<"UserBoard"> | number
    userId?: IntFilter<"UserBoard"> | number
    boardId?: IntFilter<"UserBoard"> | number
    role?: EnumBoardRoleFilter<"UserBoard"> | $Enums.BoardRole
    joinedAt?: DateTimeFilter<"UserBoard"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    boardId?: IntFilter<"Transaction"> | number
    categoryId?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Transaction"> | string | null
    date?: DateTimeFilter<"Transaction"> | Date | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type UserBoardCreateWithoutBoardInput = {
    role?: $Enums.BoardRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutBoardsInput
  }

  export type UserBoardUncheckedCreateWithoutBoardInput = {
    id?: number
    userId: number
    role?: $Enums.BoardRole
    joinedAt?: Date | string
  }

  export type UserBoardCreateOrConnectWithoutBoardInput = {
    where: UserBoardWhereUniqueInput
    create: XOR<UserBoardCreateWithoutBoardInput, UserBoardUncheckedCreateWithoutBoardInput>
  }

  export type UserBoardCreateManyBoardInputEnvelope = {
    data: UserBoardCreateManyBoardInput | UserBoardCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutBoardInput = {
    name: string
    color?: string
    categoryBudgets?: CategoryBudgetCreateNestedManyWithoutCategoryInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBoardInput = {
    id?: number
    name: string
    color?: string
    categoryBudgets?: CategoryBudgetUncheckedCreateNestedManyWithoutCategoryInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBoardInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBoardInput, CategoryUncheckedCreateWithoutBoardInput>
  }

  export type CategoryCreateManyBoardInputEnvelope = {
    data: CategoryCreateManyBoardInput | CategoryCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type CategoryBudgetCreateWithoutBoardInput = {
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutCategoryBudgetsInput
  }

  export type CategoryBudgetUncheckedCreateWithoutBoardInput = {
    id?: number
    categoryId: number
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
  }

  export type CategoryBudgetCreateOrConnectWithoutBoardInput = {
    where: CategoryBudgetWhereUniqueInput
    create: XOR<CategoryBudgetCreateWithoutBoardInput, CategoryBudgetUncheckedCreateWithoutBoardInput>
  }

  export type CategoryBudgetCreateManyBoardInputEnvelope = {
    data: CategoryBudgetCreateManyBoardInput | CategoryBudgetCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyBudgetCreateWithoutBoardInput = {
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyBudgetUncheckedCreateWithoutBoardInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthlyBudgetCreateOrConnectWithoutBoardInput = {
    where: MonthlyBudgetWhereUniqueInput
    create: XOR<MonthlyBudgetCreateWithoutBoardInput, MonthlyBudgetUncheckedCreateWithoutBoardInput>
  }

  export type MonthlyBudgetCreateManyBoardInputEnvelope = {
    data: MonthlyBudgetCreateManyBoardInput | MonthlyBudgetCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutBoardInput = {
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutBoardInput = {
    id?: number
    categoryId: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutBoardInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBoardInput, TransactionUncheckedCreateWithoutBoardInput>
  }

  export type TransactionCreateManyBoardInputEnvelope = {
    data: TransactionCreateManyBoardInput | TransactionCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type UserBoardUpsertWithWhereUniqueWithoutBoardInput = {
    where: UserBoardWhereUniqueInput
    update: XOR<UserBoardUpdateWithoutBoardInput, UserBoardUncheckedUpdateWithoutBoardInput>
    create: XOR<UserBoardCreateWithoutBoardInput, UserBoardUncheckedCreateWithoutBoardInput>
  }

  export type UserBoardUpdateWithWhereUniqueWithoutBoardInput = {
    where: UserBoardWhereUniqueInput
    data: XOR<UserBoardUpdateWithoutBoardInput, UserBoardUncheckedUpdateWithoutBoardInput>
  }

  export type UserBoardUpdateManyWithWhereWithoutBoardInput = {
    where: UserBoardScalarWhereInput
    data: XOR<UserBoardUpdateManyMutationInput, UserBoardUncheckedUpdateManyWithoutBoardInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutBoardInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutBoardInput, CategoryUncheckedUpdateWithoutBoardInput>
    create: XOR<CategoryCreateWithoutBoardInput, CategoryUncheckedCreateWithoutBoardInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutBoardInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutBoardInput, CategoryUncheckedUpdateWithoutBoardInput>
  }

  export type CategoryUpdateManyWithWhereWithoutBoardInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutBoardInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    boardId?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    color?: StringFilter<"Category"> | string
  }

  export type CategoryBudgetUpsertWithWhereUniqueWithoutBoardInput = {
    where: CategoryBudgetWhereUniqueInput
    update: XOR<CategoryBudgetUpdateWithoutBoardInput, CategoryBudgetUncheckedUpdateWithoutBoardInput>
    create: XOR<CategoryBudgetCreateWithoutBoardInput, CategoryBudgetUncheckedCreateWithoutBoardInput>
  }

  export type CategoryBudgetUpdateWithWhereUniqueWithoutBoardInput = {
    where: CategoryBudgetWhereUniqueInput
    data: XOR<CategoryBudgetUpdateWithoutBoardInput, CategoryBudgetUncheckedUpdateWithoutBoardInput>
  }

  export type CategoryBudgetUpdateManyWithWhereWithoutBoardInput = {
    where: CategoryBudgetScalarWhereInput
    data: XOR<CategoryBudgetUpdateManyMutationInput, CategoryBudgetUncheckedUpdateManyWithoutBoardInput>
  }

  export type CategoryBudgetScalarWhereInput = {
    AND?: CategoryBudgetScalarWhereInput | CategoryBudgetScalarWhereInput[]
    OR?: CategoryBudgetScalarWhereInput[]
    NOT?: CategoryBudgetScalarWhereInput | CategoryBudgetScalarWhereInput[]
    id?: IntFilter<"CategoryBudget"> | number
    boardId?: IntFilter<"CategoryBudget"> | number
    categoryId?: IntFilter<"CategoryBudget"> | number
    amount?: DecimalFilter<"CategoryBudget"> | Decimal | DecimalJsLike | number | string
    month?: IntFilter<"CategoryBudget"> | number
    year?: IntFilter<"CategoryBudget"> | number
    createdAt?: DateTimeFilter<"CategoryBudget"> | Date | string
  }

  export type MonthlyBudgetUpsertWithWhereUniqueWithoutBoardInput = {
    where: MonthlyBudgetWhereUniqueInput
    update: XOR<MonthlyBudgetUpdateWithoutBoardInput, MonthlyBudgetUncheckedUpdateWithoutBoardInput>
    create: XOR<MonthlyBudgetCreateWithoutBoardInput, MonthlyBudgetUncheckedCreateWithoutBoardInput>
  }

  export type MonthlyBudgetUpdateWithWhereUniqueWithoutBoardInput = {
    where: MonthlyBudgetWhereUniqueInput
    data: XOR<MonthlyBudgetUpdateWithoutBoardInput, MonthlyBudgetUncheckedUpdateWithoutBoardInput>
  }

  export type MonthlyBudgetUpdateManyWithWhereWithoutBoardInput = {
    where: MonthlyBudgetScalarWhereInput
    data: XOR<MonthlyBudgetUpdateManyMutationInput, MonthlyBudgetUncheckedUpdateManyWithoutBoardInput>
  }

  export type MonthlyBudgetScalarWhereInput = {
    AND?: MonthlyBudgetScalarWhereInput | MonthlyBudgetScalarWhereInput[]
    OR?: MonthlyBudgetScalarWhereInput[]
    NOT?: MonthlyBudgetScalarWhereInput | MonthlyBudgetScalarWhereInput[]
    id?: IntFilter<"MonthlyBudget"> | number
    boardId?: IntFilter<"MonthlyBudget"> | number
    amount?: DecimalFilter<"MonthlyBudget"> | Decimal | DecimalJsLike | number | string
    month?: IntFilter<"MonthlyBudget"> | number
    year?: IntFilter<"MonthlyBudget"> | number
    createdAt?: DateTimeFilter<"MonthlyBudget"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyBudget"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutBoardInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutBoardInput, TransactionUncheckedUpdateWithoutBoardInput>
    create: XOR<TransactionCreateWithoutBoardInput, TransactionUncheckedCreateWithoutBoardInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutBoardInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutBoardInput, TransactionUncheckedUpdateWithoutBoardInput>
  }

  export type TransactionUpdateManyWithWhereWithoutBoardInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutBoardInput>
  }

  export type UserCreateWithoutBoardsInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBoardsInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBoardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
  }

  export type BoardCreateWithoutMembersInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutBoardInput
    categoryBudgets?: CategoryBudgetCreateNestedManyWithoutBoardInput
    monthlyBudgets?: MonthlyBudgetCreateNestedManyWithoutBoardInput
    transactions?: TransactionCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutBoardInput
    categoryBudgets?: CategoryBudgetUncheckedCreateNestedManyWithoutBoardInput
    monthlyBudgets?: MonthlyBudgetUncheckedCreateNestedManyWithoutBoardInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutMembersInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutMembersInput, BoardUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutBoardsInput = {
    update: XOR<UserUpdateWithoutBoardsInput, UserUncheckedUpdateWithoutBoardsInput>
    create: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBoardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBoardsInput, UserUncheckedUpdateWithoutBoardsInput>
  }

  export type UserUpdateWithoutBoardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BoardUpsertWithoutMembersInput = {
    update: XOR<BoardUpdateWithoutMembersInput, BoardUncheckedUpdateWithoutMembersInput>
    create: XOR<BoardCreateWithoutMembersInput, BoardUncheckedCreateWithoutMembersInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutMembersInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutMembersInput, BoardUncheckedUpdateWithoutMembersInput>
  }

  export type BoardUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutBoardNestedInput
    categoryBudgets?: CategoryBudgetUpdateManyWithoutBoardNestedInput
    monthlyBudgets?: MonthlyBudgetUpdateManyWithoutBoardNestedInput
    transactions?: TransactionUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutBoardNestedInput
    categoryBudgets?: CategoryBudgetUncheckedUpdateManyWithoutBoardNestedInput
    monthlyBudgets?: MonthlyBudgetUncheckedUpdateManyWithoutBoardNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardCreateWithoutCategoriesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserBoardCreateNestedManyWithoutBoardInput
    categoryBudgets?: CategoryBudgetCreateNestedManyWithoutBoardInput
    monthlyBudgets?: MonthlyBudgetCreateNestedManyWithoutBoardInput
    transactions?: TransactionCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserBoardUncheckedCreateNestedManyWithoutBoardInput
    categoryBudgets?: CategoryBudgetUncheckedCreateNestedManyWithoutBoardInput
    monthlyBudgets?: MonthlyBudgetUncheckedCreateNestedManyWithoutBoardInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutCategoriesInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutCategoriesInput, BoardUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryBudgetCreateWithoutCategoryInput = {
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
    board: BoardCreateNestedOneWithoutCategoryBudgetsInput
  }

  export type CategoryBudgetUncheckedCreateWithoutCategoryInput = {
    id?: number
    boardId: number
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
  }

  export type CategoryBudgetCreateOrConnectWithoutCategoryInput = {
    where: CategoryBudgetWhereUniqueInput
    create: XOR<CategoryBudgetCreateWithoutCategoryInput, CategoryBudgetUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryBudgetCreateManyCategoryInputEnvelope = {
    data: CategoryBudgetCreateManyCategoryInput | CategoryBudgetCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutCategoryInput = {
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
    board: BoardCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutCategoryInput = {
    id?: number
    boardId: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionCreateManyCategoryInputEnvelope = {
    data: TransactionCreateManyCategoryInput | TransactionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BoardUpsertWithoutCategoriesInput = {
    update: XOR<BoardUpdateWithoutCategoriesInput, BoardUncheckedUpdateWithoutCategoriesInput>
    create: XOR<BoardCreateWithoutCategoriesInput, BoardUncheckedCreateWithoutCategoriesInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutCategoriesInput, BoardUncheckedUpdateWithoutCategoriesInput>
  }

  export type BoardUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserBoardUpdateManyWithoutBoardNestedInput
    categoryBudgets?: CategoryBudgetUpdateManyWithoutBoardNestedInput
    monthlyBudgets?: MonthlyBudgetUpdateManyWithoutBoardNestedInput
    transactions?: TransactionUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserBoardUncheckedUpdateManyWithoutBoardNestedInput
    categoryBudgets?: CategoryBudgetUncheckedUpdateManyWithoutBoardNestedInput
    monthlyBudgets?: MonthlyBudgetUncheckedUpdateManyWithoutBoardNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type CategoryBudgetUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryBudgetWhereUniqueInput
    update: XOR<CategoryBudgetUpdateWithoutCategoryInput, CategoryBudgetUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoryBudgetCreateWithoutCategoryInput, CategoryBudgetUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryBudgetUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryBudgetWhereUniqueInput
    data: XOR<CategoryBudgetUpdateWithoutCategoryInput, CategoryBudgetUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoryBudgetUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryBudgetScalarWhereInput
    data: XOR<CategoryBudgetUpdateManyMutationInput, CategoryBudgetUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BoardCreateWithoutTransactionsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserBoardCreateNestedManyWithoutBoardInput
    categories?: CategoryCreateNestedManyWithoutBoardInput
    categoryBudgets?: CategoryBudgetCreateNestedManyWithoutBoardInput
    monthlyBudgets?: MonthlyBudgetCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutTransactionsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserBoardUncheckedCreateNestedManyWithoutBoardInput
    categories?: CategoryUncheckedCreateNestedManyWithoutBoardInput
    categoryBudgets?: CategoryBudgetUncheckedCreateNestedManyWithoutBoardInput
    monthlyBudgets?: MonthlyBudgetUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutTransactionsInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutTransactionsInput, BoardUncheckedCreateWithoutTransactionsInput>
  }

  export type CategoryCreateWithoutTransactionsInput = {
    name: string
    color?: string
    board: BoardCreateNestedOneWithoutCategoriesInput
    categoryBudgets?: CategoryBudgetCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTransactionsInput = {
    id?: number
    boardId: number
    name: string
    color?: string
    categoryBudgets?: CategoryBudgetUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTransactionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    boards?: UserBoardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    boards?: UserBoardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type BoardUpsertWithoutTransactionsInput = {
    update: XOR<BoardUpdateWithoutTransactionsInput, BoardUncheckedUpdateWithoutTransactionsInput>
    create: XOR<BoardCreateWithoutTransactionsInput, BoardUncheckedCreateWithoutTransactionsInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutTransactionsInput, BoardUncheckedUpdateWithoutTransactionsInput>
  }

  export type BoardUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserBoardUpdateManyWithoutBoardNestedInput
    categories?: CategoryUpdateManyWithoutBoardNestedInput
    categoryBudgets?: CategoryBudgetUpdateManyWithoutBoardNestedInput
    monthlyBudgets?: MonthlyBudgetUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserBoardUncheckedUpdateManyWithoutBoardNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutBoardNestedInput
    categoryBudgets?: CategoryBudgetUncheckedUpdateManyWithoutBoardNestedInput
    monthlyBudgets?: MonthlyBudgetUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type CategoryUpsertWithoutTransactionsInput = {
    update: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateOneRequiredWithoutCategoriesNestedInput
    categoryBudgets?: CategoryBudgetUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    categoryBudgets?: CategoryBudgetUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boards?: UserBoardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boards?: UserBoardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BoardCreateWithoutCategoryBudgetsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserBoardCreateNestedManyWithoutBoardInput
    categories?: CategoryCreateNestedManyWithoutBoardInput
    monthlyBudgets?: MonthlyBudgetCreateNestedManyWithoutBoardInput
    transactions?: TransactionCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutCategoryBudgetsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserBoardUncheckedCreateNestedManyWithoutBoardInput
    categories?: CategoryUncheckedCreateNestedManyWithoutBoardInput
    monthlyBudgets?: MonthlyBudgetUncheckedCreateNestedManyWithoutBoardInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutCategoryBudgetsInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutCategoryBudgetsInput, BoardUncheckedCreateWithoutCategoryBudgetsInput>
  }

  export type CategoryCreateWithoutCategoryBudgetsInput = {
    name: string
    color?: string
    board: BoardCreateNestedOneWithoutCategoriesInput
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutCategoryBudgetsInput = {
    id?: number
    boardId: number
    name: string
    color?: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutCategoryBudgetsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCategoryBudgetsInput, CategoryUncheckedCreateWithoutCategoryBudgetsInput>
  }

  export type BoardUpsertWithoutCategoryBudgetsInput = {
    update: XOR<BoardUpdateWithoutCategoryBudgetsInput, BoardUncheckedUpdateWithoutCategoryBudgetsInput>
    create: XOR<BoardCreateWithoutCategoryBudgetsInput, BoardUncheckedCreateWithoutCategoryBudgetsInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutCategoryBudgetsInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutCategoryBudgetsInput, BoardUncheckedUpdateWithoutCategoryBudgetsInput>
  }

  export type BoardUpdateWithoutCategoryBudgetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserBoardUpdateManyWithoutBoardNestedInput
    categories?: CategoryUpdateManyWithoutBoardNestedInput
    monthlyBudgets?: MonthlyBudgetUpdateManyWithoutBoardNestedInput
    transactions?: TransactionUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutCategoryBudgetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserBoardUncheckedUpdateManyWithoutBoardNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutBoardNestedInput
    monthlyBudgets?: MonthlyBudgetUncheckedUpdateManyWithoutBoardNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type CategoryUpsertWithoutCategoryBudgetsInput = {
    update: XOR<CategoryUpdateWithoutCategoryBudgetsInput, CategoryUncheckedUpdateWithoutCategoryBudgetsInput>
    create: XOR<CategoryCreateWithoutCategoryBudgetsInput, CategoryUncheckedCreateWithoutCategoryBudgetsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCategoryBudgetsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCategoryBudgetsInput, CategoryUncheckedUpdateWithoutCategoryBudgetsInput>
  }

  export type CategoryUpdateWithoutCategoryBudgetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateOneRequiredWithoutCategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCategoryBudgetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BoardCreateWithoutMonthlyBudgetsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserBoardCreateNestedManyWithoutBoardInput
    categories?: CategoryCreateNestedManyWithoutBoardInput
    categoryBudgets?: CategoryBudgetCreateNestedManyWithoutBoardInput
    transactions?: TransactionCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutMonthlyBudgetsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserBoardUncheckedCreateNestedManyWithoutBoardInput
    categories?: CategoryUncheckedCreateNestedManyWithoutBoardInput
    categoryBudgets?: CategoryBudgetUncheckedCreateNestedManyWithoutBoardInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutMonthlyBudgetsInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutMonthlyBudgetsInput, BoardUncheckedCreateWithoutMonthlyBudgetsInput>
  }

  export type BoardUpsertWithoutMonthlyBudgetsInput = {
    update: XOR<BoardUpdateWithoutMonthlyBudgetsInput, BoardUncheckedUpdateWithoutMonthlyBudgetsInput>
    create: XOR<BoardCreateWithoutMonthlyBudgetsInput, BoardUncheckedCreateWithoutMonthlyBudgetsInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutMonthlyBudgetsInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutMonthlyBudgetsInput, BoardUncheckedUpdateWithoutMonthlyBudgetsInput>
  }

  export type BoardUpdateWithoutMonthlyBudgetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserBoardUpdateManyWithoutBoardNestedInput
    categories?: CategoryUpdateManyWithoutBoardNestedInput
    categoryBudgets?: CategoryBudgetUpdateManyWithoutBoardNestedInput
    transactions?: TransactionUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutMonthlyBudgetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserBoardUncheckedUpdateManyWithoutBoardNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutBoardNestedInput
    categoryBudgets?: CategoryBudgetUncheckedUpdateManyWithoutBoardNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type UserBoardCreateManyUserInput = {
    id?: number
    boardId: number
    role?: $Enums.BoardRole
    joinedAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    boardId: number
    categoryId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type UserBoardUpdateWithoutUserInput = {
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneRequiredWithoutMembersNestedInput
  }

  export type UserBoardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBoardUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneRequiredWithoutTransactionsNestedInput
    category?: CategoryUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBoardCreateManyBoardInput = {
    id?: number
    userId: number
    role?: $Enums.BoardRole
    joinedAt?: Date | string
  }

  export type CategoryCreateManyBoardInput = {
    id?: number
    name: string
    color?: string
  }

  export type CategoryBudgetCreateManyBoardInput = {
    id?: number
    categoryId: number
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
  }

  export type MonthlyBudgetCreateManyBoardInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyBoardInput = {
    id?: number
    categoryId: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type UserBoardUpdateWithoutBoardInput = {
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBoardsNestedInput
  }

  export type UserBoardUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBoardUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutBoardInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    categoryBudgets?: CategoryBudgetUpdateManyWithoutCategoryNestedInput
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    categoryBudgets?: CategoryBudgetUncheckedUpdateManyWithoutCategoryNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryBudgetUpdateWithoutBoardInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutCategoryBudgetsNestedInput
  }

  export type CategoryBudgetUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryBudgetUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyBudgetUpdateWithoutBoardInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyBudgetUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyBudgetUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutBoardInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryBudgetCreateManyCategoryInput = {
    id?: number
    boardId: number
    amount: Decimal | DecimalJsLike | number | string
    month: number
    year: number
    createdAt?: Date | string
  }

  export type TransactionCreateManyCategoryInput = {
    id?: number
    boardId: number
    userId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    date?: Date | string
    createdAt?: Date | string
  }

  export type CategoryBudgetUpdateWithoutCategoryInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneRequiredWithoutCategoryBudgetsNestedInput
  }

  export type CategoryBudgetUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryBudgetUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutCategoryInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneRequiredWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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