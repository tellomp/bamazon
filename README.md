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
* The database carries 10 different products at the moment and when a customer runs ``` 'node bamazonCustomer.js' ``` all the available items for sale will be displayed in table format. 

* The app prompts customers with the two following messages:
  * ``` 'Please type the ID of the item you would like to buy' ```
  * ``` 'How many units would you like to buy? ' ```

* Once the customer has placed the order, the apps checks if bamazon has enough of the product to meet the customer's request.

* If it can't meet the customer's request, the app logs ``` We apologize, but at the moment we do not have that quantity in stock.' ```, and prevents the order from going through.

* If Bamazon has enough of the product, the app fulfills the customer's order.

* This means updates the SQL database to reflect the remaining quantity.

* Once the update goes through, the customer is given a total for their order. 

## App Demo
* Click on the link to watch a demo of the app! 

## Technologies Used
* JavaScript
* Node.js
* MySQL
* Inquirer
* Cli-table NPM


