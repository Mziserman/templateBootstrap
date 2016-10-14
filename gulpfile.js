var fs = require('fs')
var gulp = require('gulp');
var sass = require('node-sass');
var gutil = require('gulp-util');

gulp.task('default', function() {
    sass.render({
        file: './styles.scss'
    }, function(err, result) {
        var css = result.css.toString('utf8');
        fs.readFile('./markup.ftl', 'utf8', function (err, result) {
            var markup = result.toString('utf8');

            var  template = '' +
                '<#if products??> \n' +
                '<style> \n' +
                css + '\n' +
                '</style> \n' +
                markup + '\n' +
                '</#if>';

            fs.writeFile("./result.ftl", template, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });
        });
    });
});