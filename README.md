# AI-Powered E-commerce Search

A Next.js application that demonstrates AI-powered product search. The application displays a responsive grid of products from Zara's catalog, leveraging vector search capabilities for enhanced product discovery using an AI powered personal shopping assistant.

## Features

- 🛍️ Responsive product grid display
- 🔍 Vector-based product search using Pinecone
- 📱 Mobile-first responsive design
- 🔒 Type-safe development with TypeScript
- ⚡ Server-side rendering with Next.js

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Vector Database**: [Pinecone](https://www.pinecone.io/)
- **API**: Next.js API Routes

## Prerequisites

Before you begin, ensure you have:
- Node.js 18 or higher installed
- npm or yarn package manager
- A Pinecone account with an API key

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-powered-ecommerce-search.git
   cd ai-powered-ecommerce-search
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm install @nextui-org/react framer-motion
   npm install ahooks 
   npm install @phosphor-icons/react
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory with:
   ```env
   PINECONE_API_KEY=your_pinecone_api_key
   PINECONE_ENVIRONMENT=your_pinecone_environment
   PINECONE_INDEX=your_pinecone_index_name
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open the application**
   
   Visit [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

src/
├── app/
│ ├── api/
│ ├── components/
│ ├── types/
│ └── utils/