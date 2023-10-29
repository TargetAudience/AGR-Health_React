import { AddDialog } from '@kleeen/react/atomic-elements';
import { Transformation, StatisticalDataType, WidgetTypes, ElementDisplayType } from '@kleeen/types';

export const widgets = [
  {
    actions: [
      {
        addModalAttributes: [
          {
            id: 201633,
            isDisplayValue: true,
            name: 'transactionId',
            label: 'Transaction ID',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'transactionId',
            params: {
              baseModel: 'transactionId',
              value: { formatType: 'uuid', transformation: 'selfSingle', format: {} },
            },
          },
          {
            id: 201736,
            isDisplayValue: false,
            name: 'invoiceNumber',
            label: 'Invoice Number',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'invoiceNumber',
            params: {
              baseModel: 'invoiceNumber',
              value: { formatType: 'integer', transformation: 'selfSingle', format: {} },
            },
          },
          {
            id: 201644,
            isDisplayValue: false,
            name: 'totalDonorPayments',
            label: 'Total Donor Payments',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'totalDonorPayments',
            params: {
              baseModel: 'totalDonorPayments',
              value: {
                formatType: 'USD',
                transformation: 'selfSingle',
                format: { max: 100, min: 1, prefix: '$', suffix: 'k' },
              },
            },
          },
          {
            id: 201643,
            isDisplayValue: false,
            name: 'invoiceAmount',
            label: 'Invoice Amount',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'invoiceAmount',
            params: {
              baseModel: 'invoiceAmount',
              value: {
                formatType: 'USD',
                transformation: 'selfSingle',
                format: { max: 100, min: 1, prefix: '$', suffix: 'k' },
              },
            },
          },
          {
            id: 201642,
            isDisplayValue: false,
            name: 'memberPaidAmount',
            label: 'Member Paid Amount',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'memberPaidAmount',
            params: {
              baseModel: 'memberPaidAmount',
              value: {
                formatType: 'USD',
                transformation: 'selfSingle',
                format: { max: 100, min: 1, prefix: '$', suffix: 'k' },
              },
            },
          },
          {
            id: 201640,
            isDisplayValue: false,
            name: 'transactionPcp',
            label: 'Transaction PCP',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'transactionPcp',
            params: {
              baseModel: 'transactionPcp',
              value: { formatType: 'full_name', transformation: 'selfSingle', format: {} },
            },
          },
          {
            id: 201639,
            isDisplayValue: false,
            name: 'transactionAmount',
            label: 'Transaction Amount',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'transactionAmount',
            params: {
              baseModel: 'transactionAmount',
              value: {
                formatType: 'USD',
                transformation: 'selfSingle',
                format: { max: 100, min: 1, prefix: '$', suffix: 'k' },
              },
            },
          },
          {
            id: 201638,
            isDisplayValue: false,
            name: 'transactionDate',
            label: 'Transaction Date',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'DateTimeField' },
            rawEntityName: 'transactionDate',
            params: {
              baseModel: 'transactionDate',
              value: { formatType: 'date', transformation: 'selfSingle', format: {} },
            },
          },
          {
            id: 201637,
            isDisplayValue: false,
            name: 'invoiceId',
            label: 'Invoice ID',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'invoiceId',
            params: {
              baseModel: 'invoiceId',
              value: { formatType: 'integer', transformation: 'selfSingle', format: {} },
            },
          },
          {
            id: 201635,
            isDisplayValue: false,
            name: 'transactionMember',
            label: 'Transaction Member',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'transactionMember',
            params: {
              baseModel: 'transactionMember',
              value: { formatType: 'full_name', transformation: 'selfSingle', format: {} },
            },
          },
          {
            id: 201634,
            isDisplayValue: false,
            name: 'memberAmountPaid',
            label: 'Member Amount Paid',
            hasMany: false,
            elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
            rawEntityName: 'memberAmountPaid',
            params: {
              baseModel: 'memberAmountPaid',
              value: {
                formatType: 'USD',
                transformation: 'selfSingle',
                format: { max: 100, min: 1, prefix: '$', suffix: 'k' },
              },
            },
          },
        ],
        areYouSure: false,
        component: AddDialog,
        displayName: `Add`,
        name: `add`,
        type: `add`,
      },
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
        canEditValues: true,
        crossLinking: [{ title: 'Transaction Detail', slug: 'transaction-detail' }],
        dataType: `uuid`,
        editable: false,
        format: {},
        formatType: `uuid`,
        hasMany: false,
        id: 201633,
        isDisplayValue: true,
        label: `transaction id`,
        multiple: true,
        name: `transactionId`,
        settings: { isEditable: true, isFilledByEU: true },
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `TransactionDate`,
        deepDataType: `date`,
        editable: false,
        format: {},
        formatType: `date`,
        hasMany: false,
        id: 201638,
        isDisplayValue: false,
        isNullable: false,
        label: `transaction date`,
        multiple: true,
        name: `transactionDate`,
        prototypeId: 200948,
        settings: {},
        statisticalType: StatisticalDataType.NumericTemporal,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [{ title: 'Member Details', slug: 'member-details' }],
        dataType: `TransactionMember`,
        deepDataType: `full_name`,
        editable: false,
        format: {},
        formatType: `full_name`,
        hasMany: false,
        id: 201635,
        isDisplayValue: false,
        isNullable: false,
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
        dataType: `TransactionPcp`,
        deepDataType: `full_name`,
        editable: false,
        format: {},
        formatType: `full_name`,
        hasMany: false,
        id: 201640,
        isDisplayValue: false,
        isNullable: false,
        label: `transaction pcp`,
        multiple: true,
        name: `transactionPcp`,
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
        dataType: `InvoiceId`,
        deepDataType: `integer`,
        editable: false,
        format: {},
        formatType: `integer`,
        hasMany: false,
        id: 201637,
        isDisplayValue: false,
        isNullable: false,
        label: `invoice id`,
        multiple: true,
        name: `invoiceId`,
        prototypeId: 200931,
        settings: {},
        statisticalType: StatisticalDataType.NumericDiscrete,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `TransactionAmount`,
        deepDataType: `integer`,
        editable: false,
        format: { max: 100, min: 1, prefix: '$', suffix: 'k' },
        formatType: `USD`,
        hasMany: false,
        id: 201639,
        isDisplayValue: false,
        isNullable: false,
        label: `transaction amount`,
        multiple: true,
        name: `transactionAmount`,
        prototypeId: 200990,
        settings: {},
        statisticalType: StatisticalDataType.NumericDiscrete,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `MemberAmountPaid`,
        deepDataType: `integer`,
        editable: false,
        format: { max: 100, min: 1, prefix: '$', suffix: 'k' },
        formatType: `USD`,
        hasMany: false,
        id: 201634,
        isDisplayValue: false,
        isNullable: false,
        label: `member amount paid`,
        multiple: true,
        name: `memberAmountPaid`,
        prototypeId: 200990,
        settings: {},
        statisticalType: StatisticalDataType.NumericDiscrete,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `InvoiceNumber`,
        deepDataType: `integer`,
        editable: false,
        format: {},
        formatType: `integer`,
        hasMany: false,
        id: 201736,
        isDisplayValue: false,
        isNullable: false,
        label: `invoice number`,
        multiple: true,
        name: `invoiceNumber`,
        prototypeId: 200931,
        settings: {},
        statisticalType: StatisticalDataType.NumericDiscrete,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `InvoiceAmount`,
        deepDataType: `integer`,
        editable: false,
        format: { max: 100, min: 1, prefix: '$', suffix: 'k' },
        formatType: `USD`,
        hasMany: false,
        id: 201643,
        isDisplayValue: false,
        isNullable: false,
        label: `invoice amount`,
        multiple: true,
        name: `invoiceAmount`,
        prototypeId: 200990,
        settings: {},
        statisticalType: StatisticalDataType.NumericDiscrete,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `MemberPaidAmount`,
        deepDataType: `integer`,
        editable: false,
        format: { max: 100, min: 1, prefix: '$', suffix: 'k' },
        formatType: `USD`,
        hasMany: false,
        id: 201642,
        isDisplayValue: false,
        isNullable: false,
        label: `member paid amount`,
        multiple: true,
        name: `memberPaidAmount`,
        prototypeId: 200990,
        settings: {},
        statisticalType: StatisticalDataType.NumericDiscrete,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfSingle,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `TotalDonorPayments`,
        deepDataType: `integer`,
        editable: false,
        format: { max: 100, min: 1, prefix: '$', suffix: 'k' },
        formatType: `USD`,
        hasMany: false,
        id: 201644,
        isDisplayValue: false,
        isNullable: false,
        label: `total donor payments`,
        multiple: true,
        name: `totalDonorPayments`,
        prototypeId: 200990,
        settings: {},
        statisticalType: StatisticalDataType.NumericDiscrete,
        transformation: Transformation.SelfSingle,
      },
      {
        aggregation: Transformation.SelfMulti,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `TransactionDonor`,
        deepDataType: `uuid`,
        editable: false,
        format: {},
        formatType: `uuid`,
        hasMany: true,
        id: 201636,
        isDisplayValue: false,
        isNullable: false,
        label: `transaction donor`,
        multiple: true,
        name: `transactionDonor`,
        prototypeId: 201608,
        settings: {},
        statisticalType: StatisticalDataType.FreeForm,
        transformation: Transformation.SelfMulti,
      },
      {
        aggregation: Transformation.SelfMulti,
        canAddValues: true,
        canEditValues: false,
        crossLinking: [],
        dataType: `TransactionDonationAmount`,
        deepDataType: `integer`,
        editable: false,
        format: { max: 100, min: 1, prefix: '$', suffix: 'k' },
        formatType: `USD`,
        hasMany: true,
        id: 201641,
        isDisplayValue: false,
        isNullable: false,
        label: `transaction donation amount`,
        multiple: true,
        name: `transactionDonationAmount`,
        prototypeId: 200990,
        settings: {},
        statisticalType: StatisticalDataType.NumericDiscrete,
        transformation: Transformation.SelfMulti,
      },
    ],
    chartType: WidgetTypes.FULL_TABLE,
    entityId: 201633,
    id: `3888b4e8-9199-4cb6-ad1b-153bd47bc9a0`,
    name: 'Ledger',
    params: {
      baseModel: `TransactionId`,
      operationName: `object_listing_3888b4e8_9199_4cb6_ad1b_153bd47bc9a0`,
    },
    scope: undefined,
    type: 'table',
    viableSolutions: [],
    viewId: 'ks-view-7YUhGEp8Ub8yTBBpJkXN9h',
    viewOrder: 1,
  },
  {
    actions: [],
    attributes: [],
    chartType: undefined,
    name: 'Transaction Dashboard',
    scope: undefined,
    type: 'dashboard',
    viableSolutions: [],
    viewId: 'ks-view-oXMHR7Dkk2rvipjPRmtDUH',
    viewOrder: 3,
    widgets: [
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            elements: {
              displayComponent: ElementDisplayType.Label,
            },
            format: {},
            formatType: `integer`,
            id: 201736,
            isFilterable: { in: false, out: false },
            label: `Count of Invoice Number`,
            name: `invoiceNumber`,
            statisticalType: StatisticalDataType.NumericDiscrete,
            transformation: Transformation.CountTotal,
          },
          {
            aggregation: Transformation.ChangePercent,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            elements: {
              displayComponent: ElementDisplayType.LabelWithChange,
            },
            format: {},
            formatType: `integer`,
            id: 201736,
            isFilterable: { in: false, out: false },
            label: `Change of Invoice Number`,
            name: `invoiceNumber`,
            statisticalType: StatisticalDataType.NumericDiscrete,
            transformation: Transformation.ChangePercent,
          },
          {
            aggregation: Transformation.TrendHighLowSparkline,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            elements: {
              displayComponent: ElementDisplayType.TrendSparklineHighLow,
            },
            format: {},
            formatType: `integer`,
            id: 201736,
            isFilterable: { in: false, out: false },
            label: `Trend (High Low) of Invoice Number`,
            name: `invoiceNumber`,
            statisticalType: StatisticalDataType.NumericDiscrete,
            transformation: Transformation.TrendHighLowSparkline,
          },
        ],
        chartType: WidgetTypes.SUMMARY_STATISTICS,
        id: `a488150c-c06f-4a45-94e3-8c6ddc688292`,
        params: {
          operationName: `widget_statisticsa488150c_c06f_4a45_94e3_8c6ddc688292`,
          value: {
            format: {},
            formatType: `integer`,
            label: `Invoice Number`,
            name: `invoiceNumber`,
            transformations: [
              {
                transformation: Transformation.CountTotal,
                isPrimary: true,
              },
              {
                transformation: Transformation.ChangePercent,
                isPrimary: false,
              },
              {
                transformation: Transformation.TrendHighLowSparkline,
                isPrimary: false,
              },
            ],
          },
        },
        scope: undefined,
        sortOrder: 0,
        title: `Invoices `,
        viableSolutions: [],
        viewId: 'ks-view-oXMHR7Dkk2rvipjPRmtDUH',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `date`,
            id: 201638,
            isFilterable: { in: false, out: false },
            label: `Transaction Date`,
            name: `transactionDate`,
            statisticalType: StatisticalDataType.NumericTemporal,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `uuid`,
            id: 201633,
            isFilterable: { in: false, out: false },
            label: `Count of Transaction ID`,
            name: `transactionId`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.AREA_GRADIENT,
        id: `c1e7b0db-18b8-44f0-a7d2-93269ec834cd`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `date`,
            name: `transactionDate`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_c1e7b0db_18b8_44f0_a7d2_93269ec834cd`,
          value: {
            formatType: `uuid`,
            name: `transactionId`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 1,
        title: `Transaction Trends`,
        viableSolutions: [
          WidgetTypes.STEP_LINE,
          WidgetTypes.AREA_MACRO_MICRO,
          WidgetTypes.AREA,
          WidgetTypes.SIMPLE_LIST_RANKED,
        ],
        viewId: 'ks-view-oXMHR7Dkk2rvipjPRmtDUH',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: { min: 1, max: 100, prefix: '$', suffix: 'k' },
            formatType: `USD`,
            id: 201641,
            isFilterable: { in: false, out: false },
            label: `Transaction Donation Amount`,
            name: `transactionDonationAmount`,
            statisticalType: StatisticalDataType.NumericDiscrete,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `uuid`,
            id: 201636,
            isFilterable: { in: false, out: false },
            label: `Count of Transaction Donor`,
            name: `transactionDonor`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.SCATTER,
        id: `a0bc01df-e6b5-44e9-8ca7-5b124cae60c0`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `USD`,
            name: `transactionDonationAmount`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_a0bc01df_e6b5_44e9_8ca7_5b124cae60c0`,
          value: {
            formatType: `uuid`,
            name: `transactionDonor`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 2,
        title: `Donor Activity`,
        viableSolutions: [WidgetTypes.SINGLE_BAR_HIGHLIGHT_MAX, WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-oXMHR7Dkk2rvipjPRmtDUH',
      },
      {
        actions: [],
        attributes: [
          {
            aggregation: Transformation.SelfMulti,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [{ title: 'PCP Details', slug: 'pcp-details' }],
            format: {},
            formatType: `uuid`,
            id: 201585,
            isFilterable: { in: false, out: false },
            label: `Primary Care ID`,
            name: `primaryCareId`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.SelfMulti,
          },
          {
            aggregation: Transformation.CountTotal,
            canAddValues: false,
            canEditValues: false,
            crossLinking: [],
            format: {},
            formatType: `uuid`,
            id: 201633,
            isFilterable: { in: false, out: false },
            label: `Count of Transaction ID`,
            name: `transactionId`,
            statisticalType: StatisticalDataType.FreeForm,
            transformation: Transformation.CountTotal,
          },
        ],
        chartType: WidgetTypes.BUBBLE_CHART,
        id: `c4a51c81-a0b6-4cda-b029-d2c85a7af89c`,
        params: {
          cardinality: `SINGLE`,
          groupBy: {
            formatType: `uuid`,
            name: `primaryCareId`,
            transformation: Transformation.SelfMulti,
          },
          operationName: `widget_c4a51c81_a0b6_4cda_b029_d2c85a7af89c`,
          value: {
            formatType: `uuid`,
            name: `transactionId`,
            transformation: Transformation.CountTotal,
          },
        },
        scope: undefined,
        sortOrder: 3,
        title: `PCP Activity`,
        viableSolutions: [WidgetTypes.SINGLE_BAR_HIGHLIGHT_MAX, WidgetTypes.SIMPLE_LIST_RANKED],
        viewId: 'ks-view-oXMHR7Dkk2rvipjPRmtDUH',
      },
    ],
  },
];