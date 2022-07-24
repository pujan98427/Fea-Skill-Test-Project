module.exports = function (grunt) {
    'use strict';
    var pkgInfo = grunt.file.readJSON('package.json');
    var sassDir = 'src/scss';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // javascript linting with jshint
        jshint: {
            files: [
                'js/build/custom.js'
            ],
            options: {
                expr: true,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        //Compressing of javascript files
        uglify: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %> */\n',
                    report: 'gzip'
                },
                files: {
                    'js/custom.min.js': ['js/build/custom.js']
                }
            }
        },
        // css minification
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/build/',
                    src: [],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        },
        sass: {
            root: {
                options: {
                    style: 'expanded',
                    sourceMap: true,

                },
                files: [{
                    'style.css': './src/scss/style.scss',
                }]
            },

        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                    })
                ],
                syntax: require('postcss-scss')
            },
            dist: {

                src: [`${sassDir}/**/*.scss`]
            },
        },
        watch: {
            sassWatch: {
                files: [`${sassDir}/**/*.scss`,],
                tasks: ['sass'],
            }
        },
    });
    // Load NPM tasks to be used here
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('@lodder/grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');


    grunt.registerTask('default', ['uglify', 'cssmin']);
    grunt.registerTask('assets',
        [
            'uglify',
            'sass',
            'postcss',
        ]
    );
};