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