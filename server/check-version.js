const { setSetting } = require("./util-server");
const { log } = require("../src/util");

exports.version = require("../package.json").version;
exports.latestVersion = null;

let interval;

// RavoHost Status doesn't track a separate upstream release feed, so the
// periodic update check is a no-op. Kept as a function (rather than removed
// outright) so the settings UI toggle still has something to call.
exports.startInterval = () => {
    clearInterval(interval);
};

/**
 * Enable the check update feature
 * @param {boolean} value Should the check update feature be enabled?
 * @returns {Promise<void>}
 */
exports.enableCheckUpdate = async (value) => {
    await setSetting("checkUpdate", value);

    clearInterval(interval);

    if (value) {
        exports.startInterval();
    }
};

exports.socket = null;
