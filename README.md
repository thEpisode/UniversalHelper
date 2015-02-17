UniversalHelper
===============

Create a universal helper with most common javascript snippets used for front-end developers, enjoy &amp; collaborate ;)

## Usage

### Reload pages

```js
UniversalHelper.reloadPage();
```

### Clean input tags

```js
UniversalHelper.cleanInputs(["#idInputA", "#idInputB"]);
```

## Clean table tag for load new information

```js
UniversalHelper.cleanInputs("selector");
```

### Clean select tags
```js
UniversalHelper.cleanSelect(["#idSelectA", "#idSelectB"]);
```

### Show hidden elements
```js
UniversalHelper.showElements(["#idElementA", "#idElementB"]);
```

### Hide elements
```js
UniversalHelper.hideElements(["#idElementA", "#idElementB"]);
```

### Enable elements
```js
UniversalHelper.enableElements(["#idElementA", "#idElementB"]);
```

### Disable elements
```js
UniversalHelper.disableElements(["#idElementA", "#idElementB"]);
```

### Slide-in animation
```js
UniversalHelper.slideIn("#selector");
```

### Slide-out animation
```js
UniversalHelper.slideOut("#selector");
```

### GPS Watcher

1. Initialize the engine
```js
UniversalHelper.GPSWatcher();
```
2. Catch the events emitted by UniversalHelper
```js
$(document).on("GPSPositionChanged", function (event, latitude, longitude) {
    console.log(latitude + " - " + longitude);
});
$(document).on("GPSMessage", function (event, message) {
    alert(message);
})
```
