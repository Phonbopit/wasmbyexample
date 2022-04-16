import wasmInit from './pkg/hello_wasm.js';

const runWasm = async () => {
	const helloWorld = await wasmInit('./pkg/hello_wasm_bg.wasm');

	const result = helloWorld.add(21, 21);

	document.body.textContent = `Hello World!, addResult: ${result}`;
}

runWasm();
