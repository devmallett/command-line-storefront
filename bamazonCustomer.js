//NPM Calls 

//Inquire 

var inquirer = require('inquirer');

//Require 

//MySQL
var mysql = require('mysql');

//----------------------------------------------
//GLobal variables 

var low_inventory = [];


//---------------------------------------------

//SQL Connection call

var connection = mysql.createConnection({
    host: '127.0.0.1',

    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bamazon'
});

connection.connect(function (err) {
    if (err) throw err;

    console.log('connected as id' + connection.threadId);


});


connection.query('SELECT*FROM bamazon.products', function (err, res) {
    if (err) throw err;
    var choiceArray = [];
    var stockArray = [];
    function productChoices() {
        for (var i = 0; i < res.length; i++) {
            choiceArray.push(res[i].product_name);
            stockArray.push(res[i].stock_quantity);
        }
    }
    productChoices();

    inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'itemz',
                message: 'What product would you like to buy?',
                choices: choiceArray
            },
            {
                type: 'input',
                name: 'units',
                message: 'How many Units would you like to buy?'
            }
        ]).then(function (answer) {
            var productSelected = answer.itemz;
          


            var unitsSelected = parseFloat(answer.units);
            console.log(unitsSelected);



            for (var j = 0; j < stockArray.length; j++) {
                if (stockArray.length === choiceArray.length && stockArray[j] > answer.units) {

                  
                   
                        var query = connection.query(
                          "UPDATE products SET ? WHERE ?",
                          [
                            {
                              stock_quantity: answer.units,
                            }, {
                              product_name: productSelected  
                            }
                          ],
                          function(err, res) {
                              if ( err ) throw err;
                            console.log(res.affectedRows + " products updated!\n");
                           
                          }
                        );
                      
                        // logs the actual query being run
                      //  console.log(query.sql);
                      

                   return console.log('You purchased ' + unitsSelected + ' ' + productSelected + "'s. Congrats")
                }
            }
        });
 
});

   