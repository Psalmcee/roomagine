export async function fetchInteriorDesignPhotos(query = "interior design", perPage = 12) {
  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    cache: 'no-store',
  });
  if (!res.ok) throw new Error("Failed to fetch Unsplash images");
  const data = await res.json();
  return data.results; // Array of photo objects
}
