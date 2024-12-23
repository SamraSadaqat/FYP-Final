export const filterByValue = (array, string) => {
  if (array) {
    return array.filter(
      (data) =>
        JSON.stringify(data).toLowerCase().indexOf(string.toLowerCase()) !== -1
    );
  } else {
    return [];
  }
};
