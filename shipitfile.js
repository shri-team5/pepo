module.exports = function(shipit) {
    require('shipit-deploy')(shipit);

    const deployToPath = '/usr/src/pepo';
    const deployToCurentPath = deployToPath + '/current';

    shipit.initConfig({
        default: {
            workspace: '/tmp/pepo-workspace',
            deployTo: deployToPath,
            repositoryUrl: 'https://github.com/shri-team5/pepo.git',
            ignores: ['.git', 'node_modules'],
            keepReleases: 3,
            branch: 'production'
        },
        production: {
            servers: 'root@188.166.17.158'
        }
    });

    shipit.on('published', function() {
        shipit.start('start');
    });

    shipit.task('start-deploy', function() {
        shipit.start('stop');
        shipit.start('deploy');
    });

    shipit.task('start', function() {
        return shipit.remote(`cd ${deployToCurentPath} && npm install && npm run deps && npm run make && NODE_ENV=production npm run start`);
    });

    shipit.task('stop', function() {
        return shipit.remote(`cd ${deployToCurentPath} && npm run stop`);
    });
};
