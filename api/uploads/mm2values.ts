import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

const TARGET_URL = "http://216.9.225.189:9999/uploads/mm2values.json";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        // 1. Fetch data from the hidden source
        const response = await fetch(TARGET_URL);
        
        if (!response.ok) {
            throw new Error(`Upstream Error: ${response.status}`);
        }

        const data = await response.json();

        // 2. Set Cache Headers (10 Hours = 36000 Seconds)
        // Vercel will store this response and serve it to everyone without fetching again for 10 hours.
        res.setHeader('Cache-Control', 'public, s-maxage=36000, stale-while-revalidate=600');

        // 3. Return the data
        return res.status(200).json(data);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to sync values" });
    }
}
