let basketballPic = document.getElementById('basketball');
let baseballPic = document.getElementById('baseball');
let nbaDropdown = document.getElementById('basketballOptions');
let mlbDropdown = document.getElementById('baseballOptions')
basketballPic.addEventListener("click", show);
 baseballPic.addEventListener("click", show);
 function show(){
    if(this.id === 'basketball'){
        nbaDropdown.style.display = 'block';
        mlbDropdown.style.display = 'none';
    }else if(this.id === 'baseball'){
        nbaDropdown.style.display = 'none';
        mlbDropdown.style.display = 'block';
    }else{
        console.log('Error');
    }
 }
 const nbaTeamNames = [
            //eastern conference
            {"teams" : "New York Knicks", "pct": .207},
            {"teams" : "Cleveland Caveliers", "pct": .232},
            {"teams" : "Chicago Bulls", "pct": .268},
            {"teams" : "Atlanta Hawks", "pct": .354},
            {"teams" : "Washington Wizards", "pct": .390},
            {"teams" : "Charlotte Hornets", "pct": .476},
            {"teams" : "Miami Heat", "pct": .476},
            {"teams" : "Detroit Pistons", "pct": .500},
            {"teams" : "Orlando Magic", "pct": .512},
            {"teams" : "Brooklyn Nets", "pct": .512},
            {"teams" : "Indiana pacers", "pct": .585},
            {"teams" : "Boston Celtics", "pct": .598},
            {"teams" : "Philadelphia 76ers", "pct": .622},
            {"teams" : "Toronto Raptors", "pct": .707},
            {"teams" : "Milwaukee Bucks", "pct": .732},
        //Western conferenc
            {"teams" : "Phoenix Suns", "pct" : .232},
            {"teams" : "Memphis grizzlies", "pct" : .402},
            {"teams" : "New Orleans pelicans", "pct" : .402},
            {"teams" : "Dallas Mavericks", "pct" : .402},
            {"teams" : "Minnesota timberwolves", "pct" : .439},
            {"teams" : "Los Angeles lakers", "pct" : .451},
            {"teams" : "Sacramento kings", "pct" : .476},
            {"teams" : "San Antonio Spurs", "pct" : .585},
            {"teams" : "Los Angeles Clippers", "pct" : .585},
            {"teams" : "Oklahoma City Thunder", "pct" : .598},
            {"teams" : "Utah Jazz", "pct" : .610},
            {"teams" : "Houston Rockets", "pct" : .646},
            {"teams" : "Portland Trail Blazers", "pct" : .646},
            {"teams" : "Denver Nuggets", "pct" : .659},
            {"teams" : "Golden State Warriors", "pct" : .695},
    ];
    const mlbTeamNames = [
        // AL
            {"team": "New_York_Yankees", "pct": .636},
            {"team": "Tampa_Bay_Rays", "pct": .593},
            {"team": "Boston_Red_Sox", "pct": .519},
            {"team": "Toronto_Blue_Jays", "pct": .414},
            {"team": "Baltimore_Orioles", "pct": .333},
            {"team": "Minnesota_Twins", "pct": .623},
            {"team": "Cleveland_Indians", "pct": .574},
            {"team": "Chicago_White_Sox", "pct": .447},
            {"team": "Kansas_City_Royals", "pct": .364},
            {"team": "Detroit_Tigers", "pct": .292},
            {"team": "Houston_Astros", "pct": .660},
            {"team": "Oakland_Athletics", "pct": .599},
            {"team": "Texas_Rangers", "pct": .481},
            {"team": "Los_Angeles_Angles", "pct": .444},
            {"team": "Seattle_Mariners", "pct": .420},
            // NL
            {"team": "Atlanta_Braves", "pct": .599},
            {"team": "Washington_Nationals", "pct": .574},
            {"team": "New_York_Mets", "pct": .531},
            {"team": "Philadelphia_Phillies", "pct": .500},
            {"team": "Miami_Marlins", "pct": .352},
            {"team": "St_Louis_Cardnals", "pct": .562},
            {"team": "Milwaukee_Brewers", "pct": .549},
            {"team": "Chicago_Cubs", "pct": .519},
            {"team": "Cincinnati_Reds", "pct": .463},
            {"team": "Pittsburgh_Pirates", "pct": .426},
            {"team": "Los_Angeles_Dodgers", "pct": .654},
            {"team": "Arizona_Diamondbacks", "pct": .525},
            {"team": "San_Fancisco_Giants", "pct": .475},
            {"team": "Colorado_Rockies", "pct": .428},
            {"team": "San_Diago_Padres", "pct": .432},
    ];
let awayTeam = document.getElementById("awayTeam");
let homeTeam = document.getElementById("homeTeam");
// let 
let firstSelected = document.getElementById('firstSelected');
let secondSelected = document.getElementById('secondSelected');

let predictButton = document.getElementById("predictButton");

let winner = document.getElementById('winner');


    for (i = 0; i<30; i++){
        var next = document.createElement('option');
        next.setAttribute("class", "nbaAway");
        next.setAttribute("value", i);
        var textnode = document.createTextNode(nbaTeamNames[i].teams);
        next.appendChild(textnode);
        document.getElementById("awayTeam").appendChild(next);
    }


    for (i = 0; i<30; i++){
        var next = document.createElement('option');
        next.setAttribute("class", "nbaHome");
        next.setAttribute("value", i);
        var textnode = document.createTextNode(nbaTeamNames[i].teams);
        next.appendChild(textnode);
        document.getElementById("homeTeam").appendChild(next);
    }

    let selector = document.getElementsByClassName('nbaAway');

    for (var i = 0; i < selector.length; i++) {
        selector[i].addEventListener('click', selectedTeam1);
    }

    let selector2 = document.getElementsByClassName('nbaHome');

    for (var i = 0; i < selector2.length; i++) {
        selector2[i].addEventListener('click', selectedTeam2);
    }

    function selectedTeam1(){
        let teamSelected = this.getAttribute("value");
        firstSelected.innerHTML = nbaTeamNames[teamSelected].teams;
        firstSelected.setAttribute("value", nbaTeamNames[teamSelected].pct);
        console.log(nbaTeamNames[teamSelected].pct)
    }

    function selectedTeam2(){
        let teamSelected = this.getAttribute("value");
        secondSelected.innerHTML = nbaTeamNames[teamSelected].teams;
        secondSelected.setAttribute("value", nbaTeamNames[teamSelected].pct);
        console.log(nbaTeamNames[teamSelected].pct);
    }

    predictButton.addEventListener('click', function(){
        if(firstSelected.getAttribute('value') > secondSelected.getAttribute('value')){
            winner.innerHTML = `${firstSelected.textContent} is the winner`;
        }else if(secondSelected.getAttribute('value') > firstSelected.getAttribute('value')){
            winner.innerHTML = `${secondSelected.textContent} is the winner`;
        }else if(secondSelected.getAttribute('value') === firstSelected.getAttribute('value')){
            winner.innerHTML = 'tie';
        }else{
            console.log('error');
        }
    });