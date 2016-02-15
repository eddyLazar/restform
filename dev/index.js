$(document).ready(function() {
  $('#testForm').restForm({
    url: '/url/to/form/handler',
    additionalFormData: {
      test: 123,
      b: 456
    }
  });
});
