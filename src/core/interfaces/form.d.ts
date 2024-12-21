type TNativeType = 'string' | 'number' | 'boolean';
type TColumns = 1 | 2 | 3;

interface IFieldType {
	Id: number;
	Name: string;
	NativeType: TNativeType;
}

interface IField {
	Id: number;
	Required: boolean;
	Title: string;
	PropertyName: string;
	ColumnSpan: TColumns;
	FieldTypeId: number;
}

interface ISection {
	Id: number;
	Title: string;
	FieldIds?: Array<number>;
	SubSectionIds?: Array<number>;
}

interface IForm {
	Id: 1 | 2 | 3;
	Title: string;
	Columns: TColumns;
	SectionIds: Array<number>;
}
