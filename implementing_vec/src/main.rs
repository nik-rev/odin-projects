use std::{
    alloc::{self, Layout},
    mem,
    ptr::NonNull,
};

/*
We don't want our pointer to be null, so Option<Vec<T>> is null-pointer-optimized
*/

pub struct Vec<T> {
    // NonNull (https://doc.rust-lang.org/std/ptr/struct.NonNull.html):
    // - covariant over T
    // - will never be null
    //
    // If we use *mut T instead, it would be too strict. A &Vec<&'static str> couldn't be used where a &Vec<&'a str> was expected
    ptr: NonNull<T>,
    cap: usize,
    len: usize,
}

// Here we need to implement these since NonNull does not have a default implementation for them
unsafe impl<T: Send> Send for Vec<T> {}
unsafe impl<T: Sync> Sync for Vec<T> {}

impl<T> Default for Vec<T> {
    fn default() -> Self {
        Self::new()
    }
}

impl<T> Vec<T> {
    pub fn new() -> Self {
        assert!(mem::size_of::<T>() != 0, "We're not ready to handle ZSTs");

        Self {
            // An empty vector should not allocate anything at all
            // Allocating a zero-sized memory block is UB
            // We can't have a null pointer either
            // So we just create some garbage
            ptr: NonNull::dangling(),
            len: 0,
            cap: 0,
        }
    }

    fn grow(&mut self) {
        let (new_cap, new_layout) = if self.cap == 0 {
            (1, Layout::array::<T>(1).unwrap())
        } else {
            // This can't overflow since self.cap <= isize::MAX.
            let new_cap = 2 * self.cap;

            // `Layout::array` checks that the number of bytes is <= usize::MAX,
            // but this is redundant since old_layout.size() <= isize::MAX,
            // so the `unwrap` should never fail.
            let new_layout = Layout::array::<T>(new_cap).unwrap();
            (new_cap, new_layout)
        };

        // Ensure that the new allocation doesn't exceed `isize::MAX` bytes.
        assert!(
            new_layout.size() <= isize::MAX as usize,
            "Allocation too large"
        );

        let new_ptr = if self.cap == 0 {
            unsafe { alloc::alloc(new_layout) }
        } else {
            let old_layout = Layout::array::<T>(self.cap).unwrap();
            let old_ptr = self.ptr.as_ptr() as *mut u8;
            unsafe { alloc::realloc(old_ptr, old_layout, new_layout.size()) }
        };

        // If allocation fails, `new_ptr` will be null, in which case we abort.
        self.ptr = match NonNull::new(new_ptr as *mut T) {
            Some(p) => p,
            None => alloc::handle_alloc_error(new_layout),
        };
        self.cap = new_cap;
    }
}

fn main() {}
