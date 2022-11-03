const prodcutReducer = (state, action) => {

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true
      }

    case "GET_API_DATA":
      const featureData = action.payload.data.filter((curEle) => {
        return curEle.featured === true
      });
      return {
        ...state,
        isLoading: false,
        prodcuts: action.payload.data,
        featureProdcuts: featureData
      }

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      }

    default:
      return state;
  }
}

export default prodcutReducer