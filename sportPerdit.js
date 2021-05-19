let basketballPic = document.getElementById('basketball');
let baseballPic = document.getElementById('baseball');
let nbaDropdown = document.getElementById('basketballOptions');
let mlbDropdown = document.getElementById('baseballOptions');
let predictButton = document.getElementById("predictButton");
let box = document.getElementById("box");

let isTrue1 = false;
let isTrue2 = false;
let isTrue3 = false;
let isTrue4 = false;


basketballPic.addEventListener("click", show);
baseballPic.addEventListener("click", show);
let n = 0;

 function show(){
    if(this.id === 'basketball'){
        nbaDropdown.style.display = 'block';
        mlbDropdown.style.display = 'none';
        winner2.innerHTML = "";
        firstSelected2.innerHTML = "";
        secondSelected2.innerHTML = "";
        box.style.display = 'none';
        isTrue3 = false;
        isTrue4 = false;
        
        baseballPic.setAttribute("class", "grayscale");
        basketballPic.classList.remove("grayscale");
        basketballPic.setAttribute("class", "chosen")
        n = 1;
    }else if(this.id === 'baseball'){
        nbaDropdown.style.display = 'none';
        mlbDropdown.style.display = 'block';
        winner.innerHTML = "";
        firstSelected.innerHTML = "";
        secondSelected.innerHTML = "";
        box.style.display = 'none';
        isTrue1 = false;
        isTrue2 = false;
        
        basketballPic.setAttribute("class", "grayscale");
        baseballPic.classList.remove("grayscale");
        baseballPic.setAttribute("class", "chosen")
        n = 2;
    }else{
        console.log('Error');
    }
 }
 
 const nbaTeamNames = [
            //eastern conference
            {"teams" : "New York Knicks", "pct": .207, "id" : "New_York_Knicks"},
            {"teams" : "Cleveland Caveliers", "pct": .232, "id" : "Cleveland_Caveliers"},
            {"teams" : "Chicago Bulls", "pct": .268, "id" : "Chicago_Bulls"},
            {"teams" : "Atlanta Hawks", "pct": .354, "id" : "Atlanta_Hawks"},
            {"teams" : "Washington Wizards", "pct": .390, "id" : "Washington_Wizards"},
            {"teams" : "Charlotte Hornets", "pct": .476, "id" : "Charlotte_Hornets"},
            {"teams" : "Miami Heat", "pct": .476, "id" : "Miami_Heat"},
            {"teams" : "Detroit Pistons", "pct": .500, "id" : "Detroit_Pistons"},
            {"teams" : "Orlando Magic", "pct": .512, "id" : "Orlando_Magic"},
            {"teams" : "Brooklyn Nets", "pct": .512, "id" : "Brooklyn_Nets"},
            {"teams" : "Indiana pacers", "pct": .585, "id" : "Indiana_pacers"},
            {"teams" : "Boston Celtics", "pct": .598, "id" : "Boston_Celtics"},
            {"teams" : "Philadelphia 76ers", "pct": .622, "id" : "Philadelphia_76ers"},
            {"teams" : "Toronto Raptors", "pct": .707, "id" : "Toronto_Raptors"},
            {"teams" : "Milwaukee Bucks", "pct": .732, "id" : "Milwaukee_Bucks"},
        //Western conferenc
            {"teams" : "Phoenix Suns", "pct" : .232, "id" : "Phoenix_Suns"},
            {"teams" : "Memphis grizzlies", "pct" : .402, "id" : "Memphis_grizzlies"},
            {"teams" : "New Orleans pelicans", "pct" : .402, "id" : "New_Orleans_pelicans"},
            {"teams" : "Dallas Mavericks", "pct" : .402, "id" : "Dallas_Mavericks"},
            {"teams" : "Minnesota timberwolves", "pct" : .439, "id" : "Minnesota_timberwolves"},
            {"teams" : "Los Angeles lakers", "pct" : .451, "id" : "Los_Angeles_lakers"},
            {"teams" : "Sacramento kings", "pct" : .476, "id" : "Sacramento_kings"},
            {"teams" : "San Antonio Spurs", "pct" : .585, "id" : "San_Antonio_Spurs"},
            {"teams" : "Los Angeles Clippers", "pct" : .585, "id" : "Los_Angeles_Clippers"},
            {"teams" : "Oklahoma City Thunder", "pct" : .598, "id" : "Oklahoma_City_Thunder"},
            {"teams" : "Utah Jazz", "pct" : .610, "id" : "Utah_Jazz"},
            {"teams" : "Houston Rockets", "pct" : .646, "id" : "Houston_Rockets"},
            {"teams" : "Portland Trail Blazers", "pct" : .646, "id" : "Portland_Trail_Blazers"},
            {"teams" : "Denver Nuggets", "pct" : .659, "id" : "Denver_Nuggets"},
            {"teams" : "Golden State Warriors", "pct" : .695, "id" : "Golden_State_Warriors"},
    ];
    const mlbTeamNames = [
        // AL
            {"team": "New York Yankees", "pct": .636, "id" : "New_York_Yankees"},
            {"team": "Tampa Bay Rays", "pct": .593, "id" : "Tampa_Bay_Rays"},
            {"team": "Boston Red Sox", "pct": .519, "id" : "Boston_Red_Sox"},
            {"team": "Toronto Blue Jays", "pct": .414, "id" : "Toronto_Blue_Jays"},
            {"team": "Baltimore Orioles", "pct": .333, "id" : "Baltimore_Orioles"},
            {"team": "Minnesota Twins", "pct": .623, "id" : "Minnesota_Twins"},
            {"team": "Cleveland Indians", "pct": .574, "id" : "Cleveland_Indians"},
            {"team": "Chicago White Sox", "pct": .447, "id" : "Chicago_White_Sox"},
            {"team": "Kansas City Royals", "pct": .364, "id" : "Kansas_City_Royals"},
            {"team": "Detroit Tigers", "pct": .292, "id" : "Detroit_Tigers"},
            {"team": "Houston Astros", "pct": .660, "id" : "Houston_Astros"},
            {"team": "Oakland Athletics", "pct": .599, "id" : "Oakland_Athletics"},
            {"team": "Texas Rangers", "pct": .481, "id" : "Texas_Rangers"},
            {"team": "Los Angeles Angles", "pct": .444, "id" : "Los_Angeles_Angles"},
            {"team": "Seattle Mariners", "pct": .420, "id" : "Seattle_Mariners"},
            // NL
            {"team": "Atlanta Braves", "pct": .599, "id" : "Atlanta_Braves"},
            {"team": "Washington Nationals", "pct": .574, "id" : "Washington_Nationals"},
            {"team": "New York Mets", "pct": .531, "id" : "New_York_Mets"},
            {"team": "Philadelphia Phillies", "pct": .500, "id" : "Philadelphia_Phillies"},
            {"team": "Miami Marlins", "pct": .352, "id" : "Miami_Marlins"},
            {"team": "St Louis Cardnals", "pct": .562, "id" : "St_Louis_Cardnals"},
            {"team": "Milwaukee Brewers", "pct": .549, "id" : "Milwaukee_Brewers"},
            {"team": "Chicago Cubs", "pct": .519, "id" : "Chicago_Cubs"},
            {"team": "Cincinnati Reds", "pct": .463, "id" : "Cincinnati_Reds"},
            {"team": "Pittsburgh Pirates", "pct": .426, "id" : "Pittsburgh_Pirates"},
            {"team": "Los Angeles Dodgers", "pct": .654, "id" : "Los Angeles_Dodgers"},
            {"team": "Arizona Diamondbacks", "pct": .525, "id" : "Arizona_Diamondbacks"},
            {"team": "San Fancisco Giants", "pct": .475, "id" : "San Fancisco_Giants"},
            {"team": "Colorado Rockies", "pct": .428, "id" : "Colorado_Rockies"},
            {"team": "San Diago Padres", "pct": .432, "id" : "San_Diago_Padres"},
    ];
let awayTeam = document.getElementById("awayTeam");
let homeTeam = document.getElementById("homeTeam");
// let 
let firstSelected = document.getElementById('firstSelected');
let secondSelected = document.getElementById('secondSelected');


console.log(firstSelected);
let winner = document.getElementById('winner');


// BasketBall
    for (i = 0; i<30; i++){
        var next = document.createElement('option');
        next.setAttribute("class", "nbaAway");
        next.setAttribute("value", i);
        next.setAttribute("id", nbaTeamNames[i].id);
        var textnode = document.createTextNode(nbaTeamNames[i].teams);
        next.appendChild(textnode);
        document.getElementById("awayTeam").appendChild(next);
    }


    for (i = 0; i<30; i++){
        var next = document.createElement('option');
        next.setAttribute("class", "nbaHome");
        next.setAttribute("value", i);
        next.setAttribute("id", nbaTeamNames[i].id);
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
        firstSelected.setAttribute("class", nbaTeamNames[teamSelected].id);
        isTrue1 = true;
        console.log(isTrue1);
        winner.innerHTML = "";

        if(isTrue2 == true && isTrue1 == true){
            box.style.display = 'block';
        }
    }

    function selectedTeam2(){
        let teamSelected = this.getAttribute("value");
        secondSelected.innerHTML = nbaTeamNames[teamSelected].teams;
        secondSelected.setAttribute("value", nbaTeamNames[teamSelected].pct);
        secondSelected.setAttribute("class", nbaTeamNames[teamSelected].id);
        console.log(nbaTeamNames[teamSelected].pct);
        isTrue2 = true;
        console.log(isTrue2);
        winner.innerHTML = "";

        if(isTrue2 == true && isTrue1 == true){
            box.style.display = 'block';
        }
    }



    // BaseBall

let awayTeam2 = document.getElementById("awayTeam2");
let homeTeam2 = document.getElementById("homeTeam2");
// let 
let firstSelected2 = document.getElementById('firstSelected2');
let secondSelected2 = document.getElementById('secondSelected2');



let winner2 = document.getElementById('winner2');

    // BaseBall show teams

    for (i = 0; i<mlbTeamNames.length; i++){
        var next = document.createElement('option');
        next.setAttribute("class", "mlbAway");
        next.setAttribute("value", i);
        var textnode = document.createTextNode(mlbTeamNames[i].team);
        next.appendChild(textnode);
        document.getElementById("awayTeam2").appendChild(next);
    }

    for (i = 0; i<mlbTeamNames.length; i++){
        var next = document.createElement('option');
        next.setAttribute("class", "mlbHome");
        next.setAttribute("value", i);
        var textnode = document.createTextNode(mlbTeamNames[i].team);
        next.appendChild(textnode);
        document.getElementById("homeTeam2").appendChild(next);
    }

    //See what team was choosen
    let selector3 = document.getElementsByClassName('mlbAway');

    for (var i = 0; i < selector3.length; i++) {
        selector3[i].addEventListener('click', selectedTeam3);
    }

    let selector4 = document.getElementsByClassName('mlbHome');

    for (var i = 0; i < selector4.length; i++) {
        selector4[i].addEventListener('click', selectedTeam4);
    }

    function selectedTeam3(){
        let teamSelected = this.getAttribute("value");
        firstSelected2.innerHTML = mlbTeamNames[teamSelected].team;
        firstSelected2.setAttribute("value", mlbTeamNames[teamSelected].pct);
        firstSelected2.setAttribute("class", mlbTeamNames[teamSelected].id);
        console.log(mlbTeamNames[teamSelected].pct);
        isTrue3 = true;
        winner2.innerHTML = "";

        if(isTrue3 == true && isTrue4 == true){
            box.style.display = 'block';
        }
    }

    function selectedTeam4(){
        let teamSelected = this.getAttribute("value");
        secondSelected2.innerHTML = mlbTeamNames[teamSelected].team;
        secondSelected2.setAttribute("value", mlbTeamNames[teamSelected].pct);
        secondSelected2.setAttribute("class", mlbTeamNames[teamSelected].id);
        console.log(mlbTeamNames[teamSelected].pct);
        isTrue4 = true;
        winner2.innerHTML = "";

        if(isTrue3 == true && isTrue4 == true){
            box.style.display = 'block';
        }
    }

    //predictor

    predictButton.addEventListener('click', function(){
        if(n === 1){
            winner2.style.display = 'none';
            winner.style.display = 'block';
            box.style.display = 'none';
            

            if(firstSelected.getAttribute('class') != secondSelected.getAttribute('class')){
                if(firstSelected.getAttribute('value') > secondSelected.getAttribute('value')){
                    winner.innerHTML = `${firstSelected.textContent} is most likely to win`;
                    firstSelected.innerHTML = "";
                    secondSelected.innerHTML = "";
                    isTrue1 = false;
                    isTrue2 = false;
                }else if(secondSelected.getAttribute('value') > firstSelected.getAttribute('value')){
                    winner.innerHTML = `${secondSelected.textContent} is most likely to win`;
                    firstSelected.innerHTML = "";
                    secondSelected.innerHTML = "";
                    isTrue1 = false;
                    isTrue2 = false;
                }else if(secondSelected.getAttribute('value') === firstSelected.getAttribute('value')){
                    function random_item(items){
                        return items[Math.floor(Math.random()*items.length)];
                    }

                    let arr = [firstSelected, secondSelected];

                    winner.innerHTML = `${random_item(arr).textContent} is most likely to win`;
                    firstSelected.innerHTML = "";
                    secondSelected.innerHTML = "";
                    isTrue1 = false;
                    isTrue2 = false;
                }else{
                    console.log('error');
                }
            }else if(firstSelected.getAttribute('class') === secondSelected.getAttribute('class')){
                alert("you cant put the same team against each other silly.");
            }
        }else if(n === 2){
            winner.style.display = 'none';
            winner2.style.display = 'block';
            box.style.display = 'none';
            

            if(firstSelected2.getAttribute('class') !== secondSelected2.getAttribute('class')){
                if(firstSelected2.getAttribute('value') > secondSelected2.getAttribute('value')){
                    winner2.innerHTML = `${firstSelected2.textContent} is most likely to win`;

                    firstSelected2.innerHTML = "";
                    secondSelected2.innerHTML = "";
                    isTrue3 = false;
                    isTrue4 = false;
                }else if(secondSelected2.getAttribute('value') > firstSelected2.getAttribute('value')){
                    winner2.innerHTML = `${secondSelected2.textContent} is most likely to win`;
                    firstSelected2.innerHTML = "";
                    secondSelected2.innerHTML = "";
                    isTrue3 = false;
                    isTrue4 = false;
                }else if(secondSelected2.getAttribute('value') === firstSelected2.getAttribute('value')){
                    function random_item(items){
                        return items[Math.floor(Math.random()*items.length)];
                    }

                    let arr = [firstSelected2, secondSelected2];

                    winner2.innerHTML = `${random_item(arr).textContent} is most likely to win`;
                    firstSelected2.innerHTML = "";
                    secondSelected2.innerHTML = "";
                    isTrue3 = false;
                    isTrue4 = false;
                }else{
                    console.log('error');   
                }
            }else if(firstSelected2.getAttribute('class') === secondSelected2.getAttribute('class')){
                alert("you cant put the same team against each other silly.");
            }

        }
    });