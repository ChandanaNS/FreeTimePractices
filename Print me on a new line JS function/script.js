function print_me() {
  for (var i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      arguments[i].forEach(function (entry) {
        console.log(entry);
      });
    } else {
      console.log(arguments[i]);
    }
  }
  return function () {
    for (var i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        arguments[i].forEach(function (entry) {
          console.log(entry);
        });
      } else {
        console.log(arguments[i]);
      }
    }
  };
}
print_me("foo");
print_me("foo", "bar");
print_me("foo", ["bar", "baz"]);
print_me("foo")("bar");
