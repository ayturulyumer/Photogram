function transformRowsMatrix(array) {
  const rows = array.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);
  return rows;
}

export default transformRowsMatrix;
