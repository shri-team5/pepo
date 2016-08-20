modules.define('burger',['i-bem__dom'], function (provide, BEMDOM) {
    provide(
        BEMDOM.decl(this.name,{
            onSetMod:{
                js:{
                    inited:function () {
                        this.bindTo('click', function (e) {
                            e.preventDefault();
                            this.emit('toggle-sidebar')
                        })
                    }
                }
            }
        })
    )
});