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
+ tut close-up big meeples, cutscene intro
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
+ portrait would give longer field run and pens closer together
+ start pens near middle of screen and shift outward (allegory for poltical polarization)

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

## 10 August
+ Rear view of sheep?
+ player allow quit level
+ column-test GUI select columns & choose how many sheep

## 11 August
D+ timer mode expiry
+ Reality is aiming so a stack on fence unlikely more than 2
+ action points? hat cost 1 to move continously (not per pixel)
+ can action be refreshed within level?
+ keep Send strictly vertical
+ telemetry for scores

## 12 August
+ Youtuber critic is a playtester
+ Telemetry anonymous eg paths, score
+ when in lorry make sheep vanish
+ if onFence wander X axis only?

## 13 August
+ conveyor art placeholder double chevron
D+ next X & Y
+ LI send itch link to exFalmouth Lecturer who tried save Boxer in AF
+ sheep state some are just locations

## 14 August
+ Help button I'm stuck
+ Touch devices help screen eg only click buttons not game
+ if tile stops called sheep does it lose mode (timer) or does it find a way around (AI)

## 15 August
D+ tuning parameters
+ if snap to col-centre then Roam must use gotoX with multiple of whole-tile move, and arrival (se RTS) expires mode rather than using a timer
+ if centring hat move change e.g. gotoX from arrowkeys, or deceleration tweak to only stop at centre points.
+ centring won't prevent sideways arrival at occupied tile, so need better code than retreat 1 tile upward
+ classic Brickbreaker at collision recalled previous tile and direction of arrival (is that needed?)
+ Y doesn't have to be tile-centred
D+ maybe only centre when sheep arrives at bottom
+ deflect (or Conveyor) maybe set gotoXY instead of angle? Angle would be based on vector like in Spacebattle.
+ can Conveyorbelt be done without centring?
+ conveyor can propel until icon edge exits tile and then revert to direction & speed before conveyor


## 16 August
+ whats the difference (visually e.g. sheep movement, angle, orient) between Grazing, On_Fence, Waiting, and InPen?
+ roam timer (then maybe switch to grazing? or roam again with angle change?) and TimW's in-roam minor course changes, latter is equivalent to shorter timer with straight roam.
+ graze/roam alternation; already has random timer for both so no need to randomize which new mode when timer expires
+ Can sheep on-fence or stacked/queuing roam - if so the test for Level End may fail? perhaps sheep on-fence grazes for a while (long timer) but eventually roams. If many sheep will be incr difficult to end level because only one pen tile. Or bring piper (and lorries) on sometime after first on-fence sheep but before level-ending. Piper influences roam direction, prevents Y upward and X awayFromCentre?
+ if On-Road similarly sheep can roam (cannot Graze) initially up 1 tile
+ any player control of Piper? facing = directional volume.
+ does Piper influence sheep not-on-fence but nearby? Saves long recall up to hat which might be frustrating if getting near was tricky.
+ collision avoidance by whiskers (left & right) and facing change.
+ how react if both whiskers detect obstacle - log to see if that ever happens (PERPENDICULAR APPROACH TO LAKE TILE).
+ editMode UI show tuning for each level (and allow edits?)
+ init/reset mode as roam or graze
+ what's difference between init() and reset()? = here none
+ rogue unaffected by tiles looks odd

## 17 August
+ snap to column centre
+ collision & overlap
+ roaming sheep currently lack tilehandling (also they can get on road and cross fence from below)
+ only alter speed and direction when timer expires
+ send itch link to Software Cornwall & Cornish Games Industry
+ tail above head look silly; animate to waggle while Sent? that breaks principle of tail showing angle, but maybe emphasise sheep is under shepherd control while Sent (and Called).
+ Panic mode = short fast move away or sideways. When? if option to Send faster; if lorry approach? if wolf or hiker's dog nearby?
+ graze munching animation (this was before tail)

## 18 August
+ tile fence below road, only 20 pixels high
+ wider road allows wider lorry
+ add tail on sheep
+ work up a good Level 2 before Sunday
+ ?centred sheep slide from tile to tile? problem for deflect, and incompatible for small movement while graze; make dfferent game with slide-move on squares (or hexagons)

## 19 August
+ bug= near top row sheep oscillating, also at bottom row
D+ reposition score (on face!) put below on road
+ while Send, wave tail (detach from ang)
+ sheep at central road not centring, maybe thats ok
+ if level-over put score where ID was, put ID where mode was
+ end-level remove level-name UI
+ stack, or slip to side?
+ thinner topknot &ruff? to reduce sheep height
+ if Send expires (e.g. woods) randomize new facing
+ goal stack above? score would be overlay sheep in goal, same on fence, therefore stacking isn't a good solution - in-goal could shuffle along road, but if on-fence arrival would shuffle sideways OR sheep on fence could shuffle closer to centre? Score above sheep? stacked would over-write that. If max 2 stack, botton below, top above. Or on sheep,or give up on individual scores, or one by one animated?
+ tile-roam, no dont change mode, just lose direction and reduce speed; how does keeping Sent mode help? Maybe later recover direction.
+ tile-pond avoid wading through water, so turn sideways
+ colour Ruff so ang=downward doesnt look like bobblehat
+ avoid bodytail looking like separated appendage
+ wobble head while Sent?

## 20 August
+ properties for topknot, neckruff, bodytail PLAIN BLUE RED
+ rogue could make only one part UNSORT rather than whole sheep
+ snap-to-centre-col when reach bottom row or occupied cell
+ always Y=0.4 to (nearly) fit bodytail in cell
+ save to file, occupancy, sheep properties, sheep col&row
+ special case of save = level-ending
+ allow multiple L-E saves per level
+ load & display level-ending
+ save scoreboard to file
+ rotate head while Sorting? mode & timer for sorting
+ sorting expiry always transition to Held
+ cannot Send while Sorting
+ head 180deg (upside down) while angle upward
+ draw Occupancy grid above sheep, black if "1"
D+ bug= levelDone=true but its moving!!
+ bug: roadCentre occupy grid not 1
+ if edge lake below avoid swing butt ove lake? how?
+ stuck tile, sheep cannot be Called and no timer expiry. boggy, swamp, not quicksand. sheep not permanently harmed but rescue is too late to be in lorry.

## 21 August
+ update say more about Done tasks, warmup, and coming week, maybe a look ahead
+ move sequence = mode behaviour (chance of angle change; speed should have been set when changeMode, once only), screenwrap, bounce top bottom, occupied test, tilehandling

## 22 August
+ For hole-in-one (and Balancing): record X pos of Hat at launch and Xpos where sheep arrives at bottom of screen.
+ to help demo naration, automate Hat movement (or buy Camtasia to allow dub webcam and audio on a video) though auto enables Hat to go to precise X value
+ findNearestXinList(hatXpos, listofsheep) return one X value
+ findNearestInList(xy, list) return object
+ when hat moving if gotoX not undefined: test gotoX-this.x if positive nextX+=speed else -=speed (skip other move code)
+ script go nearest, call, go launchX, send
+ likely need Hat mode automatic or manual

## 23 August
+ head orientation in pen sideways toward colour-side
+ while Sent head orient upside down?
+ while Called head orient 3/4 upright?
+ autoCall easier if level's Roam & graze speeds set zero.
+ discover how many Hole-in-one level has (can be none, and too many is too easy and less field interaction)
+ by +/-20 offset from rowdrop automation can test all possible (if not column-centring at moment of Send, tho that prevent fine-tuning)
+ count all destinations, goal, fence, stack
+ AI go Call nearest plain/any sheep
+ AI go specified X and Send
+ is hat blocked from Send when is half-off edge of screen? test shows that Send works fine thre.

## 24 August
+ find whistle to record
+ rogue affected by some tiles e.g. slowed v much in boggy, slowed by copse, but stays on patrol
+ rogue AI avoids boggy, detour around
+ mobileClass extract some sheepClass code e.g. tileHandling
+ stream or ice puddle as conveyor graphic?
+ following a trail of veggies while traversing Conveyor-type tiles
+ grazing soundfx, visualfx (impact on decals?)
+ brown hoofprints

## 25 August
+ unaided sheep small % chance break free of stuck tile, soundfx
+ Bo Peep AI release sheep from boggy, fence, goal "Sorted 2: Bo Peep"
+ buttons on right-hand side beyond grid
+ another game about road drivers (like Frogger enemies) hitting animals, play Frog who rescues them

## 26 August
+ currently sheep mode alternates between "Roam" and "Graze" and while in "Graze" a sheep still moves slightly, very slowly - they are in Graze mode around 3x longer time than Roam (edited)
+ move button code to separate file

## 31 August
+ how pre-warn effects of diff tiles?
+ make easy to replay same level, choice
+ fontsize advance proportional to score previous
+ tutorial will use hat automation and voiceover
+ how was voiceover done in The Pit?

## 1 September
+ identify which drop-columns affected by Bend is difficult eg conveyor & bend interact
+ if every X tested means 840 rows of data in each test file!
+ compromise test send from 10-pixel intervals
+ when is visual test needed, versus vfast just to get data
+ scoring not needed in test; can be calc afterward if metadata supplied
+ stacking & tests

## 2 September
+ playLevel vs currentLevel (nightmare bugs)
+ fsatTest no grazing and speedy Roam, to reach endLevel, lower CPU
+ roam destination stochastic result so must record mode used (not just final mode) e.g. flag?
+ record any Stuck in test data
+ move dogTimer decr from Main.js to Rogue.js in-class
+ Input.js avoid actio nere?

## 3 September
+ 3am! conveyor speed must balance with send speed (sheep can drop through)
+ canvasButtons left/right broken (start then no move), never set False
+ try timer before allowing False?
+ buttons on road adhoc not transferable future games = Bad solution
+ removing keyheld False will allow friction to stop Hat
+ when a key press, set other keyHelds false

## 4 September
+ 3-sided pen after entry add gate 4th side
+ dump road & lorries, or after level rows mive up to reveal road (and hide hat row)
+ what does stacking signify?
+ stacked sheep above goal: should they get goal score bonus? (as H assumed)
+ occupy/stack shouldnt restrict sideways roaming?
+ Occupy applied only to bottom row, 1=occupy, 2=stack (doesnt affect tileHandling)

## 5 September
+ move Hat like warrior not car; change goto in TILE_W increments
+ centre-column Hat movement would simplify test, and maybe fix Touch?
+ should Test info be stored as sheep class properties?
+ hatmove try no False, accelerate max speed with mouse
D+ goals fencepos

Photopea: grey 555 & noise 22%  instead of black & 88%
photo grass = #3a6f07 (copy2) 9caa48 (copy3)
stream #4e789c  Republican red #ca1504

## 6 September
+ goal 3 cols, then 2, by level 9 goal reach edge play field
+ Moto E5 Play res = 228 ppi; and dim = 720 x 1440 i.e. game should fit...
but doesnt - shows top left 9/15 rows and 18/21 columns.
Xioami shows 19 columns (plus extra 2/3) and 9 rows (plus extra 2/3)
and changing embed width from 840 to 1024 didn't help

## 7 September
+ reuse same bar buttons and hiding, relabelling, reclassing will allow disabling after click for some intervals. maybe set action by class rather than directly in btn
+ init bar h1 p menu Sorted sub pick msg; Play Level num name

## 8 September
+ scaling canvas-only means my flexbox and CSS buttons are not usable, which also means I lose the game border
+ 50px allows more butt, when pos outofplay shift head off centre in angle direction so well inside tile
+ when stacking, extend fenceposts to tile(s) above (also extend ditch?)

## 9 September
+ these releveant when writing to <P> but not if bar
  debugPname = "debug_" + debugN;
  debugTextLine[debugN] += ' ' + msg;
    document.getElementById(debugParagName).innerHTML = debugTextLine[debugN];

## 10 September
+ if device width < height then portrait version with buttons under play field. would i have to create canvas in js ? no they seem to be resized,
+ js device orientation check to control flexbox size etc in CSS for index.html

## 11 September
+ Check other Js games for scaling & phones
+ 2 drawing canvases, or field canvas + flexbox

## 12 September
+ F1 mode wider rightbar?
+ Next steps: mousepos, buttons, hat slide, level editor, f1 menu level edit first, 2nd play manual test, Level buttons in sidebar? No f1 shd use keys
+ art guide: Because the field background is mostly dark, after testing the sheep it emerged that a darker patch if bordering field needed a mid grey (and consequently eyeballs became white). But I think yes darker to look different from sheep
+ to let mouse see 800 canvas may need to be 2+ pixels wider (sees 0 ok?)