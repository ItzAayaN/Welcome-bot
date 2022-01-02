const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.users['@0.1.0'].me.status.update({
  activity_name: `Server Joins`, 
  activity_type: 'Watching',
  url: '',
  status: 'DND',
});