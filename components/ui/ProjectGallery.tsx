"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

interface ProjectGalleryProps {
  images: string[];
  title?: string;
  badgeText?: string;
  badgeColor?: string; // e.g., "cyber-blue", "cyber-green"
}

export default function ProjectGallery({ images, title = "", badgeText, badgeColor = "cyber-blue" }: ProjectGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const totalImages = images?.length ?? 0;

  const openAt = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setIsZoomed(false);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setIsZoomed(false);
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % totalImages);
    setIsZoomed(false);
  }, [totalImages]);

  const showPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + totalImages) % totalImages);
    setIsZoomed(false);
  }, [totalImages]);

  // Keyboard handlers for lightbox
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close, showNext, showPrev]);

  // Simple swipe support
  useEffect(() => {
    if (!isOpen) return;
    let startX = 0;
    let deltaX = 0;
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const onTouchMove = (e: TouchEvent) => {
      deltaX = e.touches[0].clientX - startX;
    };
    const onTouchEnd = () => {
      if (deltaX > 60) showPrev();
      if (deltaX < -60) showNext();
      startX = 0;
      deltaX = 0;
    };
    const el = dialogRef.current;
    if (el) {
      el.addEventListener('touchstart', onTouchStart);
      el.addEventListener('touchmove', onTouchMove);
      el.addEventListener('touchend', onTouchEnd);
    }
    return () => {
      if (el) {
        el.removeEventListener('touchstart', onTouchStart);
        el.removeEventListener('touchmove', onTouchMove);
        el.removeEventListener('touchend', onTouchEnd);
      }
    };
  }, [isOpen, showNext, showPrev]);

  const mainImage = useMemo(() => images?.[0], [images]);
  const secondaryImages = useMemo(() => (images || []).slice(1, 3), [images]);

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {/* Main Image */}
        {mainImage && (
          <button
            type="button"
            onClick={() => openAt(0)}
            className="group w-full text-left"
            aria-label="Open image viewer"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 backdrop-blur-xl h-64 sm:h-80 md:h-96">
              <Image
                src={mainImage}
                alt={title || 'Project image'}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
                priority
              />

              {/* Category Badge (optional) */}
              {badgeText && (
                <div className="absolute top-4 left-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-bold bg-${badgeColor}/20 text-${badgeColor} border border-${badgeColor}/30 backdrop-blur-sm`}>
                    {badgeText}
                  </div>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/40">Click to enlarge</span>
              </div>
            </div>
          </button>
        )}

        {/* Secondary Images */}
        {secondaryImages.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {secondaryImages.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => openAt(index + 1)}
                className="relative group"
                aria-label="Open image viewer"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 via-white/3 to-transparent border border-white/10 backdrop-blur-xl h-28 sm:h-32">
                  <Image
                    src={image}
                    alt={`${title || 'Project image'} - View ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={(e) => {
            // Close when clicking backdrop only
            if (e.target === dialogRef.current) close();
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <Image
              src={images[currentIndex]}
              alt={`${title || 'Project image'} - ${currentIndex + 1}`}
              fill
              className={`object-contain transition-transform duration-300 ${isZoomed ? 'scale-110' : 'scale-100'}`}
              sizes="100vw"
              onDoubleClick={() => setIsZoomed((z) => !z)}
              priority
            />
          </div>

          {/* Close button */}
          <button
            type="button"
            aria-label="Close viewer"
            onClick={close}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Prev */}
          {totalImages > 1 && (
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}

          {/* Next */}
          {totalImages > 1 && (
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          )}

          {/* Thumbnails */}
          {totalImages > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white/5 border border-white/10 rounded-2xl p-2 backdrop-blur">
              {images.map((src, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Show image ${idx + 1}`}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); setIsZoomed(false); }}
                  className={`h-12 w-16 rounded-lg overflow-hidden border ${idx === currentIndex ? 'border-cyber-blue' : 'border-white/20'} hover:border-cyber-blue transition-colors`}
                >
                  <Image src={src} alt={`${title || 'Project image'} thumb ${idx + 1}`} width={64} height={48} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}


