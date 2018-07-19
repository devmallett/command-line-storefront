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
menuOption();

function menuOption() {
    var chosen = ['View Products for Sale', 'View Low Inventory', 'Add Inventory', 'Add New Product'];
    inquirer.prompt([
        {
            type: 'rawlist',
            name: 'ops',
            choices: chosen

        }
    ]).then(function (answer) {
          
    
        console.log(JSON.stringify(answer));

        // for (var i =0; i<chosen.lenght; i++) {
        //     if (answer === chosen[0]) {
        //         console.log("Selecting all products...\n");
        //         connection.query("SELECT * FROM products", function (err, res) {
        //             if (err) throw err;
    
        //             console.log(res.product_name);
        //             connection.end();
        //         });
        //     }

        // }

       
            // } else if ( answer === 'View Low Inventory' ) {
            //     return lowInventory();
            // } else if ( answer === 'Add Inventory') {
            //     return addInventory();
            // }else if ( answer === 'Add New Product' ) {
            //     return newProduct()
        


    })
};

//function readProducts() {
//     console.log("Selecting all products...\n");
//     connection.query("SELECT * FROM products", function(err, res) {
//       if (err) throw err;
   
//       console.log(res);
//       connection.end();
//     });
//   }



// connection.query('SELECT*FROM bamazon.products', function (err, res) {
//     if (err) throw err;
//     var choiceArray = [];
//     var stockArray = [];
//     function productChoices() {
//         for (var i = 0; i < res.length; i++) {
//             choiceArray.push(res[i].product_name);
//             stockArray.push(res[i].stock_quantity);
//         }
//     }
//     productChoices();

//     inquirer
//         .prompt([
//             {
//                 type: 'rawlist',
//                 name: 'itemz',
//                 message: 'What product would you like to buy?',
//                 choices: choiceArray
//             },
//             {
//                 type: 'input',
//                 name: 'units',
//                 message: 'How many Units would you like to buy?'
//             }
//         ]).then(function (answer) {