# Update 18 September

Hi, this is Patrick with your Week 6 update for Sorted.

Halfway to release on October 30th. This week level touch devices work, and Level design visual with save, so now ready to make levels.

## Credits

Caspar Dunant for touch event handling code, from the 2017 Hometeam game Irenic.

Chris fixed mouse position which was broken after mobile device scaling work.

Patrick McKeown (level editor, new ditch tile)

## Level Editor or Designer

From editmode menu key D starts Level Design screen. Then function key F7 cyck=les though levels. Use mouse to select a grid position. Top row reserved for Hat track. Bottom row reserved for ditch and goals. The selected grid square is outlined. Then use number key to place a tile type. Key S for save writes level grod to console, and also saves it as a text file. These formatted numbers (which include appropriate newlines) can then be pasted into file Grid.js

## Hat movement

Hat movement with accelrator and friction used racing-car code which worked fine for arrow keys and also with mouse buttons. But with Touch events after many efforts to make it work. I gave up and switched to slide movement, like the Classic warrior game, which predicted would be compatible with Touch controls.

Currently the slide-move has broken screenwrap for Hat so wrap is switched off temporarily.

## Ditch

I received feedback that sheep in blue water ditch looked like the sheep had drowned. I want to avoid giving that impression. The ditch is not meant to be so traumatic, the farmer later can pull sheep out. Also there's potential confusion between blue tint of water ditch and blue goals. So I changed to a brown colour, muddy ditch.

## Stacking

Also got feedback that a sheep reaching end-of=-play above a ditch i.e. stacking/queeing didnt make sense visually. So that is switched off. Above a goal/pen stacking still happens.

## Github

No more display updates on Credits.

## Demo

## Trello

Plenty of simple tasks for playtesting. Also art tasks for tiles.

## End

Now the game fits on phone, my plan is to make Hat movement respond better to touch device taps on buttons.

Please ask me if you have any question about how you could be involved.

Thank you!