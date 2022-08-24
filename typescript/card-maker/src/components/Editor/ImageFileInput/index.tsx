import { useRef, useState } from 'react';

import styles from './index.module.css';

interface Props {
  ImageUpload: any;
  name: string;
  onFileChange: (file: any) => void;
}

export default function ImageFileInput({
  ImageUpload,
  name,
  onFileChange,
}: Props) {
  const [loading, setLoading] = useState<boolean | null>(false);
  const inputRef = useRef<any>(null);

  const handleClickButton = (e: any) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (e: any) => {
    setLoading(true);

    const uploaded = await ImageUpload.upload(e.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div>
      <input
        ref={inputRef}
        accept="image/*"
        type="file"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <button type="button" onClick={handleClickButton}>
          {name || 'no File'}
        </button>
      )}
      {loading && <div className={styles.loading} />}
    </div>
  );
}
