"use client";

import Image from "next/image";
import Link from "next/link";
import { Palette, UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import { AuthModal } from "@/components/AuthModal";
import { useState, useEffect } from "react";
import type { DesignStyle, RoomType, PriceRange } from "@/app/types";
import { supabase } from "@/lib/supabase";
import { DesignCard } from "@/components/DesignCard";
import { designs } from "@/data/designs";
import { fetchInteriorDesignPhotos } from "@/utils/unsplash";
import {
  User,
  AuthChangeEvent,
  Session,
  Subscription,
} from "@supabase/supabase-js";
import Footer from "@/components/Footer";

export default function Home() {
  const [unsplashPhotos, setUnsplashPhotos] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("african living room");
  const [isSearching, setIsSearching] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle | "all">(
    "all"
  );
  const [selectedRoom, setSelectedRoom] = useState<RoomType | "all">("all");
  const [selectedPrice, setSelectedPrice] = useState("all");

  useEffect(() => {
    setIsSearching(true);
    fetchInteriorDesignPhotos(searchQuery, 20)
      .then((photos) => {
        setUnsplashPhotos(photos);
        if (typeof window !== "undefined") {
          try {
            localStorage.setItem("unsplashPhotos", JSON.stringify(photos));
          } catch {}
        }
      })
      .catch(() => setUnsplashPhotos([]))
      .finally(() => setIsSearching(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUnsplashSearch = () => {
    setIsSearching(true);
    fetchInteriorDesignPhotos(searchQuery, 20)
      .then((photos) => {
        setUnsplashPhotos(photos);
        if (typeof window !== "undefined") {
          try {
            localStorage.setItem("unsplashPhotos", JSON.stringify(photos));
          } catch {}
        }
      })
      .catch(() => setUnsplashPhotos([]))
      .finally(() => setIsSearching(false));
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let authListener: { data: { subscription: Subscription } } | null = null;

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null); // Use optional chaining and nullish coalescing
    });

    // Listen for auth state changes
    authListener = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        setUser(session?.user ?? null); // Use optional chaining and nullish coalescing
      }
    );
    return () => {
      if (authListener?.data?.subscription?.unsubscribe) {
        authListener.data.subscription.unsubscribe();
      }
    };
  }, []);

  const filteredDesigns = designs.filter((design) => {
    const styleMatch =
      selectedStyle === "all" || design.style === selectedStyle;
    const roomMatch =
      selectedRoom === "all" || design.roomType === selectedRoom;
    const priceMatch =
      selectedPrice === "all" || design.priceRange === selectedPrice;
    return styleMatch && roomMatch && priceMatch;
  });

  const handleLike = async (id: any) => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    // In a real app, this would update the database
    console.log("Liked design:", id);
  };

  // Hero carousel images (add more URLs as needed)
  const heroImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1500&q=80",
  ];

  const [heroIndex, setHeroIndex] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  useEffect(() => {
    if (isHeroPaused) return;
    const t = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 4000); // change slide every 5s
    return () => clearInterval(t);
  }, [heroImages.length, isHeroPaused]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="font-sans text-gray-800">
        {/* Hero Section (carousel background) */}
        <header
          className="relative h-screen text-white overflow-hidden"
          onMouseEnter={() => setIsHeroPaused(true)}
          onMouseLeave={() => setIsHeroPaused(false)}
        >
          {/* stacked images with fade */}
          {heroImages.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`Hero ${i + 1}`}
                fill
                sizes="100vw"
                priority={i === 0}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                heroIndex === i ? "opacity-100" : "opacity-0"
              } `}
              style={{ pointerEvents: "none", userSelect: "none" }}
              draggable={false}
            />
          ))}
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
          {/* Sign In/Out Button positioned top right */}
          <div className="absolute top-0 left-0 right-0 flex items-center p-4 justify-between z-30">
            <Link
              href="/"
              className="flex items-center gap-2 z-10 px-4 py-2 text-white hover:bg-white/10 hover:rounded-md hover:cursor-pointer transition-colors"
            >
              <span className="flex items-center gap-2">
                <Palette className="h-8 w-8 text-white transition-transform group-hover:rotate-12" />
                <span className="text-2xl font-bold text-white">Roomagine</span>
              </span>
            </Link>
            <div className=" z-10">
              {user ? (
                <button
                  onClick={() => supabase.auth.signOut()}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors"
                >
                  <UserCircle size={20} />
                  <span>Sign Out</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors"
                >
                  <UserCircle size={20} />
                  <span>Sign In</span>
                </button>
              )}
            </div>
          </div>

          {/* Main content centered */}
          <div className="absolute inset-0 flex items-center justify-center px-4 z-20">
            <div className="text-center max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                Transform Your Space with Curated Room Designs
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: +50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="text-lg mb-12"
              >
                Discover stunning room ideas and bring them to life in your home
                with just a few clicks.
              </motion.p>

              <div className="flex flex-col w-auto space-y-4 md:flex-row md:justify-center md:space-x-4 md:space-y-0">
                <motion.button
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className="bg-white text-gray-900 font-semibold px-6 py-3 rounded hover:bg-gray-200"
                >
                  <a href="#rooms" className="inline-block scroll-smooth">
                    Browse Room Ideas
                  </a>
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, x: +50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700"
                >
                  <a href="/submit" className="inline-block">
                    Submit Your Design
                  </a>
                </motion.button>
              </div>
            </div>
          </div>
          {/* small carousel dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-8 rounded-full transition-all ${
                  heroIndex === i ? "bg-white/90 w-10" : "bg-white/40 w-6"
                }`}
              />
            ))}
          </div>
        </header>
        {/* How It Works */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="flex flex-wrap justify-center gap-10 px-4">
            {[
              {
                emoji: "🖼️",
                title: "Explore Ideas",
                description:
                  "Browse professionally designed rooms, from cozy bedrooms to minimalist kitchens.",
              },
              {
                emoji: "🛒",
                title: "Replicate the Look",
                description:
                  "Shop the furniture and decor or get step-by-step guides.",
              },
              {
                emoji: "🏡",
                title: "Customize & Visualize",
                description: "Tweak designs to fit your space and preferences.",
              },
            ].map(({ emoji, title, description }) => (
              <div key={title} className="max-w-xs text-center">
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Rooms */}
        <section className="py-16 px-8 bg-gray-100" id="rooms">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Featured Room Designs</h2>
          </div>
          <main className="mx-auto max-w-7xl px-4 py-8">
            {/* Search Bar and FilterBar for Unsplash */}
            <div className="max-w-2xl mx-auto mt-8 mb-12">
              <div className="flex gap-2 mt-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Roomagine (e.g. 'minimalist living room')"
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                />
                <button
                  onClick={handleUnsplashSearch}
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700"
                  disabled={isSearching}
                >
                  {isSearching ? "Searching..." : "Search"}
                </button>
              </div>
            </div>
            {/* Unsplash Results */}
            <div className="mx-auto max-w-7xl px-4 py-8">
              {unsplashPhotos.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {unsplashPhotos.map((photo) => {
                    // Map Unsplash photo to Design shape
                    const fakeDesign = {
                      id: photo.id,
                      title: photo.alt_description || "Roomagine Room",
                      description:
                        photo.description ||
                        photo.alt_description ||
                        "Room inspiration from Roomagine",
                      imageUrl: photo.urls?.regular || "",
                      style: "modern" as DesignStyle,
                      roomType: "living-room" as RoomType,
                      priceRange: "mid-range" as PriceRange,
                      paintColors: [],
                      furniture: [],
                      decor: {},
                      whyItWorks: "",
                      likes: 0,
                      createdAt: new Date().toISOString(),
                    };
                    return (
                      <a key={photo.id} href={`/design/${photo.id}`}>
                        <DesignCard design={fakeDesign} onLike={() => {}} />
                      </a>
                    );
                  })}
                </div>
              ) : (
                <p className="text-center text-gray-500">
                  No Roomagine results found.
                </p>
              )}
            </div>
            {isLoading ? (
              // Skeleton Loader Grid
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md animate-pulse overflow-hidden"
                  >
                    <div className="h-48 bg-gray-300"></div>
                    <div className="p-4 space-y-2">
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      <div className="flex space-x-2 mt-4">
                        <div className="h-4 w-12 bg-gray-200 rounded-full"></div>
                        <div className="h-4 w-16 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredDesigns.length > 0 ? (
              // Actual Data Grid
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredDesigns.map((design) => (
                  <a key={design.id} href={`/design/${design.id}`}>
                    <DesignCard design={design} onLike={handleLike} />
                  </a>
                ))}
              </div>
            ) : (
              // Empty State
              <p className="text-center text-gray-500">No designs found.</p>
            )}
          </main>
        </section>
        {/* Quiz CTA */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-600 mb-6">
            Take our quick style quiz to discover your perfect room aesthetic!
          </p>
          <button className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700">
            Take the Quiz
          </button>
        </section>

        {/* Newsletter */}
        <section className="bg-gray-100 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Inspired</h2>
          <p className="text-gray-600 mb-6">
            Get the latest room ideas and tips delivered weekly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 border border-gray-300 rounded w-full sm:w-80"
            />
            <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </section>

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
        <Footer />
      </div>
    </div>
  );
}
