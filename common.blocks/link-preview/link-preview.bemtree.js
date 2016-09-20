block('link-preview')(
    content()(function () {
        var link = this.ctx.data;
        var formlinks = this.ctx.formlinks || false;
        if (link) {
            return [
                {
                    elem: 'image',
                    content: {
                        block: 'image',
                        url: link.image || ''
                    }
                },
                {
                    elem: 'text',
                    content: [
                        {
                            elem: 'title',
                            content: link.title || ''
                        },
                        {
                            elem: 'description',
                            content: link.description || ''
                        }
                    ]
                },
                formlinks && {
                    elem: 'form-links',
                    content: [
                        {
                            elem: 'link',
                            attrs: {
                                type: 'hidden',
                                name: 'linkimage',
                                value: link.image || ''
                            }
                        },
                        {
                            elem: 'link',
                            attrs: {
                                type: 'hidden',
                                name: 'linktitle',
                                value: link.title || ''
                            }
                        },
                        {
                            elem: 'link',
                            attrs: {
                                type: 'hidden',
                                name: 'linkdesc',
                                value: link.description || ''
                            }
                        },
                        {
                            elem: 'link',
                            attrs: {
                                type: 'hidden',
                                name: 'linkurl',
                                value: link.url
                            }
                        }
                    ]
                }
            ];
        }
    })
);
