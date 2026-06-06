import { useRef, useState, type MouseEvent, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Modal } from "../../../../shared/ui/Modal";
import type { CertificateAsset } from "../../../../shared/types/media";
import {
  CertSection,
  CertHeader,
  SectionEyebrow,
  SectionTitle,
  SectionBody,
  CertViewport,
  CertTrack,
  CertSlide,
  CertFrame,
  CertImageWrap,
  CertImage,
  CertCaption,
  CertControls,
  CertButton,
  CertDots,
  CertDot,
} from "./styles";

interface AboutCertificationsProps {
  certificates: readonly CertificateAsset[];
}

export const AboutCertifications = ({
  certificates,
}: AboutCertificationsProps) => {
  const [certIndex, setCertIndex] = useState(0);
  const [previewCertIndex, setPreviewCertIndex] = useState<number | null>(null);
  const [previewZoom, setPreviewZoom] = useState(1);

  const certificateTouchStartX = useRef<number | null>(null);
  const certificateTouchStartY = useRef<number | null>(null);
  const skipCertificateClick = useRef(false);

  const previousCert = () =>
    setCertIndex((current) =>
      current === 0 ? certificates.length - 1 : current - 1,
    );

  const nextCert = () =>
    setCertIndex((current) =>
      current === certificates.length - 1 ? 0 : current + 1,
    );

  const openCertificatePreview = (index: number) => {
    setPreviewCertIndex(index);
    setPreviewZoom(1);
  };

  const closeCertificatePreview = () => {
    setPreviewCertIndex(null);
    setPreviewZoom(1);
  };

  const zoomPreviewIn = () => {
    setPreviewZoom((current) =>
      Math.min(3, Number((current + 0.25).toFixed(2))),
    );
  };

  const zoomPreviewOut = () => {
    setPreviewZoom((current) =>
      Math.max(1, Number((current - 0.25).toFixed(2))),
    );
  };

  const handleCertificateTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    certificateTouchStartX.current = touch.clientX;
    certificateTouchStartY.current = touch.clientY;
    skipCertificateClick.current = false;
  };

  const handleCertificateTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (
      certificateTouchStartX.current === null ||
      certificateTouchStartY.current === null
    ) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - certificateTouchStartX.current;
    const deltaY = touch.clientY - certificateTouchStartY.current;

    certificateTouchStartX.current = null;
    certificateTouchStartY.current = null;

    if (Math.abs(deltaX) < 42 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    skipCertificateClick.current = true;

    if (deltaX > 0) {
      previousCert();
      return;
    }

    nextCert();
  };

  const handleCertificateClick = (
    event: MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (skipCertificateClick.current) {
      skipCertificateClick.current = false;
      event.preventDefault();
      return;
    }

    openCertificatePreview(index);
  };

  if (!certificates || certificates.length === 0) return null;

  return (
    <>
      <CertSection>
        <CertHeader>
          <SectionEyebrow>Experience & Learning</SectionEyebrow>
          <SectionTitle>Professional Certifications</SectionTitle>
          <SectionBody>
            Real certificates from Dhanashree&apos;s professional learning,
            presented in a cleaner, easier-to-view format.
          </SectionBody>
        </CertHeader>

        <CertViewport>
          <CertTrack $index={certIndex}>
            {certificates.map((certificate, index) => (
              <CertSlide key={certificate.title}>
                <CertFrame
                  role="button"
                  tabIndex={0}
                  onClick={(event) => handleCertificateClick(event, index)}
                  onTouchStart={handleCertificateTouchStart}
                  onTouchEnd={handleCertificateTouchEnd}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openCertificatePreview(index);
                    }
                  }}
                  aria-label={`Preview ${certificate.title}`}
                >
                  <CertImageWrap>
                    <CertImage
                      src={certificate.src}
                      alt={certificate.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </CertImageWrap>
                  <CertCaption>{certificate.title}</CertCaption>
                </CertFrame>
              </CertSlide>
            ))}
          </CertTrack>
        </CertViewport>

        <CertControls>
          <CertButton
            type="button"
            onClick={previousCert}
            aria-label="Show previous certificate"
          >
            <ChevronLeft size={18} />
          </CertButton>
          <CertDots>
            {certificates.map((certificate, index) => (
              <CertDot
                key={certificate.title}
                type="button"
                onClick={() => setCertIndex(index)}
                aria-label={`Show certificate ${index + 1}`}
                $active={index === certIndex}
              />
            ))}
          </CertDots>
          <CertButton
            type="button"
            onClick={nextCert}
            aria-label="Show next certificate"
          >
            <ChevronRight size={18} />
          </CertButton>
        </CertControls>
      </CertSection>

      <Modal
        isOpen={previewCertIndex !== null}
        onClose={closeCertificatePreview}
      >
        {previewCertIndex !== null ? (
          <>
            <SectionTitle as="h2">
              {certificates[previewCertIndex].title}
            </SectionTitle>
            <CertControls>
              <CertButton
                type="button"
                onClick={zoomPreviewOut}
                aria-label="Zoom out certificate"
              >
                <ZoomOut size={18} />
              </CertButton>
              <SectionBody>Zoom {Math.round(previewZoom * 100)}%</SectionBody>
              <CertButton
                type="button"
                onClick={zoomPreviewIn}
                aria-label="Zoom in certificate"
              >
                <ZoomIn size={18} />
              </CertButton>
            </CertControls>
            <CertViewport>
              <CertFrame>
                <CertImageWrap
                  $preview
                  onDoubleClick={() =>
                    setPreviewZoom((current) => (current > 1 ? 1 : 2))
                  }
                >
                  <CertImage
                    src={certificates[previewCertIndex].src}
                    alt={certificates[previewCertIndex].alt}
                    $zoom={previewZoom}
                  />
                </CertImageWrap>
              </CertFrame>
            </CertViewport>
          </>
        ) : null}
      </Modal>
    </>
  );
};
