# jQuery.checkboxGroup

This is a yet simple plugin that easily allows you to group some
checkboxes together and create a master checkbox that can check or
uncheck all slave checkboxes.

## How To Use It

Given a checkbox with id `master` and some checkboxes within a fieldset
you can control them through the master with this simple script:

	$('fieldset input[type=checkbox]').checkboxGroup({
		master: $('#master')
	});

## More Docs

You have the following optional options besides the mandatory master:

onAllSelected(masterCheckbox, slaveCheckboxes)

	Callback, that is called, when all checkboxes are selected

onSomeSelected(masterCheckbox, slaveCheckboxes)

	Callback, that is called, when some but not all checkboxes are selected

onNoneSelected(masterCheckbox, slaveCheckboxes)

	Callback, that is called, when none of the checkboxes is selected

## License 

(The MIT License)

Copyright (c) 2010 Georg Tavonius &lt;g.tavonius@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
