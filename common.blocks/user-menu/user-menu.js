modules.define('user-menu', ['i-bem__dom'], function (provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    var popup = this.findBlockInside('popup'),
                        button = this.findElem('button');


                    popup.setAnchor(button);
                    button.on('click', function() {
                        popup.toggleMod('visible', true);
                    });
                }
            }
        }
    }));

});
