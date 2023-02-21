const
	core = require('@actions/core'),
	github = require('@actions/github'),
	updateChangelog = require('./update-changelog.js');

try {
	const data = core.getInput('data'), changeTitle = core.getInput('change-title');
	if(changeTitle)
		core.setOutput(updateChangelog.addUnreleasedChange(data, changeTitle, core.getInput('change-description')));
} catch (error) {
	core.setFailed(error.message);
}
