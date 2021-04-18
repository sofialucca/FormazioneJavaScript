function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows,columns){
    return 200*monitorCount(rows,columns);
  }
  
  const totalCost = costOfMonitors(5,4);
  
  console.log(totalCost)