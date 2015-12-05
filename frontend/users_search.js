var UsersSearch = function($nav) {
  this.$nav = $nav;
  this.$input = this.$nav.find('input');
  this.$ul = $('.users-search ul');
  this.$nav.on('input', this.handleInput.bind(this));
};

UsersSearch.prototype.handleInput = function (e) {
  e.preventDefault();
  $.ajax({
    url: "/users/search",
    type: "GET",
    dataType: "json",
    data: {query: this.$input.val()},
    success: function(resp){
      this.renderResults();
    }.bind(this)
  });
};

module.exports = UsersSearch;
