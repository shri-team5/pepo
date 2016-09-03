modules.define('new-tweet', ['i-bem__dom'], function (provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        var self = this;
                        this.elem('input').on('keyup', function () {
                            if(this.value.length > 0 && this.value.length <= 140){
                                self.emit('allowSubmitForm');
                            }else{
                                self.emit('disallowSubmitForm');
                            }

                        })
                    }
                },
                'visible': function () {
                    this.elem('input').focus();
                }
            }
        }
    ));
});
