"use client";
import { useEffect, useState } from "react";
import { CodeIcon, CreditCard, FileCode } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

const snippetCategories = [
    {
        id: "payments",
        title: "Payment Integration",
        description: "Razorpay, Stripe & Payment Gateways",
        icon: CreditCard,
        color: "#0ea5e9",
        snippets: [
            { name: "Razorpay Quick Integration", tech: "Next.js" },
            { name: "Payment Webhook Handler", tech: "Node.js" },
            // { name: "Custom Payment UI", tech: "React" },
        ],
    },
    {
        id: "auth",
        title: "Authentication",
        description: "Auth.js, JWT & OAuth",
        icon: FileCode,
        color: "#0ea5e9",
        snippets: [
            { name: "NextAuth Setup", tech: "Next.js" },
            { name: "JWT Implementation", tech: "Node.js" },
        ],
    },
    {
        id: "api",
        title: "API Integration",
        description: "REST & GraphQL APIs",
        icon: CodeIcon,
        color: "#0ea5e9",
        snippets: [
            { name: "API Routes", tech: "Next.js" },
            { name: "GraphQL Queries", tech: "Apollo" },
        ],
    },
];

const Blog = () => {
    const [, setShowNavbar] = useState(false);

    const router = useRouter();
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <main className="relative min-h-screen py-12 md:py-24 px-1 md:px-0">
                <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-xl -z-10" />

                <div className="max-w-4xl mx-auto">
                    <h1 className="text-center -mt-12 text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                        Code{" "}
                        <LineShadowText className="italic dark:text-purple-200 text-orange-500" shadowColor={shadowColor}>
                            Snippets
                        </LineShadowText>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 mt-10">
                        {snippetCategories.map((category) => {
                            return (
                                <div key={category.id} className="w-[300px] mx-auto">
                                    <button className="group relative w-full overflow-hidden border border-border rounded-xl aspect-square transition-all duration-300 dark:hover:border-[#0ea5e9] hover:border-orange-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] backdrop-blur-md bg-white/5 dark:bg-black/5" style={{ "--active-color": category.color } as React.CSSProperties} onClick={() => router.push(`/snippets/${category.id}`)}>
                                        <PixelCanvas gap={10} speed={25} colors={["#e0f2fe", "#7dd3fc", category.color]} variant="icon" className="absolute inset-0" />
                                        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none">
                                            <div className="flex flex-col items-center transform transition-transform duration-300 group-hover:-translate-y-4">
                                                <category.icon className="w-16 h-16 text-black dark:text-white transition-all duration-300 ease-out dark:group-hover:text-[#0ea5e9] group-hover:text-orange-400" />
                                                <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">{category.title}</h3>
                                            </div>

                                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                                <p className="text-sm text-white/80 mb-2">{category.description}</p>
                                                <div className="flex flex-col gap-1">
                                                    {category.snippets.map((snippet, idx) => (
                                                        <div key={idx} className="flex items-center gap-2 text-xs">
                                                            <div className="w-2 h-2 rounded-full dark:bg-[#0ea5e9] bg-orange-400" />
                                                            <span className="text-white">{snippet.name}</span>
                                                            <span className="dark:text-purple-100 text-orange-400 ml-auto">{snippet.tech}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Blog;
