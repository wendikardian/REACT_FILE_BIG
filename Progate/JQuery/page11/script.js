$(function() {
  $('#form').submit(function() {
    // Declare the selectValue variable
    var selectValue = $('#select-form').val();
    
    var textValue = $('#text-form').val();
    //  Replace the text of the #output-select element with the value of the selectValue variable
    $('#output-select').text(selectValue);
    
    $('#output-text').text(textValue);
    return false;
  });
});