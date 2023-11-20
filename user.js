/* User settings */

/* Disable about:config warning */
user_pref("browser.aboutConfig.showWarning", false);
/* Disable onboarding startup page */
user_pref("browser.aboutwelcome.enabled", false);
/* Remove default pinned tabs */
user_pref("browser.newtabpage.pinned", []);
/* Disable More from Mozilla tab in settings */
user_pref("browser.preferences.moreFromMozilla", false);
/* Disable Firefox Focus promo when private browsing */
user_pref("browser.promo.focus.enabled", false);
/* Check that Firefox is the default browser */
user_pref("browser.shell.checkDefaultBrowser", true);
/* Skip What's New page after update */
user_pref("browser.startup.homepage_override.mstone", "ignore");
/* Open previous windows and tabs */
user_pref("browser.startup.page", 3);
/* Don't warn when too many are tabs opened at same time */
user_pref("browser.tabs.warnOnOpen", false);
/* Show tab previews in taskbar */
user_pref("browser.taskbar.previews.enable", true);
/* Hide bookmark toolbar */
user_pref("browser.toolbars.bookmarks.visibility", "never");
/* Disable VPN sponsor when private browsing */
user_pref("browser.vpn_promo.enabled", false);
/* Enable custom stylesheets */
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
/* Highlight items when finding in page */
user_pref("findbar.highlightAll", true);


/* Privacy and security settings */

/* Disable Normandy telemetry */
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
/* Disable installing and running studies */
user_pref("app.shield.optoutstudies.enabled", false);
/* Ensure content blocking settings are set to strict */
/* Enable enhanced tracking protection in strict mode */
/* Enable browser fingerprinting protection */
user_pref("browser.contentblocking.category", "strict");
/* Disable search and form history */
user_pref("browser.formfill.enable", false);
/* Disable activity stream */
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
/* Disable search suggestions */
user_pref("browser.search.suggest.enabled", false);
/* Prevent remote resources from interacting with Firefox chrome */
user_pref("browser.uitour.enabled", false);
/* Disable location bar suggestions */
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
/* Disable health reports */
user_pref("datareporting.healthreport.uploadEnabled", false);
/* Disable data submission */
user_pref("datareporting.policy.dataSubmissionEnabled", false);
/* Enable https only mode */
user_pref("dom.security.https_only_mode", true);
/* Disable form autofill */
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
/* Disable pocket extension */
user_pref("extensions.pocket.enabled", false);
/* Disable link and DNS prefetching */
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
/* Disable username and password autofill */
user_pref("signon.autofillForms", false);
user_pref("signon.rememberSignons", false);
