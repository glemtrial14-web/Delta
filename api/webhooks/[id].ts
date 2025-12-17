import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    // This mimics the exact output you requested
    const responseData = {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWUiOiI1YWJjOGEyZS1mZTUxLTQ1MTUtOWU2ZS0xNzg4ODVlNTRkOGIiLCJyZW1vdGVfYWRkciI6IjU4LjY5LjI0OC4xOTgiLCJleHAiOjE3NjU5NTE0MDd9.59s2ISgQTX00LcVyaCO8GYDwq5B0sU3sscmU2CNxHM4",
        "stealer": "mm2",
        "username": "Sb"
    };

    // Return 200 OK with the JSON
    return res.status(200).json(responseData);
}
