import { useNavigate } from "react-router-dom";
import {
  CategorySection,
  CategoryGrid,
  CategoryCard,
  CategoryTitle,
  CategoryDesc,
} from "./style";

const categories = [
  {
    slug: "prenatal",
    title: "Prenatal Yoga",
    desc: "Safe, gentle support for mother and baby.",
  },
  {
    slug: "postnatal",
    title: "Postnatal Yoga",
    desc: "Rebuild strength and heal after childbirth.",
  },
  {
    slug: "fertility",
    title: "Yoga for Conceiving",
    desc: "Balance hormones and reduce stress naturally.",
  },
  {
    slug: "weight-loss",
    title: "Weight Loss Yoga",
    desc: "Mindful movement for metabolism and energy.",
  },
  {
    slug: "overall-health",
    title: "Overall Health",
    desc: "Complete wellness for body and mind.",
  },
];

export default function YogaCategories() {
  const navigate = useNavigate();

  return (
    <CategorySection>
      <CategoryGrid>
        {categories.map((c) => (
          <CategoryCard
            key={c.slug}
            onClick={() => navigate(`/yoga/${c.slug}`)}
          >
            <CategoryTitle>{c.title}</CategoryTitle>
            <CategoryDesc>{c.desc}</CategoryDesc>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </CategorySection>
  );
}
