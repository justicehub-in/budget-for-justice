export function useSearch(query, obj) {
  const newObj = {};
  Object.keys(obj).forEach((objVal) => {
    newObj[objVal] = obj[objVal].filter((item) =>
      JSON.stringify(item, ['title', 'tags'])
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  });

  return newObj;
}
