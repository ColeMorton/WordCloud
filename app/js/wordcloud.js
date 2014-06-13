var topicsList = (function () {
  var items = [];

  var sizes = ["12pt","15pt","18pt","21pt","24pt","27pt"];

  return {
    load: function(callback) {
      $.getJSON( "topics.json", function(data) {
        items = data.topics;

        if (callback !== undefined) {
          callback();
        }
      });
    },

    getAll: function() {
      return items;
    },

    getTotal: function() {
      return items.length;
    },

    sortByVolume: function() {
      items.sort(function(a,b) {
        return parseFloat(a.volume) - parseFloat(b.volume);
      });
    },

    setSizes: function() {
      var totalTopics = items.length;
      bracketSize = totalTopics / sizes.length;

      bracketNumber = 0;
      for (var i = 0; i < totalTopics; i += bracketSize) {
        topicBracket = items.slice(i, i + bracketSize);
        for (var t = 0; t < bracketSize; t++) {
          topicBracket[t].size = sizes[bracketNumber];
        }
        bracketNumber++;
      }
    },

    setColors: function() {
      $.each(items, function(key, topic){
        switch (true) {
          case topic.sentimentScore < 40:
            topic.color = "red";
            break;
          case topic.sentimentScore > 60:
            topic.color = "green";
            break;
          default:
            topic.color = "grey";
        }
      });
    },

    randomise: function() {
      var i = items.length, j, temp;
      while (--i)
      {
        j = Math.floor(Math.random() * (i - 1));
        temp = items[i];
        items[i] = items[j];
        items[j] = temp;
      }
    }
  };
})();

function displayTopics(topics) {
  $.each(topics, function(key, topic){
    word = JST['app/templates/word.us']({
      id: topic.id,
      size: topic.size, 
      color: topic.color, 
      value: topic.label
    });

    $( "#wordContainer" )[0].innerHTML += word;
  });  
}

function addClickHandlers(topics) {
  $( ".word" ).click(function() {
    topicId = $( this ).data("id");
    $.each(topics, function(key, topic){
      if (topic.id === topicId){
        positive = topic.sentiment.positive !== undefined ? topic.sentiment.positive : "0";
        neutral = topic.sentiment.neutral !== undefined ? topic.sentiment.neutral : "0";
        negative = topic.sentiment.negative !== undefined ? topic.sentiment.negative : "0";

        information = JST['app/templates/information.us']({
          topicLabel: topic.label,
          totalMentions: topic.volume,
          positiveMentions: positive,
          neutralMentions: neutral,
          negativeMentions: negative
        });

        $( "#information" )[0].innerHTML = information;
      }
    });
  });
}

$( document ).ready(function() {
  topicsList.load(function() { 
    topicsList.sortByVolume();
    topicsList.setSizes();
    topicsList.setColors();
    topicsList.randomise();

    if ($( "#wordContainer" ).length !== 0) {
      displayTopics(topicsList.getAll());
    }

    if ($( ".word" ).length !== 0) {
      addClickHandlers(topicsList.getAll());
    }
  });
});