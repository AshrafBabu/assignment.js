function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var result = feetToMile(25);
// console.log(result);

function woodCalculator(chair, table, bed){
    var subject1 = chair;
    var subject2 = table * 3;
    var subject3 = bed * 5;
    var result = subject1 + subject2 + subject3;
    console.log(result,"Cubic metre");
}
 // woodCalculator(2, 3, 5);

 function tinyFriend(names){
     var smallest = names[0];
     for (var i=0; i<names.length; i++){
         var friendList = names[i];
         if (friendList.length<smallest.length){
             smallest=friendList;
         }
     }
     return smallest;
 }

 var check = ['belal', 'sabbir', 'riad', 'opu'];
 // console.log (tinyFriend(check));

 function brickCalculator(floor){
     if(floor <=10){
         var feet = 1000;
         var bricks1 = feet * 15 * floor;
         var total = bricks1;
     }

     else if(floor>=11 && floor <=20){
         var bricks2 = feet * 12 * floor;
         var total2 = bricks1 + bricks2
     }

     else if(floor >=21){
         var bricks3 = feet * 10 * floor;
         var total3 = bricks3 + total2;
     }
     return total3;
 }
 var result = brickCalculator(23);
 console.log(result);

