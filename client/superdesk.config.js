/**
 * This is the default configuration file for the Superdesk application. By default,
 * the app will use the file with the name "superdesk.config.js" found in the current
 * working directory, but other files may also be specified using relative paths with
 * the SUPERDESK_CONFIG environment variable or the grunt --config flag.
 */
module.exports = function() {
    return {
        apps: [
            'tga',
            'superdesk.analytics',
            'superdesk-planning',
        ],
        importApps: [
            '../index',
            'superdesk-analytics',
            'superdesk-planning',
        ],
        defaultRoute: '/workspace/monitoring',

        langOverride: {
            en: {
                'ANPA Category': 'Category',
                'ANPA CATEGORY': 'CATEGORY'
            }
        },

        view: {
            timeformat: 'HH:mm',
            dateformat: 'DD/MM/YYYY',
        },

        shortTimeFormat: 'HH:mm, DD/MM/YYYY',
        shortDateFormat: 'HH:mm, DD/MM/YYYY',
        shortWeekFormat: 'HH:mm, DD/MM/YYYY',
        startingDay: '0',
        defaultTimezone: 'Australia/Melbourne',

        features: {
            preview: 1,
            swimlane: {defaultNumberOfColumns: 4},
            editor3: true,
            validatePointOfInterestForImages: true,
            editorHighlights: true,
            planning: true,
            customAuthoringTopbar: {
                toDesk: true,
            },
            slackNotifications: 1,
            noPublishOnAuthoringDesk: true,
        },
        workspace: {
            analytics: true,
            planning: true,
            assignments: true,
        },
    };
};
