"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { hero } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-porcelain pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-24 lg:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-blueprint absolute inset-0 opacity-[0.05]" />
        <div className="bg-grain absolute inset-0 opacity-[0.035] mix-blend-multiply" />
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-sage/25 blur-[120px]" />
        <div className="absolute -right-32 top-52 h-[380px] w-[380px] rounded-full bg-gold/20 blur-[130px]" />
      </div>

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-porcelain-50 px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold-dark" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
                {hero.eyebrow}
              </span>
            </motion.div>

            <h1 className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-ink">
              {hero.headline.map((line, index) => (
                <motion.span key={line} variants={itemVariants} className="block">
                  {index === hero.headline.length - 1 ? (
                    <span className="italic text-pine">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={itemVariants}
              className="text-balance mt-6 max-w-lg text-base leading-relaxed text-ink/70 sm:text-lg"
            >
              {hero.description}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                href={hero.primaryCta.href}
                size="lg"
                icon={<ArrowRight className="h-4 w-4" strokeWidth={1.75} />}
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="secondary"
                size="lg"
                icon={<ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />}
              >
                {hero.secondaryCta.label}
              </Button>
            </motion.div>

            <motion.dl
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-mist-dark pt-6"
            >
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-mono text-xl sm:text-2xl text-ink">{stat.value}</dd>
                  <dd className="mt-0.5 text-xs uppercase tracking-[0.12em] text-ink/50">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <div className="relative mt-10 lg:col-span-6 lg:mt-0">
            <ArchMark reduceMotion={!!reduceMotion} />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
              className="animate-float absolute -right-3 top-4 flex items-center gap-2 rounded-2xl border border-ink/10 bg-porcelain-50/80 px-3 py-2.5 shadow-card backdrop-blur-md sm:px-4 sm:py-3 sm:-right-6"
            >
              <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-gold text-gold" strokeWidth={0} />
              <div className="leading-tight">
                <p className="font-mono text-xs sm:text-sm text-ink">{hero.trustBadge.rating} rating</p>
                <p className="text-[10px] sm:text-[11px] text-ink/50">{hero.trustBadge.reviewCount} reviews</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
              className="animate-float-slow absolute -left-3 bottom-4 rounded-2xl border border-ink/10 bg-porcelain-50/80 px-3 py-2.5 shadow-card backdrop-blur-md sm:px-4 sm:py-3 sm:-left-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink/50">
                Availability
              </p>
              <p className="mt-0.5 text-xs sm:text-sm text-ink">{hero.availabilityNote}</p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ArchMark({ reduceMotion }: { reduceMotion: boolean }) {
  const drawTransition = (delay: number) => ({
    pathLength: { duration: reduceMotion ? 0 : 1.6, delay, ease: [0.65, 0, 0.35, 1] as const },
    opacity: { duration: 0.4, delay },
  });

  const nodes = [
    { cx: 70, cy: 210 },
    { cx: 450, cy: 210 },
    { cx: 260, cy: 90 },
    { cx: 260, cy: 330 },
  ];

  return (
    <div className="relative mx-auto aspect-square max-w-xs rounded-[24px] border border-ink/10 bg-porcelain-50 p-6 shadow-premium sm:max-w-sm sm:rounded-[32px] sm:p-8">
      <svg
        viewBox="0 0 520 420"
        className="h-full w-full"
        role="img"
        aria-label={`${siteConfig.name} signature arch mark`}
      >
        <motion.line
          x1="40"
          y1="210"
          x2="480"
          y2="210"
          stroke="var(--color-mist-dark)"
          strokeWidth="1"
          strokeDasharray="2 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={drawTransition(0.1)}
        />
        <motion.path
          d="M 70 210 C 70 90, 450 90, 450 210"
          fill="none"
          stroke="var(--color-pine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={drawTransition(0.3)}
        />
        <motion.path
          d="M 70 210 C 70 330, 450 330, 450 210"
          fill="none"
          stroke="var(--color-sage-dark)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={drawTransition(0.55)}
        />
        {nodes.map((node, index) => (
          <motion.circle
            key={`${node.cx}-${node.cy}`}
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="var(--color-porcelain)"
            stroke="var(--color-ink)"
            strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: reduceMotion ? 0 : 1 + index * 0.1,
              duration: 0.4,
              ease: "backOut",
            }}
          />
        ))}
        <motion.circle
          cx="352"
          cy="132"
          r="6"
          fill="var(--color-gold)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 1.5, duration: 0.5, ease: "backOut" }}
        />
        {!reduceMotion && (
          <motion.circle
            cx="352"
            cy="132"
            r="6"
            fill="var(--color-gold)"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </svg>
    </div>
  );
}