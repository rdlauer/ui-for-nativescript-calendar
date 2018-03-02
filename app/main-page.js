var Observable = require("data/observable").Observable;
var calendarModule = require("nativescript-ui-calendar");

var page;
var pageData = new Observable();

exports.pageLoaded = function(args) {
	page = args.object;
	page.bindingContext = pageData;

	var eventTitles = ["Lunch with Steve", "Meeting with Jane", "Q1 Recap Meeting"];
	var events = [];

	var j = 1;
	for (var i = 0; i < eventTitles.length; i++) {
		var now = new Date();
		var startDate = new Date(now.getFullYear(), now.getMonth(), j * 2, 12);
		var endDate = new Date(now.getFullYear(), now.getMonth(), (j * 2) + (j % 3), 13);
		var event = new calendarModule.CalendarEvent(eventTitles[i], startDate, endDate);
		events.push(event);
		j++;
	}

	pageData.set("events", events);
}