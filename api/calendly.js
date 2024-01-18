// api/calendly.js
import fetch from 'node-fetch';

export default async (req, res) => {
    const calendlyApiKey = process.env.CALENDLY_API_KEY; // Access the environment variable
    
    try {
    const response = await fetch('https://api.calendly.com/scheduled_events', {
        headers: { 'Authorization': `Bearer ${calendlyApiKey}` }
    });
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    const eventCount = data.length; // Your logic to count events

    res.status(200).json({ eventCount });
} catch (error) {
    res.status(500).json({ message: error.message });
}
};