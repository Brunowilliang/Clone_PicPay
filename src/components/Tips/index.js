import React from "react";
import { Container, Option, Title, Img } from "./styles";

import Img8 from "../../images/08.png";
import Img9 from "../../images/09.png";
import Img10 from "../../images/10.png";
import Img11 from "../../images/11.png";
import Img12 from "../../images/12.png";

const items = [
  {
    key: String(Math.random()),
    img: Img8,
    title: "Pague Suas Contas sem sair de casa",
    bgColor: "#172c4a",
  },
  {
    key: String(Math.random()),
    img: Img9,
    title: "Pague Suas Contas sem sair de casa",
    bgColor: "#6a0159",
  },
  {
    key: String(Math.random()),
    img: Img10,
    title: "Pague Suas Contas sem sair de casa",
    bgColor: "#4139c8",
  },
  {
    key: String(Math.random()),
    img: Img11,
    title: "Pague Suas Contas sem sair de casa",
    bgColor: "#00ab4b",
  },
  {
    key: String(Math.random()),
    img: Img12,
    title: "Pague Suas Contas sem sair de casa",
    bgColor: "#ba2f76",
  },
];

export default function Tips() {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}
