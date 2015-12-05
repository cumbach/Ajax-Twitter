var FollowToggle = function($button){
  this.$button = $button;
  this.userId = $button.attr('user-id');
  this.followState = $button.attr('initial-follow-state');
  this.render();
  this.$button.on('click', this.handleClick.bind(this));
};

FollowToggle.prototype.render = function () {
  if (this.followState === 'true'){
    this.$button.text("Unfollow");
  } else {
    this.$button.text("Follow");
  }
};

FollowToggle.prototype.handleClick = function (e) {
  e.preventDefault();
  // var $authorInput = this.$messageForm.find('input[name="message[author]"]')
  // var $messageInput = this.$messageForm.find('input[name="message[text]"]')
  // var message = {
  //   author: $authorInput.val(),
  //   text: $messageInput.val()
  // };
  // debugger
  var verb;
  var followedState;
  if (this.followState === 'true') {
    verb = 'DELETE';
    followedState = 'false';
  } else {
    verb = 'POST';
    followedState = 'true';
  }
  $.ajax({
    url: "/users/"+ this.userId + "/follow",
    type: verb,
    dataType: "json",
    // data: {user_id: parseInt(this.userId)},
    success: function(resp){
      this.followState = followedState;
      this.render();
    }.bind(this)
  });
};


module.exports = FollowToggle;
