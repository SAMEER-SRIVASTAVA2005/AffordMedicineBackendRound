require("dotenv").config();

const log = require("./middleware/logger");

const {
    fetchVehicles,
    fetchDepots
} = require("./services/apiService");

const knapsack = require("./utils/knapsack");

async function run() {

    try {

        log("Starting scheduler");

        const token = process.env.TOKEN;

        const vehiclesData =
            await fetchVehicles(token);

        const depotsData =
            await fetchDepots(token);

        const tasks = vehiclesData.vehicles.map(v => ({
            taskId: v.TaskID,
            duration: v.Duration,
            impact: v.Impact
        }));

        const maxHours = depotsData.depots[0];

        const result =
            knapsack(tasks, maxHours);

        log(`Max Impact: ${result.maxImpact}`);

        result.selected.forEach(task => {
            log(`Selected: ${task.taskId}`);
        });

    } catch (err) {

        log(`ERROR: ${err.message}`);
    }
}

run();