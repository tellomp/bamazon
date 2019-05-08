var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require ("cli-table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
  });

  function InventoryAndShop() {
    connection.query("SELECT * FROM products", function(err, res) {
      var table = new Table ({
        head : ['ID', 'Product Name', ' Department', 'Price', 'Stock Quantity']
      });

      
      console.log("*//*//*//*//Welcome to BAMAZON//*//*//*//*//");
      console.log('--------------------------------------------');
      console.log ("HERE ARE OUR ITEMS FOR SALE");
      console.log ('---------------------------');
      for (var i = 0; i < res.length; i++) {
        table.push ([res[i].id,res[i].product_name, res[i].department_name,res[i].price, res[i].stock_quantity]);
      }

      console.log(table.toString());

      inquirer.prompt([
      {
    name:"ID",
    type: "input",
    message: "Please type the ID of the item you would like to buy",
    filter: Number,
  },
        {
    name:"units",
    type: "input",
    message: "how many units would you like to buy?",
    filter: Number,
      }
    ]).then(function (answer){
      var buyerIDPick= answer.ID - 1;
      var chosenProduct = res[buyerIDPick];
      var buyerUnits = answer.units;

      if (buyerUnits <= res[buyerIDPick].stock_quantity) {
        console.log ("Your total for"+ ' ' + answer.units + ' ' + res[buyerIDPick].product_name + ' '+ "is:" + " " + res[buyerIDPick].price.toFixed(2)* buyerUnits);
        connection.query("UPDATE products SET ? WHERE ?", 
        [{
        stockQuantity : res[buyerIDPick].stock_quantity - buyerUnits
        },
        {
        id: res[buyerIDPick].id
        }],function (err, res) {  
          InventoryAndShop ();

      });
      
      } else {
        console.log ("We apologize, but at the moment we do not have that quantity in stock.")
        InventoryAndShop();
      }

    })

  })

}

InventoryAndShop ();


