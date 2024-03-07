const readline = require('readline');

function findOccurrences(line, substring) {
    const regex = new RegExp(substring, 'g');
    let count = 0;
    let match;
    const occurrences = [];
    while ((match = regex.exec(line)) !== null) {
        occurrences.push(match.index);
        count++;
    }
    return { count, occurrences };
}

async function readInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    const lines = [];
    for await (const line of rl) {
        lines.push(line);
    }
    return lines;
}
