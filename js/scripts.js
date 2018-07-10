//business logic
var player1 = ""
var player2 = ""

function Player() {
  this.loser = 0;
  this.name;
  this.points = 0;
  this.roll = 0;
  this.first = first;
}



function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

Player.prototype.firstroll = function() {
  if (this.roll === 1) {
    this.loser = 0;
    alert("Haha " + this.name + ", you rolled a 1! Please don't waste my time like this again!")

  } else {
    this.loser += this.roll;
  }
}
Player.prototype.hold = function() {
  this.points += this.points;
  this.loser = 0;
  alert(this.name + ", next player");
}

Player.prototype.claimWinnner = function() {
  if (this.points >= 100) {
    alert(this.name + " You are the winner!");
  }
}
Player.prototype.newGame = function() {
  this.roll = 0;
  this.loser = 0;
  this.points = 0;
  this.playerName = "";
}
//UI logic
$(document).ready(function() {
  $("button #inputname2-btn").click(function(event) {
    player1 = new Player();
    player2 = new Player();
    $(".player-console").show();
    $(".start-menu").hide();
    var playeroneName = $("#input input-name1").val();
    $(".player1Disp").text(playeroneName);
    var playertwoName = $("#input input-name2").val();
    $(".player2Disp").text(playertwoName);
    player1.name = playeroneName
    player2.name = playertwoName
    $(".player1Disp").show();
    $(".player2Disp").show();
  });
});

$("button#player1Roll").click(function(event) {
  player1.roll = randomNum(1, 6);
  $(".player1disRoll").text(player1.roll);
   player1.roll.firstroll();
  $(".player1disScore").text(player1.loser);

});

$("button#player2Roll").click(function(event) {
  player2.roll = randomNum(1, 6);
  $(".player2disRoll").text(player2.roll);
  player2.roll.firstroll();
  $(".player2disScore").text(player2.loser);

});

$("button#player1Hold").click(function(event) {
  player1.hold();
  $("#player1dispointsTotal").text(player1.points);
  $("#player1disScore").empty();
  $("#player1disRoll").empty();
  player1.claimWinnner();


});

$("button#player2Hold").click(function(event) {
  player2.hold();
  $("#player2dispointsTotal").text(player2.points);
  $("#player2disScore").empty();
  $("#player2disRoll").empty();
  player2.claimWinnner();


});

$("button#new-game").click(function(event) {
  $(".player-console").hide();
  clearValues();
  player1.newGame();
  player2.newGame();
  $("#player1disScore").empty();
  $("#player1dispointsTotal").empty();
  $("#player1disRoll").empty();
  $("#player2disScore").empty();
  $("#player2dispointsTotal").empty();
  $("#player2disRoll").empty();

  $(".start-menu").show();
});
