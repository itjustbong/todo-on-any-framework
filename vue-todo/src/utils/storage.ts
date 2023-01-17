export const getData = (key: string) => {
  const savedData = localStorage.getItem(key);
  return savedData && JSON.parse(savedData);
};

export const saveData = (value: unknown, key: string) => {
  const toJson = JSON.stringify(value);
  localStorage.setItem(key, toJson);
};
