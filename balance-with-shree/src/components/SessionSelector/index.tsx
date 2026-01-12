import { useNavigate } from "react-router-dom";
import { Wrapper, Title, OptionsGrid, OptionCard } from "./style";

type Props = {
  onSelect?: () => void;
};

export const SessionSelector = ({ onSelect }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    onSelect?.();
    navigate(path);
  };

  return (
    <Wrapper>
      <Title>Book a Session</Title>

      <OptionsGrid>
        <OptionCard onClick={() => handleNavigate("/yoga")}>
          <h4>Yoga</h4>
          <p>Personal & therapeutic yoga sessions</p>
        </OptionCard>

        <OptionCard onClick={() => handleNavigate("/ayurveda")}>
          <h4>Ayurveda</h4>
          <p>Holistic healing & lifestyle guidance</p>
        </OptionCard>

        <OptionCard onClick={() => handleNavigate("/nutrition")}>
          <h4>Nutrition</h4>
          <p>Mindful & clinical nutrition support</p>
        </OptionCard>
      </OptionsGrid>
    </Wrapper>
  );
};
