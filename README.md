# Bamazon

## Overview

* A CLI App that is an Amazon-like storefront built with MySQL. The app takes in orders from customers and depletse stock from the store's inventory. 

## Requirements and Instructions 
* Created a MySQL Database called bamazon that has a table called products. The products table has the following columns: 
  * item_id (unique id for each product)
  * product_name (Name of product)
  * department_name
  * price (cost to customer)
  * stock_quantity (how much of the product is available in stores)
* The database carries 10 different products at the moment and it displays the database in table format when user runs ``` 'node bamazonCustomer.js' ```


Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
The app should then prompt users with two messages.



The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.



Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.



If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.



However, if your store does have enough of the product, you should fulfill the customer's order.


This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.
