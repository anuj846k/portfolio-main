import { CreditCard, FileCode } from "lucide-react";
import Link from "next/link";

import { LineShadowText } from "@/components/magicui/line-shadow-text";

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
];

const SnippetsPage = () => {
  return (
    <>
      <main className="relative min-h-screen py-12 md:py-24 px-1 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center -mt-12 text-5xl font-semibold leading-none sm:text-6xl md:text-7xl lg:text-8xl">
            Code{" "}
            <LineShadowText
              className="italic dark:text-purple-200 text-orange-500 [--shadow-color:black] dark:[--shadow-color:white]"
            >
              Snippets
            </LineShadowText>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 mt-10">
            {snippetCategories.map((category) => {
              return (
                <div key={category.id} className="w-[300px] mx-auto">
                  <Link
                    href={`/snippets/${category.id}`}
                    className="group relative block w-full overflow-hidden border border-border rounded-xl aspect-square transition-[transform,border-color] duration-300 dark:hover:border-[#0ea5e9] hover:border-orange-400 motion-safe:hover:scale-105 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0ea5e9] bg-background"
                    style={
                      {
                        "--active-color": category.color,
                      } as React.CSSProperties
                    }
                  >
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none">
                      <div className="flex flex-col items-center transform transition-transform duration-300 group-hover:-translate-y-4 group-focus-visible:-translate-y-4">
                        <category.icon
                          aria-hidden="true"
                          className="w-16 h-16 text-black dark:text-white transition-colors duration-300 ease-out dark:group-hover:text-[#0ea5e9] group-hover:text-orange-400"
                        />
                        <h2 className="mt-4 text-lg font-semibold text-black dark:text-white">
                          {category.title}
                        </h2>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                        <p className="text-sm text-white/80 mb-2">
                          {category.description}
                        </p>
                        <div className="flex flex-col gap-1">
                          {category.snippets.map((snippet) => (
                            <div
                              key={snippet.name}
                              className="flex items-center gap-2 text-xs"
                            >
                              <div aria-hidden="true" className="w-2 h-2 rounded-full dark:bg-[#0ea5e9] bg-orange-400" />
                              <span className="text-white">{snippet.name}</span>
                              <span className="dark:text-purple-100 text-orange-400 ml-auto">
                                {snippet.tech}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default SnippetsPage;
