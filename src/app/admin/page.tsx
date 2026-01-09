"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

export default function AdminPage() {
    const [jsonContent, setJsonContent] = useState("");
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch the raw JSON data (we can't use portfolioData directly because it has React components)
        // For simplicity in this local setup, we'll just use the structure we know, 
        // but ideally we'd fetch from an API that returns the raw JSON.
        // Since we don't have a GET API, we can try to fetch the file directly or just use the initial state if we had it.
        // Actually, let's just create a GET endpoint or import the JSON directly if possible.
        // Importing JSON directly in client component might work if configured, but let's try to fetch it.

        // Better approach for now: Just use the structure from portfolioData but we need to reverse map icons? 
        // No, that's hard. Let's make the API support GET too.

        // Wait, we can just import the JSON file directly in the client component? 
        // Next.js allows importing JSON.

        // Let's try fetching from the API we just made (we need to add GET support).
        // Or simpler: Just read the file content via a server action or API.

        // Let's add GET to the API route first.
        fetch('/api/portfolio')
            .then(res => res.json())
            .then(data => {
                setJsonContent(JSON.stringify(data, null, 4));
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to load data", err);
                setStatus("Failed to load data");
                setIsLoading(false);
            });
    }, []);

    const handleSave = async () => {
        setStatus("Saving...");
        try {
            const parsedData = JSON.parse(jsonContent);
            const response = await fetch('/api/portfolio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(parsedData),
            });

            const result = await response.json();
            if (result.success) {
                setStatus("Saved successfully! Refresh the main site to see changes.");
            } else {
                setStatus("Error saving: " + result.message);
            }
        } catch (error) {
            setStatus("Invalid JSON: " + (error as Error).message);
        }
    };

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Portfolio Admin</h1>
                    <div className="space-x-4">
                        <a href="/" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition">
                            Back to Site
                        </a>
                        <button
                            onClick={handleSave}
                            className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-500 transition font-bold"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>

                {status && (
                    <div className={`p-4 mb-6 rounded ${status.includes("Error") || status.includes("Invalid") ? "bg-red-500/20 text-red-200" : "bg-green-500/20 text-green-200"}`}>
                        {status}
                    </div>
                )}

                <div className="grid grid-cols-1 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Edit Content (JSON)</h2>
                        <div className="mb-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded text-sm text-blue-200">
                            <strong>Tip:</strong> To update your resume, change the "resumeUrl" field in the "personal" section below to your new PDF link (e.g., from Google Drive).
                        </div>
                        <p className="text-gray-400 mb-4 text-sm">
                            Edit the JSON below. Be careful with syntax! Icons are string names like "Github", "Mail", "Brain", etc.
                        </p>
                        <textarea
                            value={jsonContent}
                            onChange={(e) => setJsonContent(e.target.value)}
                            className="w-full h-[600px] bg-gray-950 text-green-400 font-mono p-4 rounded border border-gray-700 focus:border-blue-500 focus:outline-none"
                            spellCheck={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
