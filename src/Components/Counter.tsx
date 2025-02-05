"use client"
import { useEffect, useState, useRef } from "react";
import { Eye, ShoppingCart, Store, Clock } from "lucide-react";

interface StatProps {
  endValue: number;
  label: string;
  icon: React.ReactNode;
}

function AnimatedStat({ endValue, label, icon }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentStatRef = statRef.current; // Copy the ref value to a local variable

    if (currentStatRef) {
      observer.observe(currentStatRef);
    }

    return () => {
      if (currentStatRef) {
        observer.unobserve(currentStatRef); // Use the local variable here
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepValue = endValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += 1;
        setCount(Math.min(Math.floor(stepValue * current), endValue));

        if (current >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    }
  }, [isVisible, endValue]);

  return (
    <div
      ref={statRef}
      className="flex flex-col items-center p-6 bg-white bg-opacity-90 rounded-lg shadow-lg"
    >
      <div className="p-3 rounded-full bg-[#D4C485] text-white mb-4">{icon}</div>
      <h2 className="text-4xl font-bold mb-2 tabular-nums">{count}</h2>
      <p className="text-gray-600 uppercase tracking-wider text-sm">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { value: 2070, label: "Creativity Fuel", icon: <Eye className="w-6 h-6" /> },
    { value: 450, label: "Happy Clients", icon: <ShoppingCart className="w-6 h-6" /> },
    { value: 100, label: "All Products", icon: <Store className="w-6 h-6" /> },
    { value: 50, label: "Hours Spent", icon: <Clock className="w-6 h-6" /> },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: `url('/counter.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} endValue={stat.value} label={stat.label} icon={stat.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
