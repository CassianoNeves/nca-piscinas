module.exports = [
    function YmMenuController() {

        this.groupMenus = [
                {
                    title: 'Evento',
                    menus: [
                        {
                            title: 'Cadastrar',
                            sref: 'base.secured.event.create'
                        },
                        {
                            title: 'Pesquisar',
                            sref: 'base.secured.event.list'
                        }
                    ]
                },
                {
                    title: 'Parceiro',
                    menus: [
                        {
                            title: 'Cadastrar Tipo de Parceiro',
                            sref: 'base.secured.partner.type-create'
                        },
                        {
                            title: 'Pesquisar Tipo de Parceiro',
                            sref: 'base.secured.partner.type-list'
                        },
                        {
                            title: 'Cadastrar Parceiro',
                            sref: 'base.secured.partner.create'
                        },
                        {
                            title: 'Pesquisar Parceiro',
                            sref: 'base.secured.partner.list'
                        }
                    ]
                },
                {
                    title: 'Dicas',
                    menus: [
                        {
                            title: 'Cadastrar Dica',
                            sref: 'base.secured.tips.create'
                        },
                        {
                            title: 'Pesquisar Dica',
                            sref: 'base.secured.tips.list'
                        }
                    ]
                },
                {
                    title: 'Anúncios',
                    menus: [
                        {
                            title: 'Cadastrar Anúncio',
                            sref: 'base.secured.advertisement.create'
                        },
                        {
                            title: 'Pesquisar Anúncio',
                            sref: 'base.secured.advertisement.list'
                        }
                    ]
                },
                {
                    title: 'Configurações',
                    menus: [
                        {
                            title: 'Cadastrar Configuração',
                            sref: 'base.secured.config-system.create'
                        },
                        {
                            title: 'Pesquisar Configuração',
                            sref: 'base.secured.config-system.list'
                        }
                    ]
                },
                {
                    title: 'Push Notification',
                    menus: [
                        {
                            title: 'Enviar',
                            sref: 'base.secured.push-notification.create'
                        }
                    ]
                },
                {
                    title: 'Usuários Back Office',
                    menus: [
                        {
                            title: 'Criar Usuário',
                            sref: 'base.secured.back-office-user.create'
                        },
                        {
                            title: 'Pesquisar Usuário',
                            sref: 'base.secured.back-office-user.list'
                        }
                    ]
                }
            ];

    }
];
