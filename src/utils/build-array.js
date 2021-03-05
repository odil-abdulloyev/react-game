const buildArray = (arr, len) => {
  const res = [];
  for (let i = 0; i < len; ++i) {
    res.push(arr[i % arr.length]);
  }
  return res;
};

export default buildArray;
