const axios = require("axios");

async function fetchVehicles(token) {
    const response = await axios.get(
        `${BASE_URL}/vehicles`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
}


module.exports = {
    fetchVehicles,
    fetchDepots
};