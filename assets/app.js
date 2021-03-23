$(document).ready(function () {

    window.zESettings = {
      webWidget: {
      color: { theme: '#1247A9' },
      launcher: {
        label: {'*': 'Need help?'}},
      contactOptions: {
      enabled: true,
      contactButton: { '*': 'Live Chat' }
      }
    }
    };
    zE(function() { 
    $zopim(function() {
    $zopim.livechat.window.setTitle('Suze Orman Live Chat');
    $zopim.livechat.prechatForm.setGreetings(`Please complete the form below, include your question, select start chat and an agent will be right with you.`);
    $zopim.livechat.departments.filter('Suze Orman Support'); //sets to only display Suze Orman department
    $zopim.livechat.departments.setVisitorDepartment('Suze Orman Support'); //sets to Suze Orman
    $zopim.livechat.button.setHideWhenOffline(true); //hides chat when offline
    $zopim.livechat.hideAll(); //makes it so the chat button doesn't auto-appear on the page
    $zopim.livechat.setOnStatus(checkStatus); //checks if offline
    });
    });

  //callback function that checks if the chat is online
  function checkStatus(status) {  
      console.log(status)
    if (status == 'online') {  
        $('#chat-block').html(`<div class="container">
        <h4 class="title">Didn't find the answer? Live Chat with us</h4>
       <a href="javascript:$zopim.livechat.window.show();"><button class="btn btn-secondary btn-blue">Live Chat</button></a>
    </div>`) 
    }else{
        $('#chat-block').html(`<div class="container">
        <h4 class="title">We're currently offline, please submit a support ticket.</h4>
       <a href="https://hayhouse.zendesk.com/hc/en-us/requests/new"><button class="btn btn-secondary">Submit a Ticket</button></a>
    </div>`) 
    }
};

$('.dropdown-toggle').removeAttr("role");  


//hoverImages
$(document).on('click', '.hoverImages', function(e) {
  e.preventDefault();
  $(location).attr('href', $(this).data('link'))
});

//if no background image, will use default green
// var section_img = $('#section-bg').css("background-image");

//   if(section_img.includes('https://hayhouse.zendesk.com/')){
//     $('#section-bg').css("background-image", 'url(https://i.ibb.co/4VRgHYv/help-center-green.jpg)');
//   }


})