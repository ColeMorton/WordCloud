describe('TopicsList', function() {

  beforeEach(function() {
    topicsList.load();

    waitsFor(function() {
      return topicsList.getTotal() != 0;
    }, "The topics should be loaded", 3000); 
  });
 
  it("should load topics", function () {
    expect(topicsList.getTotal()).toEqual(30);
  });

  it("should sort the topics", function () {
    topicsList.sortByVolume();

    item1 = topicsList.getAll()[0].volume
    item2 = topicsList.getAll()[10].volume
    item3 = topicsList.getAll()[20].volume
    item4 = topicsList.getAll()[29].volume

    expect(item1 < item2 && item2 < item3 && item3 < item4).toBe(true);
  });

  it("should size the topics", function () {
    topicsList.setSizes();
    expect(topicsList.getAll()[0].size).toEqual("12pt");
    expect(topicsList.getAll()[10].size).toEqual("18pt");
    expect(topicsList.getAll()[20].size).toEqual("24pt");
    expect(topicsList.getAll()[29].size).toEqual("27pt");
  });

  it("should color the topics", function () {
    topicsList.setColors();

    var red, green, grey, pass;

    $.each(topicsList.getAll(), function(key, topic){
      switch (topic.color) {
        case "red":
          red = true;
          break;
        case "green":
          green = true;
          break;
        case "grey":
          grey = true;
      }

      if (red == true && green == true && grey == true) {
        pass = true;
        return false;
      }
    });

    expect(pass).toBe(true);
  });

  it("should randomise the topics", function () {
    topicsList.randomise();

    item1 = topicsList.getAll()[0].volume
    item2 = topicsList.getAll()[10].volume
    item3 = topicsList.getAll()[20].volume
    item4 = topicsList.getAll()[29].volume

    expect(item1 < item2 && item2 < item3 && item3 < item4).toBe(false);
  });
});