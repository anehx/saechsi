/* eslint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
      environment: deployTarget
    },
    'revision-data': {
      type: 'file-hash',
      scm: null
    },
    'ssh-index': {
      remoteDir: "/var/www/saechsi",
      username: "root",
      host: "saechsi.ch",
      privateKeyFile: "~/.ssh/id_rsa",
      allowOverwrite: true
    },
    rsync: {
      dest: "/var/www/saechsi",
      host: "root@saechsi.ch",
      privateKey: "~/.ssh/id_rsa",
      delete: false
    }
  }

  return ENV
}
