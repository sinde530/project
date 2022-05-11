import React, { useRef } from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  height: 4rem;
  padding: 0.8rem 1rem;
  background: #000;
  color: #fff;
`;
const A = styled.a`
  line-height: 0.6;
  text-decoration: none;
  color: #fff;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;
const LogoImage = styled.img``;
const Title = styled.h1``;
const Input = styled.input`
  flex-basis: 100%;
  font-size: 1.2rem;
  outline: 0;
`;
const SearchImage = styled.img`
  padding: 0.2rem 0.2rem;
  height: 100%;
`;
const Button = styled.button`
  background-color: darkgray;
  outline: 0;
`;

// 콜백함수로 부르기
function Header({ onSearch }) {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container>
      <A href="/">
        <Logo>
          <LogoImage src="/images/logo.png" alt="logo" />
          <Title>Youtube</Title>
        </Logo>
      </A>
      <Input type="search" placeholder="Search.." onKeyPress={onKeyPress} ref={inputRef} />
      <Button type="submit" onClick={onClick}>
        <SearchImage src="/images/search.png" alt="search" />
      </Button>
    </Container>
  );
}

export default Header;
