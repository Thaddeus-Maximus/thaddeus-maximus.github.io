$(window).on("load",function(){var a=9;$(".post img, div.code").each(function(){var b=$(this),c=parseInt(b.css("margin-top"),10),d=parseInt(b.css("margin-bottom"),10),e=b.outerHeight(),f=e%a;if(f){var g=a-f;b.css("margin-top",c+Math.ceil(g/2)),b.css("margin-bottom",d+Math.floor(g/2))}})});