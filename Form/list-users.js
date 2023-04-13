const cart = [
    { id: 1, name: "Nokia 106", price: 2300, count: 1 },
    { id: 2, name: "RadioPhone Panasocnic", price: 2890, count: 3 },
    { id: 3, name: "Vacum Lg", price: 17900, count: 5 },
  ];
  
  
  function showGoods() {
    let row = "";
    let totalSum = 0;
    cart.forEach((item) => {
      const itemSum = item.price * item.count;
      totalSum += itemSum;
      row += `<tr>
              <td>${item.id}</td>
              <td>${item.name}</td>
              <td>${item.price}</td>
              <td>${item.count}</td>
              <td>${itemSum}</td>
          </tr>`;
    });
    row += `<tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><strong>${totalSum}</strong></td>
        </tr>`;
    document.getElementById("content").innerHTML = row;
  }
  
  showGoods();
