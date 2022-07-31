video/GIF for slides:
  Hard Glitch animation
  Spark flower animation

audio for slides?

X Lost: woods, sheep randomly change direction
X Bounce: move in arc sideways (random L/R) slightly up and then down

PigeonWhole
+ ball falls down centre of screen, deflect to score
+ matching eg get red ball in red pocket
+ aim eg rotate makes it easy to hit target OR cross-hair moved with arrow keys OR binary aim toggle left/right
+ APC5 rotates cannon with mouse, dashed line to target
+ pusher/shunt need space for it to move around ball
+ reject retreats instraight line
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
+ dont need to hit other ball at far end, if near a bond forms but less score if distant (la Boule)
Ball score = linked, accepted, events en route 

April
+ can you launch another ball while one still on its way (yes)
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

11 July
+ OotH facing for sheep, only go forward, sometimes wiggle
+ pull animation SB suggested a dog

13 July
+ tutorial anim/vid Hat move, beckon, popup highlights arrow keys
+ each level could have different background
14 July
+ how to comsine gotoXY and randomWalk i.e. travel down with some sideways wandering (and occasional upward reversals?)
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
+ face can spin or oscillate to show confusion

18 July
+ separate scoring screen, like in SafeCode 
+ began car code, down arrow drop, 

19 July
+ level 2 drop only travels part-way
+ harder moves to lead, through pen and respawns

21 July
+ spin face, also wobble
+ fence around a protected tree (made png)
+ happy music until first sort, then ominous
+ at end of game (Quit cutscene) all sheep escape from pens, turn white, and happy music plays
+ "sorting hat is a purple herring"
+ ?adapt WindyBalloons, drop things on tres?

22 July
+ "
+ If sheep reach middle bottom (or sides?) they leave map (then stop & delete?) not available for Beckon.
+ beckon soundfx is piping
+ while beckon some wandering random % influence
+ long range beckon takes longer to work, soundfx queiter?

26 July
+ Shaun slapstick, wild movement, spinning, visual comedy
+ Top row horizontal railway tracks emphasises hat cannot move down, homage to W&G Wrong Trousers 
+ early levels most errors miss both, because pens get bigger in later levels more arrivals in "The Wrong Lorry" (W&G)
+ one lot for lamb chops; other lot for mutton
+ level-state Save needed
+ avoided 2-player version (pied pipers) because dont want to encourage player to support either team. 
+ Shaun dog wears a het, but no, dog is against sort
+ Animal Farm = satire? people being categorised into two subsets could be related to many social phenomena.  the theme of a group being divided into two subgroups could be interpreted in many different ways. Nothing will be stated explicitly, leave open to imagination. A good satirist never spells it out.

27 July
?shunt centre on point ahead? Send to Dr B Anderson.

28 July
+ Sequence of inspiration: OneOfHerd, early bagatelle ball drop, Amitheball? Animal Farm
+ rogue function unsort, test collision with all sheep (like spaceBattle)
+ learning sequence - where player, how move, what can do? signif teams, where's goal; how score, how beckon, 
+ how write new values into Grid ?

29 July
+ look thru Itch for my contributions
+ pitch cover add video of level with all elements OR video of Hat transform sheep
+ Frogger not Insp? avatar cross field, 1 frog per pen
+ Amitheball? A quote I saw in Chris' writings, conventional to Identify w active icon eg paddle, but perhaps shift Identify w ball, aiming for subtle hints in game that sheep don't want to leave farm 
+ Shrek onion gif. Polyvalence Early version was call pigeonhole and balls not sheep theme pigeonholing people into categories, div peopl into categ, but can play the game for fun without realising any meaning. Insp layers AF really is about farm e g seasonal cycle agri with harsh winter. And also a social parable
+ mumbly voice farmer (like in Shaun)
+ Farmageddon "mutton bashing fun" Nintendo Home Sheep Home and 8 web games, https://www.thebigfixup.co.uk/

30 July
+ what makes level end? no sheep available to tractor
+ sheep sprite equal size head & body
+ is there a minimum score to proress to next level?
+ level ending screen?
+ game over screen if completed all levels?
+ EditMode? wander toggle
+ visual tile design tool

