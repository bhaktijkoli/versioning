module.exports = {
    "branches": [
        'main',
        { name: 'alpha', prerelease: true },
        { name: 'dev', prerelease: true },
    ],
    "plugins": [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md"
            }
        ],
        [
            "@semantic-release/git", {
                "assets": [
                    "CHANGELOG.md",
                    "package.json"
                ],
                "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ]
    ]
}
