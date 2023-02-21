module.exports = {
	addUnreleasedChange: function(data, title, description) {
		const
			changeTitle = title,
			changeDescription = description,
			changeDate = new Date().toLocaleString('en-US', { timeZone: 'America/Denver' });
		let dataObject;
		try { dataObject = data ? JSON.parse(data) : {} } catch (e) { dataObject = {} }
		const
			changes = dataObject['changes'] = dataObject['changes'] || {},
			unreleasedChanges = changes['unreleased'] = changes['unreleased'] || [];
		unreleasedChanges.unshift({
			'title':       changeTitle,
			'description': changeDescription,
			'date':        changeDate
		});
		return JSON.stringify(dataObject);
	}
};
