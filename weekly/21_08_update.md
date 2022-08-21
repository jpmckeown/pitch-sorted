# Update 21 August

Hi, this is Patrick with your Week 2 update for Sorted.

Tim Waskett provided a 6-part recipe of algorithms for roaming, and I've had a go at implementing something like the first 3 of those in Javascript.

H Trayford suggested player movement should wrap left and right offscreen, he added toggle-able code.

McFunkypants gave the menus and other non-play screens a field background, a nice title themed on goal tiles, and a fun bouncing animation with the sheep head that Chis created last week.

Github this week: lots of work on code.

We'll see all of those in demo.

[demo menu, help, credits]

[demo Level 1 Hat wrapping]

### direction angle

Originally sheep jitter was random. Now first 3 steps of Tim Waskett's roaming algorithm are implemented, so each has a facing angle and moves forward.

[demo Level 3 roaming in editmode]

The gameplay benefit is that a player now has some idea where a roaming sheep is likely to move next, and can intervene by doing a Call, especially if a sheep is heading into trouble, for example towards the rogue, or a problem tile such as boggy ground.

[Bo Peep slide]

[demo F1, then checkout main]

That depends on making facing angle visibly obvious to player. prompted by the rhyme Little Bo Peep I decided to tack a tail on each sheep.

### level tuning

"Level design can include tuning as well as tile placement"
"Defaults are provide for all tuning parameters"

[demo VSc tuning.js level.js]
[demo levels 2 and 3]

sheep scatter depth on levels 5 and 6
flock or scatter - initial placement

### trello

