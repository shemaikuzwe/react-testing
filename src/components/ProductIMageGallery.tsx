import { ImageUrl } from "../lib/types";

export default function ProducyImageGallery({
  imageUrls,
}: {
  imageUrls: ImageUrl[];
}) {
  if (imageUrls.length === 0) return null;

  return (
    <ul>
      {imageUrls.map((src, index) => (
        <li key={index}>
          <img src={src} />
        </li>
      ))}
    </ul>
  );
}
