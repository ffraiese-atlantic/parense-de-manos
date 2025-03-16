"use client";

import { useEffect, useRef, useState } from "react";
import TimeUnit from "./TimeUnit";
import { toZonedTime } from "date-fns-tz";

interface count {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Counter({
  setHideCounter,
}: {
  setHideCounter: () => void;
}) {
  const initialCount: count = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const [count, setCount] = useState<count>(initialCount);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const argentinaTimezone = "America/Argentina/Buenos_Aires";
  const baseDate = new Date("2024-12-19T21:00:00Z"); // Fecha en UTC
  const pdmDate = toZonedTime(baseDate, argentinaTimezone);

  const clear = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const calculate = () => {
    const now = new Date();
    const subtraction = pdmDate.valueOf() - now.valueOf(); // subtraction in ms

    if (subtraction > 0) {
      const days = Math.floor(subtraction / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (subtraction % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (subtraction % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((subtraction % (1000 * 60)) / 1000);

      setCount({ days, hours, minutes, seconds });
    } else {
      setHideCounter();
      clear();
    }
  };

  useEffect(() => {
    calculate();
    const intervalId = setInterval(calculate, 1000);
    intervalRef.current = intervalId;

    return () => clear();
  }, []);

  return (
    <div className="flex">
      <TimeUnit label="Días" amount={count.days} />
      <TimeUnit label="Horas" amount={count.hours} />
      <TimeUnit label="Minutos" amount={count.minutes} />
      <TimeUnit label="Segundos" amount={count.seconds} />
    </div>
  );
}
