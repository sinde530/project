import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

interface PostProps {
  post: IPost;
  onPostChange: (id: number, text: string) => void;
}

const Post: React.FC<PostProps> = ({ post, onPostChange }) => {
  const [style, setStyle] = useState({
    fontSize: post.fontSize,
    fontWeight: post.fontWeight,
    color: post.color,
  });

  const handleDoubleClick = () => {
    const newFontSize = prompt('Enter font size:', style.fontSize);
    const newFontWeight = prompt('Enter font weight:', style.fontWeight);
    const newColor = prompt('Enter color:', style.color);

    setStyle({
      fontSize: newFontSize || style.fontSize,
      fontWeight: newFontWeight || style.fontWeight,
      color: newColor || style.color,
    });
  };

  return (
    <Draggable>
      <ResizableBox width={300} height={200} className="box" axis="both">
        <div
          onDoubleClick={handleDoubleClick}
          style={style}
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => onPostChange(post.id, e.target.textContent || '')}
        >
          {post.text}
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default Post;
