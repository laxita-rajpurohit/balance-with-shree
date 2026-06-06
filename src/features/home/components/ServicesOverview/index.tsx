import { ArrowRight, type LucideIcon } from "lucide-react";
import { siteMedia } from "../../../../shared/data/media";
import {
  OfferSection,
  OfferHeader,
  SectionEyebrow,
  SectionTitle,
  OfferGrid,
  OfferCard,
  OfferImageWrap,
  OfferImage,
  OfferTitle,
  OfferBody,
  OfferItems,
  OfferItem,
  OfferItemIcon,
  OfferItemText,
  OfferLink,
} from "./styles";

interface ServiceRow {
  label: string;
  icon: LucideIcon;
}

interface ServicesOverviewProps {
  yogaRows: readonly ServiceRow[];
  nutritionRows: readonly ServiceRow[];
  ayurvedaRows: readonly ServiceRow[];
}

export const ServicesOverview = ({
  yogaRows,
  nutritionRows,
  ayurvedaRows,
}: ServicesOverviewProps) => {
  return (
    <OfferSection>
      <OfferHeader>
        <SectionEyebrow>What I Offer</SectionEyebrow>
        <SectionTitle as="h2">Yoga, Nutrition & Ayurveda</SectionTitle>
      </OfferHeader>

      <OfferGrid>
        <OfferCard>
          <OfferImageWrap>
            <OfferImage
              src={siteMedia.home.homeYogaServiceWatercolor.src}
              alt={siteMedia.home.homeYogaServiceWatercolor.alt}
              loading="lazy"
              decoding="async"
            />
          </OfferImageWrap>

          <OfferTitle>Yoga that supports your body & life</OfferTitle>
          <OfferBody>
            Yoga at Balance with Shree is therapeutic, mindful, and deeply
            personalised. The focus is not on flexibility or intensity, but on
            creating strength, stability, awareness, and calm — in a way that
            supports your daily life.
          </OfferBody>
          <OfferItems>
            {yogaRows.map(({ label, icon: Icon }) => (
              <OfferItem key={label}>
                <OfferItemIcon>
                  <Icon size={15} strokeWidth={1.9} />
                </OfferItemIcon>
                <OfferItemText>{label}</OfferItemText>
              </OfferItem>
            ))}
          </OfferItems>
          <OfferLink to="/yoga">
            Explore Yoga <ArrowRight size={16} />
          </OfferLink>
        </OfferCard>

        <OfferCard>
          <OfferImageWrap>
            <OfferImage
              src={siteMedia.home.homeNutritionBowlWatercolor.src}
              alt={siteMedia.home.homeNutritionBowlWatercolor.alt}
              loading="lazy"
              decoding="async"
            />
          </OfferImageWrap>

          <OfferTitle>Nourish with Awareness</OfferTitle>
          <OfferBody>
            Personalised nutrition that supports digestion, hormones, and energy
            — rooted in mindful eating, lifestyle balance, and Indian home food.
          </OfferBody>
          <OfferItems>
            {nutritionRows.map(({ label, icon: Icon }) => (
              <OfferItem key={label}>
                <OfferItemIcon>
                  <Icon size={15} strokeWidth={1.9} />
                </OfferItemIcon>
                <OfferItemText>{label}</OfferItemText>
              </OfferItem>
            ))}
          </OfferItems>
          <OfferLink to="/nutrition">
            Explore Nutrition <ArrowRight size={16} />
          </OfferLink>
        </OfferCard>

        <OfferCard>
          <OfferImageWrap>
            <OfferImage
              src={siteMedia.home.homeAyurvedaMortarWatercolor.src}
              alt={siteMedia.home.homeAyurvedaMortarWatercolor.alt}
              loading="lazy"
              decoding="async"
            />
          </OfferImageWrap>

          <OfferTitle>Ayurveda & Lifestyle Balance</OfferTitle>
          <OfferBody>
            Ancient Ayurvedic wisdom adapted for modern life — helping you
            understand your body’s constitution, improve digestion, regulate
            stress, and build supportive daily routines in a gentle, sustainable
            way.
          </OfferBody>
          <OfferItems>
            {ayurvedaRows.map(({ label, icon: Icon }) => (
              <OfferItem key={label}>
                <OfferItemIcon>
                  <Icon size={15} strokeWidth={1.9} />
                </OfferItemIcon>
                <OfferItemText>{label}</OfferItemText>
              </OfferItem>
            ))}
          </OfferItems>
          <OfferLink to="/ayurveda">
            Explore Ayurveda <ArrowRight size={16} />
          </OfferLink>
        </OfferCard>
      </OfferGrid>
    </OfferSection>
  );
};
