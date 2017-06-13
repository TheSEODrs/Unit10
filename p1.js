/**
 * Created by thisguy on 6/13/17.
 */

//  Kory Schmidt
//  CS 81: Javascript Programming
//  June 13, 2017
//  Assignment 10 part 1

//  This file creates a yellow-green div container,
//  and a button that changes the contents of the div

$(function()
{
    //Div
    $("body").append("<div></div>")
    $("div").css(
        {   "background": "#98bf21",
            "height": "200px",
            "width": "600px"            }
                )
            .text("Hello World");

    //Button
    $("body").append("<button></button>");
    $("button").text("Change div");
    $("button").click(function()
    {   $("div").animate({fontSize: "100px"}, "slow");   }   );
                                                                }
                                                                    );