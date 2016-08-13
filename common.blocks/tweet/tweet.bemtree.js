block('tweet').content()(function() {
    //var data = ...;
    return [
        {
            block: 'userpic',
            attrs: {
                src: 'asdlkasjklsaj',
                alt: 'this.data.login'
            },
            mix: { block: 'tweet', elem: 'userpic' }
        },
        {
            block: 'username',
            mix: { block: 'tweet', elem: 'username' }
        }
    ];
});
