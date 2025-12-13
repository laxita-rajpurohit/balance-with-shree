import { Button, Input, Wrapper } from "./style";


export const Contact = () => (
  <Wrapper>
    <h2>CONTACT</h2>
    <Input placeholder="Name" />
    <Input placeholder="Email" />
    <Input placeholder="Subject" />
    <Input as="textarea" placeholder="Message" />
    <Button>SEND MESSAGE</Button>
  </Wrapper>
);
