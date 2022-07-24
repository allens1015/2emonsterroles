# 2emonsterroles
 
This tool is sort of a bridge between Pathfinder 2e and D&D 4e. I wanted to add battlefield roles to 2e, so here we are.

The level selector will pick out the values you should be targeting when making/editing a creature, lef tbeing more scary and right being less scary. Selecting a role from the dropdown will highlight one of those values in each row that's designated in the assets json as fitting that role. There's a short text blurb from the 2e GMG for each role to help fill the gap. You can toggle the stat arrays on and off with the button.

The third dropdown is a keyword-based logical-and search that looks through the attached json at all (ha) the special abilities in there so you can mix and match specials that fit archetypes more.
These values are hand coded and pulled out by looking at bestiaries and whatnot, as they're not really identifiable from any API I've found. Real messy stuff.

Building is just cloning the repo and hitting npm run serve.