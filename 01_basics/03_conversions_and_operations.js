
// Data type conversion   

                                

let score1 = null;              // type is object

let score2 = "33xyz"            // type is string

let score3 = undefined;         // type is undefine

let score4 = false;             // type is boolen

let score5 = 33;                // type is number

 console.log(typeof score1);
 console.log(typeof(score2));
 console.log(typeof score3);
 console.log(typeof score4);
 console.log(typeof score5);

                                                            // Output and Type after conversion bellow 

 let valueInNumber1 = Number(score1);                        
 console.log(typeof valueInNumber1);                        // null => 0 but type is number
 console.log(valueInNumber1);

 let valueInNumber2 = Number(score2);
 console.log(typeof valueInNumber2);                        // "33xyz"  => NAN but type is number
 console.log(valueInNumber2);

 let valueInNumber3 = Number(score3);
 console.log(typeof valueInNumber3);                        // undefined => NAN but type is numbr
 console.log(valueInNumber3);
 

 let valueInNumber4 = Number(score4);
 console.log(typeof valueInNumber4);                        // false => 0 and  true => 1 type is number
 console.log(valueInNumber4);

 let valueInNumber5 = Number(score5);
 console.log(typeof valueInNumber5);                        // 33 => 33 type is number 
 console.log(valueInNumber5);


 

 