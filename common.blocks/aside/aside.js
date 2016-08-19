modules.define('aside',['i-bem__dom'], function (provide, BEMDOM) {
    provide(
        BEMDOM.decl(this.name,{
            onSetMod:{
                js:{
                    inited:function () {
                        BEMDOM.blocks['burger'].on('toggle-sidebar',this._toggleSidebar, this)

                    },
                    '': function () {
                        BEMDOM.blocks['burger'].un('toggle-sidebar',this._toggleSidebar, this)
                    }
                }
            },
            _toggleSidebar: function () {
                this.toggleMod('visible');
            }

        })
    )
});