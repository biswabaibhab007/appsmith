import {
  ARRAY_ITEM_KEY,
  DataType,
  FieldType,
  ROOT_SCHEMA_KEY,
} from "./constants";

const initialDataset = {
  dataSource: {
    name: "Test name",
    age: 20,
    dob: "10/12/2021",
    boolean: true,
    hobbies: ["travelling", "skating", "off-roading"],
    "%%": "%",
    हिन्दि: "हिन्दि",
    education: [
      {
        college: "String field ",
        number: 1,
        graduationDate: "10/12/2021",
        boolean: true,
      },
    ],
    address: {
      Line1: "String field ",
      city: "1",
    },
  },

  schemaOutput: {
    __root_schema__: {
      isDisabled: false,
      isRequired: false,
      label: "",
      isVisible: true,
      children: {
        name: {
          isDisabled: false,
          isRequired: false,
          label: "Name",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.name))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.TEXT_INPUT,
          iconAlign: "left",
          sourceData: "Test name",
          isCustomField: false,
          accessor: "name",
          identifier: "name",
          originalIdentifier: "name",
          position: 0,
        },
        age: {
          isDisabled: false,
          isRequired: false,
          label: "Age",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.NUMBER,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.age))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.NUMBER_INPUT,
          iconAlign: "left",
          sourceData: 20,
          isCustomField: false,
          accessor: "age",
          identifier: "age",
          originalIdentifier: "age",
          position: 1,
        },
        dob: {
          closeOnSelection: false,
          dateFormat: "MM/DD/YYYY",
          isDisabled: false,
          isRequired: false,
          label: "Dob",
          maxDate: "2121-12-31T18:29:00.000Z",
          minDate: "1920-12-31T18:30:00.000Z",
          shortcuts: false,
          isVisible: true,
          convertToISO: false,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            '{{((sourceData, formData, fieldState) => (moment(sourceData.dob, "MM/DD/YYYY").format("YYYY-MM-DDTHH:mm:ss.sssZ")))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}',
          fieldType: FieldType.DATEPICKER,
          timePrecision: "minute",
          sourceData: "10/12/2021",
          isCustomField: false,
          accessor: "dob",
          identifier: "dob",
          originalIdentifier: "dob",
          position: 2,
        },
        boolean: {
          alignWidget: "LEFT",
          isDisabled: false,
          isRequired: false,
          isVisible: true,
          label: "Boolean",
          children: {},
          dataType: DataType.BOOLEAN,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.boolean))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.SWITCH,
          sourceData: true,
          isCustomField: false,
          accessor: "boolean",
          identifier: "boolean",
          originalIdentifier: "boolean",
          position: 3,
        },
        hobbies: {
          isDisabled: false,
          isRequired: false,
          label: "Hobbies",
          isVisible: true,
          serverSideFiltering: false,
          options: [
            { label: "Blue", value: "BLUE" },
            { label: "Green", value: "GREEN" },
            { label: "Red", value: "RED" },
          ],
          children: {},
          dataType: DataType.ARRAY,
          defaultValue: `{{((sourceData, formData, fieldState) => (sourceData.hobbies))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}`,
          fieldType: FieldType.MULTISELECT,
          isFilterable: false,
          sourceData: ["travelling", "skating", "off-roading"],
          isCustomField: false,
          accessor: "hobbies",
          identifier: "hobbies",
          originalIdentifier: "hobbies",
          position: 4,
        },
        __: {
          isDisabled: false,
          isRequired: false,
          label: "%%",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            '{{((sourceData, formData, fieldState) => (sourceData["%%"]))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}',
          fieldType: FieldType.TEXT_INPUT,
          iconAlign: "left",
          sourceData: "%",
          isCustomField: false,
          accessor: "%%",
          identifier: "__",
          originalIdentifier: "%%",
          position: 5,
        },
        xn__j2bd4cyac6f: {
          isDisabled: false,
          isRequired: false,
          label: "हिन्दि",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            '{{((sourceData, formData, fieldState) => (sourceData["हिन्दि"]))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}',
          fieldType: FieldType.TEXT_INPUT,
          iconAlign: "left",
          sourceData: "हिन्दि",
          isCustomField: false,
          accessor: "हिन्दि",
          identifier: "xn__j2bd4cyac6f",
          originalIdentifier: "हिन्दि",
          position: 6,
        },
        education: {
          backgroundColor: "#FAFAFA",
          isCollapsible: true,
          isDisabled: false,
          isRequired: false,
          isVisible: true,
          label: "Education",
          children: {
            __array_item__: {
              isDisabled: false,
              isRequired: false,
              label: "Array Item",
              isVisible: true,
              children: {
                college: {
                  isDisabled: false,
                  isRequired: false,
                  label: "College",
                  isVisible: true,
                  isSpellCheck: false,
                  children: {},
                  dataType: DataType.STRING,
                  defaultValue: undefined,
                  fieldType: FieldType.TEXT_INPUT,
                  iconAlign: "left",
                  sourceData: "String field ",
                  isCustomField: false,
                  accessor: "college",
                  identifier: "college",
                  originalIdentifier: "college",
                  position: 0,
                },
                number: {
                  isDisabled: false,
                  isRequired: false,
                  label: "Number",
                  isVisible: true,
                  isSpellCheck: false,
                  children: {},
                  dataType: DataType.NUMBER,
                  defaultValue: undefined,
                  fieldType: FieldType.NUMBER_INPUT,
                  iconAlign: "left",
                  sourceData: 1,
                  isCustomField: false,
                  accessor: "number",
                  identifier: "number",
                  originalIdentifier: "number",
                  position: 1,
                },
                graduationDate: {
                  closeOnSelection: false,
                  dateFormat: "MM/DD/YYYY",
                  isDisabled: false,
                  isRequired: false,
                  label: "Graduation Date",
                  maxDate: "2121-12-31T18:29:00.000Z",
                  minDate: "1920-12-31T18:30:00.000Z",
                  shortcuts: false,
                  isVisible: true,
                  children: {},
                  dataType: DataType.STRING,
                  defaultValue: undefined,
                  fieldType: FieldType.DATEPICKER,
                  timePrecision: "minute",
                  convertToISO: false,
                  sourceData: "10/12/2021",
                  isCustomField: false,
                  accessor: "graduationDate",
                  identifier: "graduationDate",
                  originalIdentifier: "graduationDate",
                  position: 2,
                },
                boolean: {
                  alignWidget: "LEFT",
                  isDisabled: false,
                  isRequired: false,
                  isVisible: true,
                  label: "Boolean",
                  children: {},
                  dataType: DataType.BOOLEAN,
                  defaultValue: undefined,
                  fieldType: FieldType.SWITCH,
                  sourceData: true,
                  isCustomField: false,
                  accessor: "boolean",
                  identifier: "boolean",
                  originalIdentifier: "boolean",
                  position: 3,
                },
              },
              dataType: DataType.OBJECT,
              defaultValue: undefined,
              fieldType: FieldType.OBJECT,
              sourceData: {
                college: "String field ",
                number: 1,
                graduationDate: "10/12/2021",
                boolean: true,
              },
              isCustomField: false,
              accessor: ARRAY_ITEM_KEY,
              identifier: ARRAY_ITEM_KEY,
              originalIdentifier: ARRAY_ITEM_KEY,
              position: -1,
            },
          },
          dataType: DataType.ARRAY,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.education))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.ARRAY,
          sourceData: [
            {
              boolean: true,
              college: "String field ",
              graduationDate: "10/12/2021",
              number: 1,
            },
          ],
          isCustomField: false,
          accessor: "education",
          identifier: "education",
          originalIdentifier: "education",
          position: 7,
        },
        address: {
          isDisabled: false,
          isRequired: false,
          label: "Address",
          isVisible: true,
          children: {
            Line1: {
              isDisabled: false,
              isRequired: false,
              label: "Line 1",
              isVisible: true,
              isSpellCheck: false,
              children: {},
              dataType: DataType.STRING,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.address.Line1))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.TEXT_INPUT,
              iconAlign: "left",
              sourceData: "String field ",
              isCustomField: false,
              accessor: "Line1",
              identifier: "Line1",
              originalIdentifier: "Line1",
              position: 0,
            },
            city: {
              isSpellCheck: false,
              isDisabled: false,
              isRequired: false,
              label: "City",
              isVisible: true,
              children: {},
              dataType: DataType.STRING,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.address.city))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.TEXT_INPUT,
              iconAlign: "left",
              sourceData: "1",
              isCustomField: false,
              accessor: "city",
              identifier: "city",
              originalIdentifier: "city",
              position: 1,
            },
          },
          dataType: DataType.OBJECT,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.address))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.OBJECT,
          sourceData: { Line1: "String field ", city: "1" },
          isCustomField: false,
          accessor: "address",
          identifier: "address",
          originalIdentifier: "address",
          position: 8,
        },
      },
      dataType: DataType.OBJECT,
      defaultValue:
        "{{((sourceData, formData, fieldState) => (sourceData))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
      fieldType: FieldType.OBJECT,
      sourceData: {
        name: "Test name",
        age: 20,
        dob: "10/12/2021",
        boolean: true,
        hobbies: ["travelling", "skating", "off-roading"],
        "%%": "%",
        education: [
          {
            college: "String field ",
            number: 1,
            graduationDate: "10/12/2021",
            boolean: true,
          },
        ],
        address: {
          Line1: "String field ",
          city: "1",
        },
        हिन्दि: "हिन्दि",
      },
      isCustomField: false,
      accessor: ROOT_SCHEMA_KEY,
      identifier: ROOT_SCHEMA_KEY,
      originalIdentifier: ROOT_SCHEMA_KEY,
      position: -1,
    },
  },
};

const withRemovedKeyFromInitialDataset = {
  dataSource: {
    name: "Test name",
    age: 20,
    dob: "10/12/2021",
    hobbies: ["travelling", "skating", "off-roading"],
    हिन्दि: "हिन्दि",
    education: [
      {
        college: "String field ",
        number: 1,
        graduationDate: "10/12/2021",
        boolean: true,
      },
    ],
    address: {
      Line1: "String field ",
      city: "1",
    },
  },

  schemaOutput: {
    __root_schema__: {
      isDisabled: false,
      isRequired: false,
      label: "",
      isVisible: true,
      children: {
        name: {
          isDisabled: false,
          isRequired: false,
          label: "Name",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.name))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.TEXT_INPUT,
          iconAlign: "left",
          sourceData: "Test name",
          isCustomField: false,
          accessor: "name",
          identifier: "name",
          originalIdentifier: "name",
          position: 0,
        },
        age: {
          isDisabled: false,
          isRequired: false,
          label: "Age",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.NUMBER,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.age))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.NUMBER_INPUT,
          iconAlign: "left",
          sourceData: 20,
          isCustomField: false,
          accessor: "age",
          identifier: "age",
          originalIdentifier: "age",
          position: 1,
        },
        dob: {
          closeOnSelection: false,
          dateFormat: "MM/DD/YYYY",
          isDisabled: false,
          isRequired: false,
          label: "Dob",
          maxDate: "2121-12-31T18:29:00.000Z",
          minDate: "1920-12-31T18:30:00.000Z",
          shortcuts: false,
          isVisible: true,
          convertToISO: false,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            '{{((sourceData, formData, fieldState) => (moment(sourceData.dob, "MM/DD/YYYY").format("YYYY-MM-DDTHH:mm:ss.sssZ")))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}',
          fieldType: FieldType.DATEPICKER,
          timePrecision: "minute",
          sourceData: "10/12/2021",
          isCustomField: false,
          accessor: "dob",
          identifier: "dob",
          originalIdentifier: "dob",
          position: 2,
        },
        hobbies: {
          isDisabled: false,
          isRequired: false,
          label: "Hobbies",
          isVisible: true,
          serverSideFiltering: false,
          options: [
            { label: "Blue", value: "BLUE" },
            { label: "Green", value: "GREEN" },
            { label: "Red", value: "RED" },
          ],
          children: {},
          dataType: DataType.ARRAY,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.hobbies))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.MULTISELECT,
          isFilterable: false,
          sourceData: ["travelling", "skating", "off-roading"],
          isCustomField: false,
          accessor: "hobbies",
          identifier: "hobbies",
          originalIdentifier: "hobbies",
          position: 4,
        },
        xn__j2bd4cyac6f: {
          isDisabled: false,
          isRequired: false,
          label: "हिन्दि",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            '{{((sourceData, formData, fieldState) => (sourceData["हिन्दि"]))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}',
          fieldType: FieldType.TEXT_INPUT,
          iconAlign: "left",
          sourceData: "हिन्दि",
          isCustomField: false,
          accessor: "हिन्दि",
          identifier: "xn__j2bd4cyac6f",
          originalIdentifier: "हिन्दि",
          position: 6,
        },
        education: {
          backgroundColor: "#FAFAFA",
          isCollapsible: true,
          isDisabled: false,
          isRequired: false,
          isVisible: true,
          label: "Education",
          children: {
            __array_item__: {
              isDisabled: false,
              isRequired: false,
              label: "Array Item",
              isVisible: true,
              children: {
                college: {
                  isDisabled: false,
                  isRequired: false,
                  label: "College",
                  isVisible: true,
                  isSpellCheck: false,
                  children: {},
                  dataType: DataType.STRING,
                  defaultValue: undefined,
                  fieldType: FieldType.TEXT_INPUT,
                  iconAlign: "left",
                  sourceData: "String field ",
                  isCustomField: false,
                  accessor: "college",
                  identifier: "college",
                  originalIdentifier: "college",
                  position: 0,
                },
                number: {
                  isDisabled: false,
                  isRequired: false,
                  label: "Number",
                  isVisible: true,
                  isSpellCheck: false,
                  children: {},
                  dataType: DataType.NUMBER,
                  defaultValue: undefined,
                  fieldType: FieldType.NUMBER_INPUT,
                  iconAlign: "left",
                  sourceData: 1,
                  isCustomField: false,
                  accessor: "number",
                  identifier: "number",
                  originalIdentifier: "number",
                  position: 1,
                },
                graduationDate: {
                  closeOnSelection: false,
                  dateFormat: "MM/DD/YYYY",
                  isDisabled: false,
                  isRequired: false,
                  label: "Graduation Date",
                  maxDate: "2121-12-31T18:29:00.000Z",
                  minDate: "1920-12-31T18:30:00.000Z",
                  shortcuts: false,
                  isVisible: true,
                  convertToISO: false,
                  children: {},
                  dataType: DataType.STRING,
                  defaultValue: undefined,
                  fieldType: FieldType.DATEPICKER,
                  timePrecision: "minute",
                  sourceData: "10/12/2021",
                  isCustomField: false,
                  accessor: "graduationDate",
                  identifier: "graduationDate",
                  originalIdentifier: "graduationDate",
                  position: 2,
                },
                boolean: {
                  alignWidget: "LEFT",
                  isDisabled: false,
                  isRequired: false,
                  isVisible: true,
                  label: "Boolean",
                  children: {},
                  dataType: DataType.BOOLEAN,
                  defaultValue: undefined,
                  fieldType: FieldType.SWITCH,
                  sourceData: true,
                  isCustomField: false,
                  accessor: "boolean",
                  identifier: "boolean",
                  originalIdentifier: "boolean",
                  position: 3,
                },
              },
              dataType: DataType.OBJECT,
              defaultValue: undefined,
              fieldType: FieldType.OBJECT,
              sourceData: {
                college: "String field ",
                number: 1,
                graduationDate: "10/12/2021",
                boolean: true,
              },
              isCustomField: false,
              accessor: ARRAY_ITEM_KEY,
              identifier: ARRAY_ITEM_KEY,
              originalIdentifier: ARRAY_ITEM_KEY,
              position: -1,
            },
          },
          dataType: DataType.ARRAY,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.education))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.ARRAY,
          sourceData: [
            {
              boolean: true,
              college: "String field ",
              graduationDate: "10/12/2021",
              number: 1,
            },
          ],
          isCustomField: false,
          accessor: "education",
          identifier: "education",
          originalIdentifier: "education",
          position: 7,
        },
        address: {
          isDisabled: false,
          isRequired: false,
          label: "Address",
          isVisible: true,
          children: {
            Line1: {
              isDisabled: false,
              isRequired: false,
              label: "Line 1",
              isVisible: true,
              isSpellCheck: false,
              children: {},
              dataType: DataType.STRING,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.address.Line1))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.TEXT_INPUT,
              iconAlign: "left",
              sourceData: "String field ",
              isCustomField: false,
              accessor: "Line1",
              identifier: "Line1",
              originalIdentifier: "Line1",
              position: 0,
            },
            city: {
              isDisabled: false,
              isRequired: false,
              label: "City",
              isSpellCheck: false,
              isVisible: true,
              children: {},
              dataType: DataType.STRING,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.address.city))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.TEXT_INPUT,
              iconAlign: "left",
              sourceData: "1",
              isCustomField: false,
              accessor: "city",
              identifier: "city",
              originalIdentifier: "city",
              position: 1,
            },
          },
          dataType: DataType.OBJECT,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.address))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.OBJECT,
          sourceData: { Line1: "String field ", city: "1" },
          isCustomField: false,
          accessor: "address",
          identifier: "address",
          originalIdentifier: "address",
          position: 8,
        },
      },
      dataType: DataType.OBJECT,
      defaultValue:
        "{{((sourceData, formData, fieldState) => (sourceData))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
      fieldType: FieldType.OBJECT,
      sourceData: {
        name: "Test name",
        age: 20,
        dob: "10/12/2021",
        hobbies: ["travelling", "skating", "off-roading"],
        हिन्दि: "हिन्दि",
        education: [
          {
            college: "String field ",
            number: 1,
            graduationDate: "10/12/2021",
            boolean: true,
          },
        ],
        address: {
          Line1: "String field ",
          city: "1",
        },
      },
      isCustomField: false,
      accessor: ROOT_SCHEMA_KEY,
      identifier: ROOT_SCHEMA_KEY,
      originalIdentifier: ROOT_SCHEMA_KEY,
      position: -1,
    },
  },
};

const withRemovedAddedKeyToInitialDataset = {
  dataSource: {
    name: "Test name",
    age: 20,
    dob: "10/12/2021",
    gender: "male",
    hobbies: ["travelling", "skating", "off-roading"],
    हिन्दि: "हिन्दि",
    education: [
      {
        college: "String field ",
        number: 1,
        graduationDate: "10/12/2021",
        boolean: true,
      },
    ],
    address: {
      Line1: "String field ",
      city: "1",
    },
  },

  schemaOutput: {
    __root_schema__: {
      isDisabled: false,
      isRequired: false,
      label: "",
      isVisible: true,
      children: {
        name: {
          isDisabled: false,
          isRequired: false,
          label: "Name",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.name))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.TEXT_INPUT,
          iconAlign: "left",
          sourceData: "Test name",
          isCustomField: false,
          accessor: "name",
          identifier: "name",
          originalIdentifier: "name",
          position: 0,
        },
        age: {
          isDisabled: false,
          isRequired: false,
          label: "Age",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.NUMBER,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.age))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.NUMBER_INPUT,
          iconAlign: "left",
          sourceData: 20,
          isCustomField: false,
          accessor: "age",
          identifier: "age",
          originalIdentifier: "age",
          position: 1,
        },
        dob: {
          closeOnSelection: false,
          dateFormat: "MM/DD/YYYY",
          isDisabled: false,
          isRequired: false,
          label: "Dob",
          maxDate: "2121-12-31T18:29:00.000Z",
          minDate: "1920-12-31T18:30:00.000Z",
          shortcuts: false,
          isVisible: true,
          children: {},
          dataType: DataType.STRING,
          convertToISO: false,
          defaultValue:
            '{{((sourceData, formData, fieldState) => (moment(sourceData.dob, "MM/DD/YYYY").format("YYYY-MM-DDTHH:mm:ss.sssZ")))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}',
          fieldType: FieldType.DATEPICKER,
          timePrecision: "minute",
          sourceData: "10/12/2021",
          isCustomField: false,
          accessor: "dob",
          identifier: "dob",
          originalIdentifier: "dob",
          position: 2,
        },
        hobbies: {
          isDisabled: false,
          isRequired: false,
          label: "Hobbies",
          isVisible: true,
          serverSideFiltering: false,
          options: [
            { label: "Blue", value: "BLUE" },
            { label: "Green", value: "GREEN" },
            { label: "Red", value: "RED" },
          ],
          children: {},
          dataType: DataType.ARRAY,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.hobbies))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.MULTISELECT,
          isFilterable: false,
          sourceData: ["travelling", "skating", "off-roading"],
          isCustomField: false,
          accessor: "hobbies",
          identifier: "hobbies",
          originalIdentifier: "hobbies",
          position: 3,
        },
        xn__j2bd4cyac6f: {
          isDisabled: false,
          isRequired: false,
          label: "हिन्दि",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            '{{((sourceData, formData, fieldState) => (sourceData["हिन्दि"]))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}',
          fieldType: FieldType.TEXT_INPUT,
          iconAlign: "left",
          sourceData: "हिन्दि",
          isCustomField: false,
          accessor: "हिन्दि",
          identifier: "xn__j2bd4cyac6f",
          originalIdentifier: "हिन्दि",
          position: 4,
        },
        education: {
          backgroundColor: "#FAFAFA",
          isCollapsible: true,
          isDisabled: false,
          isRequired: false,
          isVisible: true,
          label: "Education",
          children: {
            __array_item__: {
              isDisabled: false,
              isRequired: false,
              label: "Array Item",
              isVisible: true,
              children: {
                college: {
                  isDisabled: false,
                  isRequired: false,
                  label: "College",
                  isVisible: true,
                  isSpellCheck: false,
                  children: {},
                  dataType: DataType.STRING,
                  defaultValue: undefined,
                  fieldType: FieldType.TEXT_INPUT,
                  iconAlign: "left",
                  sourceData: "String field ",
                  isCustomField: false,
                  accessor: "college",
                  identifier: "college",
                  originalIdentifier: "college",
                  position: 0,
                },
                number: {
                  isDisabled: false,
                  isRequired: false,
                  label: "Number",
                  isVisible: true,
                  isSpellCheck: false,
                  children: {},
                  dataType: DataType.NUMBER,
                  defaultValue: undefined,
                  fieldType: FieldType.NUMBER_INPUT,
                  iconAlign: "left",
                  sourceData: 1,
                  isCustomField: false,
                  accessor: "number",
                  identifier: "number",
                  originalIdentifier: "number",
                  position: 1,
                },
                graduationDate: {
                  closeOnSelection: false,
                  dateFormat: "MM/DD/YYYY",
                  isDisabled: false,
                  isRequired: false,
                  label: "Graduation Date",
                  maxDate: "2121-12-31T18:29:00.000Z",
                  minDate: "1920-12-31T18:30:00.000Z",
                  shortcuts: false,
                  isVisible: true,
                  children: {},
                  dataType: DataType.STRING,
                  defaultValue: undefined,
                  fieldType: FieldType.DATEPICKER,
                  timePrecision: "minute",
                  sourceData: "10/12/2021",
                  convertToISO: false,
                  isCustomField: false,
                  accessor: "graduationDate",
                  identifier: "graduationDate",
                  originalIdentifier: "graduationDate",
                  position: 2,
                },
                boolean: {
                  alignWidget: "LEFT",
                  isDisabled: false,
                  isRequired: false,
                  isVisible: true,
                  label: "Boolean",
                  children: {},
                  dataType: DataType.BOOLEAN,
                  defaultValue: undefined,
                  fieldType: FieldType.SWITCH,
                  sourceData: true,
                  isCustomField: false,
                  accessor: "boolean",
                  identifier: "boolean",
                  originalIdentifier: "boolean",
                  position: 3,
                },
              },
              dataType: DataType.OBJECT,
              defaultValue: undefined,
              fieldType: FieldType.OBJECT,
              sourceData: {
                college: "String field ",
                number: 1,
                graduationDate: "10/12/2021",
                boolean: true,
              },
              isCustomField: false,
              accessor: ARRAY_ITEM_KEY,
              identifier: ARRAY_ITEM_KEY,
              originalIdentifier: ARRAY_ITEM_KEY,
              position: -1,
            },
          },
          dataType: DataType.ARRAY,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.education))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.ARRAY,
          sourceData: [
            {
              boolean: true,
              college: "String field ",
              graduationDate: "10/12/2021",
              number: 1,
            },
          ],
          isCustomField: false,
          accessor: "education",
          identifier: "education",
          originalIdentifier: "education",
          position: 5,
        },
        address: {
          isDisabled: false,
          isRequired: false,
          label: "Address",
          isVisible: true,
          children: {
            Line1: {
              isDisabled: false,
              isRequired: false,
              label: "Line 1",
              isVisible: true,
              isSpellCheck: false,
              children: {},
              dataType: DataType.STRING,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.address.Line1))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.TEXT_INPUT,
              iconAlign: "left",
              sourceData: "String field ",
              isCustomField: false,
              accessor: "Line1",
              identifier: "Line1",
              originalIdentifier: "Line1",
              position: 0,
            },
            city: {
              isSpellCheck: false,
              isDisabled: false,
              isRequired: false,
              label: "City",
              isVisible: true,
              children: {},
              dataType: DataType.STRING,
              defaultValue:
                "{{((sourceData, formData, fieldState) => (sourceData.address.city))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
              fieldType: FieldType.TEXT_INPUT,
              iconAlign: "left",
              sourceData: "1",
              isCustomField: false,
              accessor: "city",
              identifier: "city",
              originalIdentifier: "city",
              position: 1,
            },
          },
          dataType: DataType.OBJECT,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.address))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.OBJECT,
          sourceData: { Line1: "String field ", city: "1" },
          isCustomField: false,
          accessor: "address",
          identifier: "address",
          originalIdentifier: "address",
          position: 6,
        },
        gender: {
          isDisabled: false,
          isRequired: false,
          label: "Gender",
          isVisible: true,
          isSpellCheck: false,
          children: {},
          dataType: DataType.STRING,
          defaultValue:
            "{{((sourceData, formData, fieldState) => (sourceData.gender))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
          fieldType: FieldType.TEXT_INPUT,
          iconAlign: "left",
          sourceData: "male",
          isCustomField: false,
          accessor: "gender",
          identifier: "gender",
          originalIdentifier: "gender",
          position: 7,
        },
      },
      dataType: DataType.OBJECT,
      defaultValue:
        "{{((sourceData, formData, fieldState) => (sourceData))(JSONForm1.sourceData, JSONForm1.formData, JSONForm1.fieldState)}}",
      fieldType: FieldType.OBJECT,
      sourceData: {
        name: "Test name",
        age: 20,
        dob: "10/12/2021",
        gender: "male",
        hobbies: ["travelling", "skating", "off-roading"],
        हिन्दि: "हिन्दि",
        education: [
          {
            college: "String field ",
            number: 1,
            graduationDate: "10/12/2021",
            boolean: true,
          },
        ],
        address: {
          Line1: "String field ",
          city: "1",
        },
      },
      isCustomField: false,
      accessor: ROOT_SCHEMA_KEY,
      identifier: ROOT_SCHEMA_KEY,
      originalIdentifier: ROOT_SCHEMA_KEY,
      position: -1,
    },
  },
};

export default {
  initialDataset,
  withRemovedKeyFromInitialDataset,
  withRemovedAddedKeyToInitialDataset,
};
