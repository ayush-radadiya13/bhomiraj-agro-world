"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sprout } from "lucide-react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame;
    const start = performance.now();
    const duration = 1500;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-leaf-950 text-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex h-24 w-24 items-center justify-center"
          >
            <span className="absolute inset-0 rounded-full border border-leaf-400/40" />
            <span className="absolute inset-0 animate-[pulseRing_2.4s_ease-out_infinite] rounded-full border border-leaf-400/40" />
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-leaf-400 to-leaf-700 shadow-glow">
              <Sprout className="h-8 w-8 text-white" strokeWidth={2.2} />
            </span>
          </motion.div>

          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-display mt-8 text-xl font-700 tracking-tight"
          >
            Khedut <span className="text-leaf-400">Agro</span>
          </motion.p>

          <div className="mt-5 h-[3px] w-44 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-leaf-400 to-harvest-400"
              style={{ width: `${count}%` }}
            />
          </div>
          <p className="mt-3 text-xs tracking-[0.3em] text-leaf-200/70">
            {count}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
