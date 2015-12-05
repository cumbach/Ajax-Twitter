var UsersSearch = require('./users_search.js');
var FollowToggle = require("./follow_toggle.js");
$(function () {
  new FollowToggle($('.follow-toggle'));
});
// window.FollowToggle = FollowToggle;
$(function () {
  new UsersSearch($('.users-search'));
});
