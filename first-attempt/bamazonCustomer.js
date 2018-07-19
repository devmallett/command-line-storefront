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

//---------------------------------------------


    // var chosen = ['View Products for Sale', 'View low inventory', 'Add Inventory', 'Add New Product'];

    // inquirer.prompt([
    //     {
    //         type: 'list',
    //         name: 'lam',
    //         message: 'View Options',
    //         choices: chosen
    //     }
    // ]).then(function ( answer ) {
    //     for (var i = 0; i<chosen.length;i++) {
    //         if ( answer === "View Products for Sale" ) {
    //             return inventory();
    //         } else if( answer === 'View low inventory' ) {
    //             return lowInventory();
    //         } else if ( answer === 'Add Incentory' ) {
    //             return addInventory();
           
    //          }

    //     }
        

    // });
   


//View products for sale  [ list avaliable inventory ]
function inventory() {
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
                console.log(productSelected + 'nbfjipsdbfiudbgfA');


                var unitsSelected = parseFloat(answer.units);
                console.log(unitsSelected);



                for (var j = 0; j < stockArray.length; j++) {
                    if (stockArray.length === choiceArray.length && stockArray[j] > unitsSelected) {
                        
                      
                                            
                    
yu();
                        

                        return console.log('You purchased ' + unitsSelected + ' ' + productSelected + "'s. Congrats")
                    }
                }
            });
            connection.end();
    });

}
 inventory()

 function yu(){
     connection.query("INSERT INTO bamazon.products SET ?",
                        {
                            product_name: answer.product_name,
                            department_name: answer.department_name,
                            price: answer.price,
                            stock_quantity: answer.stock_quantity
                        }, function (err) {
            
                            if (err) throw err;
                            console.log('Records updated');
                            connection.end();
            
            
                        });
 }


//Inquire Prompt 

//propmt (list) :  SELECT SOMETHING 
//Q1: View products for sale  [ list avaliable inventory ]

//Q2: View low inventory [ bamazon.stock_quant < 40]

//Q3: Add inventory [ bamazon.stock_quant++  ]

//Q4: Add New Product[ new table row  ]

//Q1::

//prompt: 

//Q1: What product would you like to buy? [ list avaliable inventory ]

//Q2: How many units would you like? [ numerical input  ]

//Then:
//Set DB variables 

//products.quant = 
//products.name = 

//Make DB call to grab stock_quant

// if [ numerical input ] < [products.stock_quant]

//substract [ numerical input  ] from [ producst.stock_quant ] 
//Update SQL db - NEED CALL REMINDER
//console.log ( product.stock_quant + product.name + " was added to your cart " )
// else 

//console.log( Insufficient Funds! ) [BONUS PART] Would you like to select something else?(second prompt) 

//  on 2nd prompt => 

//yes => call propmpt funciton 
//no => exit application 

//Q2::


//for bamazon.stock_quant.length 
//numQuants = bamazon.stock_quant;
//productName = bamazon.name;

//View low inventory 
// function lowInventory() {
//     connection.query('SELECT*FROM bamazon.products', function (err, res) {
//         if (err) throw err;
//         var choiceArray = [];
//         var stockArray = [];
//         function productChoices() {
//             for (var i = 0; i < res.length; i++) {
//                 if (res[i].stock_quantity < 40) {
//                     choiceArray.push(res[i].product_name);
//                     stockArray.push(res[i].stock_quantity);
//                 }
//             }
//         }
//         productChoices();

//         console.log('connected as id:  ' + connection.threadId)

//         inquirer.prompt([
//             {
//                 type: 'rawlist',
//                 name: 'itemz',
//                 message: 'Low inventory',
//                 choices: choiceArray
//             },
//             {
//                 type: 'input',
//                 name: 'units',
//                 message: 'How many Units would you like to buy?'
//             }
//         ]).then(function (answer) {
//             var productSelected = answer.itemz;
//             console.log(productSelected + 'nbfjipsdbfiudbgfA');

//             var unitsSelected = parseFloat(answer.units);
//             console.log(unitsSelected);

//             for (var j = 0; j < stockArray.length; j++) {
//                 if (stockArray.length === choiceArray.length && stockArray[j] > unitsSelected) {
//                     return console.log('You purchased ' + unitsSelected + ' ' + productSelected + "'s. Congrats")
//                 }
//             }
//         });
//         connection.end();
//     })
// }

// if  [numQuants[i] < 40] 

//push productName into low_inventory array
//console.log(low_inventory);

//else

//console.log( "Would you like to return to main menu?" )
//inquire.propmt [ Y or N] ( RETURN FUNCITON )

//if YES
//Method that your able to return to main menu 
//if NO 
//Exit Program 

//console.log [ [bamazon.name[]]] 


//Q3:: 

//prompt: 
//qA:::
//list => Which item would you like to add more of?
//name => add_inventory
//choices [low_inventory array]
//qB:::
//input => How many would you like to add?
//name => how_many

//Add inventory
// function addInventory() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'product_name',
//             message: 'What product would you like to add?'
//         },
//         {
//             //Input right now, switch to choices when more departments have been added 
//             type: 'input',
//             name: 'department_name',
//             message: 'Which department?'
//         },
//         {
//             type: 'input',
//             name: 'price',
//             message: 'Price point?'
//         },
//         {
//             type: 'input',
//             name: 'stock_quantity',
//             message: 'How much would you like to stock? (0-100)'

//         },
//     ]).then(function (answer) {
//         connection.query("INSERT INTO bamazon.products SET ?",
//             {
//                 product_name: answer.product_name,
//                 department_name: answer.department_name,
//                 price: answer.price,
//                 stock_quantity: answer.stock_quantity
//             }, function (err) {

//                 if (err) throw err;
//                 console.log('Records updated');
//                 connection.end();


//             });
//     });

// }
// addInventory()

            //Q4::
                //console.log( "What product would you like to add?" )
                    //inquirer prompt : product_name?
                                    //: department_name?
                                    //: price?
                                    //: quantity?
                    //then
                            //update table with new line items 








