import React from 'react';
import { Camera, X } from 'lucide-react';

interface DestinationGalleryProps {
  images: string[];
  name: string;
}

const DestinationGallery: React.FC<DestinationGalleryProps> = ({ images, name }) => {
  const [selectedImage, setSelectedImage] = React.useState('');

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className="relative group rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt={`${name} - Imagem ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage('')}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setSelectedImage('')}
              className="absolute top-4 right-4 text-white hover:text-teal-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DestinationGallery;