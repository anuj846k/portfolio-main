"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy, CreditCard, FileCode, Terminal } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const snippetCategories = [
    {
        id: "payments",
        title: "Next.js Payment Integration",
        description: "Complete Razorpay integration for Next.js 15 with App Router",
        icon: CreditCard,
        color: "#0ea5e9",
        snippets: [
            {
                name: "Razorpay API Route",
                tech: "Next.js",
                description: "API route handler for creating Razorpay orders (App Router)",
                fileName: "app/api/razorpay/route.ts",
                code: `import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_SECRET_ID!,
})

export async function POST(req: Request) {
    try {
        const { amount } = await req.json()

        if (!amount || isNaN(amount)) {
            return NextResponse.json(
                { error: 'Invalid amount provided' },
                { status: 400 }
            )
        }

        const order = await razorpay.orders.create({
            amount: Number(amount),
            currency: 'INR',
        })

        return NextResponse.json({ order })
    } catch (error) {
        return NextResponse.json(
            { error: 'Error creating Order: ' + error },
            { status: 500 }
        )
    }
}`,
                setup: `npm install razorpay`,
                env: `NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_key_here
RAZORPAY_SECRET_ID=your_secret_here`,
            },
            {
                name: "Razorpay Client Component",
                tech: "Next.js",
                description: "Next js component for handling Razorpay payments",
                fileName: "components/RazorpayPayment.tsx",
                code: `'use client';

import { useState } from 'react';
import axios from 'axios';

// Add Razorpay type to window
declare global {
    interface Window {
        Razorpay: any;
    }
}

interface PaymentProps {
    amount: number;
    onSuccess?: (response: any) => void;
    onError?: (error: any) => void;
}

export default function RazorpayPayment({ amount, onSuccess, onError }: PaymentProps) {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        try {
            setLoading(true);
            
            // Convert amount to paise
            const amountInPaise = Math.round(amount * 100);

            // Create order
            const { data } = await axios.post('/api/razorpay', {
                amount: amountInPaise,
            });

            if (!data.order) {
                throw new Error('Failed to create order');
            }

            // Load Razorpay SDK
            await loadRazorpayScript();

            // Configure Razorpay
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: amountInPaise,
                currency: 'INR',
                name: 'Your Company Name',
                description: 'Payment for Order',
                order_id: data.order.id,
                handler: function(response: any) {
                    onSuccess?.(response);
                },
                prefill: {
                    name: 'Customer Name',
                    email: 'customer@example.com',
                },
                theme: {
                    color: '#0ea5e9'
                }
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            onError?.(error);
            console.error('Payment error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handlePayment}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
        >
            {loading ? 'Processing...' : 'Pay Now'}
        </button>
    );
}

// Helper to load Razorpay script
const loadRazorpayScript = () => {
    return new Promise((resolve) => {
        if (window.Razorpay) {
            resolve(true);
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = resolve;
        document.body.appendChild(script);
    });
};`,
            },
            {
                name: "Usage Example",
                tech: "Next.js",
                description: "Example usage in a Next.js page",
                fileName: "app/checkout/page.tsx",
                code: `'use client';

import RazorpayPayment from '@/components/RazorpayPayment';
import { useState } from 'react';
import { toast } from 'sonner';

export default function CheckoutPage() {
    const [orderStatus, setOrderStatus] = useState<'pending' | 'success' | 'failed'>('pending');

    const handlePaymentSuccess = (response: any) => {
        setOrderStatus('success');
        toast.success('Payment successful!');
        // Handle success (e.g., update database, redirect, etc.)
    };

    const handlePaymentError = (error: any) => {
        setOrderStatus('failed');
        toast.error('Payment failed. Please try again.');
        console.error('Payment failed:', error);
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            
            <div className="rounded-lg border p-4 mb-4">
                <p className="text-lg mb-2">Order Total: ₹999</p>
                <RazorpayPayment
                    amount={999}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                />
            </div>

            {orderStatus === 'success' && (
                <div className="bg-green-50 text-green-700 p-4 rounded-md">
                    Payment completed successfully!
                </div>
            )}
        </div>
    );
}`,
            },
        ],
    },
    {
        id: "auth",
        title: "Authentication",
        description: "Auth.js, JWT & OAuth",
        icon: FileCode,
        color: "#0ea5e9",
        snippets: [
            {
                name: "NextAuth Setup",
                tech: "Next.js",
                code: `import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
}

export default NextAuth(authOptions)`,
            },
            {
                name: "JWT Implementation",
                tech: "Node.js",
                code: `import jwt from "jsonwebtoken"

const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
  expiresIn: "1h",
})`,
            },
        ],
    },
];

// Add this component for the VS Code-like file header
const FileHeader = ({ fileName, tech }: { fileName: string; tech: string }) => (
    <div className="flex items-center justify-between bg-[#1E1E1E] border-b border-[#333333] px-4 py-2 rounded-t-lg">
        <div className="flex items-center gap-2">
            {tech === "TypeScript" && <Terminal size={16} className="text-blue-400" />}
            {tech === "Next.js" && <Terminal size={16} className="text-white" />}
            <span className="text-sm text-gray-400">{fileName}</span>
        </div>
    </div>
);

// Add this component for the copy button
const CopyButton = ({ code }: { code: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button onClick={handleCopy} className="absolute top-4 right-4 p-2 rounded-md hover:bg-[#2D2D2D] transition-colors">
            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-gray-400" />}
        </button>
    );
};

const SnippetCategoryPage = () => {
    const { categoryId } = useParams();
    const router = useRouter();
    const [category, setCategory] = useState<any>(null);

    useEffect(() => {
        const foundCategory = snippetCategories.find((cat) => cat.id === categoryId);
        if (!foundCategory) {
            router.push("/snippets"); // redirect if invalid
        } else {
            setCategory(foundCategory);
        }
    }, [categoryId]);


    if (!category) return null;

    return (
        <main className="min-h-screen p-10 dark:bg-black">
            <h1 className="text-4xl font-bold mb-4 text-center text-white">{category.title}</h1>
            <p className="text-center mb-10 text-gray-400">{category.description}</p>

            <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                {category.snippets.map((snippet: any, idx: number) => (
                    <div key={idx} className="rounded-lg overflow-hidden">
                        {/* Snippet Header */}
                        <div className="bg-[#252526] p-4 border-b border-[#333333]">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-white">{snippet.name}</h2>
                                    <p className="text-sm text-gray-400 mt-1">{snippet.description}</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-[#303030] text-blue-400 text-sm">{snippet.tech}</span>
                            </div>
                        </div>

                        {/* Installation Section */}
                        {snippet.setup && (
                            <div className="relative">
                                <FileHeader fileName="Terminal" tech={snippet.tech} />
                                <div className="relative bg-[#1E1E1E] p-4">
                                    <SyntaxHighlighter
                                        language="bash"
                                        style={vscDarkPlus}
                                        customStyle={{
                                            margin: 0,
                                            background: "transparent",
                                            padding: 0,
                                        }}
                                    >
                                        {snippet.setup}
                                    </SyntaxHighlighter>
                                    <CopyButton code={snippet.setup} />
                                </div>
                            </div>
                        )}

                        {/* Environment Variables Section */}
                        {snippet.env && (
                            <div className="relative mt-4">
                                <FileHeader fileName=".env" tech={snippet.tech} />
                                <div className="relative bg-[#1E1E1E] p-4">
                                    <SyntaxHighlighter
                                        language="bash"
                                        style={vscDarkPlus}
                                        customStyle={{
                                            margin: 0,
                                            background: "transparent",
                                            padding: 0,
                                        }}
                                    >
                                        {snippet.env}
                                    </SyntaxHighlighter>
                                    <CopyButton code={snippet.env} />
                                </div>
                            </div>
                        )}

                        {/* Main Code Section */}
                        <div className="relative mt-4">
                            <FileHeader fileName={snippet.fileName || snippet.code.split("\n")[0].replace("//", "").trim()} tech={snippet.tech} />
                            <div className="relative bg-[#1E1E1E] p-4">
                                <SyntaxHighlighter
                                    language={snippet.tech === "TypeScript" ? "typescript" : "javascript"}
                                    style={vscDarkPlus}
                                    showLineNumbers
                                    customStyle={{
                                        margin: 0,
                                        background: "transparent",
                                        padding: 0,
                                    }}
                                >
                                    {snippet.code}
                                </SyntaxHighlighter>
                                <CopyButton code={snippet.code} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default SnippetCategoryPage;
