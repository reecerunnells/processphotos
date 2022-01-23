# processphotos
node app that takes a directory of images and resizes them to a "processed" folder

# requires
uses [sharp](https://github.com/lovell/sharp) - cool library, checkem out and givem some love.

# notes
- Checks to see if the width of the image file is greater than 1200, resizes down to 1200x900
- Creates a `processed` folder in the same directory as the images provided
- Saves the images in the "processed" directory and prepends "processsed" to the image file name like: `IMG_1120.JPEG` to `processed-img_1120.jpeg`

# usage
```
node [path/to/processphotos/app.js] [directory/with/images]
```

# example

```
node ~/code/processphotos/app.js ~/Photos/artphotos/
```