Elo = (function () {
    function getRatingDelta(myRating, opponentRating, myGameResult) {
        if ([0, 0.5, 1].indexOf(myGameResult) === -1) {
            return null;
        }

        var myChanceToWin = 1 / (1 + Math.pow(10, (opponentRating - myRating) / 400));

        return Math.round(100 * (myGameResult - myChanceToWin));
    }

    function getNewRating(myRating, opponentRating, myGameResult) {
        return myRating + getRatingDelta(myRating, opponentRating, myGameResult);
    }

    function getWinChance(myRating, opponentRating) {
        return 1 / (1 + Math.pow(10, (opponentRating - myRating) / 400))
    }

    return {
        getRatingDelta: getRatingDelta,
        getNewRating: getNewRating
    };
})();

function get(object, key, default_value) {
    var result = object[key];
    return (typeof result !== "undefined") ? result : default_value;
}

function getEloScores(fromyear, toyear) {
    var url = `http://localhost:3001/basketball/getgames/${fromyear}/${toyear}`

    $.ajax({url: url, dataType: "json"}).then(function (data) {
        scores = {}
        for (let i = 0; i < data.length; i++) {
            let t1 = data[i].home_abbr, t2 = data[i].away_abbr
            let s1 = data[i].home_score, s2 = data[i].away_score

            let r1 = 0, r2 = 1;
            if (s1 === s2) {
                r1 = 0.5
                r2 = 0.5
            } else if (s1 > s2) {
                r1 = 1
                r2 = 0
            }

            let e1 = get(scores, t1, 1000)
            let e2 = get(scores, t2, 1000)

            scores[t1] = Elo.getNewRating(e1, e2, r1)
            scores[t2] = Elo.getNewRating(e2, e1, r2)

        }
    })
}