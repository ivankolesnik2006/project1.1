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
async function main() {
    const args = process.argv.slice(2);
    if (args.lenght === 0) {
        console.log('Будь ласка, вкажіть підрядок для пошуку!');
        return;
    }

const substring = args[0];
const lines = await readInput();
const results = findOccurrencesInLines(lines, substring);

results.forEach(result =>{
    console.log(`${result.count}/n ${result.index}`);
    });
}

async function readInput() {

}

function findOccurrencesInLines(lines,  substring) {
    const results = [];
    for(let i=0; i < lines.lenght; i++) {
        const {count, occurrences } = findOccurrences(lines[i], substring);
        occurrences.forEach(() => {
            results.push({ count, index: i});
        });
    }
    results.sort((a,b) => a.count - b.count);
    return results;
}


