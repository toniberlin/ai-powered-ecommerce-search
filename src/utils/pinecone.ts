import { Pinecone } from '@pinecone-database/pinecone';

if (!process.env.PINECONE_API_KEY) {
    throw new Error('PINECONE_API_KEY is not defined');
}

if (!process.env.PINECONE_ENVIRONMENT) {
    throw new Error('PINECONE_ENVIRONMENT is not defined');
}

if (!process.env.PINECONE_INDEX) {
    throw new Error('PINECONE_INDEX is not defined');
}

const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
});

// Create index with just the index name
export const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX!);
