import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'src', 'data', 'portfolio.json');
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(fileContent);
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error reading data:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to read data' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const filePath = path.join(process.cwd(), 'src', 'data', 'portfolio.json');

        await fs.writeFile(filePath, JSON.stringify(data, null, 4));

        return NextResponse.json({ success: true, message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to save data' },
            { status: 500 }
        );
    }
}
