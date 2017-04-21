var currentlyOpen = false;
var currentpagetext = "";

jQuery(document).ready(function() {
    currentlyOpen = false;
    //Open the menu

    jQuery("#hamburger").click(function() {
      if(currentlyOpen == false){
        //set the width of primary content container -> content should not scale while animating
        var contentWidth = jQuery('#content').width();

        //set the content with the width that it has originally
        jQuery('#content').css('width', contentWidth);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        jQuery('#contentLayer').css('display', 'block');

        //disable all scrolling on mobile devices while menu is shown
        jQuery('#container').bind('touchmove', function(e){e.preventDefault()});

        //set margin for the whole container with a jquery UI animation
        jQuery("#container").animate({"marginLeft": ["-30%", 'easeOutExpo']}, {
            duration: 700
        });

        //set margin for the menu with a jquery UI animation
        jQuery("#insideMenu").animate({"marginRight": ["0%", 'easeOutExpo']}, {
            duration: 700,
        });
      } else if(currentlyOpen == true) {
        //enable all scrolling on mobile devices when menu is closed
        jQuery('#container').unbind('touchmove');

        //set margin for the whole container back to original state with a jquery UI animation
        jQuery("#container").animate({"marginLeft": ["0%", 'easeOutExpo']}, {
            duration: 700,
            complete: function() {
                jQuery('#content').css('width', 'auto');
                jQuery('#contentLayer').css('display', 'none');
            }
        });

        currentlyOpen = false;
      } //end else if statement
    });

    //close the menu
    jQuery("#contentLayer").click(function() {

        //enable all scrolling on mobile devices when menu is closed
        jQuery('#container').unbind('touchmove');

        //set margin for the whole container back to original state with a jquery UI animation
        jQuery("#container").animate({"marginLeft": ["0%", 'easeOutExpo']}, {
            duration: 700,
            complete: function() {
                jQuery('#content').css('width', 'auto');
                jQuery('#contentLayer').css('display', 'none');

            }
        });

        //set margin for the menu to go back to original state with a jquery UI animation
        jQuery("#insideMenu").animate({"marginRight": ["-30%", 'easeOutExpo']}, {
            duration: 700,
        });
    });

    jQuery('#projectspagelink').click(function() {
        currentpagetext = "Projects";
        jQuery('#currentpage').html(currentpagetext);
    });

    jQuery('#awardspagelink').click(function() {
        currentpagetext = "Awards";
        jQuery('#currentpage').html(currentpagetext);
    });
    jQuery('#teampagelink').click(function() {
        currentpagetext = "Team";
        jQuery('#currentpage').html(currentpagetext);
    });
    jQuery('#aboutpagelink').click(function() {
        currentpagetext = "About";
        jQuery('#currentpage').html(currentpagetext);
    });
    jQuery('#currentpage').html(currentpagetext);
});
