const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    confirm: 'Confirm',
    filters: 'Filters',
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
        exporterFileName: 'category_export',
        list: {
          menu: 'Categories',
          title: 'Categories',
        },
        create: {
          success: 'Category successfully saved',
        },
        update: {
          success: 'Category successfully saved',
        },
        destroy: {
          success: 'Category successfully deleted',
        },
        destroyAll: {
          success: 'Category(s) successfully deleted',
        },
        edit: {
          title: 'Edit Category',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'leader': 'Leader',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Category',
        },
        view: {
          title: 'View Category',
        },
        importer: {
          title: 'Import Categories',
          fileName: 'category_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    accountabilityGroups: {
        name: 'accountabilityGroups',
        label: 'Accountability Grps',
        menu: 'Accountability Grps',
        exporterFileName: 'accountabilityGroups_export',
        list: {
          menu: 'Accountability Grps',
          title: 'Accountability Grps',
        },
        create: {
          success: 'Accountability Grps successfully saved',
        },
        update: {
          success: 'Accountability Grps successfully saved',
        },
        destroy: {
          success: 'Accountability Grps successfully deleted',
        },
        destroyAll: {
          success: 'Accountability Grps(s) successfully deleted',
        },
        edit: {
          title: 'Edit Accountability Grps',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'category': 'Category',
          'leader': 'Leader',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Accountability Grps',
        },
        view: {
          title: 'View Accountability Grps',
        },
        importer: {
          title: 'Import Accountability Grps',
          fileName: 'accountabilityGroups_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    services: {
        name: 'services',
        label: 'Services',
        menu: 'Services',
        exporterFileName: 'services_export',
        list: {
          menu: 'Services',
          title: 'Services',
        },
        create: {
          success: 'Services successfully saved',
        },
        update: {
          success: 'Services successfully saved',
        },
        destroy: {
          success: 'Services successfully deleted',
        },
        destroyAll: {
          success: 'Services(s) successfully deleted',
        },
        edit: {
          title: 'Edit Services',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'dateRange': 'Date',
          'date': 'Date',
          'status': 'Status',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Services',
        },
        view: {
          title: 'View Services',
        },
        importer: {
          title: 'Import Services',
          fileName: 'services_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    announcementTargets: {
        name: 'announcementTargets',
        label: 'Announcement Grps',
        menu: 'Announcement Grps',
        exporterFileName: 'announcementTargets_export',
        list: {
          menu: 'Announcement Grps',
          title: 'Announcement Grps',
        },
        create: {
          success: 'Announcement Grps successfully saved',
        },
        update: {
          success: 'Announcement Grps successfully saved',
        },
        destroy: {
          success: 'Announcement Grps successfully deleted',
        },
        destroyAll: {
          success: 'Announcement Grps(s) successfully deleted',
        },
        edit: {
          title: 'Edit Announcement Grps',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Announcement Grps',
        },
        view: {
          title: 'View Announcement Grps',
        },
        importer: {
          title: 'Import Announcement Grps',
          fileName: 'announcementTargets_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    announcement: {
        name: 'announcement',
        label: 'Announcements',
        menu: 'Announcements',
        exporterFileName: 'announcement_export',
        list: {
          menu: 'Announcements',
          title: 'Announcements',
        },
        create: {
          success: 'Announcement successfully saved',
        },
        update: {
          success: 'Announcement successfully saved',
        },
        destroy: {
          success: 'Announcement successfully deleted',
        },
        destroyAll: {
          success: 'Announcement(s) successfully deleted',
        },
        edit: {
          title: 'Edit Announcement',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'dueDateRange': 'Due Date',
          'dueDate': 'Due Date',
          'message': 'Message',
          'target': 'Target',
          'announcedBy': 'Announced By',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {
          'message': 'Type your Broadcast Message (Announcement) here...',
        },
        hints: {

        },
        new: {
          title: 'New Announcement',
        },
        view: {
          title: 'View Announcement',
        },
        importer: {
          title: 'Import Announcements',
          fileName: 'announcement_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    serviceAttendance: {
        name: 'service Attendance',
        label: 'Service Attendance',
        menu: 'Service Attendance',
        exporterFileName: 'serviceAttendance_export',
        list: {
          menu: 'ServiceAttendances',
          title: 'Service Attendance',
        },
        create: {
          success: 'Service Attendance successfully saved',
        },
        update: {
          success: 'Service Attendance successfully saved',
        },
        destroy: {
          success: 'Service Attendance successfully deleted',
        },
        destroyAll: {
          success: 'Service Attendance(s) successfully deleted',
        },
        edit: {
          title: 'Edit Service Attendance',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'service': 'Service',
          'temperatureReadingRange': 'Temp.',
          'temperatureReading': 'Temp.',
          'saetNumberRange': 'Saet No.',
          'saetNumber': 'Saet No.',
          'comment': 'Comment',
          'member': 'Member',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Service Attendance',
        },
        view: {
          title: 'View Service Attendance',
        },
        importer: {
          title: 'Import ServiceAttendances',
          fileName: 'serviceAttendance_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    members: {
        name: 'members',
        label: 'Members',
        menu: 'Members',
        exporterFileName: 'members_export',
        list: {
          menu: 'Members',
          title: 'Members',
        },
        create: {
          success: 'Members successfully saved',
        },
        update: {
          success: 'Members successfully saved',
        },
        destroy: {
          success: 'Members successfully deleted',
        },
        destroyAll: {
          success: 'Members(s) successfully deleted',
        },
        edit: {
          title: 'Edit Members',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Members',
        },
        view: {
          title: 'View Members',
        },
        importer: {
          title: 'Import Members',
          fileName: 'members_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    homeFellowships: {
        name: 'homeFellowships',
        label: 'Home Fellowships',
        menu: 'Home Fellowships',
        exporterFileName: 'homeFellowships_export',
        list: {
          menu: 'Home Fellowships',
          title: 'Home Fellowships',
        },
        create: {
          success: 'Home Fellowships successfully saved',
        },
        update: {
          success: 'Home Fellowships successfully saved',
        },
        destroy: {
          success: 'Home Fellowships successfully deleted',
        },
        destroyAll: {
          success: 'Home Fellowships(s) successfully deleted',
        },
        edit: {
          title: 'Edit Home Fellowships',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'fellowshipPastor': 'Fellowship Pastor',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Home Fellowships',
        },
        view: {
          title: 'View Home Fellowships',
        },
        importer: {
          title: 'Import Home Fellowships',
          fileName: 'homeFellowships_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    reservedSeats: {
        name: 'reservedSeats',
        label: 'Reserved Seats',
        menu: 'Reserved Seats',
        exporterFileName: 'reservedSeats_export',
        list: {
          menu: 'Reserved Seats',
          title: 'Reserved Seats',
        },
        create: {
          success: 'Reserved Seats successfully saved',
        },
        update: {
          success: 'Reserved Seats successfully saved',
        },
        destroy: {
          success: 'Reserved Seats successfully deleted',
        },
        destroyAll: {
          success: 'Reserved Seats(s) successfully deleted',
        },
        edit: {
          title: 'Edit Reserved Seats',
        },
        fields: {
          id: 'Id',
          'seatNoRange': 'Seat No.',
          'seatNo': 'Seat No.',
          'reservedFor': 'Reserved For',
          'serviceBooked': 'Service Booked',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Reserved Seats',
        },
        view: {
          title: 'View Reserved Seats',
        },
        importer: {
          title: 'Import Reserved Seats',
          fileName: 'reservedSeats_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    calendar: {
        name: 'calendar',
        label: 'Calendars',
        menu: 'Calendars',
        exporterFileName: 'calendar_export',
        list: {
          menu: 'Calendars',
          title: 'Calendars',
        },
        create: {
          success: 'Calendar successfully saved',
        },
        update: {
          success: 'Calendar successfully saved',
        },
        destroy: {
          success: 'Calendar successfully deleted',
        },
        destroyAll: {
          success: 'Calendar(s) successfully deleted',
        },
        edit: {
          title: 'Edit Calendar',
        },
        fields: {
          id: 'Id',
          'event': 'Event',
          'startDateOfActivityRange': 'Start Date',
          'startDateOfActivity': 'Start Date',
          'personInCharge': 'Person In Charge',
          'participants': 'Participants',
          'endDateRange': 'End Date',
          'endDate': 'End Date',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Calendar',
        },
        view: {
          title: 'View Calendar',
        },
        importer: {
          title: 'Import Calendars',
          fileName: 'calendar_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    liveService: {
        name: 'liveService',
        label: 'LiveServices',
        menu: 'LiveServices',
        exporterFileName: 'liveService_export',
        list: {
          menu: 'LiveServices',
          title: 'LiveServices',
        },
        create: {
          success: 'Live Service successfully saved',
        },
        update: {
          success: 'Live Service successfully saved',
        },
        destroy: {
          success: 'Live Service successfully deleted',
        },
        destroyAll: {
          success: 'Live Service(s) successfully deleted',
        },
        edit: {
          title: 'Edit Live Service',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'status': 'Status',
          'url': 'YouTube Link',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Live Service',
        },
        view: {
          title: 'View Live Service',
        },
        importer: {
          title: 'Import LiveServices',
          fileName: 'liveService_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
    visitor: {
      label: 'Visitor',
      description: 'Limited access to all resources',
    },
    member: {
      label: 'Member Role',
      description: 'Member role access',
    },
    protocol: {
      label: 'Protocol',
      description: 'Added access to most of the resources',
    },
    usher: {
      label: 'Usher Role',
      description: 'Usher role access',
    },
    accountability: {
      label: 'Accountability Leader',
      description: 'Access to Accountability Group ',
    },
    category: {
      label: 'Category / Cluster Role',
      description: 'Access to Clusters or Category role',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSuccess: 'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantUrl: 'Workspace URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
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

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/src/modules/dashboard/components/dashboard-page.vue.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
      invalid: '${path} must be a number',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
