import styled from "@emotion/styled";


const Container = styled.div`
display: flex;
height: 4rem;
padding: 0.8rem 1rem;
background: #000;
color: #fff;
`
const Logo = styled.div`
display: flex;
align-items: center;
margin-right: 1rem;
`
const LogoImage = styled.img`
`
const Title = styled.h1`
`
const Input = styled.input`
flex-basis: 100%;
font-size: 1.2rem;
outline: 0;
`
const SearchImage = styled.img`
padding: 0.2rem 0.2rem;
height: 100%;
`
const Button = styled.button`
background-color: darkgray;
outline: 0;
`

function Header() {
    return (
        <Container>
            <Logo>
                <LogoImage src="/images/logo.png" alt="logo" />
                <Title>Youtube</Title>
            </Logo>
            <Input type="search" placeholder="Search.." />
            <Button type="submit">
                <SearchImage src="/images/search.png" alt="search" />
            </Button>
        </Container>
    )
}

export default Header;
