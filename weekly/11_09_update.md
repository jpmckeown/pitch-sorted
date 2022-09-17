# Update 11 September

Hallo, this is Patrick with your Week 5 update for Sorted.

Lots of work this week, highlight is scaling to fit the game display on phones. Also visual changes to tiles and the bottom row of the game grid.

## Credits

Nicholas Polchies for code to scale canvas, from the Hometeam game Accidenatal Personal Confusiom 5

Chris helped me with steps in Photopea to make speckled tile art, and other aspects.

Patrick McKeown (integrate APC5 code, new grass tile, water-ditch tile, goal/pen graphics, 50 pixel grid, )

## Goal
The leftmost graphic is the winning tile from the Classic game Racing Cars. Sorted's pen placeholders were tinted versions of that.
New pen is drawn with Canvas graphics for flexibility. Currently on grass background but plan to swap in straw or mud background.

## Tiles expand from 40 to 50 pixels
Sheep were looking uncomfortably tight in pens, and it was easier to make tiles bigger than sheep smaller, so the grid is now 50 pixels per tile.

## Grass
Topleft tile is road from racingcar game. The field placeholder used in Sorted until now was adapted from that but had lots of grey.
New grass with noise monochrome and flood with a real grass colour from a photo. After a few tries the bottom right is new grass tile.

## Ditch
Previously it was unclear why sheep reaching the fence (shown top left) stopped roaming and went out-of-play ready for scoring. Chris suggested a water obstacle. Game now using lower left speckled blue, and I will aid a bank as in middle graphic.

## Scale to fit phone screen
On phone browser tests the game field was cut off, losing the right edge, and also losing lower rows.

## APC5 - HomeTeam game with simple scaling
Chris guided me to a HomeTeam game from 2017, amed APC5, because it has good scaling but avoids other complexities.

## Devices
Shows it working on devices with varying pixelratios. One phone at 1.70
another phone at 2.75

## Github

No more display updates on Credits.

APC5 has game Canvas, right bar Canvas, and then a drawing canvas for both; so lots of function calls had to retrofit a canvas parameter.

Took me a while to realise that for mouse and touch now drawingCanvas is the only canvas displayed and on which events are detected.

field grid is 16 by 12 tiles, for 800 x 600 pixels

## Demo

At bottom right of screen, debug log now inside canvas for devices that don't have console and only see canvas. It shows screen width and height in CSS pixels, also the devicePixelRatio.

After sheep goes in goal pen the 4th side is drawn to indicate gate swinging shut.

Skip though levels noticing position of goal pens.
This was prompted by H Trayford's experiment, and is a
revival of early idea, two teams' goals get further apart as a metaphor of polarization.

temporarily lost button usability, I need to fix how scaling affects mouse position: the zero X and y is good, the y maximum is good at 600, but the X scaling is wrong, the field canvas right edge should report 800 pixels, but it doesnt and 800 is only reached at edge of sidebar. So I have to fix that before buttons can work.

Credits screen full, no more updates as Chris will compile these.

Looking for art for tile "Lost" to replace placeholder.

## Trello

Plenty of simple tasks for playtesting. Also art tasks for tiles.

## End

Now the game fits on phone, my plan is to make Hat movement respond better to touch device taps on buttons.

Please ask me if you have any question about how you could be involved.

Thank you!

//I struggled with  accelerator code inhertited I have an idea that Touch will work better with a slide move more like a warrior than a racing car.

Summary: moved away from Racing Car game perhaps toward the Classic warrior adventure game (in tile size)

