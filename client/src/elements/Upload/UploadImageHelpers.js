export const handleBeforeUpload = async (file, setState) => {
  try {
    const base64Url = await getBase64(file);
    setState((prevFileList) => [...prevFileList, { file, url: base64Url }]);
  } catch (error) {
    console.error("Error getting base64 URL.");
  }
  return false; // To prevent the Upload component from automatically uploading the file
};

export const handleRemove = (obj, state, setState) => {
  const { file } = obj;
  if (state && state.length > 0) {
    const newList = state.filter((item) => item.file.name !== file.name);
    setState(newList);
  }
};

export const onPreview = async (file) => {
  let src = file.url;
  if (!src) {
    src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  }
  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow?.document.write(image.outerHTML);
};

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
