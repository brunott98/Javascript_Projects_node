/*I made this six sided four dices simulator to help me and my friends to play Dungeons and Dragons!
Use to get your character stats.

Enjoy!

brunott98 aka Childe Teixeira(hackerrank) or Bruno Teixeira Tibério(linkedin)
*/

function Roll_Dice(min=1,max=7){     //You can also change the number of sides by changing the number of max using that formula (max = side + 1)
                                    //Example: for six sided dice use max as 7.

    const result = Math.random() * (max-min) + min;
    return Math.floor(result);

}


let number_dices = 0;
let stats = [];

while(number_dices != 4){   //You can also change this number to get more dices! 

    stats.push(Roll_Dice());
    number_dices = number_dices + 1;
    
}
console.log(`Your dices rolls: ${stats}\nUsing: ${number_dices} dices.\n`)






