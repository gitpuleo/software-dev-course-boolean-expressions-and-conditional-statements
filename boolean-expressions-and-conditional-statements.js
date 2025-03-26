/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
let hasCompass = true;

console.log("You see two paths: one leads to the mountains, the other to the village. Behind you is a forest.");
const choice = readline.question("Do you go to the 'mountains', the 'village', or explore the 'forest'? ");
if (choice === "mountains") {
  if (hasTorch) {
    console.log("You safely navigate through the dark mountains.");
  } else {
    console.log("It's too dark to proceed. You decide to turn back.");
  }
} else if (choice === "village" || (hasMap && hasCompass)) {
  console.log("You find your way to the village using the map and compass you bought in town.");
} else if (choice === "forest") {
  if (hasCompass) {
    console.log("You use the compass to navigate the forest.");
    const explore = readline.question("Do you want to 'climb a tree' or 'follow a stream'? ");
    if (explore === "climb a tree") {
      console.log("You spot smoke in the distance — there is a cabin.");
    } else if (explore === "follow a stream") {
      console.log("You follow the stream and find fresh water and berries.");
    } else {
      console.log("You wander a bit but nothing interesting happens.");
    }
  } else {
    console.log("Without a compass, you become lostr.");
  }
} else {
  console.log("You get lost and wander aimlessly.");
}
/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/