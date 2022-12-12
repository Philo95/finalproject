var items = [
    {
      name: 'Chillyshelly',
      price: 25.25
    },
    {
      name: 'Wintersheek',
      price: 0.30
    },
    {
      name: 'Recycler',
      price: 0.15
    },
    {
        name: 'Dampfallers',
        price: 0.15
      },
      {
        name: 'Polka-princess',
        price: 0.15
      },
      {
        name: 'Oomphaloompa',
        price: 0.15
      },
      {
        name: 'Dirtysammies',
        price: 0.15
      },
      {
        name: 'thiccboots',
        price: 0.15
      }

  ];
  function addTheValue(secondValue) {
    var fValue = document.getElementById("firstValue");
    firstValue.innerHTML = parseInt(fValue.innerHTML) +
    parseInt(secondValue);
 }