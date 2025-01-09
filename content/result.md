+++
title = "Result"
+++

## Result <span class="punctuation">➝</span> Result

### `map`

[docs](https://doc.rust-lang.org/std/result/enum.Result.html#method.map)

Transform <span class="Ok">Ok</span>

|                                                        left | input                                                                                            |                                                       right |
| ----------------------------------------------------------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------: |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="T param">T</span> <span class="punctuation">➝</span> <span class="K param">K</span> |   <span class="Ok">Ok</span> <span class="K param">K</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="T param">T</span> <span class="punctuation">➝</span> <span class="K param">K</span> | <span class="Err">Err</span> <span class="E param">E</span> |

### `map_or`

Transform <span class="Ok">Ok</span> with a default

|                                                        left | input                                                                                               | right                          |
| ----------------------------------------------------------: | --------------------------------------------------------------------------------------------------- | ------------------------------ |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | N, <span class="T param">T</span> <span class="punctuation">➝</span> <span class="K param">K</span> | <span class="K param">K</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | N, <span class="T param">T</span> <span class="punctuation">➝</span> <span class="K param">K</span> | <span class="N param">N</span> |

### `map_or_else`

Transform <span class="Ok">Ok</span> and <span class="Err">Err</span>

|                                                        left | input                                                                                                                                                                 | right                          |
| ----------------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="E param">E</span> <span class="punctuation">➝</span> N, <span class="T param">T</span> <span class="punctuation">➝</span> <span class="K param">K</span> | <span class="K param">K</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="E param">E</span> <span class="punctuation">➝</span> N, <span class="T param">T</span> <span class="punctuation">➝</span> <span class="K param">K</span> | <span class="N param">N</span> |

### `map_err`

Transform <span class="Err">Err</span>

|                                                        left | input                                                                                            |                                                       right |
| ----------------------------------------------------------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------: |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="E param">E</span> <span class="punctuation">➝</span> <span class="N param">N</span> |   <span class="Ok">Ok</span> <span class="T param">T</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="E param">E</span> <span class="punctuation">➝</span> <span class="N param">N</span> | <span class="Err">Err</span> <span class="N param">N</span> |

### `and_then`

Returns the first returned <span class="Err">Err</span> value

|                                                        left | input                                                                                          |                                                       right |
| ----------------------------------------------------------: | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------: |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="punctuation">➝</span> <span class="Ok">Ok</span> <span class="K param">K</span>   |   <span class="Ok">Ok</span> <span class="K param">K</span> |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="punctuation">➝</span> <span class="Err">Err</span> <span class="N param">N</span> | <span class="Err">Err</span> <span class="N param">N</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="punctuation">➝</span> <span class="Ok">Ok</span> <span class="K param">K</span>   | <span class="Err">Err</span> <span class="E param">E</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="punctuation">➝</span> <span class="Err">Err</span> <span class="N param">N</span> | <span class="Err">Err</span> <span class="E param">E</span> |

### `and`

Returns the first <span class="Err">Err</span> value

|                                                        left |                            input                            |                                                       right |
| ----------------------------------------------------------: | :---------------------------------------------------------: | ----------------------------------------------------------: |
|   <span class="Ok">Ok</span> <span class="T param">T</span> |  <span class="Ok">Ok</span> <span class="K param">K</span>  |   <span class="Ok">Ok</span> <span class="K param">K</span> |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="Err">Err</span> <span class="N param">N</span> | <span class="Err">Err</span> <span class="N param">N</span> |
| <span class="Err">Err</span> <span class="E param">E</span> |  <span class="Ok">Ok</span> <span class="K param">K</span>  | <span class="Err">Err</span> <span class="E param">E</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="Err">Err</span> <span class="N param">N</span> | <span class="Err">Err</span> <span class="E param">E</span> |

### `or_else`

Returns the first returned <span class="Ok">Ok</span> value

|                                                        left | input                                                                                          |                                                       right |
| ----------------------------------------------------------: | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------: |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="punctuation">➝</span> <span class="Ok">Ok</span> <span class="K param">K</span>   |   <span class="Ok">Ok</span> <span class="T param">T</span> |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="punctuation">➝</span> <span class="Err">Err</span> <span class="N param">N</span> |   <span class="Ok">Ok</span> <span class="T param">T</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="punctuation">➝</span> <span class="Ok">Ok</span> <span class="K param">K</span>   |   <span class="Ok">Ok</span> <span class="K param">K</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="punctuation">➝</span> <span class="Err">Err</span> <span class="N param">N</span> | <span class="Err">Err</span> <span class="N param">N</span> |

### `or`

Returns the first <span class="Ok">Ok</span> value

|                                                        left |                                                       input |                                                       right |
| ----------------------------------------------------------: | ----------------------------------------------------------: | ----------------------------------------------------------: |
|   <span class="Ok">Ok</span> <span class="T param">T</span> |   <span class="Ok">Ok</span> <span class="K param">K</span> |   <span class="Ok">Ok</span> <span class="T param">T</span> |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="Err">Err</span> <span class="N param">N</span> |   <span class="Ok">Ok</span> <span class="T param">T</span> |
| <span class="Err">Err</span> <span class="E param">E</span> |   <span class="Ok">Ok</span> <span class="K param">K</span> |   <span class="Ok">Ok</span> <span class="K param">K</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="Err">Err</span> <span class="N param">N</span> | <span class="Err">Err</span> <span class="N param">N</span> |

## <span class="Ok">Ok</span> <span class="T param">T</span> <span class="punctuation">➝</span> T

### `unwrap_or`

|                                                        left | input                          | right                          |
| ----------------------------------------------------------: | ------------------------------ | ------------------------------ |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="K param">K</span> | <span class="T param">T</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="K param">K</span> | <span class="K param">K</span> |

### `unwrap_or_else`

|                                                        left | input                                                             | right                          |
| ----------------------------------------------------------: | ----------------------------------------------------------------- | ------------------------------ |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="punctuation">➝</span> <span class="K param">K</span> | <span class="T param">T</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="punctuation">➝</span> <span class="K param">K</span> | <span class="K param">K</span> |

### `unwrap_or_default`

|                                                        left | right                          |
| ----------------------------------------------------------: | ------------------------------ |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="T param">T</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | `T::default()`                 |

### `expect`

|                                                        left | input          | right                 |
| ----------------------------------------------------------: | -------------- | --------------------- |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | "Some message" | t                     |
| <span class="Err">Err</span> <span class="E param">E</span> | "Some message" | panic! "Some message" |

### `unwrap`

|                                                        left | right                          |
| ----------------------------------------------------------: | ------------------------------ |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="T param">T</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | panic!                         |

### `unwrap_unchecked (unsafe)`

|                                                        left | right                          |
| ----------------------------------------------------------: | ------------------------------ |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="T param">T</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | 💥 Undefined Behaviour 💥      |

## <span class="Err">Err</span> <span class="E param">E</span> <span class="punctuation">➝</span> E

### `unwrap_err`

|                                                        left | right                          |
| ----------------------------------------------------------: | ------------------------------ |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | panic!                         |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="E param">E</span> |

### `expect_err`

|                                                        left | input          | right                          |
| ----------------------------------------------------------: | -------------- | ------------------------------ |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | "Some message" | panic! "Some message"          |
| <span class="Err">Err</span> <span class="E param">E</span> | "Some message" | <span class="E param">E</span> |

### `unwrap_err_unchecked (unsafe)`

|                                                        left | right                          |
| ----------------------------------------------------------: | ------------------------------ |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | 💥 Undefined Behaviour 💥      |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="E param">E</span> |

## Result <span class="punctuation">➝</span> Option

### `ok`

|                                                        left | right                                                         |
| ----------------------------------------------------------: | ------------------------------------------------------------- |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="Some">Some</span> <span class="T param">T</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="None">None</span>                                |

### `err`

|                                                        left | right                                                         |
| ----------------------------------------------------------: | ------------------------------------------------------------- |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="None">None</span>                                |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="Some">Some</span> <span class="E param">E</span> |

|                                                                                     left |                                                                                      right |
| ---------------------------------------------------------------------------------------: | -----------------------------------------------------------------------------------------: |
|                                <span class="Ok">Ok</span> <span class="None">None</span> |                                                             <span class="None">None</span> |
| <span class="Ok">Ok</span> <span class="Some">Some</span> <span class="T param">T</span> |   <span class="Some">Some</span> <span class="Ok">Ok</span> <span class="T param">T</span> |
|                              <span class="Err">Err</span> <span class="E param">E</span> | <span class="Some">Some</span> <span class="Err">Err</span> <span class="E param">E</span> |

## Result <span class="punctuation">➝</span> bool

### `is_ok`

| left                                                        | right                           |
| ----------------------------------------------------------- | ------------------------------- |
| <span class="Ok">Ok</span> <span class="T param">T</span>   | <span class="bool">true</span>  |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="bool">false</span> |

### `is_err_and`

| left                                                        | input                                                              | right                           |
| ----------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------- |
| <span class="Ok">Ok</span> <span class="T param">T</span>   | <span class="punctuation">➝</span> <span class="bool">true</span>  | <span class="bool">true</span>  |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="punctuation">➝</span> <span class="bool">true</span>  | <span class="bool">false</span> |
| <span class="Ok">Ok</span> <span class="T param">T</span>   | <span class="punctuation">➝</span> <span class="bool">false</span> | <span class="bool">false</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="punctuation">➝</span> <span class="bool">false</span> | <span class="bool">false</span> |

### `is_err`

| left                                                        | right                           |
| ----------------------------------------------------------- | ------------------------------- |
| <span class="Ok">Ok</span> <span class="T param">T</span>   | <span class="bool">false</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="bool">true</span>  |

### `is_err_and`

| left                                                        | input                                                              | right                           |
| ----------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------- |
| <span class="Ok">Ok</span> <span class="T param">T</span>   | <span class="punctuation">➝</span> <span class="bool">true</span>  | <span class="bool">false</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="punctuation">➝</span> <span class="bool">true</span>  | <span class="bool">true</span>  |
| <span class="Ok">Ok</span> <span class="T param">T</span>   | <span class="punctuation">➝</span> <span class="bool">false</span> | <span class="bool">false</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="punctuation">➝</span> <span class="bool">false</span> | <span class="bool">false</span> |

## Result <span class="punctuation">➝</span> Iter

### `iter`

| left                                                        | right                               |
| ----------------------------------------------------------- | ----------------------------------- |
| <span class="Ok">Ok</span> <span class="T param">T</span>   | Iter <span class="T param">T</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | iter::empty()                       |

### `iter_mut`

| left                                                        | right                                  |
| ----------------------------------------------------------- | -------------------------------------- |
| <span class="Ok">Ok</span> <span class="T param">T</span>   | IterMut <span class="T param">T</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | iter::empty()                          |

## Reference Manipulation

### `as_deref`

|                                                        left |                                                  right |
| ----------------------------------------------------------: | -----------------------------------------------------: |
|   <span class="Ok">Ok</span> <span class="T param">T</span> |   <span class="Ok">Ok</span> <span class="&">&</span>K |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="Err">Err</span> <span class="&">&</span>E |

### `as_deref_mut`

|                                                   left |                                                       right |
| -----------------------------------------------------: | ----------------------------------------------------------: |
|   <span class="Ok">Ok</span> <span class="&">&</span>T |   <span class="Ok">Ok</span> <span class="K param">K</span> |
| <span class="Err">Err</span> <span class="&">&</span>E | <span class="Err">Err</span> <span class="E param">E</span> |

### `as_mut`

|                                                                                                             left | right                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------- |
|   <span class="&">&</span><span class="mut">mut</span> <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="Ok">Ok</span> <span class="&">&</span><span class="mut">mut</span> <span class="K param">K</span>   |
| <span class="&">&</span><span class="mut">mut</span> <span class="Err">Err</span> <span class="E param">E</span> | <span class="Err">Err</span> <span class="&">&</span><span class="mut">mut</span> <span class="E param">E</span> |

### `as_ref`

|                                                                                left |                                                  right |
| ----------------------------------------------------------------------------------: | -----------------------------------------------------: |
|   <span class="&">&</span><span class="Ok">Ok</span> <span class="T param">T</span> |   <span class="Ok">Ok</span> <span class="&">&</span>K |
| <span class="&">&</span><span class="Err">Err</span> <span class="E param">E</span> | <span class="Err">Err</span> <span class="&">&</span>E |

### `cloned`

Uses Clone

|                                                                                                           left |                                                       right |
| -------------------------------------------------------------------------------------------------------------: | ----------------------------------------------------------: |
|                                                           <span class="Ok">Ok</span> <span class="&">&</span>T |   <span class="Ok">Ok</span> <span class="K param">K</span> |
| <span class="Ok">Ok</span> <span class="&">&</span><span class="mut">mut</span> <span class="T param">T</span> |   <span class="Ok">Ok</span> <span class="K param">K</span> |
|                                                    <span class="Err">Err</span> <span class="E param">E</span> | <span class="Err">Err</span> <span class="E param">E</span> |

### `copied`

Uses Copy

|                                                                                                           left |                                                       right |
| -------------------------------------------------------------------------------------------------------------: | ----------------------------------------------------------: |
|                                                           <span class="Ok">Ok</span> <span class="&">&</span>T |   <span class="Ok">Ok</span> <span class="K param">K</span> |
| <span class="Ok">Ok</span> <span class="&">&</span><span class="mut">mut</span> <span class="T param">T</span> |   <span class="Ok">Ok</span> <span class="K param">K</span> |
|                                                    <span class="Err">Err</span> <span class="E param">E</span> | <span class="Err">Err</span> <span class="E param">E</span> |

## Debugging

### `inspect`

Calls a function with a reference to the contained value if <span class="Ok">Ok</span>.

|                                                        left | input                                                                |                                                       right |
| ----------------------------------------------------------: | -------------------------------------------------------------------- | ----------------------------------------------------------: |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | <span class="T param">T</span> <span class="punctuation">➝</span> () |   <span class="Ok">Ok</span> <span class="T param">T</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | _does nothing_                                                       | <span class="Err">Err</span> <span class="E param">E</span> |

### `inspect_err`

Calls a function with a reference to the contained value if <span class="Err">Err</span>.

|                                                        left | input                                                                                          |                                                       right |
| ----------------------------------------------------------: | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------: |
|   <span class="Ok">Ok</span> <span class="T param">T</span> | _does nothing_                                                                                 |   <span class="Ok">Ok</span> <span class="T param">T</span> |
| <span class="Err">Err</span> <span class="E param">E</span> | <span class="E param">E</span> <span class="punctuation">➝</span> <span class="unit">()</span> | <span class="Err">Err</span> <span class="E param">E</span> |
