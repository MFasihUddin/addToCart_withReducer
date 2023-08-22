
const cartReducer = (state,action)=>{
switch (aaction.type) {
    case "ADD_ITEM":
        return (item) => {
            let isPresent = false;
            cart.forEach((product) => {
              if (item.id === product.id) {
                isPresent = true;
              }
            });
        
            if (isPresent) {
              setWarning(true);
              setTimeout(() => {
                setWarning(false);
              }, 2000);
              return;
            }
            setCart([...cart, item]);
          }

    default:
        break;
}
}

handleClick: (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  },