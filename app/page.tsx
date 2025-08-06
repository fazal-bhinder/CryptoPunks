/** @file page.tsx */
'use client';
import React, { useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AvatarRow from '@/components/AvatarRow';
import MeetThePunks from '@/components/MeetThePunks';
import LargestSales from '@/components/LargestSales';
import HowToGetPunk from '@/components/HowToGetPunk';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FeaturedSection from '@/components/FeaturedSection';
import RecentTransactions from '@/components/RecentTransactions';

const salesData = [
  { punk: '3100', price: '4.2K Ξ ($7.58M)', date: 'Mar 11, 2021', id: 2 },
  { punk: '7408', price: '4.2K Ξ ($7.57M)', date: 'Mar 11, 2021', id: 8 },
  { punk: '4156', price: '4.2K Ξ ($10.26M)', date: 'Dec 09, 2021', id: 3 },
  { punk: '5217', price: '2.25K Ξ ($5.45M)', date: 'Jul 30, 2021', id: 4 },
  { punk: '7804', price: '4.2K Ξ ($7.57M)', date: 'Mar 11, 2021', id: 5 },
  { punk: '8857', price: '2K Ξ ($6.63M)', date: 'Sep 11, 2021', id: 6 },
  { punk: '2338', price: '1.5K Ξ ($4.37M)', date: 'Aug 24, 2021', id: 7 },
  { punk: '6275', price: '1.1K Ξ ($3.25M)', date: 'Oct 20, 2021', id: 9 },
  { punk: '2140', price: '1K Ξ ($2.99M)', date: 'Jul 15, 2021', id: 10 },
  { punk: '8348', price: '0.9K Ξ ($2.45M)', date: 'Jun 01, 2021', id: 11 },
  { punk: '9998', price: '0.85K Ξ ($2.32M)', date: 'May 20, 2021', id: 12 },
  { punk: '6487', price: '0.8K Ξ ($2.20M)', date: 'Apr 30, 2021', id: 13 },
];


const transactionData = [
  { punk: '1254', action: 'New bid', amount: '51.20Ξ ($210,265)', id: 1 },
  { punk: '9844', action: 'New bid', amount: '111Ξ ($456,848)', id: 6 },
  { punk: '4156', action: 'Offered', amount: '63.96Ξ ($262,626)', id: 3 },
];

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const [currentSaleIndex, setCurrentSaleIndex] = useState(0);
  const [currentTransactionIndex, setCurrentTransactionIndex] = useState(0);

    return (
    <div>
      <Navigation />

      <div className="section-black relative">
        <HeroSection />
      </div>

      <FeaturedSection />
      <MeetThePunks />

      <LargestSales
        salesData={salesData}
        currentSaleIndex={currentSaleIndex}
        setCurrentSaleIndex={setCurrentSaleIndex}
      />

      <RecentTransactions
        transactionData={transactionData}
        currentTransactionIndex={currentTransactionIndex}
        setCurrentTransactionIndex={setCurrentTransactionIndex}
      />

      <HowToGetPunk />
      <FAQ />
      <Footer />
    </div>
  );
}