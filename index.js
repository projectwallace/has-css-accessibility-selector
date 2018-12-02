module.exports = selector => {
	return selector.includes('[aria-') || selector.includes('[role=')
}
