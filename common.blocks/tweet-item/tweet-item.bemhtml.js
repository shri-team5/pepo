block('tweet-item')(
    js()(true),
    elem('name').tag()('p'),
    elem('username').tag()('a'),
    elem('profile-link')(
        tag()('a'),
        attrs()(function () {
            return {
                href: this.ctx.href,
                title: this.ctx.title
            };
        })
    ),
    elem('reply').tag()('a'),
    elem('image').tag()('img')
);
