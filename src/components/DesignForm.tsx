import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import type { DesignStyle, RoomType, PriceRange } from '@/app/types';

export function DesignForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    style: 'modern' as DesignStyle,
    roomType: 'living-room' as RoomType,
    priceRange: 'mid-range' as PriceRange,
    paintColors: [{ name: '', brand: '', code: '', hex: '' }],
    whyItWorks: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data: user } = await supabase.auth.getUser();
    
    if (!user.user) {
      alert('Please sign in to submit a design');
      return;
    }

    const newDesign = {
      ...formData,
      id: crypto.randomUUID(),
      createdBy: user.user.id,
      createdAt: new Date().toISOString(),
      likes: 0,
      furniture: [],
      decor: {},
    };

    const { error } = await supabase
      .from('designs')
      .insert([newDesign]);

    if (error) {
      alert('Error submitting design');
    } else {
      alert('Design submitted successfully!');
      setFormData({
        title: '',
        description: '',
        imageUrl: '',
        style: 'modern',
        roomType: 'living-room',
        priceRange: 'mid-range',
        paintColors: [{ name: '', brand: '', code: '', hex: '' }],
        whyItWorks: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          rows={3}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="url"
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          required
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Style</label>
          <select
            value={formData.style}
            onChange={(e) => setFormData({ ...formData, style: e.target.value as DesignStyle })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          >
            <option value="modern">Modern</option>
            <option value="boho">Boho</option>
            <option value="minimalist">Minimalist</option>
            <option value="industrial">Industrial</option>
            <option value="scandinavian">Scandinavian</option>
            <option value="traditional">Traditional</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Room Type</label>
          <select
            value={formData.roomType}
            onChange={(e) => setFormData({ ...formData, roomType: e.target.value as RoomType })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          >
            <option value="living-room">Living Room</option>
            <option value="bedroom">Bedroom</option>
            <option value="kitchen">Kitchen</option>
            <option value="bathroom">Bathroom</option>
            <option value="office">Office</option>
            <option value="dining-room">Dining Room</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price Range</label>
          <select
            value={formData.priceRange}
            onChange={(e) => setFormData({ ...formData, priceRange: e.target.value as PriceRange })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          >
            <option value="budget">Budget</option>
            <option value="mid-range">Mid Range</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Why It Works</label>
        <textarea
          value={formData.whyItWorks}
          onChange={(e) => setFormData({ ...formData, whyItWorks: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Submit Design
      </button>
    </form>
  );
}