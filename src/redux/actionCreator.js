export const addMovieList = (data) => {
  return {
    type: "init",
    movieList: data
  }
}

export const getMovieApi = () => {
  return (dispatch) => (
    fetch("https://www.fastmock.site/mock/c055307ea9e3e0cd16fb42432123d732/api/list")
      .then((response) => response.json())
      .then((res) => {
        // console.log(res.results);
        dispatch(addMovieList(res.results))
      })
  )
}

// export const initDataActionAsync = () => {
//   // 异步方法有个默认参数就是dispatch
//   return (dispatch) => {
//     fetch(
//       "https://www.fastmock.site/mock/b8937c30ce8d93c422d595fb112f640d/api/list"
//     )
//       .then((response) => response.json())
//       .then((res) => {
//         dispatch(initDataAction(res.list));
//       });
//   };
// };