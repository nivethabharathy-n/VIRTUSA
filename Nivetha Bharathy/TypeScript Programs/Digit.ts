function countDigits(num: number): number {
    if (!Number.isInteger(num)) {
        throw new Error("Please enter an integer.");
    }
    num = Math.abs(num);
    if (num === 0) {
        return 1;
    }

    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10); 
        count++;
    }
    return count;
}

function showDigits(num: number): void {
    try {
        console.log(num + " has " + countDigits(num) + " digit(s)");
    } catch (error) {
        console.log("Error:", (error as Error).message);
    }
}

showDigits(4582);   
showDigits(-907);   
showDigits(0);     
showDigits(7);      
showDigits(3.5);    
