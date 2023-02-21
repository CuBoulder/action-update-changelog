const
	changelogTestPath = './.changelog-test.json',
	fs = require('fs'),
	updateChangelog = require('../update-changelog.js');
fs.writeFileSync(changelogTestPath, updateChangelog.addUnreleasedChange(fs.existsSync(changelogTestPath) ? fs.readFileSync(changelogTestPath) : '', 'Change title string', 'Change description string'));
