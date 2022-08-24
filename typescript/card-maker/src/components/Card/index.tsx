import styles from './card.module.css';

import {
  Container,
  Avatar,
  Information,
  NameField,
  CompanyField,
  TitleField,
  EmailField,
  MessageField,
} from './styled';

interface Props {
  cards: any;
}

export default function Card({ cards }: Props) {
  const { name, company, title, email, message, theme, fileUrl } = cards;
  const DEFAULT_IMAGE =
    'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7be83f17-af07-4577-ad2f-ab44ba8bf629/docusaurus1.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220824T055012Z&X-Amz-Expires=86400&X-Amz-Signature=0a8ad5482768d7a827cc809f0f0b180f81e756840084209d4ea588cc38b91112&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22docusaurus1.svg%22&x-id=GetObject';

  const url = fileUrl || DEFAULT_IMAGE;

  const getStyles = (theme: any) => {
    switch (theme) {
      case 'dark':
        return styles.dark;
      case 'light':
        return styles.light;
      case 'colorful':
        return styles.colorful;
      default:
        throw new Error(`unknow theme: ${theme}`);
    }
  };
  return (
    <Container className={`${styles.card} ${getStyles(theme)}`}>
      <Avatar src={url} alt={`${url} Image Error`} />
      <Information>
        <NameField>{name}</NameField>
        <CompanyField>{company}</CompanyField>
        <TitleField>{title}</TitleField>
        <EmailField>{email}</EmailField>
        <MessageField>{message}</MessageField>
      </Information>
    </Container>
  );
}
