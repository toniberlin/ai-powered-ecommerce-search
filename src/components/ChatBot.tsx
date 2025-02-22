"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface Message {
    sender: "customer" | "assistant";
    text: string;
    products?: Product[];
}

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    url: string;
}

const ChatBox: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [conversationId, setConversationId] = useState<string | null>(null);

    const sendMessage = async () => {
        if (!input.trim()) return;

        console.log("Sending message:", input);
        console.log("Current conversationId:", conversationId);

        const newMessage: Message = { sender: "customer", text: input };
        setMessages((prev) => [...prev, newMessage]);
        setInput("");

        try {
            const response = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ conversationId, query: input }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("API Response Data:", data);

            const { assistantResponse, conversationId: newConversationId, products } = data;
            if (!conversationId) setConversationId(newConversationId);
            interface APIProduct {
                fields: string; 
            }

            setMessages((prev) => {
                const updatedMessages = [...prev];
                if (updatedMessages.length > 0 && updatedMessages[updatedMessages.length - 1].sender === "assistant") {
                    updatedMessages[updatedMessages.length - 1] = {
                        sender: "assistant",
                        text: assistantResponse,
                        products: products?.map((p: APIProduct) => JSON.parse(p.fields)) || [],
                    };
                } else {
                    updatedMessages.push({
                        sender: "assistant",
                        text: assistantResponse,
                        products: products?.map((p: APIProduct) => JSON.parse(p.fields)) || [],
                    });
                }
                return updatedMessages;
            });

        } catch (error) {
            console.error("Error fetching response:", error);
        }
    };


    return (
        <div className="flex flex-col w-full max-w-2xl mx-auto p-4 border rounded-lg shadow-lg bg-white">
            <div className="h-96 overflow-y-auto p-2">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-4 ${msg.sender === "customer" ? "text-right" : "text-left"}`}>
                        <p className={`p-2 rounded-lg inline-block ${msg.sender === "customer" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                            {msg.text}
                        </p>
                        {msg.products && (
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                {msg.products.map((product) => (
                                    <Card key={product.id} className="p-2">
                                        <CardContent>
                                            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg" />
                                            <p className="text-sm font-bold mt-2">{product.name}</p>
                                            <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
                                            <a href={product.url} target="_blank" className="text-blue-500 text-sm">View</a>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-2 border-t pt-2">
                <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." className="flex-grow" />
                <Button onClick={sendMessage}>Send</Button>
            </div>
        </div>
    );
};

export default ChatBox;
