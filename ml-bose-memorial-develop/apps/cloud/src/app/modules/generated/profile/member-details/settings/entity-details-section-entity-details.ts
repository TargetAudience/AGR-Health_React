export const entityDetailsSectionEntityDetails = [
  {
    attributes: [
      {
        id: 200998,
        statisticalType: 'Data - Categorical - free form',
        canAddValues: true,
        canEditValues: true,
        format: {},
        formatType: 'full_name',
        hasMany: false,
        label: 'Member Name',
        name: 'memberName',
        rawEntityName: 'MemberName',
        crossLinking: [{ title: 'Member Details', slug: 'member-details' }],
        isPrimary: true,
        transformation: 'selfSingle',
        metadata: 'selfSingle',
        elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
        widgetId: 'entity_detail_dcde7c61_8889_4fa4_925c_99f65dec085e_200998',
        readOnly: false,
        fullWidth: true,
      },
      {
        id: 201589,
        statisticalType: 'Data - Categorical - free form',
        canAddValues: true,
        canEditValues: false,
        format: {},
        formatType: 'address1',
        hasMany: false,
        label: 'Address',
        name: 'address',
        rawEntityName: 'Address',
        crossLinking: [],
        isPrimary: true,
        transformation: 'selfSingle',
        metadata: 'selfSingle',
        elements: { displayComponent: 'Label' },
        widgetId: 'entity_detail_dcde7c61_8889_4fa4_925c_99f65dec085e_201589',
        readOnly: true,
        fullWidth: true,
      },
      {
        id: 201587,
        statisticalType: 'Data - Numeric - NTG - Discrete',
        canAddValues: true,
        canEditValues: false,
        format: { max: 15, min: 1 },
        formatType: 'integer',
        hasMany: false,
        label: 'APT No',
        name: 'aptNo',
        rawEntityName: 'AptNo',
        crossLinking: [],
        isPrimary: true,
        transformation: 'selfSingle',
        metadata: 'selfSingle',
        elements: { displayComponent: 'Label' },
        widgetId: 'entity_detail_dcde7c61_8889_4fa4_925c_99f65dec085e_201587',
        readOnly: true,
        fullWidth: false,
      },
      {
        id: 201590,
        statisticalType: 'Data - Categorical - unordered - geo',
        canAddValues: true,
        canEditValues: false,
        format: {},
        formatType: 'zip',
        hasMany: false,
        label: 'ZIP Code',
        name: 'zipCode',
        rawEntityName: 'ZipCode',
        crossLinking: [],
        isPrimary: true,
        transformation: 'selfSingle',
        metadata: 'selfSingle',
        elements: { displayComponent: 'Label' },
        widgetId: 'entity_detail_dcde7c61_8889_4fa4_925c_99f65dec085e_201590',
        readOnly: true,
        fullWidth: false,
      },
      {
        id: 201586,
        statisticalType: 'Data - Categorical - unordered',
        canAddValues: true,
        canEditValues: false,
        format: {},
        formatType: 'phone',
        hasMany: false,
        label: 'Cell Phone',
        name: 'cellPhone',
        rawEntityName: 'CellPhone',
        crossLinking: [],
        isPrimary: true,
        transformation: 'selfSingle',
        metadata: 'selfSingle',
        elements: { displayComponent: 'Label' },
        widgetId: 'entity_detail_dcde7c61_8889_4fa4_925c_99f65dec085e_201586',
        readOnly: true,
        fullWidth: false,
      },
      {
        id: 201583,
        statisticalType: 'Data - Categorical - unordered',
        canAddValues: true,
        canEditValues: false,
        format: {},
        formatType: 'phone',
        hasMany: false,
        label: 'Business Phone',
        name: 'businessPhone',
        rawEntityName: 'BusinessPhone',
        crossLinking: [],
        isPrimary: true,
        transformation: 'selfSingle',
        metadata: 'selfSingle',
        elements: { displayComponent: 'Label' },
        widgetId: 'entity_detail_dcde7c61_8889_4fa4_925c_99f65dec085e_201583',
        readOnly: true,
        fullWidth: false,
      },
      {
        id: 201591,
        statisticalType: 'Data - Numeric - Temporal',
        canAddValues: true,
        canEditValues: false,
        format: {},
        formatType: 'date',
        hasMany: false,
        label: 'DOB',
        name: 'dob',
        rawEntityName: 'Dob',
        crossLinking: [],
        isPrimary: true,
        transformation: 'selfSingle',
        metadata: 'selfSingle',
        elements: { displayComponent: 'Label' },
        widgetId: 'entity_detail_dcde7c61_8889_4fa4_925c_99f65dec085e_201591',
        readOnly: true,
        fullWidth: false,
      },
      {
        id: 201607,
        statisticalType: 'Data - Numeric - Temporal',
        canAddValues: true,
        canEditValues: false,
        format: {},
        formatType: 'date',
        hasMany: false,
        label: 'Registration Date',
        name: 'registrationDate',
        rawEntityName: 'RegistrationDate',
        crossLinking: [],
        isPrimary: true,
        transformation: 'selfSingle',
        metadata: 'selfSingle',
        elements: { displayComponent: 'Label' },
        widgetId: 'entity_detail_dcde7c61_8889_4fa4_925c_99f65dec085e_201607',
        readOnly: true,
        fullWidth: false,
      },
      {
        id: 202046,
        statisticalType: 'Data - Categorical - free form',
        canAddValues: true,
        canEditValues: false,
        format: {},
        formatType: 'full_name',
        hasMany: false,
        label: 'Members PCP',
        name: 'membersPcp',
        rawEntityName: 'MembersPcp',
        crossLinking: [{ title: 'Doctor Details', slug: 'doctor-details' }],
        isPrimary: true,
        transformation: 'selfSingle',
        metadata: 'selfSingle',
        elements: { displayComponent: 'Label' },
        widgetId: 'entity_detail_dcde7c61_8889_4fa4_925c_99f65dec085e_202046',
        readOnly: true,
        fullWidth: true,
      },
      {
        id: 202047,
        statisticalType: 'Data - Categorical - free form',
        aggregation: 'countTotal',
        canAddValues: true,
        canEditValues: false,
        format: {},
        formatType: 'uuid',
        hasMany: true,
        label: 'Total Count of Members Transactions',
        name: 'membersTransactions',
        rawEntityName: 'MembersTransactions',
        crossLinking: [],
        isPrimary: true,
        transformation: 'countTotal',
        metadata: 'countTotal',
        elements: { displayComponent: 'Label' },
        widgetId: 'entity_detail_dcde7c61_8889_4fa4_925c_99f65dec085e_202047',
        readOnly: true,
        fullWidth: false,
      },
      {
        id: 201592,
        statisticalType: 'Data - Numeric - NTG - Discrete',
        aggregation: 'trendSparkline',
        canAddValues: true,
        canEditValues: false,
        format: { max: 100, min: 1, prefix: '$', suffix: 'k' },
        formatType: 'USD',
        hasMany: true,
        label: 'Trend Sparkline of Balance Due',
        name: 'balanceDue',
        rawEntityName: 'BalanceDue',
        crossLinking: [],
        isPrimary: true,
        transformation: 'trendSparkline',
        metadata: 'trendSparkline',
        elements: { displayComponent: 'TrendSparkline' },
        widgetId: 'entity_detail_dcde7c61_8889_4fa4_925c_99f65dec085e_201592',
        readOnly: true,
        fullWidth: false,
      },
      {
        id: 201584,
        statisticalType: 'Data - Categorical',
        canAddValues: true,
        canEditValues: false,
        format: { examples: ['Male', 'Female', 'Decline', 'Other'] },
        formatType: 'prime',
        hasMany: false,
        label: 'Gender',
        name: 'gender',
        rawEntityName: 'Gender',
        crossLinking: [],
        isPrimary: true,
        transformation: 'selfSingle',
        metadata: 'selfSingle',
        elements: { displayComponent: 'Label' },
        widgetId: 'entity_detail_dcde7c61_8889_4fa4_925c_99f65dec085e_201584',
        readOnly: true,
        fullWidth: false,
      },
    ],
    chartType: '[WIDGET] SLOT',
    id: 'c8f8ce4c-4dd8-467e-bdfd-f9cc95e9fa16',
    name: 'Member Summary',
    params: {
      baseModel: 'MemberName',
      operationName: 'entity_detail_c8f8ce4c_4dd8_467e_bdfd_f9cc95e9fa16',
      taskName: 'memberDetails',
    },
  },
];
