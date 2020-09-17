from sportsreference.nba.roster import Player

james_harden = Player('hardeja01')
james_harden.dataframe.to_csv('%s.csv' % "testjames")
