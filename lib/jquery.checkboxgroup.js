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
				onAllHandler = options.onAllSelected || function() {};

			var check = function() {
				var checked = slaves.filter(':checked'),
					numChecked = checked.length;

				if(numChecked == 0) {
					/* nothing is checked */
					master.attr('checked', '').css('opacity', 1);
					onNoneHandler(master, slaves);
				} else if(numChecked == numSlaves) {
					/* all are checked */
					console.log("ALL");
					master.attr('checked', 'checked').css('opacity', 1);
					onAllHandler(master, slaves);
				} else { 
					/* some are checked */
					master.attr('checked', 'checked').css('opacity', .5);
					onSomeHandler(master, slaves);
				}
			}
			slaves.change(check);
			check();
			
			master.click(function() {
				master.css('opacity', 1);
				if(master.is(':checked')) {
					slaves.attr('checked', 'checked');
					onAllHandler(master, slaves);
				} else {
					slaves.attr('checked', '');
					onNoneHandler(master, slaves);
				}
			});
			return this;
		}
	});
})(jQuery);
