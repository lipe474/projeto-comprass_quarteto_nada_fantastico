import React from "react";

import { Container, Title, ButtonMenu } from "./style";

import SvgHeader from "@assets/icons/back.svg";

interface HeaderProps {
  title: string;
  onCheck: () => void;
}

function Header({ title, onCheck }: HeaderProps) {
  return (
    <Container>
      <ButtonMenu onPress={onCheck}>
        <SvgHeader accessibilityHint="svg-header" />
      </ButtonMenu>

      {title && <Title>{title}</Title>}
    </Container>
  );
}

export default Header;
