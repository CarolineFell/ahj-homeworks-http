/* eslint-disable no-console */
export default function defaultData() {
  const params = new URLSearchParams();
  params.append('name', 'Поменять краску в принтере, ком.404');
  params.append('description', 'Принтер HP LJ1210, картриджи на складе');

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://ahj-homeworks-http.herokuapp.com/');
  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log(xhr.responseText);
    }
  });
  function xhrSend() {
    xhr.send(params);
    console.log('send default data');
  }

  function xhrAbort() {
    xhr.abort(params);
    console.log('abort default data');
  }

  setTimeout(xhrSend(), 1000);
  clearTimeout(xhrAbort(), 2000);
}