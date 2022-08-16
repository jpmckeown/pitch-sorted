Timwaskett: Oh nice!  Yeah, that was a fun project, I'll poke my head in if you'd like any input.

PigeonWhole
X+ ball falls down centre of screen, deflect to score
+ matching eg get red ball in red pocket
+ aim eg rotate makes it easy to hit target OR cross-hair moved with arrow keys OR binary aim toggle left/right
+ APC5 rotates cannon with mouse, dashed line to target
+ pusher/shunt need space for it to move around ball
+ reject retreats in straight line
+ erodable bricks wall can be pulled across to block path
+ ways to influence ball after launch
+ goals & side-stores are pale version of team-colour+ roll sideways to reach store, puch other balls down, or drop in store until hit another available+ store is ball width plus a few pixels
+ piper can machete hedge to let sheep through!
+ click to aim draws arrow to target tile
+ while balls Pause player can act (add move a wall)
+ if middle of wall breaks you lose bricks beyond it
+ ball bounced may become random walker
+ balls collected in side area like plunger-zone
+ obstacle mid-board can change ball colour
+ maybe ball in collection changes colour and escapes
+ what-if hit area betwen goals, ball stuck go grey?
+ how can stuck balls be revived
+ colour match neighbours to drop to score
+ Sounds = ball spawn, sort, push, travel, pocket, reject, roll-in
+ choose orientation of game
+ hat as blue/red flux, swirling

1st March = sheep herding idea, also Windy Balloon

March
+ how to complicate aiming: slopes, obstacles, terrain
+ if ball stops moving (before goal) it becomes an obstacle
+ can a ball knock another ball out of its way?
+ what happens to ball rejected by pocket?
+ EditMode jump to later step e.g. pocket filling up
+ nudge ball from side

Theme = tribalism 
+ who is Sorter? fixated on one aspect, colour, and ignoring other differences e.g. texture, holes, shape square triangle, circle
+ can we get a ball's eye view?
+ tally events and score for each ball separately
+ rejection: links to other balls in group initially form, but they puff particles at misfit ball, then links dissolve and misfit falls 
+ before sort ball covered in swirling thick misfit+ confrmist mode, balls of diff colour also has asociated shape etc but later...
+ dont need to hit other ball at far end, if its near a bond forms but less score if distant (la Boule)
Ball score = linked, accepted, events en route 

April
+ can you launch another ball while one still on its way (yes, collision between sheep will stop other going in clamp until first left)
+ at start show close-up image of Hat, sheep, goals
+ a 2nd colour on ball, spots or stripes
+ hat agitated (more jiggling) if impure sort
+ debug eg mouse drag ball, 
+ sprites idle Hat, moving Hat, stuck ball, 

May
+ make pattern eg 3 of same colour, centroids connecting line, score by angles or pattern, cohort complte all move in collector to score
+ admission by cohort not individual
+ no horizontal control (cannot choose where u start from in life)

June
+ what happens in pen, line up regimented?
+ after drop how long does sheep maintain direction
+ do sheep bounce off sides of screen?
+ what happens at pen if not exactly on-target
+ some wandering while in tractor

21 June
+ is mouse dragbox selection useful in EditMode+ cost of actions
+ ome array for all sheep
+ tint sprite colour via Js
+ health or happy bars for sheep?

1 July
+ random walk, triangle draw

11 July
+ OotH facing for sheep, only go forward, sometimes wiggle
+ pull/call animation SB suggested a dog

13 July
+ tutorial anim/vid Hat move, beckon, popup highlights arrow keys
+ each level could have different background

14 July
+ how to combine gotoXY and randomWalk i.e. travel down with some sideways wandering (and occasional upward reversals?)
+ sheep collision blocks movement (tried isOverlapPoint in spaceBattle code but quickly they stick together in small clumps)
+ if any background changes in-game, tiles better than bitmap
+ mouse control for Hat, use gotoX like in RTS (move there at normal speed) not like Tennis (following mouse cursor)
+ EditMode toggle what mouse currently does e.g. select a sheep and move it instantly somewhere; move tile in level design; etc

15 July
+ if change 1 row of grid (shuffle tiles left or right) it would confuse ball crossing tiles while they moving - if instant shift would be OK
+ Tiles mystic cave change colour, marsh slow, hay speed, signpost deflect, woods sideways, flower distract, Edges? fence restrict
+ sheep.init could assign and Hat only reveals (advantage? guarantee half each by making n/2 blue and then n/2 red)
+ balls roll into top row, one at a time?
+ ball needs marking to show it is rolling
+ piper has connotation of malevolence toward ball
+ particles celbrate arrival of sheep in pen
+ face happy turns to sad in pen (discordance)
+ in pen, stop walk, some jiggling?

18 July
+ separate scoring screen, like in SafeCode 
+ began car code, down arrow drop, 

19 July
+ level 2 drop only travels part-way
+ harder moves to lead, through pen and respawns

20 July
+ piper trail sheep nearby, not attached unlike hat

21 July
+ angle of graphic separate from facing
+ face should mostly stay upright unaffected by movement
+ spin face, also wobble oscillate, to show confusion
+ sleeping sheep lies on it side, eyes closed
X+ put ID label inside circle/sheep
+ fence around a protected tree (made png)
X+ happy music until first sort, then ominous
+ at end of game (Quit cutscene) all sheep escape from pens, turn white, and happy music plays
+ "sorting hat is a purple herring"
+ ?adapt WindyBalloons, drop things on tres?

22 July
+ If sheep reach middle bottom (or sides?) they leave map (then stop & delete?) not available for Beckon.
+ beckon soundfx is piping
+ while beckon some wandering random % influence
+ long range beckon takes longer to work, soundfx queiter?

23 July
+ one lot for lamb chops, other for petfood, or 2 contracctsgoing in diferent lorry X+ one lot for lamb chops; other lot for mutton
+ alert error when image name wrong

26 July
X+ Shaun slapstick, wild movement, spinning, visual comedy
+ Top row horizontal railway tracks emphasises hat cannot move down, 27th initially only 2 tiles each side, when hat moves more track laid ahead of it: homage to W&G Wrong Trousers;
+ early levels most errors miss both, because pens get bigger in later levels more arrivals in "The Wrong Lorry" (W&G)
X+ level-state Save needed
X+ avoided 2-player version (pied pipers) because dont want to encourage player to support either team. 
+ Shaun dog wears a het, but no, dog is against sort

27 July
+ at least no violence on screen
+ unsorted sheep colour palegrey and cannot be resorted
+ add 4th value to sheep.team
+ rogue liberates sheep from pen
+ tracks destroyable by vRogue who moves up to top, and exit screen
+ player UI learning sequence & menu option to skip
+ remember what player has done & seen
+ someone who never played videogame should know without confusion
+ to highlight tiles need 5px buffer around canvas
?shunt centre on point ahead? Send to Dr B Anderson.

28 July
X+ Sequence of inspiration: OneOfHerd, early bagatelle ball drop, then Vision = Amitheball? Animal Farm
+ rogue function unsort, test collision with all sheep (like spaceBattle)
+ learning sequence - where player, how move, what can do? signif teams, where's goal; how score, how beckon, 
+ how write new values into Grid ?
+ hat can screenwrap if not beckoning or clamping, will need hat.state
+ face demo should spin 1 face randomly a few rotations
+ pic with interesting lower half, for Trello

29 July
X+ look thru Itch for my contributions
X+ pitch cover add video of level with all elements OR video of Hat transform sheep
X+ Frogger not Insp? avatar cross field, 1 frog per pen
+ mumbly voice farmer (like in Shaun)
X+ Farmageddon "mutton bashing fun" Nintendo Home Sheep Home and 8 web games, https://www.thebigfixup.co.uk/

30 July
+ what makes level end? no sheep available to tractor
X+ sheep sprite equal size head & body
+ is there a minimum score to progress to next level?
+ game over screen if completed all levels?
+ EditMode? wander toggle
+ visual area tile design tool

1 August
X+ GIF OotH scattering
X+ stats for each sheep e.g. tired?
X+ how make a tile single-use?
X+ book has spritesheet example 
+ look at Kenyon Pizza dropping pieces
X+ enlarge Frogger GIF display
X + retry video autoplay (failed, use GIFs)
X + extend to Oct 23

2 August
X+ roles, mention Classic Games code familiar
X+ timing sections of past pitches
X+ terminology https://theworkingsheepdog.com/shepherd-and-sheepdog-training-commands-and-terminology/
X+ video OotH scattering

3 August
X+ trello warmup art: 
X+ mood countryside pictures
X+ Faraway tree montage
X+ level editor maintaining newline?
X+ make sheepdog trials videos into GIFs
X+ video of sheep in clamp being painted, not found

4 August
X+ portraits: hat, sheep, rogue, 
X+ where is my collection HH pics?
X+ book meeting with Karen for level design and Liz for UX
X+ in-game tutorial
X+ when hover game features UI popup?
X+ rogue's story
X+ extend to October 30
N+ From ramp Shep crook pull sheep in bottom row fenced stuck

5 August
+ Only one tile goal, much space bottom row for UI
+ later rounds goals get further apart
+ Later levels electric fence at field sides
+ Lorry sideways on bottom row which is a road fenced on both sides or top only except middle, how wide is gap in fence?
+ Scoring when sheep reach bottom or at end of round?
+ Round ends when all sheep at bottom or road fence, which implies Hat cannot recall up from fence (too far)
+ may need special grass tile next to fence to stop Call
No+ blue and red men arrive from wings 2nd row and push sheep to gap, and around into lorries
+ at end round, 1 piper appears centre bottom & pipes sheep into gap
??+ Before departing lorry reverse to scoop sheep from road - goal ramps also move? is only time blue and red come together.
X+ for Pitch animate this vision with drawing tool on screenshot of game map base, dragging sheep, piper and lorries by hand
X+ Lorry placeholder is stretched car
+ map grid marks back of lorry
+ separate grid for locating rogue 9, lorries 7&8, hat? piper? which can also store vales for single-use tiles 1-5 (Hat & Piper always in same place so grid marker not really needed)

10 August
+ 
11 August
+ timer mode expiry

16 August
+ whats the difference (visually e.g. sheep movement, angle, orient) between Grazing, On_Fence, Waiting, and InPen?
+ roam timer (then maybe switch to grazing? or roam again with angle change?) and TimW's in-roam minor course changes, latter is equivalent to shorter timer with straight roam. 