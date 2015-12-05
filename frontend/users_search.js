var UsersSearch = function($nav) {
  this.$nav = $nav;
  this.$input = $nav.attr('input');
  this.$ul = $nav.children;
  this.$nav.on('input', this.handleInput.bind(this));
};

UsersSearch.prototype.handleInput = function (e) {
  e.preventDefault();

  $.ajax({
    url: "/users/search",
    type: "GET",
    dataType: "json",
    success: function(resp){

    }.bind(this)
  });
};

module.exports = UsersSearch;
