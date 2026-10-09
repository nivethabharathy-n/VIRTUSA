
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: number, c: number): number;

function add(a: number | string, b: number | string, c?: number): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return c !== undefined ? a + b + c : a + b;
    }
    return String(a) + String(b); 
}

console.log(add(10, 20));          
console.log(add("Hello, ", "TS")); 
console.log(add(1, 2, 3));        

