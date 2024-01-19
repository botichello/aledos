// api/calendly.js


export default async (req, res) => {
    const calendlyApiKey = process.env.CALENDLY_API_KEY; // Access the environment variable
// Get the current year and month

    try {
    // const response = await axios.get(`https://api.calendly.com/user_busy_times?user=https%3A%2F%2Fapi.calendly.com%2Fusers%2F93997760-d172-458b-b67b-69d6f0f31ee7&start_time=2024-${formattedFirstDay}T20%3A00%3A00.000000Z&end_time=2024-${formattedLastDay}T24%3A00%3A00.000000Z`, { headers: { Authorization: `Bearer ${calendlyApiKey}` } })
    // if (!response.ok) {
    //     throw new Error(`Error: ${response.statusText}`);
    // }
    const response = await fetch(`https://api.calendly.com/user_busy_times?user=https%3A%2F%2Fapi.calendly.com%2Fusers%2F93997760-d172-458b-b67b-69d6f0f31ee7&start_time=2024-01-09T20%3A00%3A00.000000Z&end_time=2024-01-15T24%3A00%3A00.000000Z`, { headers: {'Authorization': `${calendlyApiKey}`} })
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    const calendlyData = await response.json();
    console.log('Data:', calendlyData);
    const eventCount = calendlyData.collection ? calendlyData.collection.length : 0;

    res.status(200).json({ eventCount });
} catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: error.message });
}
};