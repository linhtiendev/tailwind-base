import {
  BooleanParam,
  DelimitedArrayParam,
  DelimitedNumericArrayParam,
  NumberParam,
  StringParam,
  decodeDelimitedArray,
  encodeDelimitedArray,
  withDefault,
} from 'use-query-params'

/** Uses a comma to delimit entries. Example: ['a', 'b'] => search?=a,b */
export const CommaArrayParam = {
  encode: (array: (string | null)[] | null | undefined) => encodeDelimitedArray(array, ','),
  decode: (arrayStr: string | (string | null)[] | null | undefined) =>
    decodeDelimitedArray(arrayStr, ','),
}

// create a custom parameter with a default value
export const DefaultNumberParam = withDefault(NumberParam, 1)
export const DefaultStringParam = withDefault(StringParam, '')
export const DefaultBooleanParam = withDefault(BooleanParam, false)
export const DefaultStringArrayParam = withDefault(DelimitedArrayParam, [])
export const DefaultNumericArrayParam = withDefault(DelimitedNumericArrayParam, [])

export const BrandFiltersParam = withDefault(DelimitedNumericArrayParam, [], false)
