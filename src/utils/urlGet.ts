import axios from 'axios';

type Cb = (data: any) => void;

// json 같은 것은 다른 서버 간에 데이터를 주고 받을 때 제한될 수 있음
const urlGet = async (url: string, cb: Cb) => {
  const result = await fetch(url).then((response) => {
    console.log(response);
    return response.json();
  });
  cb(result);
};

export default urlGet;
