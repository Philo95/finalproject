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
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var itemNode = document.createElement('div');
    itemNode.innerHTML = item.name + ' $' + item.price;
    document.body.appendChild(itemNode);
    total += item.price;
  }
  var totalNode = document.createElement('div');
  totalNode.innerHTML = 'Total $' + total;
  document.body.appendChild(totalNode);