# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
yarn install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
yarn start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.


## D&D Init Tracker

## Character Table:

Name
Level 
Dex Mod
--Other Mods?
--Alive or Dead?
Player Picture 
--PC or NPC? 
--Current Status ?? (could be used in combat then )


## Battle Table
Order of combat: array sorted by init (INITALLY) 
Combatants: Array of all NPCs and PCs 
Current Turn: # of array index of whose turn it is (has to be in the active array) 
    - going to use a .MAP .filter to do this probably
Current Round: Number of cycle 


## Sorting by Init

* this is trickier than it seems to be...for a number of reasons
    * Initiative should be saved to the battle model...but not on the character model. I've linked the Character with the Battle table already...and character has DEX but i'm not sure what to do next
    * the .map and .filter should be useful, I can "kill" a character/knock them out if they die or (if they are a PC knock them unconcious). Then for the dead NPCs they don't appear any more but the PC characters can stay in the queue unless they truly die
    
* counter to up the "turn" or "round" counter up as the game progresses. 
    * turn should iterate up as the next character is active
    * round should iterate up IF turn%[length.filteredArrayofActiveCharacters] = 0. Probably should be calculated at each click...though this might not work
    because what if, fringe example, a character is killed and it jumps from 5 to 6 and the character killed was in fact in position #1 and it is the 5th positoins turn now (though there is one in the 6th position, so it is not a new round yet). 
    * instead of the modolo division, could be done by having the 1st and last character in the array have a special ID (that if they die it gets put on the next one of the right or left). 

* Dex thought: could have dex just = initiatve on the character model, then update the inint each battle...then revert back to just the dex mod at the end of the battle. 

10/30/2018

* Need to work on the battle page adding the init and dex
* 

12/10/2018

* Add a monster needs to be created
* Figure out what to do with the Battle Table? 
* Add modal component, should use this to update all PC info

12/16/2018 
* /battle
    * allow for all the players to be selectable and an input for their rolled init
    * additional field for how many monsters and then dynamically create that many inputs for their rolled init
    * display all via cards

    * onClick on the battle page should provide the ability to take a character out of the battle (flip their alivestatus/active status)
    * THIS COULD BE A POST TO THE BATTLE TABLE TO RECORD THE NAMES AND ENEMIES AND (when they die) who died (and perhaps who killed what)