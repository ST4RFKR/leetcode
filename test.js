const controller = new AbortController();
const signal = controller.signal;
console.log(signal, fetch);

fetch("example.com", { signal });
