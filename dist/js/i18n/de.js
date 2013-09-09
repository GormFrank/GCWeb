/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 *
 * Version: @wet-boew-build.version@
 *
 */
/*
----- German dictionary (il8n) ---
 */
(function() {
	"use strict";
	var _pe = window.pe || {
		fn: {}
	};
	_pe.dic.ind = {
		'%lang-code': 'de',
		'%lang-eng': '@%lang-eng@',
		'%lang-fra': 'allemand',
		'%lang-native': 'Deutsch',
		'%all': 'Alle',
		'%home': 'Zuhause',
		'%main-page': 'Startseite',
		'%top-of-page': 'Zum Seitenanfang',
		'%you-are-in': 'Sie sind in',
		'%welcome-to': 'Willkommen bei',
		'%loading': 'Be ...',
		'%processing': 'Verarbeitung ...',
		'%search': 'Suchen',
		'%search-for-terms': 'Suche nach Begriffen:',
		'%no-match-found': 'Keine Übereinstimmung gefunden',
		'%matches-found': {
			'mixin': '[MIXIN] Ergebnisse gefunden'
		},
		'%menu': 'Menü',
		'%settings': 'Einstellungen',
		'%languages': 'Sprachen',
		'%about': 'Über',
		'%current': '(Aktuell)',
		'%hide': 'Verbergen',
		'%error': 'Fehler',
		'%colon': ':',
		'%hyphen': ' - ',
		'%start': 'Starten',
		'%stop': 'Stoppen',
		'%back': 'Zurück',
		'%new-window': ' (Öffnet in einem neuen Fenster)',
		'%minute-ago': 'Vor einer Minute',
		'%couple-of-minutes': 'paar Minuten',
		'%minutes-ago': {
			'mixin': 'Vor [MIXIN] Minuten'
		},
		'%hour-ago': 'Vor einer Stunde',
		'%hours-ago': {
			'mixin': 'Vor [MIXIN] Stunden'
		},
		'%days-ago': {
			'mixin': 'Vor [MIXIN] Tagen'
		},
		'%yesterday': 'gestern',

		'%next': 'Nächste',
		'%previous': 'Früher',
		'%first': 'Erste',
		'%last': 'Letzte',

		/* Archived Web page template */
		'%archived-page': 'Diese Web-Seite wurde auf der Web archiviert.',
		/* Menu bar */
		'%sub-menu-help': '(Öffnen Sie das Untermenü mit der Eingabetaste und schließen mit der Escape-Taste)',
		/* Tabbed interface */
		'%tab-rotation': {
			'disable': 'Stoppen Registerkarte Drehung',
			'enable': 'Starten Registerkarte Drehung'
		},
		'%tab-list': 'Registerkarte-Liste',
		'%tab-panel-end-1': 'Ende dieser Registerkarte angezeigt.',
		'%tab-panel-end-2': 'Zurück zur Liste der Registerkarte',
		'%tab-panel-end-3': 'oder der Rest der Seite fortzusetzen.',
		/* Multimedia player */
		'%play': 'Spielen',
		'%pause': 'Pausieren',
		'%open': 'Öffnen',
		'%close': 'Schließen',
		'%rewind': 'Zurückspulen',
		'%fast-forward': 'Schnellvorlauf',
		'%mute': {
			'enable': 'Stumm',
			'disable': 'Stummschaltung'
		},
		'%closed-caption': {
			'disable': 'Ausblenden Untertitelung',
			'enable': 'Zeige Untertitelung'
		},
		'%closed-caption-error': 'Fehler beim Laden Untertiteln',
		'%audio-description': {
			'enable': 'Aktivieren Sie Audio-Beschreibung',
			'disable': 'Deaktivieren Sie Audio-Beschreibung'
		},
		'%progress-bar': 'Verwenden linke und rechte Pfeiltaste, um Vor-und Rückspulen der Medien Fortschritte',
		'%no-video': 'Ihr Browser unterstützt keine zu haben scheinen die Fähigkeiten, um dieses Video abzuspielen, laden Sie sich bitte das Video unten',
		'%position': 'Aktuelle Position:',
		'%percentage': 'Wiedergabe Prozentsatz:',
		'%duration': 'Insgesamt benötigte Zeit',
		'%buffered': 'Buffered:',
		/* Share widget */
		'%favourite': 'Favorit',
		'%email': 'E-Mail',
		'%share-text': 'Teilen Sie diese Seite',
		'%share-hint': ' mit {s} ',
		'%share-email-subject': 'Interessante Seite',
		'%share-email-body': 'Vielleicht haben Sie diese Seite interessant:\n{t} ({u})',
		'%share-fav-title': '(Bookmark auf diese Seite)',
		'%share-manual': 'Bitte schließen Sie diesen Dialog und drücken Sie Strg-D, um diese Seite einzurichten.',
		'%share-showall': 'Alle anzeigen ({n})',
		'%share-showall-title': 'Alle bookmarking sites',
		'%share-disclaimer' : 'Keine Unterstützung von Produkten oder Dienstleistungen ausdrücklich oder stillschweigend.',
		/* Form validation */
		'%form-not-submitted': 'Das Formular konnte nicht vorgelegt werden, da ',
		'%errors-found': ' Fehler gefunden wurden.',
		'%error-found': ' Fehler festgestellt wurde.',
		/* Date picker */
		'%datepicker-hide': 'Ausblenden Kalender',
		'%datepicker-show': 'Wählen Sie ein Datum aus einem Kalender für das Feld:',
		'%datepicker-selected': 'Ausgewählt',
		/* Calendar */
		'%calendar-weekDayNames': ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
		'%calendar-monthNames': ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
		'%calendar': 'Kalender',
		'%calendar-currentDay': '(Aktueller Tag)',
		'%calendar-goToLink': 'Gehe zu<span class="wb-invisible"> Monat des Jahres</span>',
		'%calendar-goToTitle': 'Gehe zu Monat des Jahres',
		'%calendar-goToMonth': 'Monat',
		'%calendar-goToYear': 'Jahr',
		'%calendar-goToButton': 'Gehen',
		'%calendar-cancelButton': 'Kündigen',
		'%calendar-previousMonth': 'Vorheriger Monat: ',
		'%calendar-nextMonth': 'Nächster Monat: ',
		/* Slideout */
		'%show-toc': 'Zeigen',
		'%show-text': 'Inhaltsverzeichnis anzeigen',
		'%hide-text': 'Ausblenden des Inhaltsverzeichnisses',
		'%table-contents': 'Inhaltsverzeichnis',
		/* Lightbox */
		'%lb-current': 'Artikel {current} von {total}',
		'%lb-next': 'Nächster Artikel',
		'%lb-prev': 'Vorheriger Artikel',
		'%lb-xhr-error': 'Dieser Inhalt wurde nicht geladen.',
		'%lb-img-error': 'Dieses Bild konnte nicht geladen werden.',
		'%lb-slideshow': 'Diashow',
		/* jQuery Mobile */
		'%jqm-expand': 'klicken, um Inhalt zu erweitern',
		'%jqm-collapse': 'Klicken Sie auf Inhalte zusammenbrechen',
		'%jqm-clear-search': 'Suche löschen',
		'%jqm-filter': 'Filter Artikel',
		'%jqm-tbl-col-toggle': 'Columns ...',
		/* Charts widget */
		'%table-mention': 'Tabelle',
		'%table-following': 'Grafik. Angaben in der folgenden Tabelle.',
		/* Session timeout */
		'%st-timeout-msg': 'Ihre Sitzung wird in Kürze abläuft. Haben Sie bis #expireTime#, um den "OK"-Taste unten zu aktivieren, um die Sitzung zu verlängern.',
		'%st-msgbox-title': 'Session Zeitablaufwarnung',
		'%st-already-timeout-msg': 'Leider Ihre Sitzung ist bereits abgelaufen. Bitte loggen Sie sich erneut.',
		/* Toggle details */
		'%td-toggle': 'Wechseln alle',
		'%td-open': 'Erweitern',
		'%td-close': 'Alle ausblenden',
		'%td-ttl-open': 'Erweitern Sie alle Teile der Inhalte',
		'%td-ttl-close': 'Alles Teile der Inhalte',
		/* Table enhancement */
		'%sSortAscending': ': Aktivieren für aufsteigend sortieren',
		'%sSortDescending': ': Aktivieren für absteigend sortieren',
		'%sEmptyTable': 'Keine Daten in der Tabelle verfügbaren',
		'%sInfo': 'Zeige _START_ bis _END_ von _TOTAL_ Einträge',
		'%sInfoEmpty': 'Zeige 0 bis 0 von 0 Einträge',
		'%sInfoFiltered': '(gefiltert aus insgesamt _MAX_ Einträge)',
		'%sInfoThousands': '&#160;',
		'%sLengthMenu': 'Zeige _MENU_ Einträge',
		/* Geomap */
		'%geo-mapcontrol': 'Kartensteuerelement',
		'%geo-zoomin': 'Vergrößern',
		'%geo-zoomout': 'Verkleinern',
		'%geo-zoomworld': 'Zoom auf weit Karte',
		'%geo-zoomfeature': 'Zoom auf das Element',
		'%geo-scaleline': 'Karte Maßstab',
		'%geo-mouseposition': 'Breitengrad und Längengrad des Mauszeigers',
		'%geo-ariamap': 'Kartenobjekt. Die Beschreibungen der Karte Funktionen sind in der Tabelle unten.',
		'%geo-accessibilize': '<strong>Keyboard-Benutzer:</strong> Wenn die Karte im Fokus ist, verwenden Sie die Pfeiltasten, um die Karte und die Plus-und Minus-Tasten zu vergrößern schwenken. Die Pfeiltasten werden nicht schwenken die Karte, wenn die Karte soweit gezoomt.',
		'%geo-accessibilizetitle': 'Anleitung: Kartennavigation',
		'%geo-togglelayer': 'Umschalten der Anzeige der Schicht',
		'%geo-hiddenlayer': 'Diese Schicht ist im Moment versteckt.',
		'%geo-basemapurl': 'http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg',
		'%geo-basemaptitle': 'BaseMaps_CBMT3978',
		'%geo-basemapurltxt': 'http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg',
		'%geo-attributionlink': 'http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en',
		'%geo-attributiontitle': 'GeoGratis - Kanada Basiskarte (Englisch oder Französisch)',
		'%geo-select': 'Wählen',
		'%geo-labelselect': 'Überprüfen Sie das Element auf der Karte auswählen',
		/* Disable/enable PE */
		'%pe-disable': 'Grundlegende HTML-Version',
		'%pe-enable': 'Standardausführung'
	};
	_pe.document.trigger('languageloaded');
	window.pe = _pe;
	return _pe;
}());
/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: DE (German, Deutsch)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "Dieses Feld ist ein Pflichtfeld.",
		maxlength: $.validator.format("Geben Sie bitte maximal {0} Zeichen ein."),
		minlength: $.validator.format("Geben Sie bitte mindestens {0} Zeichen ein."),
		rangelength: $.validator.format("Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein."),
		email: "Geben Sie bitte eine gültige E-Mail Adresse ein.",
		url: "Geben Sie bitte eine gültige URL ein.",
		date: "Bitte geben Sie ein gültiges Datum ein.",
		number: "Geben Sie bitte eine Nummer ein.",
		digits: "Geben Sie bitte nur Ziffern ein.",
		equalTo: "Bitte denselben Wert wiederholen.",
		range: $.validator.format("Geben Sie bitte einen Wert zwischen {0} und {1} ein."),
		max: $.validator.format("Geben Sie bitte einen Wert kleiner oder gleich {0} ein."),
		min: $.validator.format("Geben Sie bitte einen Wert größer oder gleich {0} ein."),
		creditcard: "Geben Sie bitte eine gültige Kreditkarten-Nummer ein."
	});
}(jQuery));/*
 * Localized default methods for the jQuery validation plugin.
 * Locale: DE
 */
jQuery.extend(jQuery.validator.methods, {
	date: function(value, element) {
		return this.optional(element) || /^\d\d?\.\d\d?\.\d\d\d?\d?$/.test(value);
	},
	number: function(value, element) {
		return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(value);
	}
});