import React, { useState } from 'react';

interface NewPostFormProps {
  onNewPost: (text: string) => void;
}

const NewPostForm: React.FC<NewPostFormProps> = ({ onNewPost }) => {
  const [newPostText, setNewPostText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNewPost(newPostText);
    setNewPostText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newPostText}
        onChange={(e) => setNewPostText(e.target.value)}
        placeholder="텍스트 입력하셈."
      />
      <button type="submit">버튼 클릭해서 텍스트 인풋창 얻어가라.</button>
    </form>
  );
};

export default NewPostForm;
