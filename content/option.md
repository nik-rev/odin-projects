+++
title = "Option"
draft = true
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

- <span class="type">D</span>, <span class="parameter">E</span> <span class="punctuation">➝</span> <span class="None">None</span> <span class="type">N</span>

  The first argument is of some type <span class="type">D</span>, the second argument is a closure that takes a <span class="parameter">T</span> as an argument and always returns some other type <span class="type">N</span> wrapped in an <span class="None">None</span>

- 💥

  Indicates an unsafe function or [undefined behaviour](https://doc.rust-lang.org/reference/behavior-considered-undefined.html)

## <span class="type">Option</span> <span class="punctuation">➝</span> <span class="type">Option</span>

### and

| result | args   | out    |
| ------ | ------ | ------ |
| Some T | Some K | Some T |
| Some T | None   | Some T |
| None   | Some K | None   |
| None   | None   | None   |

### and_then

| result | args        | out    |
| ------ | ----------- | ------ |
| Some T | T -> Some K | Some K |
| Some T | T -> None   | None   |
| None   | T -> Some K | None   |
| None   | T -> None   | None   |

### as_deref

| result  | out     |
| ------- | ------- |
| Some T  | Some &T |
| &Some T | Some &T |
| None    | None    |

### as_deref_mut

| result      | out         |
| ----------- | ----------- |
| Some T      | Some &T     |
| &mut Some T | Some &mut T |
| None        | None        |

### as_mut

| result      | out         |
| ----------- | ----------- |
| &mut Some T | Some &mut T |
| None        | None        |

### as_mut_slice

| result      | out         |
| ----------- | ----------- |
| &mut Some T | &mut T\[..] |
| None        | &mut [][..] |

### as_pin_mut

| result          | out             |
| --------------- | --------------- |
| Pin &mut Some T | Some Pin &mut T |
| None            | None            |

### as_pin_ref

| result      | out         |
| ----------- | ----------- |
| Pin &Some T | Some Pin &T |
| None        | None        |

### as_ref

| result  | out     |
| ------- | ------- |
| &Some T | Some &T |
| None    | None    |

### as_slice

| result  | out     |
| ------- | ------- |
| &Some T | &T\[..] |
| None    | &[][..] |

### cloned

Uses Clone.

| result      | out    |
| ----------- | ------ |
| Some &T     | Some T |
| Some &mut T | Some T |
| None        | None   |

### copied

Uses Copy.

| result      | out    |
| ----------- | ------ |
| Some &T     | Some T |
| Some &mut T | Some T |
| None        | None   |

### transpose

| result     | out       |
| ---------- | --------- |
| Some Ok T  | Ok Some T |
| None       | Ok None   |
| Some Err T | Err T     |

### flatten

Removes 1 level of nesting

| result      | out    |
| ----------- | ------ |
| Some Some T | Some T |
| Some None   | None   |

### expect

| result | args           | out                   |
| ------ | -------------- | --------------------- |
| Some T | "Some message" | T                     |
| None   | "Some message" | panic! "Some message" |

### filter

| result | args       | out  |
| ------ | ---------- | ---- |
| Some T | T -> true  | T    |
| None   | T -> true  | None |
| Some T | T -> false | None |
| None   | T -> false | None |

### or

| result | args   | out    |
| ------ | ------ | ------ |
| Some T | Some K | Some T |
| None   | Some K | Some K |
| Some T | None   | Some T |
| None   | None   | None   |

### or_else

| result | args        | out    |
| ------ | ----------- | ------ |
| Some T | T -> Some K | Some T |
| None   | T -> Some K | Some K |
| Some T | T -> None   | Some T |
| None   | T -> None   | None   |

### xor

| result | args        | out    |
| ------ | ----------- | ------ |
| Some T | T -> Some K | None   |
| None   | T -> Some K | Some K |
| Some T | T -> None   | Some T |
| None   | T -> None   | None   |

### insert

Inserts a value into the option, and returns a reference to the value

| result      | args | out    |
| ----------- | ---- | ------ |
| &mut Some T | K    | &mut K |
| &mut None   | K    | &mut K |

### get_or_insert

Inserts a value into the option if it is None, and returns a reference to the value

| result      | args | out    |
| ----------- | ---- | ------ |
| &mut Some T | K    | &mut T |
| &mut None   | K    | &mut K |

### get_or_insert_default

Inserts the default value into the option if it is None, and returns a reference to the value

| result      | out               |
| ----------- | ----------------- |
| &mut Some T | &mut T            |
| &mut None   | &mut T::default() |

### get_or_insert_with

Inserts a computed value into the option if it is None, and returns a reference to the value

| result      | args | out    | result      |
| ----------- | ---- | ------ | ----------- |
| &mut Some T | -> K | &mut T | &mut Some T |
| &mut None   | -> K | &mut K | &mut Some K |

### take

Takes the value out of the option, leaving a None in its place

| result      | out         | result |
| ----------- | ----------- | ------ |
| &mut Some T | Some &mut T | None   |
| &mut None   | None        | None   |

### take_if

Takes the value out of the option if the predicate is true, leaving a None in its place

| result      | args            | out         | result      |
| ----------- | --------------- | ----------- | ----------- |
| &mut Some T | &mut T -> true  | Some &mut T | None        |
| &mut None   | &mut T -> true  | None        | None        |
| &mut Some T | &mut T -> false | None        | &mut Some T |
| &mut None   | &mut T -> false | None        | None        |

### replace

Takes the value out of the option if the predicate is true, leaving a None in its place

| result      | args            | out         | result      |
| ----------- | --------------- | ----------- | ----------- |
| &mut Some T | &mut T -> true  | Some &mut T | None        |
| &mut None   | &mut T -> true  | None        | None        |
| &mut Some T | &mut T -> false | None        | &mut Some T |
| &mut None   | &mut T -> false | None        | None        |

TBD ...
