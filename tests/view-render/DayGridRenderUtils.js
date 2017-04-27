
var DayGridRenderUtils = {

	getSingleDayEl: function(date) {
		date = $.fullCalendar.moment.parseZone(date);
		var els = $('.fc-day-grid .fc-bg .fc-day[data-date="' + date.format('YYYY-MM-DD') + '"]');
		expect(els).toHaveLength(1);
		return els;
	},

	getDisabledEl: function(i) {
		var el = $('.fc-day-grid .fc-bg .fc-disabled-day:eq(' + i + ')');
		expect(el).toHaveLength(1);
		return el;
	}

};