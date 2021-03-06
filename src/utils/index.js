// eslint-disable-next-line import/prefer-default-export
export const save = (filename, data) => {
  const blob = new Blob([data], { type: 'text' });
  //   const newWindow = window.open('/');
  //   newWindow.onload = () => {
  //     newWindow.location = URL.createObjectURL(blob);
  //   };


  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
};
