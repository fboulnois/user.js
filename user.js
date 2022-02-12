/* User settings */

/* Disable about:config warning */
user_pref("browser.aboutConfig.showWarning", false);
/* Remove default pinned tabs */
user_pref("browser.newtabpage.pinned", []);
/* Check that Firefox is the default browser */
user_pref("browser.shell.checkDefaultBrowser", true);
/* Set homepage to DuckDuckGo */
user_pref("browser.startup.homepage", "https://duckduckgo.com/");
/* Open previous windows and tabs */
user_pref("browser.startup.page", 3);
/* Don't warn when too many are tabs opened at same time */
user_pref("browser.tabs.warnOnOpen", false);
/* Show tab previews in taskbar */
user_pref("browser.taskbar.previews.enable", true);
/* Hide bookmark toolbar */
user_pref("browser.toolbars.bookmarks.visibility", "never");
/* Enable custom stylesheets */
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
/* Highlight items when finding in page */
user_pref("findbar.highlightAll", true);


/* Privacy and security settings */

/* Disable Normandy telemetry */
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.first_run", false);
/* Disable installing and running studies */
user_pref("app.shield.optoutstudies.enabled", false);
/* Ensure content blocking settings are set to strict */
user_pref("browser.contentblocking.category", "strict");
/* Disable search and form history */
user_pref("browser.formfill.enable", false);
/* Disable activity stream */
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
/* Disable VPN sponsor when private browsing */
user_pref("browser.privatebrowsing.vpnpromourl", "");
/* Disable search suggestions */
user_pref("browser.search.suggest.enabled", false);
/* Disable location bar suggestions */
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
/* Disable health reports */
user_pref("datareporting.healthreport.uploadEnabled", false);
/* Disable data submission */
user_pref("datareporting.policy.dataSubmissionEnabled", false);
/* Enable https only mode */
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);
/* Disable form autofill */
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
/* Disable pocket extension */
user_pref("extensions.pocket.enabled", false);
/* Set enhanced tracking protection to strict mode */
user_pref("network.cookie.cookieBehavior", 5);
/* Disable link and DNS prefetching */
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
/* Enable state partitioning of service workers */
user_pref("privacy.partition.serviceWorkers", true);
/* Enable enhanced tracking protections */
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
/* Disable username and password autofill */
user_pref("signon.autofillForms", false);
user_pref("signon.rememberSignons", false);
