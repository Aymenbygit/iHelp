
  const MyComm = (state = [] , action) => {
    switch (action.type) {
      case 'GET_MY_COM':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default MyComm;
  