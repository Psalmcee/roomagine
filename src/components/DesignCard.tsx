import Image from "next/image";
import { Heart } from "lucide-react";
import type { Design } from "@/app/types";

interface DesignCardProps {
  design: Design;
  onLike: (id: string) => void;
}

export function DesignCard({ design, onLike }: DesignCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={design.imageUrl}
          alt={design.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{design.title}</h3>
          <button
            onClick={() => onLike(design.id)}
            className="flex items-center gap-1 text-gray-500 transition-colors hover:text-red-500"
          >
            <Heart size={20} />
            <span>{design.likes ?? 0}</span>
          </button>
        </div>
        <div className="mb-3 flex gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
            {design.style}
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
            {design.roomType ? design.roomType.replace("-", " ") : ""}
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{design.description}</p>
      </div>
    </div>
  );
}