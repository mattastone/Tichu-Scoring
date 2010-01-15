$(document).ready(function(){
  $('#score_button').click(function(){
	  if ($('#t1').val() == '')
		  var p1 = 0;
		else
	 	  var p1 = parseInt($('#t1').val());
		
		if ($('#t2').val() == '')
		  var p2 = 0;
		else
		  var p2 = parseInt($('#t2').val());
		
		if ((p1 == 0) & (p2==0)) {
			return;
		}
		
		if (isNaN(p1) || isNaN(p2)) {
		  alert("Scores must be input as integers");
			return;
		}
		if (((p1+p2)%100) != 0){
			alert("Scores on each hand must add to a multiple of 100");
			return;
		}
		if ((p1%5)!=0){
			alert("Team 1 must have a score divisible by 5");
			return
		}	
		if ((p2%5)!=0){
			alert("Team 2 must have a score divisible by 5");
			return
		}
		var p1_score = parseInt($('#team_1_score').html());
		var p2_score = parseInt($('#team_2_score').html());
		var p1_new = p1 + p1_score;
		var p2_new = p2 + p2_score
		$('#team_1_score').html(p1_new);
		$('#team_2_score').html(p2_new);		
		$('#score_table').append('<tr class="score_row"><td>'+p1_new+'</td><td>'+p2_new+'</td></tr>');
		$('#t1').val('');
		$('#t2').val('');
		$('.score_row').filter(function(index){
				return (((index+1)%4)==0);
				}).children('td').css({'border-bottom': "solid"});	
	});
	
});