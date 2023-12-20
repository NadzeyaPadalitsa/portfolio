import React from 'react';
import styled from 'styled-components';

type ProjectPropsType = {
  title: string
  src: string
  text: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={props.src} alt={props.title}/>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href="">Demo</Link>
      <Link href="">Code</Link>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  max-width: 350px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Title = styled.h3`

`
const Text = styled.p`

`

const Link = styled.a`

`
