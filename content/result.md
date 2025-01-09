+++
title = "Result"
+++

A cheatsheet on the <span class="type">Result</span> type in Rust.

---

We use abstract names for types which can represent _literally anything_ such as <span class="type">T</span> and <span class="type">K</span>.

Feel free to mentally substitute types which make more sense to you, like for example <span class="&">&</span><span class="type">str</span> and <span class="type">i32</span>

---

How to read this cheatsheet:

- <span class="Some">Some</span> <span class="type">T</span>

  Some type <span class="type">T</span> wrapped in a <span class="Some">Some</span>

- <span class="parameter">T</span> <span class="punctuation">➝</span> <span class="type">K</span>

  A closure which takes some type <span class="parameter">T</span> as an argument and returns another type `K`

- <span class="type">D</span>, <span class="parameter">E</span> <span class="punctuation">➝</span> <span class="Err">Err</span> <span class="type">N</span>

  The first argument is of some type <span class="type">D</span>, the second argument is a closure that takes a <span class="parameter">T</span> as an argument and always returns some other type <span class="type">N</span> wrapped in an <span class="Err">Err</span>

- 💥

  Indicates an unsafe function or [undefined behaviour](https://doc.rust-lang.org/reference/behavior-considered-undefined.html)

## <span class="type">Result</span> <span class="punctuation">➝</span> <span class="type">Result</span>

### [map](https://doc.rust-lang.org/std/result/enum.Result.html#method.map)

Transform <span class="Ok">Ok</span>

| result                                                   | args                                                                                            | out                                                      |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="parameter">T</span> <span class="punctuation">➝</span> <span class="type">K</span> | <span class="Ok">Ok</span> <span class="type">K</span>   |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="parameter">T</span> <span class="punctuation">➝</span> <span class="type">K</span> | <span class="Err">Err</span> <span class="type">E</span> |

### [map_or](https://doc.rust-lang.org/std/result/enum.Result.html#method.map_or)

Transform <span class="Ok">Ok</span> with a default if <span class="Err">Err</span>

| result                                                   | args                                                                                                 | out                         |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | `N`, <span class="parameter">T</span> <span class="punctuation">➝</span> <span class="type">K</span> | <span class="type">K</span> |
| <span class="Err">Err</span> <span class="type">E</span> | `N`, <span class="parameter">T</span> <span class="punctuation">➝</span> <span class="type">K</span> | <span class="type">N</span> |

### [map_or_else](https://doc.rust-lang.org/std/result/enum.Result.html#method.map_or_else)

Transform <span class="Ok">Ok</span> and <span class="Err">Err</span>

| result                                                   | args                                                                                                                                                                     | out                         |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="parameter">E</span> <span class="punctuation">➝</span> `N`, <span class="parameter">T</span> <span class="punctuation">➝</span> <span class="type">K</span> | <span class="type">K</span> |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="parameter">E</span> <span class="punctuation">➝</span> `N`, <span class="parameter">T</span> <span class="punctuation">➝</span> <span class="type">K</span> | <span class="type">N</span> |

### [map_err](https://doc.rust-lang.org/std/result/enum.Result.html#method.map_err)

Transform <span class="Err">Err</span>

| result                                                   | args                                                                                            | out                                                      |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="parameter">T</span> <span class="punctuation">➝</span> <span class="type">N</span> | <span class="Ok">Ok</span> <span class="type">T</span>   |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="parameter">E</span> <span class="punctuation">➝</span> <span class="type">N</span> | <span class="Err">Err</span> <span class="type">N</span> |

### [and_then](https://doc.rust-lang.org/std/result/enum.Result.html#method.and_then)

Returns the first returned <span class="Err">Err</span> value

| result                                                   | args                                                                                                                         | out                                                      |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="parameter">T</span> <span class="punctuation">➝</span> <span class="Ok">Ok</span> <span class="type">K</span>   | <span class="Ok">Ok</span> <span class="type">K</span>   |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="parameter">T</span> <span class="punctuation">➝</span> <span class="Err">Err</span> <span class="type">N</span> | <span class="Err">Err</span> <span class="type">N</span> |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="parameter">E</span> <span class="punctuation">➝</span> <span class="Ok">Ok</span> <span class="type">K</span>   | <span class="Err">Err</span> <span class="type">E</span> |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="parameter">E</span> <span class="punctuation">➝</span> <span class="Err">Err</span> <span class="type">N</span> | <span class="Err">Err</span> <span class="type">E</span> |

### [and](https://doc.rust-lang.org/std/result/enum.Result.html#method.and)

Returns the first <span class="Err">Err</span> value

| result                                                   | args                                                     | out                                                      |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="Ok">Ok</span> <span class="type">K</span>   | <span class="Ok">Ok</span> <span class="type">K</span>   |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="Err">Err</span> <span class="type">N</span> | <span class="Err">Err</span> <span class="type">N</span> |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="Ok">Ok</span> <span class="type">K</span>   | <span class="Err">Err</span> <span class="type">E</span> |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="Err">Err</span> <span class="type">N</span> | <span class="Err">Err</span> <span class="type">E</span> |

### [or_else](https://doc.rust-lang.org/std/result/enum.Result.html#method.or_else)

Returns the first returned <span class="Ok">Ok</span> value

| result                                                   | args                                                                                                                         | out                                                      |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="parameter">T</span> <span class="punctuation">➝</span> <span class="Ok">Ok</span> <span class="type">K</span>   | <span class="Ok">Ok</span> <span class="type">T</span>   |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="parameter">T</span> <span class="punctuation">➝</span> <span class="Err">Err</span> <span class="type">N</span> | <span class="Ok">Ok</span> <span class="type">T</span>   |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="parameter">E</span> <span class="punctuation">➝</span> <span class="Ok">Ok</span> <span class="type">K</span>   | <span class="Ok">Ok</span> <span class="type">K</span>   |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="parameter">E</span> <span class="punctuation">➝</span> <span class="Err">Err</span> <span class="type">N</span> | <span class="Err">Err</span> <span class="type">N</span> |

### [or](https://doc.rust-lang.org/std/result/enum.Result.html#method.or)

Returns the first <span class="Ok">Ok</span> value

| result                                                   | args                                                     | out                                                      |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="Ok">Ok</span> <span class="type">K</span>   | <span class="Ok">Ok</span> <span class="type">T</span>   |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="Err">Err</span> <span class="type">N</span> | <span class="Ok">Ok</span> <span class="type">T</span>   |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="Ok">Ok</span> <span class="type">K</span>   | <span class="Ok">Ok</span> <span class="type">K</span>   |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="Err">Err</span> <span class="type">N</span> | <span class="Err">Err</span> <span class="type">N</span> |

## <span class="Ok">Ok</span> <span class="type">T</span> <span class="punctuation">➝</span> <span class="type">T</span>

Extract the value contained in <span class="Ok">Ok</span>

### [unwrap_or](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap_or)

| result                                                   | args                        | out                         |
| -------------------------------------------------------- | --------------------------- | --------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="type">K</span> | <span class="type">T</span> |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="type">K</span> | <span class="type">K</span> |

### [unwrap_or_else](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap_or_else)

| result                                                   | args                                                                                            | out                         |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="parameter">T</span> <span class="punctuation">➝</span> <span class="type">K</span> | <span class="type">T</span> |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="parameter">E</span> <span class="punctuation">➝</span> <span class="type">K</span> | <span class="type">K</span> |

### [unwrap_or_default](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap_or_default)

| result                                                   | out                         |
| -------------------------------------------------------- | --------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="type">T</span> |
| <span class="Err">Err</span> <span class="type">E</span> | `T::default()`              |

### [expect](https://doc.rust-lang.org/std/result/enum.Result.html#method.expect)

| result                                                   | args             | out                         |
| -------------------------------------------------------- | ---------------- | --------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | `"Some message"` | <span class="type">T</span> |
| <span class="Err">Err</span> <span class="type">E</span> | `"Some message"` | `panic! "Some message"`     |

### [unwrap](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap)

| result                                                   | out                         |
| -------------------------------------------------------- | --------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="type">T</span> |
| <span class="Err">Err</span> <span class="type">E</span> | `panic!`                    |

### 💥[unwrap_unchecked](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap_unchecked)

| result                                                   | out                         |
| -------------------------------------------------------- | --------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="type">T</span> |
| <span class="Err">Err</span> <span class="type">E</span> | 💥                          |

## <span class="Err">Err</span> <span class="type">E</span> <span class="punctuation">➝</span> <span class="type">E</span>

Extract the value contained in <span class="Err">Err</span>

### [unwrap_err](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap_err)

| result                                                   | out                         |
| -------------------------------------------------------- | --------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | `panic!`                    |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="type">E</span> |

### [expect_err](https://doc.rust-lang.org/std/result/enum.Result.html#method.expect_err)

| result                                                   | args             | out                         |
| -------------------------------------------------------- | ---------------- | --------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | `"Some message"` | `panic! "Some message"`     |
| <span class="Err">Err</span> <span class="type">E</span> | `"Some message"` | <span class="type">E</span> |

### 💥[unwrap_err_unchecked](https://doc.rust-lang.org/std/result/enum.Result.html#method.unwrap_err_unchecked)

| result                                                   | out                         |
| -------------------------------------------------------- | --------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | 💥                          |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="type">E</span> |

## <span class="type">Result</span> <span class="punctuation">➝</span> <span class="type">Option</span>

### [ok](https://doc.rust-lang.org/std/result/enum.Result.html#method.ok)

Get the <span class="Ok">Ok</span> value, which may or may not be there

| result                                                   | out                                                        |
| -------------------------------------------------------- | ---------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="Some">Some</span> <span class="type">T</span> |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="None">None</span>                             |

### [err](https://doc.rust-lang.org/std/result/enum.Result.html#method.err)

Get the <span class="Err">Err</span> value, which may or may not be there

| result                                                   | out                                                        |
| -------------------------------------------------------- | ---------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="None">None</span>                             |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="Some">Some</span> <span class="type">E</span> |

### [transpose](https://doc.rust-lang.org/std/result/enum.Result.html#method.transpose)

Does the `Result` have _anything_ in it?

| result                                                                                | out                                                                                     |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="None">None</span>                             | <span class="None">None</span>                                                          |
| <span class="Ok">Ok</span> <span class="Some">Some</span> <span class="type">T</span> | <span class="Some">Some</span> <span class="Ok">Ok</span> <span class="type">T</span>   |
| <span class="Err">Err</span> <span class="type">E</span>                              | <span class="Some">Some</span> <span class="Err">Err</span> <span class="type">E</span> |

## <span class="type">Result</span> <span class="punctuation">➝</span> <span class="type">bool</span>

### [is_ok](https://doc.rust-lang.org/std/result/enum.Result.html#method.is_ok)

| result                                                   | out                              |
| -------------------------------------------------------- | -------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="bool">true</span>   |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="false">false</span> |

### [is_err](https://doc.rust-lang.org/std/result/enum.Result.html#method.is_err)

| result                                                   | out                              |
| -------------------------------------------------------- | -------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="false">false</span> |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="bool">true</span>   |

### [is_ok_and](https://doc.rust-lang.org/std/result/enum.Result.html#method.is_ok_and)

| result                                                   | args                                                                | out                              |
| -------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="punctuation">➝</span> <span class="bool">true</span>   | <span class="bool">true</span>   |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="punctuation">➝</span> <span class="bool">true</span>   | <span class="false">false</span> |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="punctuation">➝</span> <span class="false">false</span> | <span class="false">false</span> |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="punctuation">➝</span> <span class="false">false</span> | <span class="false">false</span> |

### [is_err_and](https://doc.rust-lang.org/std/result/enum.Result.html#method.is_err_and)

| result                                                   | args                                                                | out                              |
| -------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="punctuation">➝</span> <span class="bool">true</span>   | <span class="false">false</span> |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="punctuation">➝</span> <span class="bool">true</span>   | <span class="bool">true</span>   |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="punctuation">➝</span> <span class="false">false</span> | <span class="false">false</span> |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="punctuation">➝</span> <span class="false">false</span> | <span class="false">false</span> |

## <span class="type">Result</span> <span class="punctuation">➝</span> <span class="type">Iterator</span>

### [iter](https://doc.rust-lang.org/std/result/enum.Result.html#method.iter)

| result                                                   | out                              |
| -------------------------------------------------------- | -------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | Iter <span class="type">T</span> |
| <span class="Err">Err</span> <span class="type">E</span> | iter::empty()                    |

### [iter_mut](https://doc.rust-lang.org/std/result/enum.Result.html#method.iter_mut)

| result                                                   | out                                 |
| -------------------------------------------------------- | ----------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | IterMut <span class="type">T</span> |
| <span class="Err">Err</span> <span class="type">E</span> | iter::empty()                       |

## Reference Manipulation

### [as_deref](https://doc.rust-lang.org/std/result/enum.Result.html#method.as_deref)

| result                                                   | out                                                                              |
| -------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="Ok">Ok</span> <span class="&">&</span><span class="type">K</span>   |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="Err">Err</span> <span class="&">&</span><span class="type">E</span> |

### [as_deref_mut](https://doc.rust-lang.org/std/result/enum.Result.html#method.as_deref_mut)

| result                                                                           | out                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="&">&</span><span class="type">T</span>   | <span class="Ok">Ok</span> <span class="type">K</span>   |
| <span class="Err">Err</span> <span class="&">&</span><span class="type">E</span> | <span class="Err">Err</span> <span class="type">E</span> |

### [as_mut](https://doc.rust-lang.org/std/result/enum.Result.html#method.as_mut)

| result                                                                                                        | out                                                                                                           |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <span class="&">&</span><span class="mut">mut</span> <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="Ok">Ok</span> <span class="&">&</span><span class="mut">mut</span> <span class="type">K</span>   |
| <span class="&">&</span><span class="mut">mut</span> <span class="Err">Err</span> <span class="type">E</span> | <span class="Err">Err</span> <span class="&">&</span><span class="mut">mut</span> <span class="type">E</span> |

### [as_ref](https://doc.rust-lang.org/std/result/enum.Result.html#method.as_ref)

| result                                                                           | out                                                                              |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <span class="&">&</span><span class="Ok">Ok</span> <span class="type">T</span>   | <span class="Ok">Ok</span> <span class="&">&</span><span class="type">K</span>   |
| <span class="&">&</span><span class="Err">Err</span> <span class="type">E</span> | <span class="Err">Err</span> <span class="&">&</span><span class="type">E</span> |

### [cloned](https://doc.rust-lang.org/std/result/enum.Result.html#method.cloned)

Uses Clone

| result                                                                                                      | out                                                      |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="&">&</span><span class="type">T</span>                              | <span class="Ok">Ok</span> <span class="type">K</span>   |
| <span class="Ok">Ok</span> <span class="&">&</span><span class="mut">mut</span> <span class="type">T</span> | <span class="Ok">Ok</span> <span class="type">K</span>   |
| <span class="Err">Err</span> <span class="type">E</span>                                                    | <span class="Err">Err</span> <span class="type">E</span> |

### [copied](https://doc.rust-lang.org/std/result/enum.Result.html#method.copied)

Uses Copy

| result                                                                                                      | out                                                      |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="&">&</span><span class="type">T</span>                              | <span class="Ok">Ok</span> <span class="type">K</span>   |
| <span class="Ok">Ok</span> <span class="&">&</span><span class="mut">mut</span> <span class="type">T</span> | <span class="Ok">Ok</span> <span class="type">K</span>   |
| <span class="Err">Err</span> <span class="type">E</span>                                                    | <span class="Err">Err</span> <span class="type">E</span> |

## Debugging

### [inspect](https://doc.rust-lang.org/std/result/enum.Result.html#method.inspect)

Calls a function with a reference to the contained value if <span class="Ok">Ok</span>.

| result                                                   | args                                                                                        | out                                                      |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | <span class="type">T</span> <span class="punctuation">➝</span> <span class="unit">()</span> | <span class="Ok">Ok</span> <span class="type">T</span>   |
| <span class="Err">Err</span> <span class="type">E</span> | _does nothing_                                                                              | <span class="Err">Err</span> <span class="type">E</span> |

### [inspect_err](https://doc.rust-lang.org/std/result/enum.Result.html#method.inspect_err)

Calls a function with a reference to the contained value if <span class="Err">Err</span>.

| result                                                   | args                                                                                        | out                                                      |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| <span class="Ok">Ok</span> <span class="type">T</span>   | _does nothing_                                                                              | <span class="Ok">Ok</span> <span class="type">T</span>   |
| <span class="Err">Err</span> <span class="type">E</span> | <span class="type">E</span> <span class="punctuation">➝</span> <span class="unit">()</span> | <span class="Err">Err</span> <span class="type">E</span> |
