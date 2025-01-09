+++
title = "Result"
+++

## Result -> Result

### map

Transform `Ok`

| left  | input  | right |
| ----- | ------ | ----- |
| Ok T  | T -> K | Ok K  |
| Err E | T -> K | Err E |

### map_or

Transform `Ok` with a default

| left  | input     | right |
| ----- | --------- | ----- |
| Ok T  | N, T -> K | K     |
| Err E | N, T -> K | N     |

### map_or_else

Transform `Ok` and `Err`

| left  | input          | right |
| ----- | -------------- | ----- |
| Ok T  | E -> N, T -> K | K     |
| Err E | E -> N, T -> K | N     |

### map_err

Transform `Err`

| left  | input  | right |
| ----- | ------ | ----- |
| Ok T  | E -> N | Ok T  |
| Err E | E -> N | Err N |

### and_then

Returns the first returned `Err` value

| left  | input    | right |
| ----- | -------- | ----- |
| Ok T  | -> Ok K  | Ok K  |
| Ok T  | -> Err N | Err N |
| Err E | -> Ok K  | Err E |
| Err E | -> Err N | Err E |

### and

Returns the first `Err` value

| left  | input | right |
| ----- | ----- | ----- |
| Ok T  | Ok K  | Ok K  |
| Ok T  | Err N | Err N |
| Err E | Ok K  | Err E |
| Err E | Err N | Err E |

### or_else

Returns the first returned `Ok` value

| left  | input    | right |
| ----- | -------- | ----- |
| Ok T  | -> Ok K  | Ok T  |
| Ok T  | -> Err N | Ok T  |
| Err E | -> Ok K  | Ok K  |
| Err E | -> Err N | Err N |

### or

Returns the first `Ok` value

| left  | input | right |
| ----- | ----- | ----- |
| Ok T  | Ok K  | Ok T  |
| Ok T  | Err N | Ok T  |
| Err E | Ok K  | Ok K  |
| Err E | Err N | Err N |

## Ok T -> T

### unwrap_or

| left  | input | right |
| ----- | ----- | ----- |
| Ok T  | K     | T     |
| Err E | K     | K     |

### unwrap_or_else

| left  | input | right |
| ----- | ----- | ----- |
| Ok T  | -> K  | T     |
| Err E | -> K  | K     |

### unwrap_or_default

| left  | right        |
| ----- | ------------ |
| Ok T  | T            |
| Err E | T::default() |

### expect

| left  | input          | right                 |
| ----- | -------------- | --------------------- |
| Ok T  | "Some message" | t                     |
| Err E | "Some message" | panic! "Some message" |

### unwrap

| left  | right  |
| ----- | ------ |
| Ok T  | T      |
| Err E | panic! |

### unwrap_unchecked (unsafe)

| left  | right                     |
| ----- | ------------------------- |
| Ok T  | T                         |
| Err E | 💥 Undefined Behaviour 💥 |

## Err E -> E

### unwrap_err

| left  | right  |
| ----- | ------ |
| Ok T  | panic! |
| Err E | E      |

### expect_err

| left  | input          | right                 |
| ----- | -------------- | --------------------- |
| Ok T  | "Some message" | panic! "Some message" |
| Err E | "Some message" | E                     |

### unwrap_err_unchecked (unsafe)

| left  | right                     |
| ----- | ------------------------- |
| Ok T  | 💥 Undefined Behaviour 💥 |
| Err E | E                         |

## Result -> Option

### ok

| left  | right  |
| ----- | ------ |
| Ok T  | Some T |
| Err E | None   |

### err

| left  | right  |
| ----- | ------ |
| Ok T  | None   |
| Err E | Some E |

| left      | right      |
| --------- | ---------- |
| Ok None   | None       |
| Ok Some T | Some Ok T  |
| Err E     | Some Err E |

## Result -> bool

### is_ok

| left  | right |
| ----- | ----- |
| Ok T  | true  |
| Err E | false |

### is_err_and

| left  | input    | right |
| ----- | -------- | ----- |
| Ok T  | -> true  | true  |
| Err E | -> true  | false |
| Ok T  | -> false | false |
| Err E | -> false | false |

### is_err

| left  | right |
| ----- | ----- |
| Ok T  | false |
| Err E | true  |

### is_err_and

| left  | input    | right |
| ----- | -------- | ----- |
| Ok T  | -> true  | false |
| Err E | -> true  | true  |
| Ok T  | -> false | false |
| Err E | -> false | false |

## Result -> Iter

### iter

| left  | right         |
| ----- | ------------- |
| Ok T  | Iter T        |
| Err E | iter::empty() |

### iter_mut

| left  | right         |
| ----- | ------------- |
| Ok T  | IterMut T     |
| Err E | iter::empty() |

## Reference Manipulation

### as_deref

| left  | right  |
| ----- | ------ |
| Ok T  | Ok &K  |
| Err E | Err &E |

### as_deref_mut

| left   | right |
| ------ | ----- |
| Ok &T  | Ok K  |
| Err &E | Err E |

### as_mut

| left       | right      |
| ---------- | ---------- |
| &mut Ok T  | Ok &mut K  |
| &mut Err E | Err &mut E |

### as_ref

| left   | right  |
| ------ | ------ |
| &Ok T  | Ok &K  |
| &Err E | Err &E |

### cloned

Uses `Clone`

| left      | right |
| --------- | ----- |
| Ok &T     | Ok K  |
| Ok &mut T | Ok K  |
| Err E     | Err E |

### copied

Uses `Copy`

| left      | right |
| --------- | ----- |
| Ok &T     | Ok K  |
| Ok &mut T | Ok K  |
| Err E     | Err E |

## Debugging

### inspect

Calls a function with a reference to the contained value if `Ok`.

| left  | input          | right |
| ----- | -------------- | ----- |
| Ok T  | T -> ()        | Ok T  |
| Err E | _does nothing_ | Err E |

### inspect_err

Calls a function with a reference to the contained value if `Err`.

| left  | input          | right |
| ----- | -------------- | ----- |
| Ok T  | _does nothing_ | Ok T  |
| Err E | E -> ()        | Err E |
