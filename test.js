const test = require('ava')
const hasAccessibilitySelector = require('.')

test('it exposes a function', t => {
	t.is('function', typeof hasAccessibilitySelector)
})

test('it recognizes basic accessibility selectors', t => {
	// Examples from https://inclusive-components.design
	t.true(hasAccessibilitySelector('[role="tablist"]'))
	t.true(hasAccessibilitySelector('[aria-selected]'))
	t.true(hasAccessibilitySelector('[aria-selected]::after'))
	t.true(hasAccessibilitySelector('[role="menu"] a'))
	t.true(hasAccessibilitySelector(':checked ~ [role="menu"]'))
	t.true(
		hasAccessibilitySelector('[role="menuitem"][aria-checked="true"]::before')
	)
})

test('it does not mark a regular selector as accessibility selector', t => {
	t.false(hasAccessibilitySelector('.test'))
})

test('it does not mark regular attribute selectors as accessibility selector', t => {
	t.false(hasAccessibilitySelector('[href^="https://"]'))
})
