import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, TitleContainer, Title, ArrowDownIcon, ArrowRightIcon, DescriptionContainer, Description } from './style';

interface DetailsMenuProps {
  title: string;
}

export function DetailsMenu({ title }: DetailsMenuProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <TitleContainer
        onPress={toggleDescription}
        style={{
          borderBottomWidth: isExpanded ? 0 : 1,
          borderBottomColor: isExpanded ? 'transparent' : '#b6b6b6',
        }}
      >
        <Title>{title}</Title>
        {isExpanded ? <ArrowDownIcon /> : <ArrowRightIcon />}
      </TitleContainer>
      {isExpanded && (
        <DescriptionContainer>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nibh nisi, euismod non vulputate eu, scelerisque id neque. Nullam sed lacus velit. Nullam pretium orci et lectus suscipit hendrerit.
          </Description>
        </DescriptionContainer>
      )}
    </Container>
  );
}
