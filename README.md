# HW - Crystals Collector

## Live Link on GitHub Pages
 - https://castlemaninc.github.io/week-4-game/

## How to use the Crystals Collector App
	1. A random number is chosen
	2. Try to match that number by clicking on crystals 
	3. Each crystal is assigned a random value
	4. By clicking on the crystals try to determine the hidden value
	5. When you win or lose, the game will restart with new random values

## Homework Requirements

- Utilize jQuery to update variables in the DOM

## Design Notes

- The random number shown at the start of the game should be between 19 - 120.
- Each crystal should have a random hidden value between 1 - 12.

## Technologies Used

- Jquery for Dom Manipulation
- Google Fonts 
- HTML and CSS to create my own layout

## Code Explanation

The game is basically broken down into a few parts.

- New variables are created at the top
- A newGame function resets variables, assigns random values
- random values are inserted into the DOM with jQuery
- an on() function listens for a "click" on the crystals 
- conditional statements determine whether a win or a loss is achieved
- newGame function is called at the end in order to start the game when webpage is opened
