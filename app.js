class CellEntry {
  constructor() {
      this.sum = 0;
      this.percentage = 0;
  }
}

class OutletBasedRowEntry {
  constructor() {
      this.cells = {
          Total: new CellEntry()
      };
      this.childRows = {};
  }
  add(entry) {
      this.cells.Total.sum += entry.netamount;
      this.getOrCreateCellById(
          entry.outlet).sum += entry.netamount;
  }
  getOrCreateChildRowById(id) {
      if (!this.childRows[id]) 
          this.childRows[id] = 
              new OutletBasedRowEntry();
      return this.childRows[id];
  }
  getOrCreateCellById(id) {
      if (!this.cells[id]) 
          this.cells[id] = new CellEntry();
      return this.cells[id];
  }
}

function tabulizeData(data) {
  let TotalRowEntry = new OutletBasedRowEntry();
  data.forEach(entry => {
      TotalRowEntry.add(entry);
      TotalRowEntry.getOrCreateChildRowById(
              entry.brandname).add(entry);
      TotalRowEntry.getOrCreateChildRowById(
              entry.brandname).
              getOrCreateChildRowById(
              entry.itemname).add(entry);
  });
  renderTable(TotalRowEntry);
}

function renderTable(TotalRowEntry) {
  let $table = $('#ExpenseTable');
  let $thead = $(
'<thead><tr><th>Brand Name</th></tr><tr><th></th></tr><tr><th>Total</th></tr><thead>'),
      $tbody = $('<tbody>');
  let $headingRows = $thead.find('tr');

  function addCellEntriesToRow(
      rowEntry, $row) {
      for (let cellName in 
          TotalRowEntry.cells) {
          let cellEntry = rowEntry
              .getOrCreateCellById(cellName);
          $('<td>').html(cellEntry.sum)
                  .appendTo($row);
          $('<td>').html(cellEntry.percentage)
                      .appendTo($row);
      }
  }

  $.each(TotalRowEntry.cells, 
      function (cellName, cellEntry) {
      $('<th colspan=2>').html(cellName)
          .appendTo($headingRows.eq(0));
      $('<th>PROFIT</th>')
          .appendTo($headingRows.eq(1));
      $('<th>LOSS</th>').appendTo(
          $headingRows.eq(1));
      $('<th>').html(cellEntry.sum)
          .appendTo($headingRows.eq(2));
      $('<th>').html(cellEntry.percentage)
          .appendTo($headingRows.eq(2));
  });

  $.each(TotalRowEntry.childRows, 
      function (brandName, rowEntry) {
      let $row = $('<tr>').appendTo($tbody);
      let rowId = 'row' + $row.index();
      let firstCell = $(
'<td><i class="fas fa-plus add-btn" data-toggle="collapse" data-target=".' 
          + rowId + '"></i>' + brandName 
          + '</td>').appendTo($row);
      addCellEntriesToRow(rowEntry, $row);
      $.each(rowEntry.childRows, function (
              itemName, rowEntry) {
          $row = $('<tr>').addClass('collapse ' 
              + rowId).appendTo($tbody);
          $('<td>').html(itemName).appendTo($row);
          addCellEntriesToRow(rowEntry, $row);
      });
  });

  $thead.appendTo($table);
  $tbody.appendTo($table);
}

tabulizeData([{
  "outlet": "MUMBAI",
  "brandname": "HOTEL-1",
  "itemname": "Restaurant",
  "transactionType": "TransferIn",
  "netamount": 980
},
{
  "outlet": "MUMBAI",
  "brandname": "HOTEL-1",
  "itemname": "Hall",
  "transactionType": "TransferIn",
  "netamount": 130
},
{
  "outlet": "MUMBAI",
  "brandname": "HOTEL-1",
  "itemname": "Bakery",
  "transactionType": "TransferIn",
  "netamount": 500
},
{
  "outlet": "MUMBAI",
  "brandname": "HOTEL-2",
  "itemname": "Restaurant",
  "transactionType": "TransferIn",
  "netamount": 110
},
{
  "outlet": "MUMBAI",
  "brandname": "HOTEL-2",
  "itemname": "Party",
  "transactionType": "TransferIn",
  "netamount": 720
},
{
  "outlet": "MUMBAI",
  "brandname": "HOTEL-2",
  "itemname": "Pool",
  "transactionType": "TransferIn",
  "netamount": 40000
},
{
  "outlet": "MUMBAI",
  "brandname": "HOTEL-2",
  "itemname": "Bakery",
  "transactionType": "TransferIn",
  "netamount": 14000
},
{
  "outlet": "MUMBAI",
  "brandname": "HOTEL-2",
  "itemname": "Marriage",
  "transactionType": "TransferIn",
  "netamount": 500
},
{
  "outlet": "MUMBAI",
  "brandname": "HOTEL-2",
  "itemname": "Car Valet",
  "transactionType": "TransferIn",
  "netamount": 5500
},
{
  "outlet": "MUMBAI",
  "brandname": "HOTEL-2",
  "itemname": "Expense",
  "transactionType": "TransferIn",
  "netamount": 1000
},
{
  "outlet": "MUMBAI",
  "brandname": "HOTEL-3",
  "itemname": "Restaurant",
  "transactionType": "TransferIn",
  "netamount": 324
},
{
  "outlet": "MUMBAI",
  "brandname": "HOTEL-4",
  "itemname": "Party",
  "transactionType": "LOSS",
  "netamount": 476426
},
{
  "outlet": "JAIPUR",
  "brandname": "HOTEL-4",
  "itemname": "Party",
  "transactionType": "LOSS",
  "netamount": 115313
},
{
  "outlet": "BANGALORE",
  "brandname": "HOTEL-4",
  "itemname": "Party",
  "transactionType": "LOSS",
  "netamount": 92141
}
]);









// ---------------------------------------------------------
function toggle(btnID, eIDs) {

    // Feed the list of ids as a selector
    var theRows = document.querySelectorAll(eIDs);

    // Get the button that triggered this
    var theButton = document.getElementById(btnID);

    // If the button is not expanded...
    if (theButton.getAttribute("aria-expanded") == "false") {

      // Loop through the rows and show them
      for (var i = 0; i < theRows.length; i++) {
        theRows[i].classList.add("shown");
        theRows[i].classList.remove("hidden");
      }

      // Now set the button to expanded
      theButton.setAttribute("aria-expanded", "true");
    } 
    
    // Otherwise button is not expanded...
    else {
        
      // Loop through the rows and hide them
      for (var i = 0; i < theRows.length; i++) {
        theRows[i].classList.add("hidden");
        theRows[i].classList.remove("shown");
      }
      
      // Now set the button to collapsed
      theButton.setAttribute("aria-expanded", "false");
    }
  }