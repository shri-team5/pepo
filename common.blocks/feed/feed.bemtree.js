block('feed').content()(function() {

    return this.data.tweets.map(function (item) {
        return {
            block:'tweet',
            //props
            user_avatar: item.user.avatar,
            user_login: item.user.login,
            user_name: item.user.name,
            text: item.text,
            created_at: item.created_at,

            mix:{block:'feed', elem:'tweet'}

        };
    });
});
