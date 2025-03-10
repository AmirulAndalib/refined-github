import {test, assert} from 'vitest';

import {
	addHotkey,
} from './hotkey.js';

function testAddHotkey(existing: string | undefined, added: string, final: string): void {
	const link = document.createElement('a');
	if (existing) {
		link.setAttribute('data-hotkey', existing);
	}

	addHotkey(link, added);
	assert.equal(link.dataset.hotkey, final);
}

test('addHotkey if one is specified', testAddHotkey.bind(
	undefined,
	'T-REX',
	'CHICKEN',
	'T-REX,CHICKEN',
));
test('addHotkey if the same is already specified', testAddHotkey.bind(
	undefined,
	'CHICKEN',
	'CHICKEN',
	'CHICKEN',
));
test('addHotkey when none are specified', testAddHotkey.bind(
	undefined,
	undefined,
	'CHICKEN',
	'CHICKEN',
));
