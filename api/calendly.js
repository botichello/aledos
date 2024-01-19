// api/calendly.js


export default async (req, res) => {
    const calendlyApiKey = process.env.CALENDLY_API_KEY; // Access the environment variable
// Get the current year and month

    try {
    // const response = await axios.get(`https://api.calendly.com/user_busy_times?user=https%3A%2F%2Fapi.calendly.com%2Fusers%2F93997760-d172-458b-b67b-69d6f0f31ee7&start_time=2024-${formattedFirstDay}T20%3A00%3A00.000000Z&end_time=2024-${formattedLastDay}T24%3A00%3A00.000000Z`, { headers: { Authorization: `Bearer ${calendlyApiKey}` } })
    // if (!response.ok) {
    //     throw new Error(`Error: ${response.statusText}`);
    // }
        const currentDate = new Date();
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        // Format dates to ISO string and adjust time
        const minStartTime = firstDayOfMonth.toISOString().split('T')[0] + "T00:00:00.000000Z";
        const maxStartTime = lastDayOfMonth.toISOString().split('T')[0] + "T23:59:59.999999Z";

        const response = await fetch(`https://api.calendly.com/scheduled_events?user=https%3A%2F%2Fapi.calendly.com%2Fusers%2F93997760-d172-458b-b67b-69d6f0f31ee7&min_start_time=${encodeURIComponent(minStartTime)}&max_start_time=${encodeURIComponent(maxStartTime)}&count=100`, {
            headers: { 'Authorization': `Bearer ${calendlyApiKey}` }
        });
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    const calendlyData = await response.json();
    console.log('Data:', calendlyData);
    const specificEventType = 'https://api.calendly.com/event_types/f1e41b3d-5955-4c40-aa13-cb1f63201399';

        // Filter the collection array for events with the specific event type
        const eventCount = calendlyData.collection.filter(event => event.event_type === specificEventType).length;

    res.status(200).json({ eventCount });
} catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: error.message });
}
};