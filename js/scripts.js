//business logic
function Player () {
  this.loser = 0;
  this.name;
  this.points = 0;
  this.roll = 0;
  this.firstroll = 0;
}
var player1 = ""
var player2 = ""
// var player1 = new Player(true)
// var player2 = new Player(false)

//random integer function
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;

}

Player.prototype.firstroll = function() {
  if (this.roll === 1) {
    this.loser = 0;
    alert("Haha " + this.playerName + ", you rolled a 1! Please don't waste my time like this again!")

  } else {
    this.tempscore += this.roll;
  }
}
Player.prototype.hold = function() {
  this.points += this.points;
  this.loser = 0;
  alert(this.playerName + ", next player");
}

Player.prototype.claimWinnner = function() {
  if (this.points >= 100) {
    alert(this.playerName + " You are the winner!");
  }
}
Player.prototype.newGame = function() {
  this.roll = 0;
  this.loser = 0;
  this.points = 0;
  this.playerName = "";
}
//UI logic
$(document).ready(function(){
$("button #inputname2-btn").click(function(event){
  // event.preventDefault();
  var playeroneName = $("#input input-name1").val();
  $(".player1Disp").text(playeroneName)
  var playertwoName = $("#input input-name2").val();
  $(".player2Disp").text(playertwoName)
  player1.name = playeroneName
  player2.name = playertwoName


  // $(".names").show();
  // playertwoName.show();
})
})
$("button#player1Roll").click(function(event) {
  player1.roll = randomNum(1, 6)
  $(".player1disRoll").text(player1.roll)
  player1.firstroll();
   $(".player1disScore").text(player1.loser);

})

$("button#player2Roll").click(function(event) {
  randomNum(1, 6)
  player2.roll = randomNum(1, 6)
  $(".player2disRoll").text(player1.roll)
  player1.firstroll();
   $(".player2disScore").text(player1.loser);
})

$("button#player1Hold").click(function(event) {
  player1.hold();
    $("#player1dispointsTotal").text(player1.points);
    $("#player1player1disScore").empty();
    $("#player1disRoll").empty();
    player1.claimWinnner();

})
$("button#player2Hold").click(function(event) {
  player2.hold();
    $("#player2dispointsTotal").text(player2.points);
    $("#player2player1disScore").empty();
    $("#player2disRoll").empty();
    player2.claimWinnner();

})
