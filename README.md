# Firefox `user.js`

A custom [`user.js`](user.js) script to configure Firefox user, privacy, and
security settings.

The goal is to make minimal changes to Firefox settings to enhance security and
privacy without compromising on modern web features or making Firefox unstable
or unsupported. Almost all of the settings configured by this script can be done
through the Firefox settings and UI, so this script is a convenient time-saver.

This script can be used as a base for other `user.js` scripts.

Check the [arkenfox/user.js](https://github.com/arkenfox/user.js) repository for
more information about `user.js` scripts.

## Configured settings

A few user settings are configured including setting the homepage and hiding the
bookmarks toolbar.

Mozilla has increasingly relied on data collection to guide Firefox development
and eroded user privacy in the process. For privacy, data collection is disabled
from the following sources:

* [Normandy](https://wiki.mozilla.org/Firefox/Normandy/PreferenceRollout) can be
used to stealthily modify Firefox settings without deploying a Firefox update.
* [Studies](https://www.theregister.com/2017/12/18/mozilla_mr_robot_firefox_promotion/)
have previously been used to remotely install add-ons without user permission.
* [Activity Stream](https://wiki.mozilla.org/Firefox/Activity_Stream) collects
telemetry based on interactions with the new tab and homepage.
* [Search and location bar suggestions](https://support.mozilla.org/en-US/kb/search-suggestions-firefox)
send your search keywords to the default search engine.
* [Firefox Health Report](https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/obsolete/fhr/index.html)
collects application metrics and submits them to a central server.
* [Pocket](https://help.getpocket.com/article/913-pocket-for-firefox-faq)
collects numerous pieces of user data as per their [Privacy Policy](https://getpocket.com/en/privacy/).

In addition, a few security settings are configured:

* [Enhanced tracking protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)
is enabled to block ad and social media trackers, cross-site cookies,
cryptominers, and fingerprinters.
* [HTTPS-only mode](https://support.mozilla.org/en-US/kb/https-only-prefs) is
enabled to force secure connections to all websites.
* Automatic form filling is disabled as this data can be [phished](https://duckduckgo.com/?q=autofill+phishing).
* Links and DNS prefetching are disabled to prevent potential [data leaks to third-parties](https://www.usenix.org/legacy/event/leet10/tech/full_papers/Krishnan.pdf)
and [other security issues](https://www.cert-ist.com/public/en/SO_detail?code=dns_prefetching).

## Installation

1. Go to `about:profiles` in the address bar
2. Open the Root Directory for the profile in use
3. Copy [`user.js`](user.js) into the `root` folder (so that the
directory hierarchy is `<root>/user.js`)
4. Restart Firefox
