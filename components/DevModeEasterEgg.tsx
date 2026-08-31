"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X } from "lucide-react";

export default function DevModeEasterEgg() {
  const [isActive, setIsActive] = useState(false);
  const [keystrokes, setKeystrokes] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!e.key) return;
      const key = e.key.toLowerCase();
      
      // Update keystrokes buffer, keeping only the last 3 keys
      setKeystrokes((prev) => {
        const next = [...prev, key].slice(-3);
        
        // Check if user typed 'd', 'e', 'v' in sequence
        if (next.join("") === "dev") {
          setIsActive(true);
          
          // Log a fun message in developer tools console
          console.log(
            "%cHey 👋 You found the developer mode! Welcome to Ashish's Portfolio.",
            "color: #6366f1; font-size: 16px; font-weight: bold; background: #0c0c0e; padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(99, 102, 241, 0.3);"
          );
          console.log(
            "%cFeel free to inspect the source code or check out my experience under the timeline. Let's build something great!",
            "color: #a1a1aa; font-size: 13px;"
          );
        }
        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-[100] max-w-sm p-4 rounded-xl bg-zinc-950/95 border border-primary/30 backdrop-blur-md shadow-2xl text-xs font-mono text-zinc-300 flex flex-col gap-2.5"
        >
          <div className="flex items-center justify-between text-primary border-b border-white/5 pb-2">
            <div className="flex items-center gap-2">
              <Terminal size={14} />
              <span>developer_mode.sh</span>
            </div>
            <button
              onClick={() => setIsActive(false)}
              className="text-zinc-500 hover:text-white p-0.5 rounded transition-colors"
              aria-label="Close easter egg"
            >
              <X size={12} />
            </button>
          </div>
          
          <div className="space-y-1.5">
            <p className="text-white font-semibold">Hey 👋 You found developer mode!</p>
            <p className="text-[11px] leading-relaxed">
              Ashish&apos;s Portfolio compiles successfully in 42ms.
            </p>
            <div className="text-[10px] text-zinc-500 bg-black/40 p-2 rounded border border-white/5 space-y-0.5">
              <div>$ npx next info</div>
              <div className="text-accent">&bull; Next.js: 16.3.3 (App Router)</div>
              <div className="text-accent">&bull; React: 19.2.8</div>
              <div className="text-accent">&bull; Styling: Tailwind CSS v4</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
