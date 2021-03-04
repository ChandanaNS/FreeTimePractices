$(document).ready(function () {
  //hover on all columns
  $("div[class*='col-']").hover(
    function () {
      var $this = $(this); // caching $(this)
      var txt = "";
      txt += "width x height: " + $(this).outerWidth();
      txt += "x" + $(this).outerHeight() + "\n";
      $this.data("defaultText", $this.text());
      $this.text(txt);
    },
    // setting back the default value
    function () {
      var $this = $(this); // caching $(this)
      $this.text($this.data("defaultText"));
    }
  );
});
