let defaultState = {
  value: "",
  footerList: [
    {
      icon: "icon-fenlei",
      title: "电影/影院"
    },
    {
      icon: "icon-cainixihuan",
      title: "视频"
    },
    {
      icon: "icon-diannao",
      title: "小视频"
    },
    {
      icon: "icon-qianbao",
      title: "演出"
    },
    {
      icon: "icon-wode",
      title: "我的"
    },
  ],
  movieList: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "init":
      return {
        ...state,
        movieList: action.movieList
      };
    default:
      return {
        ...state
      };
  }
}

export default reducer