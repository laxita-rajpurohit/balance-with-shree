import { useParams } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal";
import {
  YogaSection,
  YogaContainer,
  YogaTitle,
  YogaGrid,
  YogaCard,
  YogaCardTitle,
  YogaCardDesc,
} from "../../components/Yoga/style";

const packages = [
  {
    title: "Single Session",
    price: "₹999",
    desc: "Perfect for first-time experience",
  },
  {
    title: "Monthly Program",
    price: "₹5,999",
    desc: "Consistent guided practice",
  },
  {
    title: "6 Month Journey",
    price: "₹29,999",
    desc: "Deep transformation & support",
  },
];

export default function YogaCategoryPage() {
  const { category } = useParams();
  const { ref, inView } = useReveal();

  return (
    <YogaSection ref={ref}>
      <YogaContainer>
        <YogaTitle>{category?.replace("-", " ")} Yoga Programs</YogaTitle>

        <YogaGrid>
          {packages.map((p) => (
            <YogaCard key={p.title}>
              <YogaCardTitle>{p.title}</YogaCardTitle>
              <h2>{p.price}</h2>
              <YogaCardDesc>{p.desc}</YogaCardDesc>
            </YogaCard>
          ))}
        </YogaGrid>
      </YogaContainer>
    </YogaSection>
  );
}
