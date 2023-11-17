import { Transformation, StatisticalDataType, WidgetTypes } from '@kleeen/types';

export const widgets = [
  {
    actions: [
      {
        addModalAttributes: [],
        areYouSure: false,
        displayName: `Delete`,
        name: `_delete_`,
        type: `delete`,
      },
    ],
    attributes: [
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [{ title: 'Member Details', slug: 'member-details' }],
        dataType: `full_name`,
        editable: false,
        format: {},
        formatType: `full_name`,
        hasMany: false,
        id: 201635,
        isDisplayValue: true,
        label: `transaction member`,
        multiple: true,
        name: `transactionMember`,
        prototypeId: 200998,
        settings: {},
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [{ title: 'Doctor Details', slug: 'doctor-details' }],
        dataType: `MembersPcp`,
        deepDataType: `full_name`,
        editable: false,
        format: {},
        formatType: `full_name`,
        hasMany: false,
        id: 202046,
        isDisplayValue: false,
        isNullable: false,
        label: `members pcp`,
        multiple: true,
        name: `membersPcp`,
        prototypeId: 201593,
        settings: {},
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `CellPhone`,
        deepDataType: `phone`,
        editable: false,
        format: {},
        formatType: `phone`,
        hasMany: false,
        id: 201586,
        isDisplayValue: false,
        isNullable: false,
        label: `cell phone`,
        multiple: true,
        name: `cellPhone`,
        prototypeId: 200973,
        settings: {},
        statisticalType: StatisticalDataType.Unordered,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `BusinessPhone`,
        deepDataType: `phone`,
        editable: false,
        format: {},
        formatType: `phone`,
        hasMany: false,
        id: 201583,
        isDisplayValue: false,
        isNullable: false,
        label: `business phone`,
        multiple: true,
        name: `businessPhone`,
        prototypeId: 200973,
        settings: {},
        statisticalType: StatisticalDataType.Unordered,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.Latest,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `BalanceDue`,
        deepDataType: `integer`,
        editable: false,
        format: { max: 100, min: 1, prefix: '$', suffix: 'k' },
        formatType: `USD`,
        hasMany: true,
        id: 201592,
        isDisplayValue: false,
        isNullable: false,
        label: `Last/Latest of balance due`,
        multiple: true,
        name: `balanceDue`,
        prototypeId: 200990,
        settings: {},
        statisticalType: StatisticalDataType.NumericDiscrete,
        transformation: Transformation.Latest,
      },
    ],
    chartType: WidgetTypes.FULL_TABLE,
    entityId: 201635,
    id: `b734b997-21b0-4b16-81ab-cbc111c6136f`,
    name: 'Member Info',
    params: {
      baseModel: `TransactionMember`,
      operationName: `object_listing_b734b997_21b0_4b16_81ab_cbc111c6136f`,
    },
    scope: undefined,
    type: 'table',
    viableSolutions: [],
    viewId: 'ks-view-oC8X3j6o1JEDijCxmhTDLc',
    viewOrder: 2,
  },
];