modules.define(
    'spec',
    ['button', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Button, BEMDOM, $, BEMHTML) {

describe('button', function() {
    var button;

    beforeEach(function() {
        button = BEMDOM.init($(BEMHTML.apply({ block: 'button', text: 'foo' })).appendTo('body'))
            .bem('button');
    });

    afterEach(function() {
        BEMDOM.destruct(button.domElem);
    });

    it('should be focused on pressrelease on itself', function() {
        button.hasMod('focused').should.be.false;
        button.domElem
            .trigger('pointerpress')
            .trigger('pointerrelease');
        button.hasMod('focused').should.be.true;
    });
});

provide();

});
