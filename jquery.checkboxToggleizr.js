/**
 * Check or uncheck all checkboxes bei one checkbox referenced by data-reference.
 * data-reference attribute of "check all checkbox" must be the name attribute of the checkboxes.
 *
 * Author:    Alexander Bogomolov
 * Homepage:  http://www.bogomolov.de/
 * Version:   1.0
 */
;(function($) {

    $.checkboxToggleizr = function(element, options) {
      var defaults = {};
      this.$element = $(element);

      this.options = $.extend(defaults, options);

      this.init = function() {

        this.$element.click(function(e) {
          var self = $(this);
          var reference = self.data('reference');

          if(self.is(':checked')) {
            $(':checkbox[name="'+ reference +'"]').attr('checked', 'checked');
          }
          else {
            $(':checkbox[name="'+ reference +'"]').removeAttr('checked');
          }
        });
      };

      this.init();
      return this;
    };



    return $.fn.checkboxToggleizr = function(options) {
      return this.each(function() {
        return new $.checkboxToggleizr(this, options);
      })
    }
})(jQuery);