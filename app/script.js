'use strict';

$(function() {
  $('button').on('click',function() {
    $.get('adjectives', function(res) {
      var adjective = res.word;
      $('#adjective').text(adjective);
    });

    $.get('verbs', function(res) {
      var verb = res.word;
      $('#verb').text(verb);
    });

    $.get('nouns', function(res) {
      var noun = res.word;
      $('#noun').text(noun);
    });

  });

  $('#subAdj').on('submit', function(event) {
    event.preventDefault();
    var adjective = $('input[name=adj]').val(), adjPost;
    if (adjective) {
      adjPost = {word: adjective};
      $.post('adjectives', adjPost, function(res) {
        var adjMsg = res.msg;
        $('#adjMsg').text(adjMsg);
      });
    }
  });

  $('#subVerb').on('submit', function(event) {
    event.preventDefault();
    var verb = $('input[name=verb]').val(), verbPost;
    if (verb) {
      verbPost = {word: verb};
      $.post('verbs', verbPost, function(res) {
        var verbMsg = res.msg;
        $('#verbMsg').text(verbMsg);
      });
    $('#subVerb').val(' ');
    }
  });

  $('#subNoun').on('submit', function(event) {
    event.preventDefault();
    var noun = $('input[name=noun]').val(), nounPost;
    if (noun) {
      nounPost = {word: noun};
      $.post('nouns', nounPost, function(res) {
        var nounMsg = res.msg;
        $('#nounMsg').text(nounMsg);
      });
    }
  });

});
