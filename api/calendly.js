// api/calendly.js
import fetch from 'node-fetch';


export default async (req, res) => {
    const calendlyApiKey = 'eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzA1NjA2MzIzLCJqdGkiOiJkM2JlMDhhOS00ZDQxLTRlMWUtYmMwOC04OTI5MDliNDczZTciLCJ1c2VyX3V1aWQiOiI5Mzk5Nzc2MC1kMTcyLTQ1OGItYjY3Yi02OWQ2ZjBmMzFlZTcifQ.-yixkq4bPbIrOirywQvLwTUPCn7PfBg_ydkjgYjSwhJ0eldYsGbM5ivcpKfqwonfU4Q-Rc5j078TpH2HnNvG7g';
    //const calendlyApiKey = process.env.CALENDLY_API_KEY; // Access the environment variable
    
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