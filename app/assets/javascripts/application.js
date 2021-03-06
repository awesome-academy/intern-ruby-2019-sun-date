//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require i18n
//= require i18n.js
//= require i18n/translations
//= require nouislider
//= require bootstrap/js/bootstrap.min.js
//= require bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js
//= require jquery-slimscroll/jquery.slimscroll.min.js
//= require jquery-validation/js/jquery.validate.min.js
//= require select2-full
//= require jquery.blockui.min.js
//= require js.cookie.min.js
//= require global/app.min.js
//= require page/login.min.js
//= require moment.min.js
//= require bootstrap-datepicker/js/bootstrap-datepicker.min.js
//= require global/quick-sidebar.min.js
//= require page/login.min.js
//= require layout/layout.min.js
//= require wNumb.js
//= require toastr
//= require jquery.flexslider-min
//= require_tree .

(function() {
  $(document).on('click', '.toggle-window', function(e) {
    e.preventDefault();
    var panel = $(this).parent().parent();
    var messages_list = panel.find('.messages-list');

    panel.find('.panel-body').toggle();
    panel.attr('class', 'panel panel-default');

    if (panel.find('.panel-body').is(':visible')) {
      var height = messages_list[0].scrollHeight;
      messages_list.scrollTop(height);
    }
  });
})();
