"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, Star } from "lucide-react";
import { contactInfo } from "@/data/cars";
import { reviewStats } from "@/data/google-reviews";

// Animated counter with Motion
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function HeroMotion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c8102e]/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#c8102e]/10 rounded-full blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
        style={{ y: springY, opacity, scale: springScale }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 bg-[#c8102e]/10 border border-[#c8102e]/30 rounded-full px-4 py-2 mb-8"
        >
          <motion.span
            className="w-2 h-2 bg-[#c8102e] rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-white/80 text-sm font-medium">Garage open tot 22:00 - Altijd bereikbaar voor spoed</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Vind uw{" "}
          <span className="text-[#c8102e]">droomoccasion</span>
          <br />
          <span className="text-white/40">bij Car Store Cuijk</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10"
        >
          Ruim aanbod tweedehands auto's en gebruikte auto's van alle merken.
          Garage open tot 22:00, bereikbaar voor spoed reparatie. Auto inkoop, onderhoud, reparatie en airco vullen. 168 reviews, 5 sterren.
        </motion.p>

        {/* Review Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5"
          >
            <Star className="w-4 h-4 text-[#c8102e] fill-[#c8102e]" />
            <span className="text-white font-bold">{reviewStats.gemiddelde.toFixed(1)}</span>
            <div className="h-4 w-px bg-white/20" />
            <span className="text-white/60 text-sm"><span className="font-medium text-white">{reviewStats.totaal}</span> Google reviews</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5"
          >
            <Star className="w-4 h-4 text-[#c8102e] fill-[#c8102e]" />
            <span className="text-white font-bold">4.7</span>
            <div className="h-4 w-px bg-white/20" />
            <span className="text-white/60 text-sm"><span className="font-medium text-white">25</span> Trustpilot reviews</span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/occasions"
              className="group flex items-center gap-2 bg-[#c8102e] hover:bg-[#a00d24] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#c8102e]/25"
            >
              Bekijk Occasions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/\s|-/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Ons
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/40"
        >
          <motion.a
            href={`tel:${contactInfo.telefoon.replace(/\s|-/g, '')}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
            whileHover={{ y: -2 }}
          >
            <Phone className="w-5 h-5 text-[#c8102e]" />
            <span>{contactInfo.telefoon}</span>
          </motion.a>
          <span className="hidden sm:block text-white/20">•</span>
          <span>{contactInfo.adres}, {contactInfo.plaats}</span>
          <span className="hidden sm:block text-white/20">•</span>
          <span>168 reviews, 5 sterren</span>
          <span className="hidden sm:block text-white/20">•</span>
          <span>Open tot 22:00</span>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: 500, suffix: "+", label: "Tevreden klanten" },
            { value: 5, suffix: "+", label: "Jaar ervaring" },
            { value: 7, suffix: "", label: "Dagen per week open" },
            { value: 100, suffix: "%", label: "Servicegericht" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#c8102e] mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
            animate={{ borderColor: ["rgba(255,255,255,0.2)", "rgba(200,16,46,0.5)", "rgba(255,255,255,0.2)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#c8102e] rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
