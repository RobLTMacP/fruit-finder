import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
    // Fetch a list of fruit types (for populating fruit filter)
    try {
        const fruitList = await sql`
            SELECT 
                f.name AS fruit_name, 
                f.color 
            FROM 
                fruits f;
        `;
        return NextResponse.json({ fruitList }, { status: 200 });
    } catch(e) {
        return NextResponse.json('An error occurred when fetching fruit list', { status: 500 });
    }
}