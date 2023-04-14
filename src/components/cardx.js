import { Card, CloseButton, Image, Text, Button, Group } from "@mantine/core";
import logo from "./logo.jpg";
const Cardx = props => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={logo} height={300} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{props.title}</Text>

        <CloseButton aria-label="Close modal" onClick={props.click} />
      </Group>

      <Text size="sm" color="dimmed">
        {props.content}
      </Text>

      <Button color="orange" fullWidth mt="md" radius="md">
        {props.price} $
      </Button>
    </Card>
  );
};
export default Cardx;
