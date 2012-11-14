/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*!\n' +
        ' * Project: <%= pkg.title || pkg.name %>\n' +
        ' * Version: <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * Homepage: <%= pkg.homepage %>\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.company %>\n' +
        ' * \n' +
        ' * <%= pkg.description %>\n' +
        ' * \n' +
        ' * Author: <%= pkg.author.name %>\n' +
        ' * E-Mail: <%= pkg.author.email %>\n' +
        ' * Twitter: <%= pkg.author.twitter %>\n' +
        ' * Homepage: <%= pkg.author.homepage %>\n' +
        ' * \n' +
        ' * License: <%= pkg.licenses %>\n' +
        ' */'
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    concat: {
      original: {
        src: ['<banner:meta.banner>', '<file_strip_banner:src/<%= pkg.name %>.js>'],
        dest: 'src/<%= pkg.name %>.js'
      },
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:src/<%= pkg.name %>.js>'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint qunit concat min');

};
