/*!
 * Project: checkboxToggleizr
 * Version: 1.0 - 2012-11-14
 * Homepage: http://www.starstormdesign.de
 * Copyright (c) 2012 Alexander Bogomolov
 * 
 * Check or uncheck all checkboxes bei one checkbox referenced by data-reference.
 * data-reference attribute of 'check all checkbox' must be the name attribute of the checkboxes.
 * 
 * Author: Alexander Bogomolov
 * E-Mail: alexander@bogomolov.de
 * Twitter: @abogomolov
 * Homepage: http://www.bogomolov.de
 * 
 * License: MIT
 */

/*!
 * Project: checkboxToggleizr
 * Version: 1.0 - 2012-11-14
 * Homepage: http://www.starstormdesign.de
 * Copyright (c) 2012 Alexander Bogomolov
 * 
 * Check or uncheck all checkboxes bei one checkbox referenced by data-reference.
 * data-reference attribute of 'check all checkbox' must be the name attribute of the checkboxes.
 * 
 * Author: Alexander Bogomolov
 * E-Mail: alexander@bogomolov.de
 * Twitter: @abogomolov
 * Homepage: http://www.bogomolov.de
 * 
 * License: MIT
 */

;(function ($) {

  $.CheckboxToggleizr = function (element, options) {
    var defaults = {
      invert: false
    };

    this.$element = $(element);
    this.reference = this.$element.data('reference');

    this.options = $.extend({}, defaults, options);

    this.init = function () {
      var self = this;

      this.$element.on('click', function (e) {
        if (self.options.invert === false) {
          self.toggle();
        }
        else {
          self.invert();
        }
      });

    };

    this.toggle = function () {
      if (this.$element.is(':checked')) {
        $(':checkbox[name="' + this.reference + '"]').attr('checked', 'checked');
      }
      else {
        $(':checkbox[name="' + this.reference + '"]').removeAttr('checked');
      }
    };

    this.invert = function () {
      if (this.$element.is(':checked')) {
        $(':checkbox[name="' + this.reference + '"]').each(function () {
          var checkbox = $(this);
          if (checkbox.is(':checked')) {
            checkbox.removeAttr('checked');
          }
          else {
            checkbox.attr('checked', 'checked');
          }
        });
        this.$element.removeAttr('checked');
      }
    };

    this.init();
    return this;
  };



  return $.fn.checkboxToggleizr = function (options) {
    return this.each(function () {
      return new $.CheckboxToggleizr(this, options);
    });
  };
})(jQuery);