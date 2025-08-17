// PRIVACY
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.query_stripping.enabled", true);

// HISTORY & URL BAR
user_pref("places.history.enabled", true);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.recentsearches", false);
user_pref("browser.urlbar.suggest.topsites", false);

// NETWORK & CONNECTION
user_pref("network.http.sendRefererHeader", 0);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.dns.disableIPv6", true);
user_pref("network.trr.mode", 2);

// FINGERPRINTING & API CONTROL
user_pref("dom.battery.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("javascript.options.wasm", false);
user_pref("javascript.options.wasm_baselinejit", false);
user_pref("javascript.options.wasm_ionjit", false);

// SECURITY
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("security.tls.enable_0rtt_data", false);

// TELEMETRY & DATA REPORTING
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.cachedClientID", "50460179-35ad-446f-951e-0bd0063d1424");
user_pref("beacon.enabled", false);
