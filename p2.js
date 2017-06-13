/**
 * Created by thisguy on 6/13/17.
 */

//  Kory Schmidt
//  CS 81: Javascript Programming
//  June 13, 2017
//  Assignment 10 part 2


//  This file houses the functions for the two buttons found in link2.html

//  The first button appends text to the end of <p> tags
//  The second button appends more list items to the end of <ol> tag

//------------------------------------------------------------------------------

$(function()
{   //Button 1: Append Text
    $("#btn1").click(function()
    {   var moreText = " Whoo hoo! More text.";
        $("p").append("<b class='txt'></b>");
        $(".txt").text(moreText);                   });

    //Button 2: Append List Item
    $("#btn2").click(function()
    {   var moreText = " Whoo hoo! More list items.";
        $("ol").append("<li class='lst'></li>");
        $(".lst").text(moreText);                       });

});