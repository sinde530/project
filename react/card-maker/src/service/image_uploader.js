class ImageUpload {
  async upload(file) {
    // 파일을 업로드하고 나서 서버에 이미지 url return;
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'pdzaoz52');
    const result = await fetch(
      //
      'https://api.cloudinary.com/v1_1/drqni4rhj/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUpload;
