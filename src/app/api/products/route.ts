import { NextResponse } from 'next/server';
import { Product } from '@/types/product';
import { pineconeIndex } from '@/utils/pinecone';

export const revalidate = 60; // Cache the response for 60 seconds to avoid dynamic rendering errors

export async function GET() {
    try {
        const queryResponse = await pineconeIndex.query({
            vector: Array(1536).fill(0),
            topK: 20,
            includeMetadata: true,
        });

        console.log('Pinecone response:', JSON.stringify(queryResponse.matches, null, 2));

        const products: Product[] = queryResponse.matches
            .filter(match => match.metadata)
            .map(match => ({
                id: Number(match.id),
                category_id: Number(match.metadata!.category_id),
                image: String(match.metadata!.image),
                name: String(match.metadata!.name),
                price: Number(match.metadata!.price),
                product_family: String(match.metadata!.product_family),
                product_subfamily: String(match.metadata!.product_subfamily),
                section: String(match.metadata!.section),
                url: String(match.metadata!.url)
            }));

        console.log('Transformed products:', products);

        return NextResponse.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}
export async function POST(req: Request) {
    try {
        const { conversationId, query } = await req.json();

        const apiResponse = await fetch("https://sayro-app-server-81c722f0fe6c.herokuapp.com/query", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ conversationId, query }),
        });

        console.log(apiResponse);
        if (!apiResponse.ok) {
            throw new Error(`HTTP error! Status: ${apiResponse.status}`);
        }

        const data = await apiResponse.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error in API Route:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}