/* eslint indent: "off" */

$('.spoiler').on('click','button', function(event){
  // Show the spoiler context
    $(event.target).prev().show();
  // Hide the reveal spoiler button
    $(event.target).hide();

})
//Create the Reveal Spoiler button
const $button = $('<button> Reveal Spoiler </button>')
//Append to web page
$('.spoiler').append($button);
// Hide The Spoiler
$('.spoiler span').hide();
