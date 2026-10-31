export type Snippet = {
  name: string;
  tech: string;
  description?: string;
  fileName?: string;
  code: string;
  setup?: string;
  env?: string;
};

export type SnippetCategory = {
  id: string;
  title: string;
  description: string;
  snippets: Snippet[];
};

export const snippetCategories: SnippetCategory[] = [
    {
        id: "payments",
        title: "Next.js Payment Integration",
        description: "Complete Razorpay integration for Next.js 15 with App Router",
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
