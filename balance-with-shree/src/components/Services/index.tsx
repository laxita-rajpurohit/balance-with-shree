// src/components/Services/index.tsx
import { CardsRow, Card, Icon, Title, Divider, LinkText } from "./style";

const SERVICES = [
  { id: 1, title: "Personal Yoga", icon: "🧘‍♀️" },
  { id: 2, title: "Group Sessions", icon: "👥" },
  { id: 3, title: "Nutrition Guidance", icon: "🥣" },
  { id: 4, title: "Wellness Programs", icon: "🌿" }
];

export const Services = () => (
  <CardsRow>
    {SERVICES.map(service => (
      <Card key={service.id}>
        <Icon aria-hidden>{service.icon}</Icon>
        <Title>{service.title}</Title>
        <Divider />
        <LinkText>View Details +</LinkText>
      </Card>
    ))}
  </CardsRow>
);
