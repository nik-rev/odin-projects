+++
title = "Result"
+++

## Result -> Result

### `map`

```rs

fn main() {
  eprintln!("Hello world!")
}
```

Transform <span class="Ok">Ok</span>

| left                           | input  | right                          |
| ------------------------------ | ------ | ------------------------------ |
| <span class="Ok">Ok</span> T   | T -> K | <span class="Ok">Ok</span> K   |
| <span class="Err">Err</span> E | T -> K | <span class="Err">Err</span> E |

### `map_or`

Transform <span class="Ok">Ok</span> with a default

| left                           | input     | right |
| ------------------------------ | --------- | ----- |
| <span class="Ok">Ok</span> T   | N, T -> K | K     |
| <span class="Err">Err</span> E | N, T -> K | N     |

### `map_or_else`

Transform <span class="Ok">Ok</span> and <span class="Err">Err</span>

| left                           | input          | right |
| ------------------------------ | -------------- | ----- |
| <span class="Ok">Ok</span> T   | E -> N, T -> K | K     |
| <span class="Err">Err</span> E | E -> N, T -> K | N     |

### `map_err`

Transform <span class="Err">Err</span>

| left                           | input  | right                          |
| ------------------------------ | ------ | ------------------------------ |
| <span class="Ok">Ok</span> T   | E -> N | <span class="Ok">Ok</span> T   |
| <span class="Err">Err</span> E | E -> N | <span class="Err">Err</span> N |

### `and_then`

Returns the first returned <span class="Err">Err</span> value

| left                           | input                             | right                          |
| ------------------------------ | --------------------------------- | ------------------------------ |
| <span class="Ok">Ok</span> T   | -> <span class="Ok">Ok</span> K   | <span class="Ok">Ok</span> K   |
| <span class="Ok">Ok</span> T   | -> <span class="Err">Err</span> N | <span class="Err">Err</span> N |
| <span class="Err">Err</span> E | -> <span class="Ok">Ok</span> K   | <span class="Err">Err</span> E |
| <span class="Err">Err</span> E | -> <span class="Err">Err</span> N | <span class="Err">Err</span> E |

### `and`

Returns the first <span class="Err">Err</span> value

| left                           | input                          | right                          |
| ------------------------------ | ------------------------------ | ------------------------------ |
| <span class="Ok">Ok</span> T   | <span class="Ok">Ok</span> K   | <span class="Ok">Ok</span> K   |
| <span class="Ok">Ok</span> T   | <span class="Err">Err</span> N | <span class="Err">Err</span> N |
| <span class="Err">Err</span> E | <span class="Ok">Ok</span> K   | <span class="Err">Err</span> E |
| <span class="Err">Err</span> E | <span class="Err">Err</span> N | <span class="Err">Err</span> E |

### `or_else`

Returns the first returned <span class="Ok">Ok</span> value

| left                           | input                             | right                          |
| ------------------------------ | --------------------------------- | ------------------------------ |
| <span class="Ok">Ok</span> T   | -> <span class="Ok">Ok</span> K   | <span class="Ok">Ok</span> T   |
| <span class="Ok">Ok</span> T   | -> <span class="Err">Err</span> N | <span class="Ok">Ok</span> T   |
| <span class="Err">Err</span> E | -> <span class="Ok">Ok</span> K   | <span class="Ok">Ok</span> K   |
| <span class="Err">Err</span> E | -> <span class="Err">Err</span> N | <span class="Err">Err</span> N |

### `or`

Returns the first <span class="Ok">Ok</span> value

| left                           | input                          | right                          |
| ------------------------------ | ------------------------------ | ------------------------------ |
| <span class="Ok">Ok</span> T   | <span class="Ok">Ok</span> K   | <span class="Ok">Ok</span> T   |
| <span class="Ok">Ok</span> T   | <span class="Err">Err</span> N | <span class="Ok">Ok</span> T   |
| <span class="Err">Err</span> E | <span class="Ok">Ok</span> K   | <span class="Ok">Ok</span> K   |
| <span class="Err">Err</span> E | <span class="Err">Err</span> N | <span class="Err">Err</span> N |

## <span class="Ok">Ok</span> T -> T

### `unwrap_or`

| left                           | input | right |
| ------------------------------ | ----- | ----- |
| <span class="Ok">Ok</span> T   | K     | T     |
| <span class="Err">Err</span> E | K     | K     |

### `unwrap_or_else`

| left                           | input | right |
| ------------------------------ | ----- | ----- |
| <span class="Ok">Ok</span> T   | -> K  | T     |
| <span class="Err">Err</span> E | -> K  | K     |

### `unwrap_or_default`

| left                           | right        |
| ------------------------------ | ------------ |
| <span class="Ok">Ok</span> T   | T            |
| <span class="Err">Err</span> E | T::default() |

### `expect`

| left                           | input          | right                 |
| ------------------------------ | -------------- | --------------------- |
| <span class="Ok">Ok</span> T   | "Some message" | t                     |
| <span class="Err">Err</span> E | "Some message" | panic! "Some message" |

### `unwrap`

| left                           | right  |
| ------------------------------ | ------ |
| <span class="Ok">Ok</span> T   | T      |
| <span class="Err">Err</span> E | panic! |

### `unwrap_unchecked (unsafe)`

| left                           | right                     |
| ------------------------------ | ------------------------- |
| <span class="Ok">Ok</span> T   | T                         |
| <span class="Err">Err</span> E | 💥 Undefined Behaviour 💥 |

## <span class="Err">Err</span> E -> E

### `unwrap_err`

| left                           | right  |
| ------------------------------ | ------ |
| <span class="Ok">Ok</span> T   | panic! |
| <span class="Err">Err</span> E | E      |

### `expect_err`

| left                           | input          | right                 |
| ------------------------------ | -------------- | --------------------- |
| <span class="Ok">Ok</span> T   | "Some message" | panic! "Some message" |
| <span class="Err">Err</span> E | "Some message" | E                     |

### `unwrap_err_unchecked (unsafe)`

| left                           | right                     |
| ------------------------------ | ------------------------- |
| <span class="Ok">Ok</span> T   | 💥 Undefined Behaviour 💥 |
| <span class="Err">Err</span> E | E                         |

## Result -> Option

### `ok`

| left                           | right  |
| ------------------------------ | ------ |
| <span class="Ok">Ok</span> T   | Some T |
| <span class="Err">Err</span> E | None   |

### `err`

| left                           | right  |
| ------------------------------ | ------ |
| <span class="Ok">Ok</span> T   | None   |
| <span class="Err">Err</span> E | Some E |

| left                              | right                               |
| --------------------------------- | ----------------------------------- |
| <span class="Ok">Ok</span> None   | None                                |
| <span class="Ok">Ok</span> Some T | Some <span class="Ok">Ok</span> T   |
| <span class="Err">Err</span> E    | Some <span class="Err">Err</span> E |

## Result -> bool

### `is_ok`

| left                           | right |
| ------------------------------ | ----- |
| <span class="Ok">Ok</span> T   | true  |
| <span class="Err">Err</span> E | false |

### `is_err_and`

| left                           | input    | right |
| ------------------------------ | -------- | ----- |
| <span class="Ok">Ok</span> T   | -> true  | true  |
| <span class="Err">Err</span> E | -> true  | false |
| <span class="Ok">Ok</span> T   | -> false | false |
| <span class="Err">Err</span> E | -> false | false |

### `is_err`

| left                           | right |
| ------------------------------ | ----- |
| <span class="Ok">Ok</span> T   | false |
| <span class="Err">Err</span> E | true  |

### `is_err_and`

| left                           | input    | right |
| ------------------------------ | -------- | ----- |
| <span class="Ok">Ok</span> T   | -> true  | false |
| <span class="Err">Err</span> E | -> true  | true  |
| <span class="Ok">Ok</span> T   | -> false | false |
| <span class="Err">Err</span> E | -> false | false |

## Result -> Iter

### `iter`

| left                           | right         |
| ------------------------------ | ------------- |
| <span class="Ok">Ok</span> T   | Iter T        |
| <span class="Err">Err</span> E | iter::empty() |

### `iter_mut`

| left                           | right         |
| ------------------------------ | ------------- |
| <span class="Ok">Ok</span> T   | IterMut T     |
| <span class="Err">Err</span> E | iter::empty() |

## Reference Manipulation

### `as_deref`

| left                           | right                           |
| ------------------------------ | ------------------------------- |
| <span class="Ok">Ok</span> T   | <span class="Ok">Ok</span> &K   |
| <span class="Err">Err</span> E | <span class="Err">Err</span> &E |

### `as_deref_mut`

| left                            | right                          |
| ------------------------------- | ------------------------------ |
| <span class="Ok">Ok</span> &T   | <span class="Ok">Ok</span> K   |
| <span class="Err">Err</span> &E | <span class="Err">Err</span> E |

### `as_mut`

| left                                | right                               |
| ----------------------------------- | ----------------------------------- |
| &mut <span class="Ok">Ok</span> T   | <span class="Ok">Ok</span> &mut K   |
| &mut <span class="Err">Err</span> E | <span class="Err">Err</span> &mut E |

### `as_ref`

| left                            | right                           |
| ------------------------------- | ------------------------------- |
| &<span class="Ok">Ok</span> T   | <span class="Ok">Ok</span> &K   |
| &<span class="Err">Err</span> E | <span class="Err">Err</span> &E |

### `cloned`

Uses Clone

| left                              | right                          |
| --------------------------------- | ------------------------------ |
| <span class="Ok">Ok</span> &T     | <span class="Ok">Ok</span> K   |
| <span class="Ok">Ok</span> &mut T | <span class="Ok">Ok</span> K   |
| <span class="Err">Err</span> E    | <span class="Err">Err</span> E |

### `copied`

Uses Copy

| left                              | right                          |
| --------------------------------- | ------------------------------ |
| <span class="Ok">Ok</span> &T     | <span class="Ok">Ok</span> K   |
| <span class="Ok">Ok</span> &mut T | <span class="Ok">Ok</span> K   |
| <span class="Err">Err</span> E    | <span class="Err">Err</span> E |

## Debugging

### `inspect`

Calls a function with a reference to the contained value if <span class="Ok">Ok</span>.

| left                           | input          | right                          |
| ------------------------------ | -------------- | ------------------------------ |
| <span class="Ok">Ok</span> T   | T -> ()        | <span class="Ok">Ok</span> T   |
| <span class="Err">Err</span> E | _does nothing_ | <span class="Err">Err</span> E |

### `inspect_err`

Calls a function with a reference to the contained value if <span class="Err">Err</span>.

| left                           | input          | right                          |
| ------------------------------ | -------------- | ------------------------------ |
| <span class="Ok">Ok</span> T   | _does nothing_ | <span class="Ok">Ok</span> T   |
| <span class="Err">Err</span> E | E -> ()        | <span class="Err">Err</span> E |
