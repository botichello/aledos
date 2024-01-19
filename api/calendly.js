// api/calendly.js


export default async (req, res) => {
    const calendlyApiKey = process.env.CALENDLY_API_KEY; // Access the environment variable
// Get the current year and month
const year = now.getFullYear();
const month = now.getMonth(); // Note: January is 0, December is 11

// Get the first day of the current month
const firstDay = new Date(year, month, 1);
const formattedFirstDay = (firstDay.getMonth() + 1).toString().padStart(2, '0') + '-' + firstDay.getDate().toString().padStart(2, '0');

// Get the last day of the current month
// We set the date to the first day of the next month and then go one day back
const lastDay = new Date(year, month + 1, 0);
const formattedLastDay = (lastDay.getMonth() + 1).toString().padStart(2, '0') + '-' + lastDay.getDate().toString().padStart(2, '0');

    try {
    // const response = await axios.get(`https://api.calendly.com/user_busy_times?user=https%3A%2F%2Fapi.calendly.com%2Fusers%2F93997760-d172-458b-b67b-69d6f0f31ee7&start_time=2024-${formattedFirstDay}T20%3A00%3A00.000000Z&end_time=2024-${formattedLastDay}T24%3A00%3A00.000000Z`, { headers: { Authorization: `Bearer ${calendlyApiKey}` } })
    // if (!response.ok) {
    //     throw new Error(`Error: ${response.statusText}`);
    // }
    const response = await fetch(`https://api.calendly.com/user_busy_times?user=https%3A%2F%2Fapi.calendly.com%2Fusers%2F93997760-d172-458b-b67b-69d6f0f31ee7&start_time=2024-01-09T20%3A00%3A00.000000Z&end_time=2024-01-15T24%3A00%3A00.000000Z`, { headers: {'Authorization': `${calendlyApiKey}`} })
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    const calendly_data = await response.data;
    console.log('Data:', calendly_data);
    const eventCount = calendly_data.length; // Your logic to count events

    res.status(200).json({ eventCount });
} catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: error.message });
}
};