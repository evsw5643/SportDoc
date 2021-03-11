# Sports Doc
Created by Enrico Blackwell, Willem Scott, Sayed Abdulmohsen Alhashemi, Evan Swett, Julian Abam

A website that allows you to view/compare stats for players and teams of 4 different major sports. It operates as an express web server running alongside a second express API used to fetch statistics from our database. The program features a robust search function and graphs for each player/team statistics unique to the sport. There is also a way to compare teams using an Elo system that uses data from years prior in order to estimate an average rating for the team.

We have all the code in the `coderzz/` folder

When running/building the app, `cd coderzz/` before anything else then standard node app procedure: `npm i`, `npm build`, then `node server.js`

To gather data for the database, the scripts are found in `database/`, each sport has its own data gather file. 
These are just run as standard Python. See schematic.pgsql for the layout of our database, reasonably close to what it actually is serving.
