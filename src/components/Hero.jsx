import { useEffect, useRef } from "react";
import "../assets/css/hero.css";

export default function Hero() {
    const countdownRef = useRef(null);
    const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current && countdownRef.current && window.simplyCountdown) {
      hasInitialized.current = true;
      window.simplyCountdown(countdownRef.current, {
        year: 2024, // ganti dengan tahun yang diinginkan
        month: 7, // ganti dengan bulan yang diinginkan
        day: 20, // ganti dengan hari yang diinginkan
        hours: 0, // ganti dengan jam yang diinginkan
        minutes: 0, // ganti dengan menit yang diinginkan
        seconds: 0, // ganti dengan detik yang diinginkan
        words: {
          days: 'day',
          hours: 'hour',
          minutes: 'minute',
          seconds: 'second',
          pluralLetter: 's'
        },
        plural: true,
        inline: false,
        enableUtc: true,
        onEnd: function() {
          return; // callback ketika countdown selesai
        },
        refresh: 1000,
        sectionClass: 'simply-section',
        amountClass: 'simply-amount',
        wordClass: 'simply-word',
        zeroPad: false,
        countUp: false
      });
    }
  }, []);


  return (
    <section className="hero w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white">
      <main>
        <h4>Kepada Bapak/Ibu/Saudara/i,</h4>
        <h1>Firman & Icha</h1>
        <p>Akan melangsungkan resepsi pernikahan dalam: </p>
        <div ref={countdownRef}></div>
        <a href="#undangan" className=" btn btn-lg">
          Buka Undangan
        </a>
      </main>
    </section>
  );
}
