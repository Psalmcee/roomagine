"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { designs } from "@/data/designs";
import { DesignCard } from "@/components/DesignCard";
import type { Design, PaintColor, FurnitureItem } from "@/app/types";
import React from "react";
import { NavbarWithBgColor } from "@/components/Navbar";
import { Heart, Share2 } from "lucide-react";
import Footer from "@/components/Footer";

interface DesignDetailPageProps {
  params: { id: string };
}

/* Properly typed Unsplash photo shape (replace `any`) */
interface UnsplashPhoto {
  id: string;
  alt_description?: string | null;
  description?: string | null;
  urls?: {
    regular?: string | null;
    small?: string | null;
    full?: string | null;
  } | null;
}

// Dummy data for Unsplash-based designs
const dummyPaintColors: PaintColor[] = [
  { name: "Cloud White", brand: "Benjamin Moore", code: "OC-130", hex: "#F6F6F1" },
  { name: "Hale Navy", brand: "Benjamin Moore", code: "HC-154", hex: "#434C56" },
];
const dummyFurniture: FurnitureItem[] = [
  { name: "Modern Sofa", type: "Sofa", material: "Linen", brand: "West Elm", price: 1200 },
  { name: "Oak Coffee Table", type: "Table", material: "Oak", brand: "IKEA", price: 300 },
];

export default function DesignDetailPage({ params }: DesignDetailPageProps) {
  // params may be a Promise in newer Next.js versions — unwrap safely with React.use when available
  const usableParams = (React as any).use ? (React as any).use(params) : (params as { id: string });
  const { id } = usableParams as { id: string };

  const [design, setDesign] = React.useState<Design | null>(null);
  const [similarDesigns, setSimilarDesigns] = React.useState<Design[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    // Try to find a static design
    const staticDesign = designs.find((d) => d.id === id);
    if (staticDesign) {
      setDesign(staticDesign);
      setSimilarDesigns(
        designs
          .filter((d) => d.id !== id && (d.style === staticDesign.style || d.roomType === staticDesign.roomType))
          .slice(0, 6)
      );
      setIsLoading(false);
    } else {
      // Try to get Unsplash photo from localStorage
      if (typeof window !== "undefined") {
        try {
          const cached = localStorage.getItem("unsplashPhotos");
          if (cached) {
            const unsplashPhotos = JSON.parse(cached) as UnsplashPhoto[];
            const photo = unsplashPhotos.find((p) => p.id === id);
            if (photo) {
              const fakeDesign: Design = {
                id: photo.id,
                title: photo.alt_description ?? "Unsplash Room",
                description: photo.description ?? photo.alt_description ?? "Room inspiration from Unsplash",
                imageUrl: photo.urls?.regular ?? "",
                style: "modern",
                roomType: "living-room",
                priceRange: "mid-range",
                paintColors: dummyPaintColors,
                furniture: dummyFurniture,
                decor: {},
                whyItWorks: "A beautiful space curated from Unsplash inspiration.",
                likes: 0,
                createdAt: "",
              };
              setDesign(fakeDesign);
              setSimilarDesigns(
                unsplashPhotos
                  .filter((p) => p.id !== id)
                  .slice(0, 6)
                  .map((ph) => ({
                    id: ph.id,
                    title: ph.alt_description ?? "Unsplash Room",
                    description: ph.description ?? ph.alt_description ?? "Room inspiration from Unsplash",
                    imageUrl: ph.urls?.regular ?? "",
                    style: "modern",
                    roomType: "living-room",
                    priceRange: "mid-range",
                    paintColors: dummyPaintColors,
                    furniture: dummyFurniture,
                    decor: {},
                    whyItWorks: "A beautiful space curated from Unsplash inspiration.",
                    likes: 0,
                    createdAt: "",
                  }))
              );
              setIsLoading(false);
            } else {
              setDesign(null);
              setIsLoading(false);
            }
          } else {
            setDesign(null);
            setIsLoading(false);
          }
        } catch (e) {
          console.error("Failed parsing cached unsplash photos", e as Error);
          setDesign(null);
          setIsLoading(false);
        }
      } else {
        setDesign(null);
        setIsLoading(false);
      }
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading design…</p>
      </div>
    );
  }

  if (!design) {
    notFound();
  }

  return (
    <div className="bg-amber-50">
      <NavbarWithBgColor />
      <div className="mx-auto max-w-7xl px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <Image src={design.imageUrl} width={100} height={100} alt={design.title} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">{design.title}</h1>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 rounded-full bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
                  <Heart size={20} />
                  <span>{design.likes}</span>
                </button>
                <button className="rounded-full bg-gray-100 p-2 text-gray-700 hover:bg-gray-200">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">{design.style}</span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                {design.roomType ? design.roomType.replace("-", " ") : ""}
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">{design.priceRange}</span>
            </div>

            <p className="text-gray-600">{design.description}</p>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Paint Colors</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {design.paintColors?.map((color: PaintColor, index: number) => (
                  <div key={index} className="flex items-center gap-2 rounded-lg border p-3">
                    <div className="h-8 w-8 rounded-full border" style={{ backgroundColor: color.hex }} />
                    <div>
                      <p className="font-medium">{color.name}</p>
                      <p className="text-sm text-gray-500">
                        {color.brand} - {color.code}
                      </p>
                    </div>
                  </div>
                )) ?? null}
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Furniture</h2>
              <div className="space-y-3">
                {design.furniture?.map((item: FurnitureItem, index: number) => (
                  <div key={index} className="rounded-lg border p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          {item.brand} - {item.material}
                        </p>
                      </div>
                      {item.purchaseUrl && (
                        <a href={item.purchaseUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                          Shop
                        </a>
                      )}
                    </div>
                  </div>
                )) ?? null}
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Why It Works</h2>
              <p className="text-gray-600">{design.whyItWorks}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Designs Section */}
      {similarDesigns.length > 0 && (
        <div className="my-12 px-12">
          <h3 className="text-2xl text-center font-semibold mb-4">Similar Designs</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {similarDesigns.map((sim: Design) => (
              <a key={sim.id} href={`/design/${sim.id}`}>
                <DesignCard design={sim} onLike={() => {}} />
              </a>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}