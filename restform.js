(function($) {
    $.restForm = function(el, options) {
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("restForm", base);

        base.init = function() {

            base.options = $.extend({}, $.restForm.defaultOptions, options);
            // Put your initialization code here
        };
        
        
        base.formValid = function() {
            return base.options.formValid(this.$el);
        };


        base.getFormData = function() {
            
            var form = $(this.el)[0];
            var formData = new FormData(form);
            
            var additionalFormData = base.options.additionalFormData;
            
            for (var property in additionalFormData) {
                if (additionalFormData.hasOwnProperty(property)) {                  
                  formData.append(property, additionalFormData[property]);
                }
            }
            return formData;
        };

        base.postAjaxForm = function() {
            base.$el.trigger(base.options.triggerStartName);
            var formData = base.getFormData();
            // var method = base.$el.attr('method') || 'GET';
            var promise = $.ajax({
                method: 'POST',
                url: base.options.url,
                data: formData,
                headers: base.options.headers
                // THIS MUST BE DONE FOR FILE UPLOADING
                contentType: false,
                processData: false,
                // ... Other options like success and etc
            });

            promise.done(function(response) {
                base.$el.trigger(base.options.triggerEndName)
            });
        };

        // Run initializer
        base.init();
    };

    $.restForm.defaultOptions = {
        triggerStartName: 'form:loading:start',
        triggerEndName: 'form:loading:end',
        url: '/form/send/',
        additionalFormData: {},
        formValid: function (el) {
          return true;
        },
        headers: {
        }
    };

    $.fn.restForm = function(options) {
        return this.each(function() {
            var restFormObject = (new $.restForm(this, options));

            // HAVE YOUR PLUGIN DO STUFF HERE
            restFormObject.$el.submit(function(e) {
                e.preventDefault();
                if (restFormObject.formValid()) {
                  restFormObject.postAjaxForm();  
                }
            });

            // END DOING STUFF
        });
    };

})(jQuery);
