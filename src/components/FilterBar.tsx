import React from 'react';
import type { DesignStyle, RoomType } from '@/app/types';

interface FilterBarProps {
  selectedStyle: DesignStyle | 'all';
  selectedRoom: RoomType | 'all';
  onStyleChange: (style: DesignStyle | 'all') => void;
  onRoomChange: (room: RoomType | 'all') => void;
}

export function FilterBar({
  selectedStyle,
  selectedRoom,
  onStyleChange,
  onRoomChange,
}: FilterBarProps) {
  const styles: (DesignStyle | 'all')[] = [
    'all',
    'modern',
    'boho',
    'minimalist',
    'industrial',
    'scandinavian',
    'traditional',
  ];

  const rooms: (RoomType | 'all')[] = [
    'all',
    'bedroom',
    'kitchen',
    'living-room',
    'bathroom',
    'office',
    'dining-room',
  ];

  return (
    <div className="sticky top-0 z-10 bg-white p-4 shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Style:</span>
          <select
            value={selectedStyle}
            onChange={(e) => onStyleChange(e.target.value as DesignStyle | 'all')}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          >
            {styles.map((style) => (
              <option key={style} value={style}>
                {style.charAt(0).toUpperCase() + style.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Room:</span>
          <select
            value={selectedRoom}
            onChange={(e) => onRoomChange(e.target.value as RoomType | 'all')}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          >
            {rooms.map((room) => (
              <option key={room} value={room}>
                {room === 'all'
                  ? 'All Rooms'
                  : room.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}