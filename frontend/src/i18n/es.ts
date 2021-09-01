const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    confirm: 'Confirmar',
    start: 'Comienzo',
    end: 'Final',
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
        name: 'category',
        label: 'Categories',
        menu: 'Categories',
        exporterFileName: 'exportacion_category',
        list: {
          menu: 'Categories',
          title: 'Categories',
        },
        create: {
          success: 'Category guardado con éxito',
        },
        update: {
          success: 'Category guardado con éxito',
        },
        destroy: {
          success: 'Category eliminado con éxito',
        },
        destroyAll: {
          success: 'Category(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Category',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'leader': 'Leader',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Category',
        },
        view: {
          title: 'Ver Category',
        },
        importer: {
          title: 'Importar Categories',
          fileName: 'category_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    accountabilityGroups: {
        name: 'accountabilityGroups',
        label: 'Accountability Grps',
        menu: 'Accountability Grps',
        exporterFileName: 'exportacion_accountabilityGroups',
        list: {
          menu: 'Accountability Grps',
          title: 'Accountability Grps',
        },
        create: {
          success: 'Accountability Grps guardado con éxito',
        },
        update: {
          success: 'Accountability Grps guardado con éxito',
        },
        destroy: {
          success: 'Accountability Grps eliminado con éxito',
        },
        destroyAll: {
          success: 'Accountability Grps(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Accountability Grps',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'category': 'Category',
          'leader': 'Leader',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Accountability Grps',
        },
        view: {
          title: 'Ver Accountability Grps',
        },
        importer: {
          title: 'Importar Accountability Grps',
          fileName: 'accountabilityGroups_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    services: {
        name: 'services',
        label: 'Services',
        menu: 'Services',
        exporterFileName: 'exportacion_services',
        list: {
          menu: 'Services',
          title: 'Services',
        },
        create: {
          success: 'Services guardado con éxito',
        },
        update: {
          success: 'Services guardado con éxito',
        },
        destroy: {
          success: 'Services eliminado con éxito',
        },
        destroyAll: {
          success: 'Services(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Services',
        },
        view: {
          title: 'Ver Services',
        },
        importer: {
          title: 'Importar Services',
          fileName: 'services_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    announcementTargets: {
        name: 'announcementTargets',
        label: 'Announcement Grps',
        menu: 'Announcement Grps',
        exporterFileName: 'exportacion_announcementTargets',
        list: {
          menu: 'Announcement Grps',
          title: 'Announcement Grps',
        },
        create: {
          success: 'Announcement Grps guardado con éxito',
        },
        update: {
          success: 'Announcement Grps guardado con éxito',
        },
        destroy: {
          success: 'Announcement Grps eliminado con éxito',
        },
        destroyAll: {
          success: 'Announcement Grps(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Announcement Grps',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Announcement Grps',
        },
        view: {
          title: 'Ver Announcement Grps',
        },
        importer: {
          title: 'Importar Announcement Grps',
          fileName: 'announcementTargets_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    announcement: {
        name: 'announcement',
        label: 'Announcements',
        menu: 'Announcements',
        exporterFileName: 'exportacion_announcement',
        list: {
          menu: 'Announcements',
          title: 'Announcements',
        },
        create: {
          success: 'Announcement guardado con éxito',
        },
        update: {
          success: 'Announcement guardado con éxito',
        },
        destroy: {
          success: 'Announcement eliminado con éxito',
        },
        destroyAll: {
          success: 'Announcement(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {
          'message': 'Type your Broadcast Message (Announcement) here...',
        },
        hints: {

        },
        new: {
          title: 'Nuevo Announcement',
        },
        view: {
          title: 'Ver Announcement',
        },
        importer: {
          title: 'Importar Announcements',
          fileName: 'announcement_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    serviceAttendance: {
        name: 'serviceAttendance',
        label: 'ServiceAttendances',
        menu: 'ServiceAttendances',
        exporterFileName: 'exportacion_serviceAttendance',
        list: {
          menu: 'ServiceAttendances',
          title: 'ServiceAttendances',
        },
        create: {
          success: 'Service Attendance guardado con éxito',
        },
        update: {
          success: 'Service Attendance guardado con éxito',
        },
        destroy: {
          success: 'Service Attendance eliminado con éxito',
        },
        destroyAll: {
          success: 'Service Attendance(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Service Attendance',
        },
        view: {
          title: 'Ver Service Attendance',
        },
        importer: {
          title: 'Importar ServiceAttendances',
          fileName: 'serviceAttendance_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    members: {
        name: 'members',
        label: 'Members',
        menu: 'Members',
        exporterFileName: 'exportacion_members',
        list: {
          menu: 'Members',
          title: 'Members',
        },
        create: {
          success: 'Members guardado con éxito',
        },
        update: {
          success: 'Members guardado con éxito',
        },
        destroy: {
          success: 'Members eliminado con éxito',
        },
        destroyAll: {
          success: 'Members(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Members',
        },
        view: {
          title: 'Ver Members',
        },
        importer: {
          title: 'Importar Members',
          fileName: 'members_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    homeFellowships: {
        name: 'homeFellowships',
        label: 'Home Fellowships',
        menu: 'Home Fellowships',
        exporterFileName: 'exportacion_homeFellowships',
        list: {
          menu: 'Home Fellowships',
          title: 'Home Fellowships',
        },
        create: {
          success: 'Home Fellowships guardado con éxito',
        },
        update: {
          success: 'Home Fellowships guardado con éxito',
        },
        destroy: {
          success: 'Home Fellowships eliminado con éxito',
        },
        destroyAll: {
          success: 'Home Fellowships(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Home Fellowships',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'fellowshipPastor': 'Fellowship Pastor',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Home Fellowships',
        },
        view: {
          title: 'Ver Home Fellowships',
        },
        importer: {
          title: 'Importar Home Fellowships',
          fileName: 'homeFellowships_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    reservedSeats: {
        name: 'reservedSeats',
        label: 'Reserved Seats',
        menu: 'Reserved Seats',
        exporterFileName: 'exportacion_reservedSeats',
        list: {
          menu: 'Reserved Seats',
          title: 'Reserved Seats',
        },
        create: {
          success: 'Reserved Seats guardado con éxito',
        },
        update: {
          success: 'Reserved Seats guardado con éxito',
        },
        destroy: {
          success: 'Reserved Seats eliminado con éxito',
        },
        destroyAll: {
          success: 'Reserved Seats(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Reserved Seats',
        },
        view: {
          title: 'Ver Reserved Seats',
        },
        importer: {
          title: 'Importar Reserved Seats',
          fileName: 'reservedSeats_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    calendar: {
        name: 'calendar',
        label: 'Calendars',
        menu: 'Calendars',
        exporterFileName: 'exportacion_calendar',
        list: {
          menu: 'Calendars',
          title: 'Calendars',
        },
        create: {
          success: 'Calendar guardado con éxito',
        },
        update: {
          success: 'Calendar guardado con éxito',
        },
        destroy: {
          success: 'Calendar eliminado con éxito',
        },
        destroyAll: {
          success: 'Calendar(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Calendar',
        },
        view: {
          title: 'Ver Calendar',
        },
        importer: {
          title: 'Importar Calendars',
          fileName: 'calendar_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    liveService: {
        name: 'liveService',
        label: 'LiveServices',
        menu: 'LiveServices',
        exporterFileName: 'exportacion_liveService',
        list: {
          menu: 'LiveServices',
          title: 'LiveServices',
        },
        create: {
          success: 'Live Service guardado con éxito',
        },
        update: {
          success: 'Live Service guardado con éxito',
        },
        destroy: {
          success: 'Live Service eliminado con éxito',
        },
        destroyAll: {
          success: 'Live Service(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Live Service',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'status': 'Status',
          'url': 'YouTube Link',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Live Service',
        },
        view: {
          title: 'Ver Live Service',
        },
        importer: {
          title: 'Importar LiveServices',
          fileName: 'liveService_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      theme: 'Tema',
      primaryColor: 'Color primario',
      secondaryColor: 'Color secundario',
      logos: 'Logo',
      backgroundImages: 'Imagen de fondo',
    },
    colors: {
      default: 'Defecto',
      cyan: 'Cian',
      'geek-blue': 'Geek Blue',
      gold: 'Oro',
      lime: 'Lima',
      magenta: 'Magenta',
      orange: 'Naranja',
      'polar-green': 'Verde Polar',
      purple: 'Púrpura',
      red: 'Rojo',
      volcano: 'Volcán',
      yellow: 'Amarillo',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/src/modules/dashboard/components/dashboard-page.vue.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },

  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },

  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
      invalid: '${path} debe ser un número',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min:
        'El campo ${path} debe tener al menos ${min} elementos',
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },

  /* eslint-disable */
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
};

export default es;
