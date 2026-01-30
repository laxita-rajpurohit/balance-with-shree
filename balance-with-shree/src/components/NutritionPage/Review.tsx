"use client";

import styled, { keyframes } from "styled-components";

/* =======================
   REVIEW DATA
======================= */

const REVIEWS = [
  {
    name: "Mandar Athavale",
    handle: "@athavalemandar",
    image: "/reviews/mander.jpeg",
    text: "Everyday yoga practice for the last 03 months has improved my body flexibility and concentration. Dhanashree guides well and helps improve each asana. I highly recommend her yoga sessions.",
  },
  {
    name: "Harshada Deo",
    handle: "@deoharshada",
    image: "/reviews/mander.jpeg",
    text: "Practicing yoga with Dhanashree has been an incredible experience. She ensures every asana is done comfortably and perfectly. Her sessions have helped me balance my PCOD problem and spondylitis.",
  },
  {
    name: "Mohini Sonak",
    handle: "@mohinisonak",
    image: "/reviews/mander.jpeg",
    text: "Daily yoga sessions have relieved my back pain and improved my flexibility. After yoga, my body feels energetic and I stay mentally fit throughout the day.",
  },
  {
    name: "Kavita Patel",
    handle: "",
    image: "/reviews/mander.jpeg",
    text: "Grateful for the incredible transformation in my health. After struggling with PCOD and medication, her personalized diet and yoga sessions worked wonders. In just 3 months, my cycle is back on track.",
  },
];

const LOOPED_REVIEWS = [...REVIEWS, ...REVIEWS];

/* =======================
   COMPONENT
======================= */

export default function ClientReviews() {
  return (
    <Section>
      <Title>Client Love</Title>
      <SubTitle>Real stories. Real transformations.</SubTitle>

      <SliderWrapper>
        <SliderTrack>
          {LOOPED_REVIEWS.map((review, index) => (
            <CardWrapper key={index}>
              <Avatar>
                <img src={review.image} alt={review.name} />
              </Avatar>

              <ReviewCard>
                <QuoteTop>“</QuoteTop>

                <ReviewText>{review.text}</ReviewText>

                <Name>{review.name}</Name>
                {review.handle && <Handle>{review.handle}</Handle>}

                <QuoteBottom>”</QuoteBottom>
              </ReviewCard>
            </CardWrapper>
          ))}
        </SliderTrack>
      </SliderWrapper>
    </Section>
  );
}

/* =======================
   STYLES
======================= */

const Section = styled.section`
  padding: 100px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  font-family: "Playfair Display", serif;
`;

const SubTitle = styled.p`
  max-width: 600px;
  margin: 16px auto 70px;
  color: #666;
`;

/* SLIDER */

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const SliderTrack = styled.div`
  display: flex;
  gap: 60px;
  width: max-content;
  animation: ${scroll} 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

/* CARD WRAPPER (IMPORTANT FIX) */

const CardWrapper = styled.div`
  position: relative;
  overflow: visible;
`;

/* CARD */

const ReviewCard = styled.div`
  background: #ffffff;
  width: 360px;
  padding: 90px 40px 70px;
  border-radius: 28px;
  position: relative;
  text-align: center;

  box-shadow:
    0 24px 50px rgba(0, 0, 0, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.9);

  @media (max-width: 480px) {
    width: 300px;
    padding: 80px 30px 60px;
  }
`;

/* AVATAR (FIXED VISIBILITY) */

const Avatar = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;

  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #fff;
  padding: 6px;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

/* QUOTES */

const QuoteTop = styled.span`
  position: absolute;
  top: 24px;
  left: 28px;
  font-size: 64px;
  color: #d4af37;
  font-family: serif;
  line-height: 1;
`;

const QuoteBottom = styled.span`
  position: absolute;
  bottom: 20px;
  right: 28px;
  font-size: 64px;
  color: #d4af37;
  font-family: serif;
  line-height: 1;
`;

/* TEXT */

const ReviewText = styled.p`
  font-family: "Cormorant Garamond", serif;
  font-size: 1.18rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 36px;
`;

/* NAME */

const Name = styled.h4`
  font-weight: 600;
  font-size: 1.05rem;
  margin-bottom: 6px;
`;

const Handle = styled.p`
  font-size: 0.9rem;
  color: #999;
`;
