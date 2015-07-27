/**
 * A jQuery Plugin for grouping checkboxes
 * @author Georg Tavonius <g.tavonius@gmail.com>
 * @date 2010/09/15
 */
(function($) {
	$.fn.extend({
		checkboxGroup: function(options) {
			if(!options.master) {
				throw new Exception('$.checkboxGroup needs a master');
			}
			var master = $(options.master),
				slaves = this,
				numSlaves = slaves.length,
				onNoneHandler = options.onNoneSelected || function() {},
				onSomeHandler = options.onSomeSelected || function() {},
				onAllHandler = options.onAllSelected || function() {},
				initialize = options.init !== undefined ? options.init : true;

			var check = function() {
				var checked = slaves.filter(':checked'),
					numChecked = checked.length;

				if(numChecked == 0) {
					/* nothing is checked */
					master.prop('checked', false).css('opacity', 1);
					onNoneHandler(master, slaves);
				} else if(numChecked == numSlaves) {
					/* all are checked */
					master.prop('checked', true).css('opacity', 1);
					onAllHandler(master, slaves);
				} else {
					/* some are checked */
					master.prop('checked', true).css('opacity', .5);
					onSomeHandler(master, slaves);
				}
			}
			slaves.change(check);
			
			if(initialize){
				check();
			}

			master.click(function() {
				master.css('opacity', 1);
				if(master.is(':checked')) {
					slaves.prop('checked', true);
					onAllHandler(master, slaves);
				} else {
					slaves.prop('checked', false);
					onNoneHandler(master, slaves);
				}
			});
			return this;
		}
	});
})(jQuery);
