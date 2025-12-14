// src/components/Services/index.tsx
import { CardsRow, Card, Icon, Title, Divider, LinkText } from "./style";

const SERVICES = [ { id: 1, title: "FOR OVERALL FITNESS", 
  icon: "🧘‍♀️", bullets: [ "Manage Weight", "Fix Posture", "Relieve Stress", "Balance Doshas", "Revitalize Skin & Hair" ], cta: "Transformation Program • JOIN NOW" }, { id: 2, title: "FOR ALL WOMEN HEALTH NEEDS", icon: "♀️", bullets: [ "Infertility", "Hormonal Imbalance", "Thyroid", "PCOS/PCOD", "Menstrual Disorders" ], cta: "Virtual Care Program • JOIN NOW" }, { id: 3, title: "FOR EXPECTING MOTHERS", icon: "🤰", bullets: [ "Reduce Risk of Complication", "Improve Odds of a Natural Birth", "Easier Labor Experience", "Quicker Recovery Post Delivery", "Reduced Pain & Swelling" ], cta: "Most Popular • JOIN NOW" }, { id: 4, title: "POST PREGNANCY RESET", icon: "💪", bullets: [ "Regain Body Shape & Confidence", "Reduce Back, Neck & Muscle Pain", "Better Sleep & Stress Relief", "Core & Pelvic Floor Strengthening" ], cta: "JOIN NOW" } ];

export const Services = () => (
  <CardsRow>
    {SERVICES.map(service => (
      <Card key={service.id}>
        {/* <Icon aria-hidden>{service.icon}</Icon> */}
        <Title>{service.title}</Title>
        <Divider />
        <LinkText>View Details +</LinkText>
      </Card>
    ))}
  </CardsRow>
);
