import wasmInit from './pkg/example_export.js';

const runWasm = async () => {
	const rustWasm = await wasmInit('./pkg/example_export_bg.wasm');

	const result = rustWasm.call_me_from_javascript(21, 21);

	console.log('result', result);
	console.log('rustWasm', rustWasm);
}

runWasm();
