Checklist assets
field, halt, bendx2, roam, road, goal, rail
hat, sheep, rogue, lorryx2

+ itch.io test phone
+ buttons on right, UI outside canvas
+ GIF while game (images) loading
+ first 2 lines sheep/tileHandling method refactor separate function to get col,row object from XY pixel pos

+ moving obstacles, maybe using 2nd grid for start positions
+ also a separate code on grid for patrol path ending, for rogue
+ end of round = lorries drive in, piper appears, lorries load

TASKS:
+ make calling harder, singling is a trial, not auto tractor, distractabl terrain betw intervening
+ map grid marks front or back of lorry
+ if background terrain varies behind dog, one grid is not enough

+ science how sheep distrib in a field, one bunch, not cows
+ how to preserve newline from level editor, research
+ book has spritesheet example 
+ stats for each sheep e.g. tired?

improve Call:
+ call nearest sheep or weight X difference more than Y diff 
+ move diagonally to Hat position instead of directly up
+ update because hat often moves while beckoned sheep moving

+ adjust Drop/Send

+ moving objects need a timer for when/where it appears

DESIGN:
Koster fun bk

PITCH:
+ make sheepdog trials videos into GIFs
X+ Lorry sideways on bottom row which is a road fenced on both sides or top only except middle, how wide is gap in fence? if 5 sheep could hit side of lorry, therefore 3
+ Round ends when all sheep at bottom or road fence, which implies Hat cannot recall up from fence (too far)
+ at end round, 1 piper appears centre bottom & pipes sheep into gap
+ for Pitch animate this vision with drawing tool on screenshot of game map base, dragging sheep, piper and lorries by hand

Inspiration:
+ Faraway tree montage
+ where is my collection HH pics?

MOOD (trello / update video):
+ mood=Shaun slapstick, wild movement, spinning, visual comedy
+ mood: Farmageddon "mutton bashing fun" Nintendo Home Sheep Home and 8 web games, https://www.thebigfixup.co.uk/
+ Move, considered turn based, gif 1983 game

TRELLO:
+ use graphpaper for level design 
+ ask testing feedback, any obscurity? week2 add Tutorial
X+ Send is "driving" though only 1 sheep

MAYBE:
+ how make a tile single-use?

VISION:
+ when explore attraction pied piper, idea 2-player version, piper for each goal, but halted myself, no dont want to push a player to identify with either goal - the Hat is neutral and wants both lorries loaded. 
+ Moving to Sorted, when I was exploring pied piper mechanism I considered a 2-player version with a piper for each team but realised no I don't want to push players into identifying with one or other team: the Hat is neutral, it just wants to get both lorries filled. 
+  Theme of people being divided in two categories could be interpreted variously relating to many social phenomena.  the theme of a group being divided into two subgroups could be interpreted in many different ways. Nothing will be said explicitly, leave open to imagination. There are a few clues to my interpretation in game and a few more in code. A good satirist never spells it out.
+ Sorting sheep is tinged with sadness if the sort is for going to market. Later levels bring out the downside of sorting, for example a sheep may be marked with two colours (like Harry Potter being Slytherin) or terrain may change sheep colour, or a sheep may fluctuate between colours.
Sorted game mechanics will give clues that the sheep don't like being divided.

- I am leaning away from overhead view because I am thinking of using sheep faces to show mood.