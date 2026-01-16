import { useState } from 'react';
import { BuildSection } from '../../types/sections';

interface BuildStepProps {
  step: BuildSection;
}

export function BuildStep({ step }: BuildStepProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <h4 className="heading-4" style={{ marginBottom: 12 }}>
          {step.title}
        </h4>
        {step.description && (
          <p
            className="text-primary"
            style={{
              whiteSpace: 'pre-line',
              marginBottom: step.images.length > 0 ? 16 : 0,
              color: 'rgba(255, 255, 255, 0.85)',
            }}
          >
            {step.description.trim()}
          </p>
        )}
        {step.images.length > 0 && (
          <div className="image-preview-group">
            {step.images.map((imageUrl, index) => (
              <div
                key={index}
                className="image-preview"
                onClick={() => setLightboxImage(imageUrl)}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxImage(imageUrl);
                  }
                }}
                aria-label={`Preview ${step.title} - Image ${index + 1}`}
              >
                <img
                  src={imageUrl}
                  alt={`${step.title} - Image ${index + 1}`}
                  style={{
                    maxWidth: '100%',
                    borderRadius: 4,
                    cursor: 'pointer',
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {lightboxImage && (
        <div
          className="image-lightbox"
          onClick={() => setLightboxImage(null)}
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Escape') {
              setLightboxImage(null);
            }
          }}
        >
          <div
            className="image-lightbox-content"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="image-lightbox-close"
              onClick={() => setLightboxImage(null)}
              aria-label="Close image"
            >
              ×
            </button>
            <img src={lightboxImage} alt="Preview" />
          </div>
        </div>
      )}
    </>
  );
}
