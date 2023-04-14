import {
  Container,
  Space,
  Grid,
  Stack,
  Button,
  Input,
  Textarea,
} from "@mantine/core";

import Card from "./components/cardx";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [list, setList] = useState([
    {
      title: "App 1",
      content: "Content Lorem Ipsum",
      price: 100,
    },
    {
      title: "App 2",
      content: "Content Lorem Ipsum",
      price: 50,
    },
    {
      title: "App 3",
      content: "Content Lorem Ipsum",
      price: 150,
    },
  ]);
  const click = () => {
    setTitle("");
    setContent("");
    setPrice("");
    setList([
      ...list,
      {
        title: title,
        content: content,
        price: price,
      },
    ]);
  };
  return (
    <Container>
      <Stack>
        <Input.Wrapper label="TİTLE">
          <Input
            placeholder="title"
            width={400}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Input.Wrapper>
        <Textarea
          placeholder="content"
          label="CONTENT"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Input.Wrapper label="PRİCE">
          <Input
            placeholder="price"
            label="Price"
            width={400}
            value={price}
            type="number"
            onChange={e => setPrice(e.target.value)}
          />
        </Input.Wrapper>
        <Space h="sm" />
        <Button color="orange" onClick={click}>
          ADD CARD
        </Button>
      </Stack>

      <Grid>
        {list.map(({ content, title, price }, i) => (
          <Grid.Col span={4} key={`index ${i}`}>
            <Card
              content={content}
              title={title}
              price={price}
              i={i}
              click={() => {
                let copyList = [...list];
                copyList.splice(i, 1);
                setList(copyList);
              }}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
