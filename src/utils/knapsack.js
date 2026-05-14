function knapsack(tasks, maxHours) {

    const n = tasks.length;

    const dp = Array.from(
        { length: n + 1 },
        () => Array(maxHours + 1).fill(0)
    );

    
}

module.exports = knapsack;