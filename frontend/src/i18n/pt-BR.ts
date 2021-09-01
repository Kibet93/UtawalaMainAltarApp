const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    confirm: 'Confirmar',
    filters: 'Filtros',
  },

  app: {
    title: 'Utawala Main Altar',
  },
  api: {
    menu: 'API',
  },

  entities: {
    category: {
        name: 'Category',
        label: 'Categories',
        menu: 'Categories',
        exporterFileName: 'Category_exportados',
        list: {
          menu: 'Categories',
          title: 'Categories',
        },
        create: {
          success: 'Category salvo com sucesso',
        },
        update: {
          success: 'Category salvo com sucesso',
        },
        destroy: {
          success: 'Category deletado com sucesso',
        },
        destroyAll: {
          success: 'Category(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Category',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'leader': 'Leader',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Category',
        },
        view: {
          title: 'Visualizar Category',
        },
        importer: {
          title: 'Importar Categories',
          fileName: 'category_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    accountabilityGroups: {
        name: 'Accountability Grps',
        label: 'Accountability Grps',
        menu: 'Accountability Grps',
        exporterFileName: 'Accountability Grps_exportados',
        list: {
          menu: 'Accountability Grps',
          title: 'Accountability Grps',
        },
        create: {
          success: 'Accountability Grps salvo com sucesso',
        },
        update: {
          success: 'Accountability Grps salvo com sucesso',
        },
        destroy: {
          success: 'Accountability Grps deletado com sucesso',
        },
        destroyAll: {
          success: 'Accountability Grps(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Accountability Grps',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'category': 'Category',
          'leader': 'Leader',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Accountability Grps',
        },
        view: {
          title: 'Visualizar Accountability Grps',
        },
        importer: {
          title: 'Importar Accountability Grps',
          fileName: 'accountabilityGroups_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    services: {
        name: 'Services',
        label: 'Services',
        menu: 'Services',
        exporterFileName: 'Services_exportados',
        list: {
          menu: 'Services',
          title: 'Services',
        },
        create: {
          success: 'Services salvo com sucesso',
        },
        update: {
          success: 'Services salvo com sucesso',
        },
        destroy: {
          success: 'Services deletado com sucesso',
        },
        destroyAll: {
          success: 'Services(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Services',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'dateRange': 'Date',
          'date': 'Date',
          'status': 'Status',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'status': {
            'Active': 'Active',
            'Live Now': 'Live Now',
            'Ended': 'Ended',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Services',
        },
        view: {
          title: 'Visualizar Services',
        },
        importer: {
          title: 'Importar Services',
          fileName: 'services_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    announcementTargets: {
        name: 'Announcement Grps',
        label: 'Announcement Grps',
        menu: 'Announcement Grps',
        exporterFileName: 'Announcement Grps_exportados',
        list: {
          menu: 'Announcement Grps',
          title: 'Announcement Grps',
        },
        create: {
          success: 'Announcement Grps salvo com sucesso',
        },
        update: {
          success: 'Announcement Grps salvo com sucesso',
        },
        destroy: {
          success: 'Announcement Grps deletado com sucesso',
        },
        destroyAll: {
          success: 'Announcement Grps(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Announcement Grps',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Announcement Grps',
        },
        view: {
          title: 'Visualizar Announcement Grps',
        },
        importer: {
          title: 'Importar Announcement Grps',
          fileName: 'announcementTargets_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    announcement: {
        name: 'Announcement',
        label: 'Announcements',
        menu: 'Announcements',
        exporterFileName: 'Announcement_exportados',
        list: {
          menu: 'Announcements',
          title: 'Announcements',
        },
        create: {
          success: 'Announcement salvo com sucesso',
        },
        update: {
          success: 'Announcement salvo com sucesso',
        },
        destroy: {
          success: 'Announcement deletado com sucesso',
        },
        destroyAll: {
          success: 'Announcement(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Announcement',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'dueDateRange': 'Due Date',
          'dueDate': 'Due Date',
          'message': 'Message',
          'target': 'Target',
          'announcedBy': 'Announced By',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'message': 'Type your Broadcast Message (Announcement) here...',
        },
        hints: {

        },
        new: {
          title: 'Novo Announcement',
        },
        view: {
          title: 'Visualizar Announcement',
        },
        importer: {
          title: 'Importar Announcements',
          fileName: 'announcement_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    serviceAttendance: {
        name: 'Service Attendance',
        label: 'ServiceAttendances',
        menu: 'ServiceAttendances',
        exporterFileName: 'Service Attendance_exportados',
        list: {
          menu: 'ServiceAttendances',
          title: 'ServiceAttendances',
        },
        create: {
          success: 'Service Attendance salvo com sucesso',
        },
        update: {
          success: 'Service Attendance salvo com sucesso',
        },
        destroy: {
          success: 'Service Attendance deletado com sucesso',
        },
        destroyAll: {
          success: 'Service Attendance(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Service Attendance',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'service': 'Service',
          'temperatureReadingRange': 'Temperature Reading',
          'temperatureReading': 'Temperature Reading',
          'saetNumberRange': 'SaetNumber',
          'saetNumber': 'SaetNumber',
          'comment': 'Comment',
          'member': 'Member',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Service Attendance',
        },
        view: {
          title: 'Visualizar Service Attendance',
        },
        importer: {
          title: 'Importar ServiceAttendances',
          fileName: 'serviceAttendance_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    members: {
        name: 'Members',
        label: 'Members',
        menu: 'Members',
        exporterFileName: 'Members_exportados',
        list: {
          menu: 'Members',
          title: 'Members',
        },
        create: {
          success: 'Members salvo com sucesso',
        },
        update: {
          success: 'Members salvo com sucesso',
        },
        destroy: {
          success: 'Members deletado com sucesso',
        },
        destroyAll: {
          success: 'Members(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Members',
        },
        fields: {
          id: 'Id',
          'category': 'Category',
          'accountabilityGroup': 'Accountability Group',
          'membershipStatus': 'Membership Status',
          'ageRange': 'Age',
          'age': 'Age',
          'homeFellowship': 'Home Fellowship',
          'nationalIDRange': 'National ID',
          'nationalID': 'National ID',
          'phoneNumber': 'PhoneNumber',
          'occupation': 'Occupation',
          'residence': 'Residence',
          'fullName': 'Full Name',
          'email': 'Email',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'membershipStatus': {
            'Visitor': 'Visitor',
            'Member': 'Member',
            'Away': 'Away',
            'Suspended': 'Suspended',
          },
        },
        placeholders: {
          'phoneNumber': 'Weka namba yako ya simu',
          'occupation': 'What do you do for a living?',
          'residence': 'where do you stay?',
          'fullName': 'Enter your Names here',
        },
        hints: {
          'phoneNumber': '0710222333',
          'occupation': 'Doctor, House Manager, Technician etc.',
          'residence': 'Donholm, Kayole, etc. ',
        },
        new: {
          title: 'Novo Members',
        },
        view: {
          title: 'Visualizar Members',
        },
        importer: {
          title: 'Importar Members',
          fileName: 'members_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    homeFellowships: {
        name: 'Home Fellowships',
        label: 'Home Fellowships',
        menu: 'Home Fellowships',
        exporterFileName: 'Home Fellowships_exportados',
        list: {
          menu: 'Home Fellowships',
          title: 'Home Fellowships',
        },
        create: {
          success: 'Home Fellowships salvo com sucesso',
        },
        update: {
          success: 'Home Fellowships salvo com sucesso',
        },
        destroy: {
          success: 'Home Fellowships deletado com sucesso',
        },
        destroyAll: {
          success: 'Home Fellowships(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Home Fellowships',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'fellowshipPastor': 'Fellowship Pastor',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Home Fellowships',
        },
        view: {
          title: 'Visualizar Home Fellowships',
        },
        importer: {
          title: 'Importar Home Fellowships',
          fileName: 'homeFellowships_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    reservedSeats: {
        name: 'Reserved Seats',
        label: 'Reserved Seats',
        menu: 'Reserved Seats',
        exporterFileName: 'Reserved Seats_exportados',
        list: {
          menu: 'Reserved Seats',
          title: 'Reserved Seats',
        },
        create: {
          success: 'Reserved Seats salvo com sucesso',
        },
        update: {
          success: 'Reserved Seats salvo com sucesso',
        },
        destroy: {
          success: 'Reserved Seats deletado com sucesso',
        },
        destroyAll: {
          success: 'Reserved Seats(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Reserved Seats',
        },
        fields: {
          id: 'Id',
          'seatNoRange': 'Seat No.',
          'seatNo': 'Seat No.',
          'reservedFor': 'Reserved For',
          'serviceBooked': 'Service Booked',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Reserved Seats',
        },
        view: {
          title: 'Visualizar Reserved Seats',
        },
        importer: {
          title: 'Importar Reserved Seats',
          fileName: 'reservedSeats_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    calendar: {
        name: 'Calendar',
        label: 'Calendars',
        menu: 'Calendars',
        exporterFileName: 'Calendar_exportados',
        list: {
          menu: 'Calendars',
          title: 'Calendars',
        },
        create: {
          success: 'Calendar salvo com sucesso',
        },
        update: {
          success: 'Calendar salvo com sucesso',
        },
        destroy: {
          success: 'Calendar deletado com sucesso',
        },
        destroyAll: {
          success: 'Calendar(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Calendar',
        },
        fields: {
          id: 'Id',
          'event': 'Event',
          'startDateOfActivityRange': 'StartDateOfActivity',
          'startDateOfActivity': 'StartDateOfActivity',
          'personInCharge': 'Person In Charge',
          'participants': 'Participants',
          'endDateRange': 'EndDate',
          'endDate': 'EndDate',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Calendar',
        },
        view: {
          title: 'Visualizar Calendar',
        },
        importer: {
          title: 'Importar Calendars',
          fileName: 'calendar_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    liveService: {
        name: 'Live Service',
        label: 'LiveServices',
        menu: 'LiveServices',
        exporterFileName: 'Live Service_exportados',
        list: {
          menu: 'LiveServices',
          title: 'LiveServices',
        },
        create: {
          success: 'Live Service salvo com sucesso',
        },
        update: {
          success: 'Live Service salvo com sucesso',
        },
        destroy: {
          success: 'Live Service deletado com sucesso',
        },
        destroyAll: {
          success: 'Live Service(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Live Service',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'status': 'Status',
          'url': 'YouTube Link',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'status': {
            'Live Now': 'Live Now',
            'Ended': 'Ended',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Live Service',
        },
        view: {
          title: 'Visualizar Live Service',
        },
        importer: {
          title: 'Importar LiveServices',
          fileName: 'liveService_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },
    
  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    social: {
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',    
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success:
        'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
    colors: {
      default: 'Padrão',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/src/modules/dashboard/components/dashboard-page.vue.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
      invalid: '${path} deve ser um número',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },
};

export default ptBR;
