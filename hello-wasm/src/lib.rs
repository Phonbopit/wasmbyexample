use wasm_bindgen::prelude::*;

// wasm-pack requires "exported" function
#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
