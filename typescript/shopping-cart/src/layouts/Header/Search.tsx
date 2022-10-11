import styled from "@emotion/styled";

const Form = styled.form({
  position: "relative",
  marginLeft: "auto",
  marginRight: "1rem",
});

const Input = styled.input({
  width: "180px",
  height: "28px",
  border: "2px solid #000",
  borderRadius: "9px",
});

const SearchImage = styled.img({
  position: "absolute",
  right: "0",
  width: "35px",
  cursor: "pointer",
});

const handleSearch = () => {
  //
};

export default function Search() {
  return (
    <Form>
      <Input placeholder="검색어를 입력하세요" />
      <SearchImage
        src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3bd620fa-831c-44bf-9f28-7018c7340f31%2Fsearch-removebg-preview.png?table=block&id=c6fa0712-f62d-4d50-a88e-c925e8965a69&spaceId=f08f49e0-d5e2-4c6e-9785-524d05da8a03&width=2000&userId=00f35be7-f598-4c28-bec1-5ca4b2e59847&cache=v2"
        alt="search"
        onClick={handleSearch}
      />
    </Form>
  );
}
