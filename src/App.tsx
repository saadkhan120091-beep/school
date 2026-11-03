/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PortalItem } from './config/schoolData';
import {
  DESKTOP_CANVAS_WIDTH,
  calculateDesktopScaleLayout,
  DesktopScaleMetrics,
} from './utils/validation';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { StatisticsSection } from './components/StatisticsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PortalModal } from './components/PortalModal';

export default function App() {
  const [activePortal, setActivePortal] = useState<PortalItem | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const [scaleMetrics, setScaleMetrics] = useState<DesktopScaleMetrics>(() => {
    const initialWidth =
      typeof window !== 'undefined'
        ? document.documentElement.clientWidth || window.innerWidth
        : DESKTOP_CANVAS_WIDTH;
    return calculateDesktopScaleLayout(initialWidth, 0, DESKTOP_CANVAS_WIDTH);
  });

  const updateScaleMetrics = useCallback(() => {
    if (typeof window === 'undefined') return;
    const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
    const unscaledHeight = canvasRef.current ? canvasRef.current.offsetHeight : 0;
    const next = calculateDesktopScaleLayout(
      viewportWidth,
      unscaledHeight,
      DESKTOP_CANVAS_WIDTH
    );
    setScaleMetrics((prev) => {
      if (
        prev.isScaled === next.isScaled &&
        Math.abs(prev.scale - next.scale) < 0.0001 &&
        prev.scaledHeight === next.scaledHeight
      ) {
        return prev;
      }
      return next;
    });
  }, []);

  useEffect(() => {
    updateScaleMetrics();

    window.addEventListener('resize', updateScaleMetrics);
    let observer: ResizeObserver | null = null;

    if (typeof ResizeObserver !== 'undefined' && canvasRef.current) {
      observer = new ResizeObserver(() => {
        updateScaleMetrics();
      });
      observer.observe(canvasRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateScaleMetrics);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [updateScaleMetrics]);

  return (
    <div
      data-testid="scaled-viewport-wrapper"
      className="w-full bg-[#FFFFFF] text-[#000000]"
      style={
        scaleMetrics.isScaled
          ? {
              width: '100%',
              height: scaleMetrics.scaledHeight > 0 ? `${scaleMetrics.scaledHeight}px` : 'auto',
              overflow: 'hidden',
              position: 'relative',
            }
          : {
              width: '100%',
            }
      }
    >
      <div
        ref={canvasRef}
        data-testid="desktop-canvas"
        className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#000000]"
        style={
          scaleMetrics.isScaled
            ? {
                width: `${DESKTOP_CANVAS_WIDTH}px`,
                transform: `scale(${scaleMetrics.scale})`,
                transformOrigin: 'top left',
              }
            : {
                width: '100%',
              }
        }
      >
        <Header onOpenPortal={(portal) => setActivePortal(portal)} />

        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <WhyChooseUsSection />
          <StatisticsSection />
          <FacilitiesSection />
          <AdmissionsSection />
          <ContactSection />
        </main>

        <Footer onOpenPortal={(portal) => setActivePortal(portal)} />
      </div>

      <PortalModal
        portal={activePortal}
        onClose={() => setActivePortal(null)}
      />
    </div>
  );
}

