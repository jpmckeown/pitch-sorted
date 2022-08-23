# TASKS
+ head orientation in pen sideways toward colour-side
+ while Sent head orient upside down?
+ while Called head orient 3/4 upright?
+ conveyor belt tilehandling code
+ buttons on Menu screen
+ ask Help re touch devices

+ 2nd grid less strict than collision - sheep can pass through occupied square but cannot stop on it (like in a boardgame).
+ if arrive fence don't enter Road tile (nextY)
+ project leadership study
D+ bug: after Level, play stuck at level-over from prev level
D+ bug: currentLevel must not change in level_over as it is still drawing completed level
+ if sheep at side half off screen, jump radius/2 in direction facing
+ tuning timer for Call, Send
+ move goal, fence, road from Mode to another property
+ lost-sheep move sideways, attracts sheep
+ branch let instead of var
+ backticks for multi-line text & areaGrid
+ Music safely plays through menu and pause. Other music play when scoring
+ probabilistic transition between modes?
D+ Tile Occupied agentGrid - code exists, will it be reinstated?
+ will occupancy update e.g. erasing 1 from grid if sheep moves out
+ call/send cd have vfx sheepdog & soundfx
+ whiskers TW early warning AI - would they help?
+ check labelling score vs ID tidy

# ITCH.IO version changes
editMode=false;  css body margin=0 
X currentLevel=1,

# ASSETS
Checklist: field, halt, bendx2, roam, conveyor, road, goal, rail; hat, sheep, rogue, lorryx2, lost_sheep, 

# TRELLO
+ integration art or sound as Code task, + art integration Level 0 as a task?
+ After a mechanic change add card (and ask on Slack) for testing
+ ask testing feedback, any obscurity? week2 add Tutorial

# Weekly Update
+ using graphpaper for level design
+ make sheepdog trials videos into GIFs
+ Send is "driving" though only 1 sheep

## Menu 

## Visual art
fix centroid of sheep face/whole body 

## Tiles
+ fence timer, will go back to roaming (increment sheepInPlay)
+ conveyor-belt, may req gotoX&Y ?or set ang
X+ turn away from Halt instead of graze-moving slowly through

## collision
+ rogue-sheep detect proximity

## Call
+ call nearest sheep or weight X difference more than Y diff 
+ move diagonally to Hat position instead of directly up
+ update because hat often moves while beckoned sheep moving
+ make calling harder, singling is a trial, not auto tractor, distractabl terrain betw intervening

## Send
+ what happens when Send expires?
+ uncertain weakening Send
+ is goto useful? would avoid that jump at end of travel; would enable recovery after distraction (sheepdog still on job)

## End of level
+ moving obstacles, using 2nd grid for start positions
+ also a separate code on grid for patrol path ending, for rogue
+ end of round = lorries drive in, piper appears, lorries load
+ count time taken to complete level
+ at end round, 1 piper appears centre bottom & pipes sheep into gap
+ road-centre reserved empty for piper but tile above likely occupied by a sheep. Piper will not block sheep animation/move into lorries.
+ sheep on goal, do they load lorry before or after piper appears?
+ if wrong colour in lorry rumble inside and eject straight across to the other lorry, number on lorry changes
+ lorry label show how many sheep on board (all, blue, red)

# design levels
+ manual placement has to pass x&y into function
+ if always half roam, half graze no need to pass in Mode
+ randomize level (rules e.g. lake block goals)
+ moving objects need a timer for when/where it appears

# load level
+ flock/clustered placement (given centre) overlap prevention
+ randomize centre of flock
+ manually select flock centre

# Testing/debug tools
+ overlay row & column numbers
+ save Level state, and ability to reload

# UI
+ key Send always a few times and only first useful
+ "Sorted" in top row left, disappears when Hat moves there
 
# UX
+ GIF while game (images) loading
+ itch.io test phone

+ map grid marks front or back of lorry
+ if background terrain varies behind dog, one grid is not enough

+ science how sheep distrib in a field, one bunch, not cows
+ how to preserve newline from level editor, research
+ book has spritesheet example 
+ stats for each sheep e.g. tired?


X+ Lorry sideways on bottom row which is a road fenced on both sides or top only except middle, how wide is gap in fence? if 5 sheep could hit side of lorry, therefore 3
+ Round ends when all sheep at bottom or road fence, which implies Hat cannot recall up from fence (too far)

## TRIED
+ buttons on right, UI outside canvas

## Maybe
+ first 2 lines sheep/tileHandling method refactor separate function to get col,row object from XY pixel pos
+ Wise sh voice: It is every sheep's destiny to enter the great lorry
+ how make a tile single-use?
+ individual sheep manually placed (on agent grid?)
+ Trello subscr

DESIGN:
Koster fun bk

# Outreach
+ Emphasise on itch & CV No game libr/engine

Inspiration:
+ Faraway tree montage
+ where is my collection HH pics?

MOOD (trello / update video):
+ mood=Shaun slapstick, wild movement, spinning, visual comedy
+ mood: Farmageddon "mutton bashing fun" Nintendo Home Sheep Home and 8 web games, https://www.thebigfixup.co.uk/
+ Move, considered turn based, gif 1983 game



VISION:
+ when explore attraction pied piper, idea 2-player version, piper for each goal, but halted myself, no dont want to push a player to identify with either goal - the Hat is neutral and wants both lorries loaded. 
+ Moving to Sorted, when I was exploring pied piper mechanism I considered a 2-player version with a piper for each team but realised no I don't want to push players into identifying with one or other team: the Hat is neutral, it just wants to get both lorries filled. 
+  Theme of people being divided in two categories could be interpreted variously relating to many social phenomena.  the theme of a group being divided into two subgroups could be interpreted in many different ways. Nothing will be said explicitly, leave open to imagination. There are a few clues to my interpretation in game and a few more in code. A good satirist never spells it out.
+ Sorting sheep is tinged with sadness if the sort is for going to market. Later levels bring out the downside of sorting, for example a sheep may be marked with two colours (like Harry Potter being Slytherin) or terrain may change sheep colour, or a sheep may fluctuate between colours.
Sorted game mechanics will give clues that the sheep don't like being divided.

- I am leaning away from overhead view because I am thinking of using sheep faces to show mood.

# DONE
D+ bug: play isnt advancing Level 1 to 2