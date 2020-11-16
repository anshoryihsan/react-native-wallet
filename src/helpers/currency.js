const currency = (val) => {
  if (typeof val === 'number') val = val.toString();
  else if (val === undefined) val = '0';

  return val.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  // return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
};

export {currency};
